import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import metaimage from "../images/mission-bg.jpg"

const Home = () => {
  return (
    <>
      <Layout>
        <SEO title="Homepage" pageImage={metaimage}/>
        <h1>Hello From Homepage</h1>
      </Layout>
    </>
  )
}

export default Home
