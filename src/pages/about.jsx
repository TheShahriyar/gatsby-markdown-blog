import React from 'react'
import SEO from '../components/SEO'
import Image from "../images/number-bg.png"

const about = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="This is page descriptions"
        pageImage={Image}
        fbTitle="This is FB Title"
        fbDesc="This is FB Desc"
        twitterTitle="This is Twitter Title"
        twitterDesc="This is Twitter Descriptions"
      />
      <h1>About Page</h1>
    </>
  )
}

export default about
