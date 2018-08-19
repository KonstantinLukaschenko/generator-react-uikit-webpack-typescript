require('../scss/site.scss');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const UIkit: any = require('uikit');
const Icons: any = require('uikit/dist/js/uikit-icons');

import Page from './components/page';

// render the react page component into the condent div
ReactDOM.render(<Page />, document.getElementById('content'));

// loads the icon plugin
UIkit.use(Icons);