import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './UserInfo';
import Repos from './Repos';
import github from './github';
import Echart from './Echart'
import CircularProgress from 'material-ui/CircularProgress';



class GithubAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      wait:true
    };
  }
  componentDidMount() {
    github.getGithubInfo('Gqq475')
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos,
          wait:false
        });
      });
  }
  render(){
    let GitHubInfo;
    let x=<CircularProgress style={{marginLeft:"50%"}}/>;
    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div className="coninforepo">
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
        </div>
      );
    }
    return(
      <div>
        {this.state.wait ? x :
           <div className='account'>

             <Card className="content">
               <h2 className="contenth2" >MY GITHUB INFO</h2>
               { GitHubInfo }
             </Card>
             <Card className="content">
               <Echart  />
             </Card>
           </div>
        }

       </div>
    )
  }
}

export default GithubAccount;
