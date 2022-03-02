<div>
  <h1>aric-editor</h1>
</div>

<img class="retina-badge" src="https://badge.fury.io/js/aric-editor.png">
<br/><br/>
This is a simple WYSIWYG editor for any front-end js framework like react.js. In case of simple HTML or PHP base project one can use the AricEditor.min.js and enjoy editing content.

Paste content from anywhere and edit them with this simple editor whithout and tension of copying third party font and stylings.


<h2>Install</h2>

```bash
npm install --save aric-editor
```

<h2>CDN</h2>

```bash
https://unpkg.com/aric-editor@2.1.8/dist/AricEditor.min.js
```

<h2>Styling</h2>

You can import bundled css to your Custom <App> (pages\_app.jsx in casse of Next.js) or if you want to use your own style then you can override classes.

```bash
import 'aric-editor/dist/AricEditor.css'
```
#### Classes

|Class|Target|
|--------|-----------|
|`aric-editor`|Rich content writing container|
|`aric-editor-source`|Trinspiled code container|
|`editor-btn-group`|Tool bar container|
|`editor-btn`|Each tool button|
|`editor-btn-click`|Active class on button click|
|`highlight-backend`|Highlighter color. Default `Yellow`|

<h2>Usage</h2>

### Examples

#### Using react.js

**editor.js**

```js
import React from 'react';
import { AricEditor } from 'aric-editor';

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
        // Destroy editor content
        this.state.editor.destroyInstance();
    }
    
    render() {
        return (
            <table>
              <tbody>
                <tr>
                  <td align="center">
                    <div id="editor"></div>
                    <button onclick={this.getter.bind(this)} style={{marginRight: '10px'}}>GET</button>
                    <button onclick={this.destroy.bind(this)}>DESTROY</button>
                  </td>
                </tr>
              </tbody>
            </table>
        )
    }    
}
```
#### Using HTML
**index.html**
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="https://unpkg.com/aric-editor@2.1.8/dist/AricEditor.min.js"></script>
    </head>
    <body>
        <div id="editor"></div>
    </body>
    <script>
        var e1 = new ui.AricEditor('editor');
        e1.getEditorInstance();
        e1.setEditorInstance('Sample Text!!!');
    </script>
</html>
```


<h2>Maintainer</h2>

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
