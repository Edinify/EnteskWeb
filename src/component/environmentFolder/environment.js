import {useSpring, animated} from 'react-spring'
import  {React, useEffect,  } from 'react' 
import { Link} from 'react-router-dom'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import circle from '../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from '../homeFolder/sectionTwo'
import SectionThree from './sectionThree'
import FooterSection from '../homeFolder/footerSection'
import EnvironmentFunctions from '../functions/environmentFunctions'
// import { useSelector } from 'react-redux'
import Alldata from '../../course'


const Environment = (props) =>{
	let name
	let data 
	let Course 
	let blog 
	let location = props.location.aboutProps
	const locationId =  props.location.aboutId
	const {
		brushimg,
		gearimg,
		leafimg,
		container,
		myRef,
    executeScroll
	} = EnvironmentFunctions( 
		location, 
		locationId,
		name
		)

	useEffect(() => {
	  window.scrollTo(0, 0);
	}, [location, name,] );

	
	
		Course = Alldata.Course
		blog = Alldata.blog
		if(location && location.name !== 'fromSkill' && location.name !== 'fromTechnology'){
		const Course = Alldata.Course
			Course.map((subject, index) => {
				if(subject.name === location.name ){
					data = subject
					name = subject.name
				}

				return data
		})	
	}else{
		const Course = Alldata.Environment
		Course.map((subject, index) => {
				
					data = subject
					name = subject.name
				return subject
		})
	}

    return(

			<article onClick={props.handlerSideClose}>
				<div className="environment-section" style={{position: 'relative', zIndex: `${props.zIndex}`}} >

								<animated.div className="environment-img1" style={leafimg} >
									<Link to={{
										pathname:'/',
										aboutProps:{
											name: 'fromEnvironment'
										}
										}}>
										<img  className='leaf-img' src={leaf} alt='img' ></img>
									</Link>
								</animated.div>
					
						<animated.div className="environment-banner" style={container}>
							<h1>{name}</h1>

								<animated.div className="environment-img2"  style={gearimg}>
									<Link to={{
										pathname:'/technology',
										aboutProps:{
											name: 'fromEnvironment'
										}
									}}>
										<img  src={ circle} alt='img' >
										</img>
									</Link>
								</animated.div>

								<animated.div className="environment-img3" style={brushimg} >
									<Link to={{
											pathname:'/skill',
											aboutProps:{
												name: 'fromEnvironment'
											}
										}}>
										<img src={brush} alt='img' >
										</img>
									</Link>
								</animated.div>

						</animated.div>
					
					
				</div>
				<SectionOne data={data} executeScroll={executeScroll} />
				<SectionTwo data={Course} />
				<SectionThree data={data} myRef={myRef} blog={blog} />
				<FooterSection data={Course} />
		</article>					

    )
}

export default Environment