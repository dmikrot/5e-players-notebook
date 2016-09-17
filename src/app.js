import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  configureRouter(config, router) {
    config.title = 'Player\'s Notebook';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([{
      route: '', redirect: 'characters'
    }, {
      route: 'characters', moduleId: 'character/list', title: 'Characters', nav: true 
    }]);
  }
}
