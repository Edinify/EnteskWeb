import {useSpring, animated} from 'react-spring'
import  {React, useEffect,useState } from 'react' 
import { Link} from 'react-router-dom'
import leaf from '../../../images/leaf.png'
import brush from '../../../images/brush.png'
import circle from '../../../images/circle.png'
import icon from '../../../images/logoicon.png'
import SectionOne from './sectionOne'
import SectionTwo from '../../homeFolder/sectionTwo'
import SectionThree from './sectionThree'
import FooterSection from '../../homeFolder/footerSection'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import Alldata from '../../../course'
import SkillFunctions from '../../functions/skillFunctions'


const Skill = (props) =>{

	const { name } = useParams();
	console.log(name)
	let location = props.location.aboutProps
	const locationId =  props.location.aboutId
	let data 
	let Course = Alldata.Course

	const {
		container,
		leafimg,
		gearimg,
		brushimg,
	} = SkillFunctions(
		location,
		locationId,
		name
	)

		Course.map((subject, index) => {
			if(subject.name === name ){
				data = subject
			}

			return data
		})




    
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
		
							<img className='brush-img' src={brush} alt='img' >
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
						
							<img    src={ leaf} alt='img' >
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

							<img  src={ circle} alt='img' >
							</img>

					</Link>
						
						
					</animated.div>
					</animated.div>
				</article>
				<SectionOne data={data}  />
				<SectionTwo data={Course}/>
				<SectionThree data={data} />
				<FooterSection data={Course} />
			</>
    )
}

export default Skill