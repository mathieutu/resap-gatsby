import { graphql, PageProps } from 'gatsby'
import { Fragment } from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

// markup
const IndexPage = ({ data }: PageProps<any>) => {
  return (
    <div>
      {data.fiches.nodes.map(fiche => {
          let contenu = documentToHtmlString(JSON.parse(fiche.contenu.raw))

          return (
            <Fragment key={fiche.slug}>
                <h1>{console.log(fiche) || fiche.titre}</h1>
                <pre>{contenu}</pre>
                <div dangerouslySetInnerHTML={{ __html: contenu }} />
                <pre>{JSON.stringify(fiche, null, 2)}</pre>
            </Fragment>

          )
      })}
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
