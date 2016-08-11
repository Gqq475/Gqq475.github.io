import React from 'react';
import {render} from 'react-dom';
import './style/mk.css';
import './style/common.css';
import './style/hljs.css';
import {Router,browserHistory} from 'react-router';
import routes from './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<Router routes={routes} history={browserHistory} />
  ,document.getElementById('root'));
