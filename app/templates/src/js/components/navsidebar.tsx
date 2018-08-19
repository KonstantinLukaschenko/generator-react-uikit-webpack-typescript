import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default () => 
<div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
    <div className="uk-offcanvas-bar">
        <ul className="uk-nav uk-nav-default">
            <li>
                <a href="#" uk-scroll="true">Service</a>
            </li>
            <li>
                <a href="#" uk-scroll="true">Company</a>
            </li>
            <li>
                <a href="#" uk-scroll="true">Blog</a>
            </li>
            <li className="uk-nav-divider" /> 
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
</div>