# event-registrar
Provides an easy way to provide callbacks for when the browser crosses the threshold of a media query. Uses the Observable API to allow for composable event streams

### getting the code
install from npm: `npm install event-registrar`

use in your project:

    import {EventRegistrar} from 'event-registar';
    const registrar = new EventRegistrar();

Or

    var EventRegistrar = require('event-registrar');
    var registrar = new EventRegistrar();

### running the tests
Install the dependencies using `npm install`

Run the tests using `npm test`

Transpile to ES5 using `npm run build`

Build the docs using `npm run doc`

Generate the docs for the readme with `npm run build-readme`

# API Reference

## <a name="EventRegistrar">EventRegistrar</a>
{{#class name="EventRegistrar"}}
{{>body~}}
{{>member-index~}}
{{>separator~}}
{{>members~}}
{{/class}}

