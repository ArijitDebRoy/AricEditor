<div align="center">
  <h1>aric-editor</h1>
</div>

<img class="retina-badge" src="https://badge.fury.io/js/aric-editor.png">
<br/><br/>
This is a simple WYSIWYG editor for any front-end js freamwork like react.js. In case of simple HTML or PHP base project one can use the AricEditor.min.js and enjoy editing content.

Paste content from anywhere and edit them with this simple editor whithout and tensing of copying third party font and stylings.


<h2 align="center">Install</h2>

```bash
npm install --save aric-editor
```

<h2 align="center">Usage</h2>

### Configuration

#### Minimal example

**editor.js**

```js
import React from 'react';
import { AricEditor } from 'aric-editor';
import 'aric-editor/src/AricEditor.css';

class EditorComponent extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
               editor: {},
               content: ''
            }
    }
       
    componentDidMount(){
        // Editor init
            this.state.editor = new AricEditor('editor');
            
        // Set data into editor
            this.state.editor.setEditorInstance('<b>Editor initialized with demo text.</b>');
    }
    
    getter = () => {
        // Get editor content
            this.state.content = this.state.editor.getEditorInstance();
    }
    
    destroy = () => {
        // Get editor content
            this.state.editor.destroyInstance();
    }
    
    render() {
        return (
            <table>
              <tbody>
                <tr>
                  <td align="center">
                    <div id="editor"></div>
                    <button onclick={this.getter.bind(this)}>GET<button>
                    <button onclick={this.destroy.bind(this)}>DESTROY<button>
                  </td>
                </tr>
              <tbody>
            </table>
        )
    }    
}
```


<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/ArijitDebRoy">
          <img width="150" height="150" src="https://avatars2.githubusercontent.com/u/32073470?s=460&v=4?size=150">
          </br>
          Arijit Deb Roy
        </a>
      </td>
    </tr>
  <tbody>
</table>


## License

#### [ISC](./LICENSE.md)
