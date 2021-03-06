import Head from 'next/head'

export default function Meta(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{props.siteTitle ? props.siteTitle : 'Entdeckungsraum'}</title>
        <meta
          name="Description"
          content={props.description ? props.description : 'Entdeckungsraum'}
        ></meta>
      </Head>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
          * {
            box-sizing: inherit;
          }
          html {
            box-sizing: border-box;
            overflow-y: scroll;
          }
          body {
            overflow-x: hidden;
            color: #000;
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          a {
            text-decoration: none;
            color: inherit;
            transition: opacity 0.2s ease;
          }

          ul {
            list-style: none;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            list-style-position: outside;
            list-style-image: none;
            color: #3a4b6d;
          }
          ol {
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            list-style-position: outside;
            list-style-image: none;
            color: #3a4b6d;
          }
          ul,
          ol,
          p {
            margin-bottom: 1.45rem;
            color: #3a4b6d;
            font-weight: 300;
          }
          img {
            max-width: 100%;
          }
          img,
          figure,
          table,
          fieldset {
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            color: #3a4b6d;
          }
          pre {
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            margin-bottom: 1.45rem;
            font-size: 0.85rem;
            line-height: 1.42;
            background: hsla(0, 0%, 0%, 0.04);
            border-radius: 3px;
            overflow: auto;
            word-wrap: normal;
            padding: 1.45rem;
            color: #3a4b6d;
          }

          h2 {
            font-size: 1.7rem;
            letter-spacing: -0.75px;
            line-height: 1.2;
          }

          h3 {
            letter-spacing: -0.5px;
            line-height: 1.1875;
            color: #a0a0a0;
            font-weight: normal;
          }

          p {
            letter-spacing: -0.5px;
            line-height: 1.5;
            color: #464646;
          }

          @media (min-width: 1280px) {
            h1 {
              font-weight: 400;
              font-family: 'Roboto' sans-serif;
              font-size: 2rem;
              line-height: 1.1875;
              color: #3a4b6d;
            }

            h2 {
              font-size: 1.5rem;
              letter-spacing: -0.75px;
              line-height: 1.1667;
            }

            h3 {
              font-size: 1rem;
              letter-spacing: -0.5px;
              line-height: 1.1875;
              color: #a0a0a0;
              font-weight: normal;
            }

            p {
              line-height: 1.4375;
              color: #3a4b6d;
            }
          }
        `}
      </style>
    </>
  )
}
