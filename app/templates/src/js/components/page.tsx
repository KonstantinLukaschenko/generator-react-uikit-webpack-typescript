import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Navbar from './navbar'
import Helloworld from './helloworld';
import Navsidebar from './navsidebar';

export default () => 
<div>
    <div className="uk-offcanvas-content">
        <Navbar />
        <Helloworld />
        <Navsidebar />
    </div>
</div>