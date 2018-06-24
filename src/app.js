import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@jyskebank/jb-foo';

export class App extends PolymerElement {
  
  static get template() {
    return html`
      <section>
        <h3>Demo</h3>
        <jb-foo></jb-foo>
      </section>
    `;
  }

}

customElements.define('jb-app', App);
