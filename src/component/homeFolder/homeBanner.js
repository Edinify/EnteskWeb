import  {React, } from 'react'
import { animated} from 'react-spring'
import {useSpring, } from 'react-spring'
import { Link} from 'react-router-dom'
import SectionOne from './sectionOne'
import circle from '../../images/circle.png'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import mainLogo from '../../images/mainLogo.png'
import ets from '../../images/ets.png'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from './sectionFive'
import SectionSix from './sectionSix'
import SectionSeven from './sectionSeven'
import FooterSection from './footerSection'
import HomeFunctions from '../functions/homeFunctions'
import Iconshadow from '../functions/iconshadow'
import allData from '../../course'

const HomeBanner = (props) =>{
	let location = props.location.aboutProps
	// home functions 
	// const {leafshadow} = Iconshadow()
	const {
	myRef,
	handlerSide,
	container,
	bannerStyleText,
	bannerStyleLogo,
	leafimg,
	brushimg,
	circleimg,
	paragraphtxt,
	scrollTop,
	openSide,
	width
} = HomeFunctions({location})



	// data for site
	const {blog, Course, Home, Sectionone, Sectionthree, images, Client} = allData
	let data 
	Course.map((subject) =>{
		return data = subject
	})


	return(
		<article  onClick={props.handlerSideClose}  >
			<div style={{position: 'relative', zIndex: `${props.zIndex}`}}>
				<div className="click-div" onClick={handlerSide} >
				
					<animated.div style={container}  className='main-banner'>
						<div className='banner-container' >
							
						<animated.div style={bannerStyleLogo} className="banner-style-logo">
							<svg  className="logo-img" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 808.91 808.91"><defs><style>{`.cls-1{fill:#55cbf9;}.cls-2{fill:#fbb116;}`}</style></defs><path id="Path_1" data-name="Path 1" className="cls-1" d="M500,892.45c-224.07,0-406.16-183.14-404.44-407.61,1.68-220,181.3-399.6,401.28-401.28C721.31,81.83,904.45,263.93,904.45,488h0a61.16,61.16,0,0,1-61.16,61.16H501.47c-33.17,0-61.41-25.78-62.59-58.93a61.16,61.16,0,0,1,58.89-63.35c.74,0,1.49,0,2.23,0H683.91c48.76,0,78.06-54.37,51-94.94a282.1,282.1,0,0,0-237.45-126c-155.5,1.37-281.66,130.47-279.57,286C220,645.31,345.17,769.58,499,770.13c29.6.1,55.74,20.42,61.11,49.53A61.19,61.19,0,0,1,500,892.45Z" transform="translate(-95.55 -83.55)"/><path id="Path_2" data-name="Path 2" className="cls-2" d="M904.45,488h0c0-204.26-152.2-373.61-349.14-400.66-195.57,27-347.64,195.16-349.2,397.5-1.51,196.93,138.48,362,324.15,399.59a61.21,61.21,0,0,0,29.83-64.77c-5.36-29.11-31.51-49.42-61.11-49.53-153.81-.55-279-124.82-281.08-278.28-2.09-155.5,124.06-284.59,279.57-286a282.72,282.72,0,0,1,57.89,5.48A281.67,281.67,0,0,1,845.47,331.89c27,40.58-2.25,94.94-51,94.94H610.55A61.17,61.17,0,0,0,549.39,488c0,.74,0,1.49,0,2.23,1.18,33.14,29.42,58.93,62.59,58.93H843.28A61.17,61.17,0,0,0,904.45,488Z" transform="translate(-95.55 -83.55)"/></svg>
							<div className="logo-text">
								<img src={ets} className="text-img"  alt="entesk"></img>
								
							</div>
						</animated.div>
							
							<animated.div style={bannerStyleText} className="banner-style-text" >
								<animated.p style={paragraphtxt} >Environment</animated.p>
								<animated.p style={paragraphtxt}>Technology</animated.p>
								<animated.p style={paragraphtxt}>Skills</animated.p>
							</animated.div>
								

								{/* for shadow icons */}
							<animated.img  src={ leaf} alt='img'  style={leafimg} className='box_shadow_icons'></animated.img>

							<animated.img src={ circle} alt='img' className='centerimg box_shadow_icons' style={circleimg} ></animated.img>

							<animated.img src={brush} alt='img' className='centerimg box_shadow_icons' style={brushimg} ></animated.img>


									<Link  className='link ' to='/environment'>
										<animated.img  src={ leaf} alt='entesk'  style={leafimg} className=''></animated.img>
									</Link >
								
								
									<Link className='link ' to='/technology'>
										<animated.img src={ circle} alt='entesk' className='centerimg'style={circleimg} ></animated.img>
									</Link>
								

								
									<Link className='link ' to='/skill'>
										<animated.img src={brush} alt='entesk' style={brushimg} ></animated.img>
									</Link>
								
							
						</div>
					</animated.div>
				</div>
				<SectionOne data={Sectionone} />
				<SectionTwo data={Course} setCourse={props.setCourse} />
				<SectionThree data={Sectionthree} blog={blog}/>
				<SectionFour data={images}  />
				<SectionFive data={blog} />
				<SectionSix data={Client} />
				<SectionSeven  myRef={myRef} />
				<FooterSection data={Course} scrollTop={scrollTop} />
			</div>
		</article>
	)
}


export default HomeBanner
