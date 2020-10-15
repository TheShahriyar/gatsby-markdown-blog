import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        image
        author
        siteUrl
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description, pageImage, meta, pathname }) => {
  const { site } = useStaticQuery(getData)

  const {
    siteTitle,
    siteDesc,
    author,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  const image = pageImage && pageImage.src ? `${siteUrl}${pageImage.src}` : null
  const canonical = pathname ? `${siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${siteTitle}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: description || siteDesc,
        },
        {
          property: `og:title`,
          content: `${fbTitle ? `${fbTitle} | ${siteTitle}` : title}`,
        },
        {
          property: `og:description`,
          content: fbDesc || description || siteDesc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: `${twitterTitle ? `${twitterTitle} | ${siteTitle}` : title}`,
        },
        {
          name: `twitter:description`,
          content: twitterDesc || description || siteDesc,
        },
      ]
        .concat(
          pageImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: pageImage.width,
                },
                {
                  property: "og:image:height",
                  content: pageImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

export default SEO
