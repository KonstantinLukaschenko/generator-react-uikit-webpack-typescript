'use strict';

var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('react-uikit-webpack-typescript:app', () => {
    it('generates files', () => {
        return helpers.run(path.join(__dirname, '../app'))
            .withPrompts({
                name: 'my-app',
                description: 'description here...',
                repository: 'user/my-app'
            })
            .then(() => {
                assert.file([
                    'package.json',
                    'index.html',
                    'tsconfig.json',
                    'webpack.config.js',
                    'webpack.dev.js',
                    'webpack.prod.js',
                    'src/js/index.tsx',
                    'src/js/components/page.tsx',
                    'src/js/components/helloworld.tsx',
                    'src/js/components/navbar.tsx',
                    'src/js/components/navsidebar.tsx',
                    'src/scss/site.scss',
                    'src/scss/uk-custom-theme.scss',
                    'src/scss/uk-custom-theme.scss',
                    'src/images/logo.svg',
                    'src/images/footer-background.svg'
                ]);
            });
    });
    it('replaces placeholders from prompt input', () => {
        return helpers.run(path.join(__dirname, '../app'))
        .withPrompts({
            name: 'my-app',
            description: 'description here...',
            repository: 'user/my-app'
        })
        .then(() => {
            assert.fileContent(
                'package.json',
                '"name": "my-app"',
            );
            assert.fileContent(
                'package.json',
                '"url": "git://github.com/user/my-app.git"',
            );
            assert.fileContent(
                'package.json',
                '"url": "https://github.com/user/my-app/issues"',
            );
            assert.fileContent(
                'index.html',
                '<title>my-app</title>',
            );
            assert.fileContent(
                'src/js/components/navbar.tsx',
                'my-app',
            );
        });
    });
});
