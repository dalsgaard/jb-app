import { PolymerElement, html } from '@polymer/polymer/polymer-element';

export class App extends PolymerElement {
  
  static get template() {
    return html`
      <section>Hurray!</section>
    `;
  }

}

customElements.define('jb-app', App);
