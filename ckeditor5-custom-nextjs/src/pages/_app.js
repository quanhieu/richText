import '../styles/editor.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (<>
    <Head>
      {/* <script src="https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.js"></script> */}
      <script src="https://ckeditor.com/apps/ckfinder/3.5.0/ckfinder.js"></script>
      <title>CKEditor 5 Custom + Next.js</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default App