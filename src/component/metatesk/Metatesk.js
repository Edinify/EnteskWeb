import React,{useEffect,useRef} from 'react';
import './metatesk.css'
import SectionOne from './sectionOne';
import Addsection1 from './addsection1';
import Addsection2 from './addsection2';
import Addsection3 from './addsection3';
import Addsection4 from './addsection4';
import Addsection5 from './addsection5';
import SrcollNumber from './scrollNumber';
// import SectionFour from './sectionFour';
import metateskimg from './metaImg/metatesk-logo.png';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import {useSpring,animated} from 'react-spring';
import FooterSection from '../homeFolder/footerSection';
import allData from '../../course'
import HomeFunctions from '../functions/homeFunctions'


const Metatesk = (props) => {
  let location = props.location
  const { Course, } = allData


  const {
    scrollTop,
  } = HomeFunctions({location})

  const myref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const container = useSpring({
		to: [{height: "400px" }],

		from: {height: "200px"  },
    config: {
      duration: 1500,
    }
	})

  const Title = useSpring({
		to: [{top: "100px" }],
		from: {top: "-300px"  },
    config: {
      duration: 1500
    }
	})

  

  return (
    <article className='metatesk-section' >
      <SectionOne />
      {/* <SrcollNumber /> */}
      <Addsection4 />
      <SectionTwo  />
      <Addsection1 />
      <Addsection2 />
      <SectionThree />
      <Addsection5 />
      <Addsection3 />
      {/* <SectionFour  myref={myref}/> */}
      
      {/* <Animation /> */}
      <FooterSection data={Course} scrollTop={scrollTop} />
      
    </article>
  )
}

export default Metatesk