export class DefaultLayout {
  title: 'Foo';

  activate(params, routeConfig) {
    console.log('activate');
    if (params && params.tabs) {
      this.tabs = params.tabs;
      this.tabs.forEach(tab => {
        tab.id = 'tab-' + tab.name;
        tab.href = '#' + tab.id;
      });
    }
    console.dir(this.tabs);
  }

  get hasTabs() {
    console.log('hasTabs: ' + !!(this.tabs && this.tabs.length));
    return this.tabs && this.tabs.length;
  }
}
