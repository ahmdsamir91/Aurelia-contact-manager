export class App {

  // config : RouterConfiguration to get router setup
  // map route patterns to the modules that should handle the patterns. 
  // Minimally, each route needs at least a route pattern and a moduleId.
  // Router : router name : pattern name - title : document title
  configureRouter(config, router){
    config.title = 'Contacts';
    config.map([
      {route:'', moduleId:'no-selection', title:'Select'},
      {route:'contact/:id', moduleId:'contact-details', name:'contacts'}
    ])

    this.router = router;
  }
  
}
