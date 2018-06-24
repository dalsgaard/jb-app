import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@jyskebank/jb-foo';
import '@jyskebank/jb-bar';

export class App extends PolymerElement {
  
  static get template() {
    return html`
      <section>
        <h3>Demo</h3>
        <jb-foo></jb-foo>
        <jb-bar></jb-bar>
      </section>
    `;
  }

}

customElements.define('jb-app', App);
