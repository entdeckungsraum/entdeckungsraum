import matter from 'gray-matter'
import { Contact } from '../../components/Contact'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'next-tinacms-json'
import Wrapper from '../../components/Wrapper'

const Contacts = ({ jsonFile, contactDetails }) => {
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
      {contactDetails.length &&
        contactDetails.map(doc => {
          return <Contact isLink contact={doc.document.data} slug={doc.slug} />
        })}
    </Wrapper>
  )
}

export default Contacts

Contacts.getInitialProps = async function() {
  const content = await import('../../data/contacts/config.json')
  let contactDetails = (context => {
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
  })(require.context('../../data/contacts', true, /\.md$/))
  return {
    jsonFile: {
      fileRelativePath: `data/contacts/config.json`,
      data: content.default,
    },
    contactDetails: contactDetails.sort((p1, p2) =>
      p1.date > p2.date ? 1 : -1
    ),
  }
}
