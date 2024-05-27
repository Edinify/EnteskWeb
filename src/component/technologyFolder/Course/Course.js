import {useSpring, animated} from 'react-spring'
import  {React, useEffect,useState } from 'react' 
import { Link} from 'react-router-dom'
import leaf from '../../../images/leaf.png'
import brush from '../../../images/brush.png'
import circle from '../../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from '../../homeFolder/sectionTwo'
import SectionThree from './sectionThree'
import FooterSection from '../../homeFolder/footerSection'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import Alldata from '../../../course'
import TechnologyFunctions from '../../functions/technologyFunctions'


const TecnologyBanner = (props) =>{


	// let state = useSelector(state => state.allData)
	const { name } = useParams();
	console.log(name)
	let location = props.location.aboutProps
	const locationId =  props.location.aboutId

	const {
		container,
		leafimg,
		gearimg,
		brushimg,
	} = TechnologyFunctions(
	location,
	locationId,
	name
	)
	const { innerWidth: width} = window;
	let data 
	let Course = Alldata.Course

		Course.map((subject, index) => {
			if(subject.name === name ){
				data = subject
			}

			return data
		})

    
    return(
			<>
				<article className="technology-section">
					<animated.div className="technology-img2" style={ gearimg} >

						<Link to={{
							pathname:'/',
							aboutProps:{
								name: 'fromTechnology'
							}
							}}>
							<img className='gear-img' src={ circle} alt='entesk' >
							</img>
						</Link>

					</animated.div>

					<animated.div className="technology-banner" style={container}>
						<h1>{name}</h1>
						<animated.div className="technology-img1" style={ leafimg  } >
							
						<Link
						to={{
							pathname:'/Environment',
							aboutProps:{
								name: 'fromTechnology'
							}
						}}>
						
							<img    src={ leaf} alt='entesk' >
							</img>

						</Link>

						</animated.div>
						
						<animated.div className="technology-img3" style={brushimg} >

						<Link
						to={{
							pathname:'/skill',
							aboutProps:{
								name: 'fromTechnology'
							}
						}}>
							<img src={brush} alt='entesk' >
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

export default TecnologyBanner