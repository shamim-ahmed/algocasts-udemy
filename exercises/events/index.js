// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.eventHandlerMap = {};
  }

  // Register an event handler
  on(eventName, callback) {
    let handlerArray = this.eventHandlerMap[eventName];

    if (!handlerArray) {
      handlerArray = [];
      this.eventHandlerMap[eventName] = handlerArray;
    }

    handlerArray.push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const handlerArray = this.eventHandlerMap[eventName];

    if (handlerArray) {
      for (let callback of handlerArray) {
        callback();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    const handlerArray = this.eventHandlerMap[eventName];

    if (handlerArray) {
      handlerArray.splice(0, handlerArray.length);
    }
  }
}

module.exports = Events;
