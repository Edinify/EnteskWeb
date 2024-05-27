import { animated} from 'react-spring'
import  {React, } from 'react' 
import { Link} from 'react-router-dom'
import leaf from '../../../images/leaf.png'
import brush from '../../../images/brush.png'
import circle from '../../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from '../../homeFolder/sectionTwo'
import SectionThree from './sectionThree'
import FooterSection from '../../homeFolder/footerSection'
import { useParams } from 'react-router-dom'
import Alldata from '../../../course'
// import HelmetFunction from '../../helmetfile/helmet'
import environmentFunctions from '../../functions/environmentFunctions'


const Environment = (props) =>{

	let location = props.location.aboutProps
	const locationId =  props.location.aboutId
	const { name } = useParams();
	const {
		brushimg,
		gearimg,
		leafimg,
		container,
	} = environmentFunctions(location, locationId,name)

	// let state = useSelector(state => state.allData)
	
	console.log(name)
	

	
	let data 
	let Course = Alldata.Course

		Course.map((subject, index) => {
			if(subject.name === name ){
				data = subject
			}

			return data
		})


	


    return(

			<article onClick={props.handlerSideClose}>
				{/* <HelmetFunction /> */}
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
				<SectionOne data={data}  />
				<SectionTwo data={Course} />
				<SectionThree data={data} />
				<FooterSection data={Course} />
		</article>					

    )
}

export default Environment