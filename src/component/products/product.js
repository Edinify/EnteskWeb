import {React, useEffect} from 'react'
import SectionOne from './sectionOne'
import Course from '../../course'
import FooterSection from '../homeFolder/footerSection'


export default function Product(props) {
  const {executeScroll} = props
  console.log(props)
  const data = Course.Course
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article onClick={props.handlerSideClose}>
      <div className="col-md-12 products-name">
        <h1>Tədris Proqramları</h1>
      </div>
      <SectionOne data={data} executeScroll={executeScroll} />
      <FooterSection  data={data} />
    </article>
  )
}
