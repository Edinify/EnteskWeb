import {React,useEffect} from 'react'
import SectionOne from './sectionOne'
import Course from '../../course'
import SectionTwo from './sectionTwo'
import FooterSection from '../homeFolder/footerSection'


function About(props) {
  const about = Course.about
  const data = Course.Course
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  // const team = data[0].team
  return (
    <article onClick={props.handlerSideClose}>
      <div className="col-md-12 main-about"  >
        <h2>Biz Kimik</h2>
      </div>
      <SectionOne data={about} />
      <SectionTwo data={about} />
      <FooterSection data={data} />
    </article>
  )
}

export default About
