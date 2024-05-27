import {useRef, useEffect} from 'react'
import {useSpring,animated} from 'react-spring'
import GetDimension from './getDimension'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 150)
const EnvironmentFunctions = (
	location, 
	locationId,
	name
	) =>{
const { innerWidth: width} = window;

  const myRef = useRef(null)
	const executeScroll = () => scrollToRef(myRef)
	// let state = useSelector(state => state.allData)

	
  // getDimension screen for responsive

	const {screenSize} =GetDimension()
	
  		
  // scroll 
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, [location, name,] );

  
  // container height animation------------------

	const container = useSpring({
		to: [{height: screenSize.dynamicWidth <= 768 && screenSize.dynamicWidth > 480 ? location?  
		'250px' : '300px' : screenSize.dynamicWidth < 480 ? location?
		'200px' : '200px' :'400px' }],

		from: {height: screenSize.dynamicWidth <= 768 && screenSize.dynamicWidth > 480 ? location?  
		'250px' : '400px' : screenSize.dynamicWidth < 480 ? location? 
		'200px' : '400px' : location? '400px' : '550px'  }
	})


		// Leaf animation --------------
		const leafimg = useSpring({
			to: [{top: '5%', left: '50%' }],

			from: 
      {top: locationId ? locationId.id ? '0%' : '0%' :
			  location ? location.name === name ? '0%' : '25%' : '25%',

			left: 
        location ? location.name === 'fromTechnology'?
        '0%' : location.name === name ? '41%' :  '0%' : 
        locationId ? locationId.id === 'fromNav-environment' ?
        '41%' : '0%' : '30%' },
			config: {
				duration: 500
			}
		})
		// Gear animation --------------

		const gearimg = useSpring({
		to: [{
			left: '0%' ,
			
			top: 
      width <= 768 ?  
			location ? '37px' : '37px' :
      location ? '117px' : '117px'
		}],


			from:{
        left: location ? 
        location.name === 'fromTechnology' ?
        '50%' : '100%' :  '50%', 
			
			top: 
        width <= 768 ? location ?  
        location.name === 'fromTechnology' ?
        '-37px' : '37px' : '37px' : location ?  
        location.name === 'fromTechnology' ?
        '-117px' : '117px' :locationId ?  
        locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
			 },
			config: {
				duration: 500
			}
		})

		// Brush animation --------------
		
		const brushimg = useSpring({
		to:[{right: 
          location ? location.name === 'fromTechnology' ?
          '0%' : '0%' : '0%',

        top: 
          width <= 768 ? location ? 
          location.name === 'fromTechnology' ? 
          '37px' : '37px' : '37px'   :    location ? 
          location.name === 'fromTechnology' ?
          '117px' : '117px' : '117px'
		,	
		}],
  	from:{right:
            location ?
            location.name === 'fromTechnology' ?
            '0%' : '50%' : '30%',
			
          top: 
            width <= 768 ? location ? 
            location.name === 'fromTechnology' ?  
            '37px' : '-37px' : '37px'  :  location ? 
            location.name === 'fromTechnology' ? 
            '117px' : '-117px' : locationId ?  
              locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
			},
			config: {
				duration: 500
			}
		})
  
    return {
      brushimg,
      gearimg,
      leafimg,
      container,
      myRef,
      executeScroll,
    }


}

export default EnvironmentFunctions
