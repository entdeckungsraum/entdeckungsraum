import matter from 'gray-matter'
import { usePlugin } from 'tinacms'
import { useMarkdownForm } from 'next-tinacms-markdown'
import Wrapper from '../../../../components/Wrapper'
import { Article } from '../../../../components/Article'
import styled from 'styled-components'

export default function Gutschine(props) {
  const formOptions = {
    label: `Update ${props.markdownFile.frontmatter.title}`,
    fields: [
      {
        name: 'frontmatter.title',
        label: 'Title',
        component: 'text',
      },
      {
        label: 'Date',
        name: 'frontmatter.date',
        component: 'date',
        description: 'The articles will be sorted accordint to this date',
      },
      {
        name: 'markdownBody',
        label: 'Blog Body',
        component: 'markdown',
      },
      {
        component: 'list',
        name: 'frontmatter.list',
        field: {
          component: 'textarea',
        },
        label: 'List',
        description: 'add items of your list',
      },
    ],
  }

  const [record, form] = useMarkdownForm(props.markdownFile, formOptions)
  usePlugin(form)
  return (
    <Wrapper data={props.config} title={record.frontmatter.title}>
      <ArticleCont>
        <Article
          record={{
            slug: '',
            title: record.frontmatter.title,
            content: record.markdownBody,
            list: record.frontmatter.list,
          }}
        />
      </ArticleCont>
    </Wrapper>
  )
}

Gutschine.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(
    `../../../../data/angebot/craniosacral-therapie/nach-der-geburt/${slug}.md`
  )
  const config = await import(
    `../../../../data/angebot/craniosacral-therapie/nach-der-geburt/config.json`
  )
  const data = matter(content.default)

  return {
    markdownFile: {
      fileRelativePath: `data/angebot/craniosacral-therapie/nach-der-geburt/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    title: config.default.title,
    config: config,
  }
}

const ArticleCont = styled.div`
  margin-top: 100px;
  margin-bottom: 60px;
`
