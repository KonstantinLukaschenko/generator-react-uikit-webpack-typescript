import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default () =>
<div className="uk-navbar-container uk-navbar-transparent uk-position-top uk-light">
    <div className="uk-container uk-container-expand">
        <nav className="uk-navbar">
            <div className="uk-navbar-left">
                <a href="/" className="uk-navbar-item uk-logo">
                    <img className="uk-margin-small-right my-logo-image" src="./dist/images/logo.svg" />
                    <%= name %>
                </a>
            </div>

            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@s">
                    <li className="router-link-exact-active uk-active">
                        <a href="#" uk-scroll="true">Service</a>
                    </li>
                    <li>
                        <a href="#" uk-scroll="true">Company</a>
                    </li>
                    <li>
                        <a href="#" uk-scroll="true">Blog</a>
                    </li>
                </ul>
                <div className="uk-navbar-item uk-visible@s">
                    <a href="#" className="uk-button uk-button-default uk-icon uk-button-small">Contact</a>
                </div>
                <a uk-navbar-toggle-icon="" href="#offcanvas-push" uk-toggle="" className="uk-navbar-toggle uk-hidden@s" />
            </div>
        </nav>
    </div>
</div>
