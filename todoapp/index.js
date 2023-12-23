// ※import文は実行コンテキストがModuleでないと利用できない。つまり、実行コンテキストがScriptの場合はimportできない。
import { App } from "./src/App.js";

const app = new App();
app.mount();