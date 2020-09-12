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
        Written by <strong>{author}</strong> who lives and works in Philly
        building useful things.
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
