"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class EventRegistrar
 * @description
 * provides a simple and consistent way to attach DOM event listeners, particularly
 * when the goal is to attach multiple to a single event handler, such as window.onscroll
 */

var EventRegistrar = function () {
  function EventRegistrar() {
    _classCallCheck(this, EventRegistrar);

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


  _createClass(EventRegistrar, [{
    key: "register",
    value: function register(target, event, callback) {
      if (!this.registry[event]) {
        this.registry[event] = [];
        this.setupCallback(target, event);
      }

      this.registry[event].push(callback);

      return function unregister() {
        this.registry[event].splice(this[event].indexOf(callback), 1);
        if (this.registry[event].length === 0) {
          delete this.registry[event];
        }
      }.bind(this);
    }
  }, {
    key: "setupCallback",
    value: function setupCallback(target, event) {
      target[event] = function () {
        var args = arguments;
        this.registry[event].forEach(function (cb) {
          return cb.apply(args);
        });
      }.bind(this);
    }
  }]);

  return EventRegistrar;
}();

exports.default = EventRegistrar;
