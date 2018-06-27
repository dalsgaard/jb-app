import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@jyskebank/jb-foo';
import '@jyskebank/jb-bar';

export class App extends PolymerElement {
  
  static get template() {
    return html`
      <section>
        <h3 id="foo" on-click="foo">Demo!!!</h3>
        <jb-foo></jb-foo>
        <jb-bar></jb-bar>
      </section>
    `;
  }

  async foo () {
    const response = await fetch('/wikipedia/Camel_case');
    console.log(await response.text());
  }

}

customElements.define('jb-app', App);
