import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import Search from './Search';
import Card from './Card.js';
import CircularProgress from 'material-ui/CircularProgress';

class Blog extends Component {
  constructor(){
    super();
    this.state={
      text:'',
      posts: {},
      wait:true
    }
  }
  cardSearch(x){
    this.setState({text:x})
  }
  componentDidMount(){
     // use math random to avoid browser cache
    let address = `https://raw.githubusercontent.com/Gqq475/big-demo/master/posts/index.json?v=${Math.random()}`
    axios.get(address).then((res) => {

      this.setState({
        posts: res.data,
        wait:false
      });
    });
  }

  render(){
    let xx=<CircularProgress style={{marginLeft:"50%"}}/>;
    var blogCards = [];
    if (this.state.text=='') {
      map((b) =>  {
          blogCards.push(
            <Card title={b.title} date={b.created_at } index={b.id} url={b.name} key={Math.random()}/>
          )
        },
        this.state.posts )
      }else {
      for (var i = 0; i < this.state.posts.length; i++) {
        let thisPost = this.state.posts[i];
        if (thisPost.title.toLowerCase().indexOf(this.state.text)!= -1) {
          blogCards.push(<Card title={thisPost.title} date={thisPost.created_at} index={thisPost.id} key={Math.random()} url={thisPost.url} />)
        }
      }
    }

    return(
      <div>
        <Search  change={this.cardSearch.bind(this)}/>
        {this.state.wait ? xx : <div style={{marginTop:"30px"}}> {blogCards} </div> }
      </div>
    )
  }
}

export default Blog;
