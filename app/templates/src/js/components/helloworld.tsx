import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default () =>
<div className="uk-section uk-padding-large" uk-height-viewport="expand: true">
    <div className="uk-container uk-light uk-text-center uk-position-large uk-position-center my-centered-container" uk-scrollspy="cls: uk-animation-scale-up; target: > *; delay: 100; repeat: true">
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#" className="uk-button uk-button-default uk-icon">Let's go!</a>
    </div>
</div>