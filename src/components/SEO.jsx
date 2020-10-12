import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import { Helmet } from 'react-helmet'

const getData = graphql`
query {
  site {
    siteMetadata {
      siteTitle:title,
      siteDesc:description,
      image,
      twitterUsername,
      siteUrl:url
    }
  }
}
`

const SEO = ({ title, description, pageImage }) => {
  const { site } = useStaticQuery(getData)
  
  const {siteDesc, siteTitle, image, siteUrl, twitterUsername} = site.siteMetadata
  return (
    
    <Helmet htmlAttributes={{lang: "en"}} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={pageImage || image} />
      
      {/* Facebook Card */}
      <meta name="og:url" content={siteUrl}/>
      <meta name="og:type" content="website"/>
      <meta name="og:title" content={`${title} | ${siteTitle}`}/>
      <meta name="og:description" content={description || siteDesc}/>
      <meta name="og:image" content={pageImage || `${siteUrl}${image}`}/>

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={pageImage || `${siteUrl}${image}`} />
    </Helmet>
    
  )
}

export default SEO
