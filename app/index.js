'use strict';

var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  copyTemplates() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description'
      },
      {
        type: 'input',
        name: 'repository',
        message: 'GitHub repository URL (e.g. your-name/your-webapp)',
      }
    ]).then((answers) => {
      const templates = [
        { file: "gitignore", destination: ".gitignore" },
        { file: "tsconfig.json", destination: "tsconfig.json" },
        { file: "webpack.config.js", destination: "webpack.config.js" },
        { file: "webpack.dev.js", destination: "webpack.dev.js" },
        { file: "webpack.prod.js", destination: "webpack.prod.js" },
        { file: "src/js/index.tsx", destination: "src/js/index.tsx" },
        { file: "src/js/components/page.tsx", destination: "src/js/components/page.tsx" },
        { file: "src/js/components/helloworld.tsx", destination: "src/js/components/helloworld.tsx" },
        { file: "src/js/components/navsidebar.tsx", destination: "src/js/components/navsidebar.tsx" },
        { file: "src/scss/site.scss", destination: "src/scss/site.scss" },
        { file: "src/scss/uk-custom-theme.scss", destination: "src/scss/uk-custom-theme.scss" },
        { file: "src/images/logo.svg", destination: "src/images/logo.svg" },
        { file: "src/images/footer-background.svg", destination: "src/images/footer-background.svg" },
      ];

      templates.forEach(template => {
        this.fs.copy(
          this.templatePath(template.file),
          this.destinationPath(template.destination)
        );
      });

      this.fs.copyTpl(
        this.templatePath("package.json"),
        this.destinationPath("package.json"),
        { 
          name: answers.name,
          description: answers.description,
          repository: answers.repository
        }
      );

      this.fs.copyTpl(
        this.templatePath("src/js/components/navbar.tsx"),
        this.destinationPath("src/js/components/navbar.tsx"),
        { 
          name: answers.name
        }
      );

      this.fs.copyTpl(
        this.templatePath("index.html"),
        this.destinationPath("index.html"),
        { 
          name: answers.name
        }
      );
    });
  }
};