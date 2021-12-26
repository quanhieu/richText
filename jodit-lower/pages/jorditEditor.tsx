import React, { useState, useRef, useEffect, useCallback } from "react";
import JoditEditor from "jodit-react";
import parse from 'html-react-parser'
import styles from './styles.module.scss'

export default function FormCompanyStaff(){
  const editor = useRef("");
  const other = useRef(null);
  const [, mimicForceUpdate] = useState(false);

  const forceUpdate = useCallback(() => mimicForceUpdate(true), []);
  // const [content, setContent] = useState("");
  // let content = ""
 
  // useEffect(
  //   () =>
  //     setContent(
  //       "<table> <tr> <th>Company</th> <th>Contact</th> <th>Country</th> </tr> <tr> <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td> </tr> <tr> <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td> <td>Mexico</td> </tr> <tr> <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td> </tr> <tr> <td>Island Trading</td> <td>Helen Bennett</td> <td>UK</td> </tr> <tr> <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td> <td>Canada</td> </tr> <tr> <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td> <td>Italy</td> </tr></table>"
  //     ),
  //   []
  // );
  const config = {
    removeButtons: [
      "file"
      // "file", "about", "copyformat", "classSpan", "superscript", "subscript", "cut", "copy", "paste",
      // "fullsize", "preview", "print",
    ],
    extraButtons: [],
    extraPlugins: [],
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    toolbarButtonSize: "middle",
    height: 800,
    uploader: {
      insertImageAsBase64URI: true
    },
    table: {
      "allowCellSelection": true,
      "selectionCellStyle": "border: 1px double #1e88e5 !important;",
      "allowCellResize": true,
      "useExtraClassesOptions": false
    },
    // allowResizeTags: [
    //   "img",
    //   "iframe",
    //   "table",
    //   "jodit",
    // ],
    beautifyHTML: true,
    // allowResizeY: false,
    // showXPathInStatusbar: false,
    // toolbar: false,
  };

  const updateContent = useCallback((newContent) => {
      console.log('newContent', newContent)
      // editor.current = newContent

      let updateContent = newContent;
      const styleTable = `<style>
        table, td, tr, .flagtable {
            border: 1px solid black;
            border-collapse: collapse;
        }
      </style>`;
      if (updateContent.indexOf('.flagtable') === -1) {
        updateContent += styleTable;
      }
      editor.current = updateContent

      // setContent(newContent)
      // content = newContent

      // const doc = new DOMParser().parseFromString(editor.current, 'text/html');
      // const formatDoc = doc.body.innerHTML;
      // console.log('formatDoc', formatDoc)
    }, [],
  )

  // console.log('editor ', editor.current)
  console.log('render')

  useEffect(() => {
    let init = "<span><table> <tr> <th>Company</th> <th>Contact</th> <th>Country</th> </tr> <tr> <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td> </tr> <tr> <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td> <td>Mexico</td> </tr> <tr> <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td> </tr> <tr> <td>Island Trading</td> <td>Helen Bennett</td> <td>UK</td> </tr> <tr> <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td> <td>Canada</td> </tr> <tr> <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td> <td>Italy</td> </tr></table></span>"
    
    init = `${init} <style>
      table, td, tr, .flagtable {
          border: 1px solid black;
          border-collapse: collapse;
      }
    </style>`

    editor.current = init
  
    forceUpdate()
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <JoditEditor
          // ref={editor}
          value={editor.current}
          // value={content}
          config={config}  // https://xdsoft.net/jodit/doc/options/
          // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => updateContent(newContent)}
        />
        <p></p>

        <div style={{ padding: '35px' }}>{ editor.current && parse(editor.current)}</div>
      </div>
    </>
  );
};
