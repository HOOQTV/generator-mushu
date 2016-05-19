/* eslint-disable babel/object-shorthand */
'use strict';
const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
    },

    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        return this.prompt([ {
            type: 'input',
            name: 'className',
            message: 'What is your main class name?',
            default: 'Mushu'
        } ]).then((answers) => {
            this.className = 'Mushu';
        });
    },

    writing: {
        gulpfile: function() {
            this.fs.copyTpl(
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );
        },
        pkg: function() {
            this.fs.copyTpl(
                this.templatePath('package.json'),
                this.destinationPath('package.json'),
                { className: this.className, email: this.className.toLowerCase() }
            );
        },
        index: function() {
            this.fs.copyTpl(
                this.templatePath('index.js'),
                this.destinationPath('lib/index.js'),
                { className: this.className }
            );
        },
        error: function() {
            this.fs.copyTpl(
                this.templatePath('error.js'),
                this.destinationPath('lib/error.js'),
                { className: this.className }
            );
        },
        test: function() {
            this.fs.copyTpl(
                this.templatePath('test.js'),
                this.destinationPath('test/index.js'),
                { className: this.className }
            );
        },
        gitignore: function() {
            this.fs.copyTpl(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
        },
        license: function() {
            this.fs.copyTpl(
                this.templatePath('LICENSE.md'),
                this.destinationPath('LICENSE.md')
            );
        },
        readme: function() {
            this.fs.copyTpl(
                this.templatePath('README.md'),
                this.destinationPath('README.md'),
                { className: this.className }
            );
        }
    },

    installing: function() {
        this.npmInstall();
    }
});
