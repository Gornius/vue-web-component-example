import { defineCustomElement } from "vue";
import CounterButtonCe from "./components/CounterButton.ce.vue";

const CounterButtonComponent = defineCustomElement(CounterButtonCe);
customElements.define("counter-button", CounterButtonComponent);
