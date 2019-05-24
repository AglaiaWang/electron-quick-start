// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { ipcRenderer } = require('electron')

window.setCursor = (id) => {
  id = id || document.querySelector('webview').getWebContents().id;
  ipcRenderer.send('set', id);
}
