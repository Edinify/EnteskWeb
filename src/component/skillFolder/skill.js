import React, { useEffect, useState,useRef } from 'react'
import { Link} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import circle from '../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from '../homeFolder/sectionTwo'
import SectionThree from './sectionThree'
import FooterSection from '../homeFolder/footerSection'
// import { useSelector } from 'react-redux'
import allData from '../../course.js'
import SkillFunctions from '../functions/skillFunctions'



const Skill =(props)=>{
	
	let location = props.location.aboutProps
	const locationId =  props.location.aboutId
 	
	let name
	let data 
	let Course = allData.Course
	let blog = allData.blog
	if(location && location.name !== 'fromEnvironment' && location.name !== 'fromTechnology'){
		const Course = allData.Course
			Course.map((subject, index) => {
				if(subject.name === location.name ){
					data = subject
					name = subject.name
				}

				return data
		})	
	}else{
		const Course = allData.Skill
		Course.map((subject, index) => {
				
					data = subject
					name = subject.name
				
					return data
		})
	}

	const {
		container,
		leafimg,
		gearimg,
		brushimg,
		executeScroll,
		myRef
	} = SkillFunctions(
	location,
	locationId,
	name
	)




    return(
			<>
				<article className="skill-section">

						<animated.div className="skill-img3" style={brushimg} >
						

						<Link to={{
							pathname:'/',
							aboutProps:{
								name: 'fromSkill'
							}
						}}>
		
							<img className='brush-img' src={brush} alt='entesk' >
							</img>
		
						</Link>
							
		
		
						</animated.div>

					<animated.div className="skill-banner" style={container}>
						
					<animated.div className="skill-img1" style={leafimg}  >
							
						<Link
						to={{
							pathname:'/Environment',
							aboutProps:{
								name: 'fromSkill'
							}
						}}>
						
							<img    src={ leaf} alt='entesk' >
							</img>
							
						</Link>
						
					</animated.div>
					<h1>{name}</h1>
	

					<animated.div className="skill-img2" style={gearimg} >

						
					<Link to={{
						pathname:'/technology',
						aboutProps:{
							name: 'fromSkill'
						}
					}}>

							<img  src={ circle} alt='entesk' >
							</img>

					</Link>
						
						
					</animated.div>
					</animated.div>
				</article>
				<SectionOne data={data} executeScroll={executeScroll} />
				<SectionTwo data={Course}/>
				<SectionThree data={data} myRef={myRef} blog={blog} />
				<FooterSection data={Course} />
			</>
    )
}

export default Skill

