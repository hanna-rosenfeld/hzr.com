import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="flex mb-20">
      <p>
        <strong>{author}</strong> is a web developer who lives and works in
        Philadelphia.
        {` `}
        <a
          className="text-pink-600"
          href={`https://twitter.com/${social.twitter}`}
        >
          >twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
