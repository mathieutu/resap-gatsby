import { graphql, PageProps } from 'gatsby'
import { Fragment } from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { TestMenu } from '../components/TestMenu'

// markup
const IndexPage = ({ data }: PageProps<any>) => {
  return (
    <div
      className="my-8 max-w-prose mx-auto px-2 md:px-0"
    >
      <TestMenu />
      <div className="mt-8 prose">
        {data.fiches.nodes.map(fiche => {
          const contenu = documentToHtmlString(JSON.parse(fiche.contenu.raw))

          console.log(fiche)
          return (
            <Fragment key={fiche.slug}>
              <h1>{fiche.titre}</h1>
              <pre>{contenu}</pre>
              <div
                className="border-green-800 border p-2 bg-green-50"
                dangerouslySetInnerHTML={{ __html: contenu }}
              />
              <pre>{JSON.stringify(fiche, null, 2)}</pre>
            </Fragment>

          )
        })}</div>
    </div>
  )
}

export const query = graphql`
    query MyQuery {
        fiches: allContentfulFiche {
            nodes {
                createdAt
                contenu {
                    raw
                }
                slug
                titre
                description {
                    description
                }
            }
        }
    }
`

export default IndexPage
