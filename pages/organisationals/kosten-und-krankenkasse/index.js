import matter from 'gray-matter'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'next-tinacms-json'
import Wrapper from '../../../components/Wrapper'
import { Article } from '../../../components/Article'
import styled from 'styled-components'
import Meta from '../../../components/Meta'

const KostenUndKrankenkasse = ({ jsonFile, records }) => {
  const formOptions = {
    label: 'Site Config',
    fields: [
      {
        name: 'frontmatter.title',
        label: 'Site Title',
        component: 'text',
      },
      {
        label: 'Cover Image',
        name: 'frontmatter.image',
        component: 'image',
        // Generate the frontmatter value based on the filename
        parse: media => `/static/${media.filename}`,

        // Decide the file upload directory for the post
        uploadDir: () => '/public/static',

        // Generate the src attribute for the preview image.
        previewSrc: fullSrc => fullSrc.replace('/public', ''),
      },
    ],
  }
  const [data, form] = useJsonForm(jsonFile, formOptions)
  usePlugin(form)
  return (
    <Wrapper data={data} title={jsonFile.data.frontmatter.title}>
      {!!records.length &&
        records.map(record => (
          <ArticleCont>
            <Article
              isLink
              record={{
                slug: record.slug,
                content: record.document.content,
                title: record.document.data.title,
                dir: 'organisationals/kosten-und-krankenkasse',
              }}
            />
          </ArticleCont>
        ))}
    </Wrapper>
  )
}

export default KostenUndKrankenkasse

KostenUndKrankenkasse.getInitialProps = async function() {
  const content = await import(
    '../../../data/organisationals/kosten-und-krankenkasse/config.json'
  )
  let records = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      const document = matter(value.default)
      return { document, slug }
    })
    return data
  })(
    require.context(
      '../../../data/organisationals/kosten-und-krankenkasse',
      true,
      /\.md$/
    )
  )
  return {
    jsonFile: {
      fileRelativePath: `data/organisationals/kosten-und-krankenkasse/config.json`,
      data: content.default,
    },
    records: records.sort((p1, p2) =>
      p1.document.data.date > p2.document.data.date ? 1 : -1
    ),
  }
}

const ArticleCont = styled.div`
  &:first-child {
    margin-top: 130px;
  }
  @media (max-width: 1080px) {
    &:first-child {
      margin-top: 39px;
    }
  }
  margin-bottom: 60px;
`
