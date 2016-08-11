import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App.js';
import Home from './components/Home.js';
import List from './components/List.js';
import Post from './components/Blog/Post';
import GithubAccount from './components/GithubAccount/GithubAccount.js';
export default (
  <Route path="/" component={App}>
     <IndexRoute component={Home} />
     <Route path="about" component={GithubAccount} />
     <Route path="blog" component={List} />
     <Route path="blog/:title" component={Post} />
  </Route>
)
