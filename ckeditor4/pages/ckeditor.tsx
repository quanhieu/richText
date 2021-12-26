import React, { useState, useEffect } from 'react';
import { CKEditor } from 'ckeditor4-react';

const Ckeditorer = () => {
  const [ data, setData ] = useState( '123!' );

  useEffect( () => {
    setTimeout(() => {
      setData( "44444444422222222222" );
    }, 3000)  
  }, [] );

  return (
    <CKEditor
      data={data}
      initData={<p>Hello from CKEditor 4!</p>}
      onChange={(evt: any) => console.log( evt.editor.getData() )}
      config={{
        // plugins: [],
        //     https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html#cfg-extraPlugins
        //     https://stackoverflow.com/questions/5221583/ckeditor-allow-video-embed-code
        extraPlugins: "justify, colorbutton, font, easyimage, preview", //embed
        // toolbar: [
        //   [ 'Source' ],
        //   [ 'Styles', 'Format', 'Font', 'FontSize' ],
        //   [ 'Bold', 'Italic' ],
        //   [ 'Undo', 'Redo' ],
        //   [ 'EasyImageUpload' ],
        //   [ 'About' ],
        //   { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        //   { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
        //   { name: 'links' },
        //   { name: 'insert' },
        //   { name: 'forms' },
        //   { name: 'tools' },
        //   { name: 'document',       groups: [ 'mode', 'document', 'doctools' ] },
        //   { name: 'others' },
        //   '/',
        //   { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        //   { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        //   { name: 'styles' },
        //   { name: 'colors' },
        //   { name: 'about' }
        // ],
        // removePlugins: 'image',
        // extraAllowedContent: 'iframe[!src];',
        // resize_enabled: true,
        height: '30em',
        allowedContent: true,
        removeButtons: "about",
        cloudServices_uploadUrl: 'https://33333.cke-cs.com/easyimage/upload/',
        cloudServices_tokenUrl:
          'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt'
      }}
    />
  )
}

export default Ckeditorer