import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../components/Editor'), {
  ssr: false
})
const EditorFinder = dynamic(() => import('../components/editorClassic'), {
  ssr: false
})

const Index = () => {
  return (
    <div>
      <h3>CKEditor 5 Custom + Next.js</h3>
      <Editor 
        data="<p> Hello from CKEditor 5! </p>"
      />
      <h3>CKFinder Custom + Next.js</h3>
      {/* <EditorFinder 
        data="<p> Hello from CKEditor 5 Finder! </p>"
      /> */}
    </div>
  )
}

export default Index