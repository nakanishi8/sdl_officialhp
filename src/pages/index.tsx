// import { Link } from "gatsby"
import React, { useState } from 'react'
import SEO from 'components/seo'
import '../_main.scss'

// components
import Sliser from 'components/Home/Slider'
import Concept from 'components/Home/Section/Concept'
import NewsRelease from 'components/Home/Section/NewsRelease'
import Location from 'components/Home/Section/Location'
import AdvisoryMembers from 'components/Home/Section/AdvisoryMembers'
import Recruit from 'components/Home/Section/Recruit'
import Header from 'components/Home/Header/index'
import Footer from 'components/Home/Footer'

import {
  ConceptList,
  NewsReleaseList,
  LocationList,
  AdvisoryMembersList,
  RecruitList,
  mainVisual,
} from 'utils/data'

const IndexPage = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <Header
        siteTitle="SOMPO"
        data={'JP'}
        menu={menu}
        onClick={() => (menu ? setMenu(false) : setMenu(true))}
      />
      <SEO title="HOME" />
      <Sliser data={'JP'} dataList={mainVisual} />
      <div>
        <Concept data={'JP'} dataList={ConceptList} title={'Concept'} />
        <NewsRelease data={'JP'} dataList={NewsReleaseList} title={'News Release'} />
        <Location data={'JP'} dataList={LocationList} title={'Location'} />
        <AdvisoryMembers data={'JP'} dataList={AdvisoryMembersList} title={'Advisory members'} />
        <Recruit data={'JP'} dataList={RecruitList} title={'Recruit'} />
      </div>
      <Footer data={'JP'} />
    </>
  )
}
export default IndexPage
