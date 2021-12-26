// import ClassicEditor from 'ckeditor5-build-classic-all-plugin';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

const Editor = ({data}) => {


  return (
    <div>
      <CKEditor
        editor={DecoupledEditor}
        onInit={editor => {	
          editor.ui.view.editable.element.parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.view.editable.element
          );
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log('data ', editor.getData())
          // this.onInputChange('body')(data);
        }}
        config={{
          toolbar: ['heading', '|', 'fontSize', 'fontFamily', '|', 'bold', 'italic', 'underline', 'strikethrough', 'link', '|', 'alignment:left', 'alignment:center', 'alignment:right', '|', 'numberedList', 'bulletedList', '|', 'ckfinder', 'insertTable', '|', 'undo', 'redo', '|', 'ckfinder', 'uploadImage', 'mediaEmbed'],
          ckfinder: {
            // Feature configuration.
            // Upload the images to the server using the CKFinder QuickUpload command.
            // uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json',
            // cloudServices
            // cloudServices: {
            //   tokenUrl: 'https://example.com/cs-token-endpoint',
            //   uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/'
            // },
            // tokenUrl: 'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt',
            // Define the CKFinder configuration (if necessary).
            options: {
              // resourceType: 'Images',
              // connectorPath: "http://localhost/ckfinder/core/connector/php/connector.php"
              // resizeImages: true,
              // startupPath: "Images:/cars/",
            },
            openerMethod: 'popup' // 'modal'
          },
        }}
        data={data}
      />
    </div>
  )
}


export default Editor
