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
      posts: '',

      wait:true
    }
  }
  cardSearch(){
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
    let x=<CircularProgress style={{marginLeft:"50%"}}/>;
    // console.log(Cards.length);
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <Card title={b.title} date={b.created_at } index={b.id} url={b.name} key={Math.random()}/>
                  );//用url来控制md的文件名
                },

        this.state.posts

    );
    for (var i = 0; i < this.state.posts.length; i++) {
       let thisPost = this.state.posts[i];
       if (thisPost.title.indexOf(this.props.search)!= -1) {
         blogCards.push(<Card title={b.title} date={b.created_at } index={b.id} url={b.name} key={Math.random()} />)
       }
     }
    return(
      <div>
        <Search  change={this.state.cardSearch}/>
        {this.state.wait ? x:
        <div style={{marginTop:"30px"}}>
        {blogCards}
      </div>
      }
      </div>
    )
  }
}

export default Blog;
