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
**Kind**: global class  

* [EventRegistrar](#EventRegistrar)
    * [new EventRegistrar()](#new_EventRegistrar_new)
    * [.register(target, event, callback)](#EventRegistrar+register) ⇒

<a name="new_EventRegistrar_new"></a>

### new EventRegistrar()
provides a simple and consistent way to attach DOM event listeners, particularly
when the goal is to attach multiple to a single event handler, such as window.onscroll

<a name="EventRegistrar+register"></a>

### eventRegistrar.register(target, event, callback) ⇒
Provides a way to register a callback to be fired when the specified event is triggered.
Generally should be used as a Singleton through a dependency injection container.

For more information about the EventTarget type, check out the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

**Kind**: instance method of <code>[EventRegistrar](#EventRegistrar)</code>  
**Returns**: Function an unsubscribe function  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | the target to which the listener will be attached |
| event | <code>String</code> | the name of the event to which the listener will be bound |
| callback | <code>function</code> | the callback function to be executed when the event occurs |

**Example**  
```js
const registrar = new EventRegistrar();
// register
const unreg = registrar.register(window, 'onscroll', (ev) => console.log(ev) );
.
.
.
// cleanup
unreg();
```

