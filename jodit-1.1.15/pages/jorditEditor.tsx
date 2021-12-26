import React, { useState, useRef, useEffect, useCallback } from "react";
import JoditEditor from "jodit-react";
import styles from './styles.module.scss'

export default function FormCompanyStaff(){
  const editor = useRef("");
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
      "file", "about", "copyformat", "classSpan", "superscript", "subscript", "cut", "copy", "paste",
      // "fullsize", "preview", "print",
    ],
    extraButtons: [],
    extraPlugins: [],
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    toolbarButtonSize: "middle",
    height: 500,
    uploader: {
      insertImageAsBase64URI: true
    },
    table: {
      "allowCellSelection": true,
      "selectionCellStyle": "border: 1px double #1e88e5 !important;",
      "allowCellResize": true,
      "useExtraClassesOptions": false
    },
    beautifyHTML: true,
    // showXPathInStatusbar: false,
    // toolbar: false,
  };

  const updateContent = useCallback((newContent) => {
      console.log('newContent', newContent)
      // setContent(newContent)
      // content = newContent
      editor.current = newContent

      // const doc = new DOMParser().parseFromString(editor.current, 'text/html');
      // const formatDoc = doc.body.innerHTML;
      // console.log('formatDoc', formatDoc)
    }, [],
  )

  // console.log('editor ', editor.current)
  console.log('render')


  useEffect(() => {
    editor.current = "<span><table> <tr> <th>Company</th> <th>Contact</th> <th>Country</th> </tr> <tr> <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td> </tr> <tr> <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td> <td>Mexico</td> </tr> <tr> <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td> </tr> <tr> <td>Island Trading</td> <td>Helen Bennett</td> <td>UK</td> </tr> <tr> <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td> <td>Canada</td> </tr> <tr> <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td> <td>Italy</td> </tr></table></span>"
    forceUpdate()
  }, [])

  return (
    <div className={styles.wrapper}>
      <JoditEditor
        // ref={editor}
        value={editor.current}
        // value={content}
        config={config}  // https://xdsoft.net/jodit/doc/options/
        // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => updateContent(newContent)}
      />
    </div>
  );
};
