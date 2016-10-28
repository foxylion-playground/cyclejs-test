import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {App} from './app'

function createUserGreeter(root: HTMLElement): void  {
  const drivers = {
    DOM: makeDOMDriver(root)
  }
  run(App, drivers)
}

(<any> document).registerElement('user-greeter', {
  prototype: Object.create(HTMLElement.prototype, {
    attachedCallback: {
      value: function() {
        var root = this.createShadowRoot();
        var span = document.createElement("span");
        root.appendChild(span)
        createUserGreeter(span);
      }
    }
  })
});
