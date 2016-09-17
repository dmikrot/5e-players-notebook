import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  configureRouter(config, router) {
    config.title = 'Player\'s Notebook';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([{
      route: '', redirect: 'characters'
    }, {
      route: 'characters', moduleId: 'character/list', name: 'characters', title: 'Characters', nav: true,
      layoutViewModel: 'layouts/default'
    }, {
      route: 'characters/:id', moduleId: 'character/detail', name: 'character',
      layoutViewModel: 'layouts/default', layoutModel: {
        tabs: [{
          name: 'info', title: 'Info'
        }, {
          name: 'abilities', title: 'Abilities' 
        }, {
          name: 'combat', title: 'Combat'
        }, {
          name: 'magic', title: 'Magic'
        }, {
          name: 'inventory', title: 'Inventory'
        }, {
          name: 'background', title: 'Background'
        }]
      }
    }]);
  }
}
