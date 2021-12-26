import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import parse from 'html-react-parser'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import Link from '@ckeditor/ckeditor5-link/src/link'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Font from '@ckeditor/ckeditor5-font/src/font'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import List from '@ckeditor/ckeditor5-list/src/list'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock'
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'

const Editor = ({ data }) => {
  const componentRef = useRef('')
  const wrapComponentRef = useRef('')
  const [isPreview, setIsPreview] = useState('')
  const [isLayoutReady, setIsLayoutReady] = useState(false)

  useEffect(() => {
    setIsLayoutReady(true)
  }, [])

  const formatHtml = useCallback((newContent) => {
    let updateContent = newContent;
    const styleTable = `<style>
      svg {
        // display: none;
      }
      .ck-widget__selection-handle {
        display: none;
      }
      .ck-reset_all {
        display: none;
      }
      .media {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }

      .table {
        display: flex;
        justify-content: center;
      }
      .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      img {
        max-width: 100%;
      }

      table, td, tr, .flagtable {
        border: 1px solid black;
        border-collapse: collapse;
      }
    </style>`;
    if (updateContent.indexOf('.flagtable') === -1) {
      updateContent += styleTable;
    }
    return updateContent
  }, [])

  const updateContent = useCallback((newContent) => {
    console.log('newContent', newContent)
    componentRef.current = formatHtml(newContent)
  }, [])

  const selectDomValue = useCallback(() => {
    if (!!wrapComponentRef && !!wrapComponentRef.current) {
      const query = wrapComponentRef.current.getElementsByClassName('ck-content')[0].innerHTML
      // let query = wrapComponentRef.current.getElementsByClassName('ck-editor__main')[0].innerHTML

      const doc = new DOMParser().parseFromString(query, 'text/html')
      const formatDoc = doc.body.innerHTML
      console.log('formatDoc ', formatDoc)

      return formatHtml(formatDoc)
    }
    return ''
  }, [])

  return (
    <div className='wrapComponent' ref={wrapComponentRef}>
      <div className='group-btn-action'>
        <button onClick={() => {
          window.print()
        }}>Print</button>

        <button onClick={() => {
          let mywindow = window.open()
          mywindow.document.write(`
            <div>${componentRef.current}<div>
          `)

          // mywindow.document.close()
          mywindow.focus() // necessary for IE >= 10*/
          mywindow.print()
        }}>Preview from value</button>
        
        <button onClick={() => {
          let mywindow = window.open()
          mywindow.document.write(`
            <div>${selectDomValue()}<div>
          `)

          // mywindow.document.close()
          mywindow.focus() // necessary for IE >= 10*/
          mywindow.print()
        }}>Preview from dom</button>

        <button onClick={() => console.log('Show log ', componentRef.current)}>Log</button>
        <p>Click above button opens print preview with these words on page</p>
      </div>
      <hr class="solid"></hr>

      {isLayoutReady ? <CKEditor

        data={data}
        onInit={editor =>{
          console.log('Editor is ready', editor)
          }
        }
        onChange={(event, editor) => {
          updateContent(editor.getData())

          selectDomValue()
        }}
        onBlur={(event, editor) => {
          // console.log('Blur.', { event, editor })
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', { event, editor })
        }}
        config={{
          plugins: [
            Essentials,
            Paragraph,
            Bold,
            Italic,
            Heading,
            Indent,
            IndentBlock,
            Underline,
            Strikethrough,
            BlockQuote,
            Font,
            Alignment,
            List,
            Link,
            MediaEmbed,
            PasteFromOffice,
            Image,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            ImageResize,
            Base64UploadAdapter,
            Table,
            TableToolbar,
            TextTransformation,
            Code,
          ],
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'alignment',
            'outdent',
            'indent',
            'bulletedList',
            'numberedList',
            'blockQuote',
            'code',
            '|',
            'link',
            'insertTable',
            'imageUpload',
            'mediaEmbed',
            '|',
            'undo',
            'redo',
          ],
          heading: {
            options: [
              {
                model: 'paragraph',
                view: 'p',
                title: 'Paragraph',
                class: 'ck-heading_paragraph'
              },
              {
                model: 'heading1',
                view: 'h1',
                title: 'Heading 1',
                class: 'ck-heading_heading1'
              },
              {
                model: 'heading2',
                view: 'h2',
                title: 'Heading 2',
                class: 'ck-heading_heading2'
              },
              {
                model: 'heading3',
                view: 'h3',
                title: 'Heading 3',
                class: 'ck-heading_heading3'
              },
              {
                model: 'heading4',
                view: 'h4',
                title: 'Heading 4',
                class: 'ck-heading_heading4'
              }
            ]
          },
          fontSize: {
            options: [
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              23,
              25,
              27,
              29,
              31,
              33,
              35
            ]
          },
          alignment: {
            options: ['justify', 'left', 'center', 'right']
          },
          table: {
            contentToolbar: [
              'tableColumn',
              'tableRow',
              'mergeTableCells'
            ]
          },
          image: {
            resizeUnit: 'px',
            toolbar: [
              'imageStyle:alignLeft',
              'imageStyle:full',
              'imageStyle:alignRight',
              '|',
              'imageTextAlternative'
            ],
            styles: ['full', 'alignLeft', 'alignRight']
          },
          typing: {
            transformations: {
              remove: [
                'enDash',
                'emDash',
                'oneHalf',
                'oneThird',
                'twoThirds',
                'oneForth',
                'threeQuarters'
              ]
            }
          },
          placeholder: 'Click here to start typing',
          language: 'en'
        }}
        editor={ClassicEditor}
      /> : null}

      <div>
        <hr class="rounded"></hr>
        <p></p>
        <button onClick={() => {
          setIsPreview(selectDomValue())
        }}>Preview bellow</button>
        <div style={{ padding: '35px' }}>
          { isPreview && parse(isPreview)}
        </div>
      </div>
      <hr class="rounded"></hr>
    </div>
  )
}

export default Editor
