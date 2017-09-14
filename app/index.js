const Generator = require('yeoman-generator');

module.exports = class extends Generator {
 promting() {
   return this.prompt([{
     type: 'input',
     name: 'project',
     message: 'Project name',
    }, {
      type: 'input',
      name: 'author',
      message: 'Author',
    }, {
      type: 'confirm',
      name: 'redux',
      message: 'Use redux?',
    }, {
      type: 'confirm',
      name: 'docker',
      message: 'Use docker?',
    }, {
      type: 'input',
      name: 'dockerTag',
      message: 'dockerTag',
      when: (answer) => answer.docker,
    }, {
      type: 'confirm',
      name: 'gitlabCI',
      message: 'Use gitlab-ci?',
    }])
    .then((answer) => {
      this.param = {};
      this.param.project = answer.project;
      this.param.author = answer.author;
      this.param.dockerTag = answer.dockerTag;
      this.param.redux = answer.redux;
      this.param.docker = answer.docker;
      this.param.gitlabCI = answer.gitlabCI;
   });
 }
  writing() {
    // main files
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.param
    )
    if (this.param.gitlabCI) {
      this.fs.copyTpl(
        this.templatePath('_.gitlab-ci.yml'),
        this.destinationPath('.gitlab-ci.yml'),
        this.param
      )
    }
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    )
    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    )
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    )
    if (this.param.docker) {
      this.fs.copy(
        this.templatePath('Dockerfile'),
        this.destinationPath('Dockerfile')
      )
      this.fs.copy(
        this.templatePath('.dockerignore'),
        this.destinationPath('.dockerignore')
      )
    }
    this.fs.copy(
      this.templatePath('gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    )
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    )
    // rotes
    this.fs.copy(
      this.templatePath('routes/index.js'),
      this.destinationPath('routes/index.js')
    )
    // src/js/actions
    if (this.param.redux) {
      this.fs.copy(
        this.templatePath('src/js/actions/main.js'),
        this.destinationPath('src/js/actions/main.js')
      )
      this.fs.copy(
        this.templatePath('src/js/actions/main.test.js'),
        this.destinationPath('src/js/actions/main.test.js')
      )
    }
    // src/js/components
    this.fs.copy(
      this.templatePath('src/js/components/Component/index.jsx'),
      this.destinationPath('src/js/components/Component/index.jsx')
    )
    this.fs.copy(
      this.templatePath('src/js/components/Component/component.test.jsx'),
      this.destinationPath('src/js/components/Component/component.test.jsx')
    )
    this.fs.copy(
      this.templatePath('src/js/components/Component/component.scss'),
      this.destinationPath('src/js/components/Component/component.scss')
    )
    // src/js/constants
    this.fs.copy(
      this.templatePath('src/js/constants/index.js'),
      this.destinationPath('src/js/constants/index.js')
    )
    // src/js/containers
    if (this.param.redux) {
      this.fs.copyTpl(
        this.templatePath('src/js/containers/Main.jsx'),
        this.destinationPath('src/js/containers/Main.jsx'),
        this.param
      )
    } else {
      this.fs.copyTpl(
        this.templatePath('src/js/containers/Main.noredux.jsx'),
        this.destinationPath('src/js/containers/Main.jsx'),
        this.param
      )
    }
    this.fs.copy(
      this.templatePath('src/js/containers/main.test.jsx'),
      this.destinationPath('src/js/containers/main.test.jsx')
    )
    // src/js/reducers
    if (this.param.redux) {
      this.fs.copy(
        this.templatePath('src/js/reducers/index.js'),
        this.destinationPath('src/js/reducers/index.js')
      )
      this.fs.copy(
        this.templatePath('src/js/reducers/main.js'),
        this.destinationPath('src/js/reducers/main.js')
      )
      this.fs.copy(
        this.templatePath('src/js/reducers/main.test.js'),
        this.destinationPath('src/js/reducers/main.test.js')
      )
    }
    // src/js/
    if (this.param.redux) {
      this.fs.copyTpl(
        this.templatePath('src/js/App.jsx'),
        this.destinationPath('src/js/App.jsx'),
        this.param
      )
    } else {
      this.fs.copyTpl(
        this.templatePath('src/js/App.noredux.jsx'),
        this.destinationPath('src/js/App.jsx'),
        this.param
      )
    }
    if (this.param.redux) {
      this.fs.copy(
        this.templatePath('src/js/store.js'),
        this.destinationPath('src/js/store.js')
      )
    }
    // src/scss
    this.fs.copy(
      this.templatePath('src/scss/common.scss'),
      this.destinationPath('src/scss/common.scss')
    )
    this.fs.copy(
      this.templatePath('src/scss/constants.scss'),
      this.destinationPath('src/scss/constants.scss')
    )
    this.fs.copy(
      this.templatePath('src/scss/main.scss'),
      this.destinationPath('src/scss/main.scss')
    )
    // tasks/build
    this.fs.copy(
      this.templatePath('tasks/build/css.prod.js'),
      this.destinationPath('tasks/build/css.prod.js')
    )
    this.fs.copy(
      this.templatePath('tasks/build/img.prod.js'),
      this.destinationPath('tasks/build/img.prod.js')
    )
    this.fs.copy(
      this.templatePath('tasks/build/js.prod.js'),
      this.destinationPath('tasks/build/js.prod.js')
    )
    // tasks/common
    this.fs.copy(
      this.templatePath('tasks/common/clear.js'),
      this.destinationPath('tasks/common/clear.js')
    )
    this.fs.copy(
      this.templatePath('tasks/common/font.js'),
      this.destinationPath('tasks/common/font.js')
    )
    this.fs.copy(
      this.templatePath('tasks/common/media.js'),
      this.destinationPath('tasks/common/media.js')
    )
    this.fs.copy(
      this.templatePath('tasks/common/server.js'),
      this.destinationPath('tasks/common/server.js')
    )
    // tasks/dev
    this.fs.copy(
      this.templatePath('tasks/dev/css.js'),
      this.destinationPath('tasks/dev/css.js')
    )
    this.fs.copy(
      this.templatePath('tasks/dev/img.js'),
      this.destinationPath('tasks/dev/img.js')
    )
    this.fs.copy(
      this.templatePath('tasks/dev/js.js'),
      this.destinationPath('tasks/dev/js.js')
    )
    // tasks/settings
    this.fs.copy(
      this.templatePath('tasks/settings/index.js'),
      this.destinationPath('tasks/settings/index.js')
    )
    // templates
    this.fs.copyTpl(
      this.templatePath('templates/_index.html'),
      this.destinationPath('templates/index.html'),
      this.param
    )
  }
  install() {
    this.npmInstall().then(() => {
      this.log(`
                                     
  _____ _           _                   
 |   __|_|_____ ___| |___               
 |__   | |     | . | | -_|              
 |_____|_|_|_|_|  _|_|___|              
               |_|                      
                                        
  _____             _   _____           
 | __  |___ ___ ___| |_|  _  |___ ___   
 |    -| -_| .'|  _|  _|     | . | . |  
 |__|__|___|__,|___|_| |__|__|  _|  _|  
                             |_| |_|    
                                        
            _    _____     _            
  ___ ___ _| |  |   __|_ _| |___        
 | .'|   | . |  |  |  | | | | . |       
 |__,|_|_|___|  |_____|___|_|  _|       
                            |_| 
      
      `);
    });
  }
};
