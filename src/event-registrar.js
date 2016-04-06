
/**
 * @class EventRegistrar
 * @description
 * provides a simple and consistent way to attach DOM event listeners, particularly
 * when the goal is to attach multiple to a single event handler, such as window.onscroll
 */
export default class EventRegistrar {
	
    constructor () {
        this.registry = {};
    }

    /**
     * @function register
     * @instance
     * @memberOf EventRegistrar
     * @param {EventTarget} target the target to which the listener will be attached
     * @param {String} event the name of the event to which the listener will be bound
     * @param {Function} callback the callback function to be executed when the event occurs
     * @return Function an unsubscribe function
     * @description
     * Provides a way to register a callback to be fired when the specified event is triggered.
     * Generally should be used as a Singleton through a dependency injection container.
     *
     * For more information about the EventTarget type, check out the {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget|MDN docs}.
     * @example
     * const registrar = new EventRegistrar();
     * // register
     * const unreg = registrar.register(window, 'onscroll', (ev) => console.log(ev) );
     * .
     * .
     * .
     * // cleanup
     * unreg();
     *
     */
	register (target, event, callback) {
		if (!this.registry[event]) {
			this.registry[event] = [];
			this.setupCallback(target, event);
		}
		
		this.registry[event].push(callback);

        return function unregister () {
            this.registry[event].splice(this[event].indexOf(callback), 1);
            if (this.registry[event].length === 0) {
                delete this.registry[event];
            }
        }.bind(this);
	}

	setupCallback (target, event) {
		target[event] = function () {
			var args = arguments;
			this.registry[event].forEach( cb => cb.apply(args) );
		}.bind(this);
	}
}

