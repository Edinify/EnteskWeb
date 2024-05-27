import {useSpring} from 'react-spring'
import { useEffect,useRef } from 'react'
import GetDimension from './getDimension'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 150)
const TechnologyFunctions = (
  location,
	locationId,
	name
) =>{
  // console.log(locationId)
  const {screenSize} =GetDimension()
  const { innerWidth: width} = window;

  const myRef = useRef(null)
	const executeScroll = () => scrollToRef(myRef)
  useEffect(() => {
		// console.log(location)
		window.scrollTo(0, 0);
  	}, [location] );


  const container = useSpring({
    to: [{height: screenSize.dynamicWidth <= 768 && screenSize.dynamicWidth >= 480 ? location?  
    '250px' : '300px' : screenSize.dynamicWidth < 480 ? location?
    '200px' : '200px' :'400px' }],

    from: {height: screenSize.dynamicWidth <= 768 && screenSize.dynamicWidth > 480 ? location?  
    '250px' : '400px' : screenSize.dynamicWidth < 480 ? location? 
    '200px' : '400px' : location? '400px' : '550px'  }
  })

  // Leaf animation --------------

  const leafimg = useSpring({
		to: [{left: '0%',


					top:  width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'37px' : '37px' : '37px' :location ? 
					location.name === 'fromEnvironment' ?
					'117px' : '117px' : '117px'
			 	}],


		from: {left: location ?
					location.name === 'fromEnvironment' ? 	'50%' : '0%' : '33%',


					top:  width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'-37px' : '37px' : '37px' : location ? 
					location.name === 'fromEnvironment' ?
					'-117px' : '117px' : locationId ?  
				locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
				},
		config: {
			duration: 500
		}
		})

    // Gear animation --------------

  const gearimg   = useSpring({ 
    to: [{top: '5%', 
          left: location ? 
          location.name === 'fromEnvironment' ? 
          '50%' : '50%' : '50%'
        }],
    from: {top: locationId ? 
        locationId.id === 'fromNav-technology'? 
        '-0%': '0%' : location? location.name === name ? '0%' : '25%' :  '25%' ,


          left: location ? 
          location.name === 'fromEnvironment' ? 
          '0%' : location.name === name ? '50%' : '100%' : '50%' 
        },
    config: {
      duration: 500
    }
    })

    // brush animation --------------

		const brushimg = useSpring({
      to: [{right: location ? 
            location.name === 'fromEnvironment' ? 
            '0%' : '0%' : '0%',
  
            top:  width <= 768 ? location ? 
            location.name === 'fromEnvironment' ?
            '37px' : '37px' : '37px' :location ? 
            location.name === 'fromEnvironment' ?
            '117px' : '117px' : '117px'
          }],
  
      from: {right: location ? 
            location.name === 'fromEnvironment' ? 
            '0%' : '50%' : '30%' ,
          
            top: width <= 768 ? location ? 
            location.name === 'fromEnvironment' ?
            '37px' :  '-110px' : '37px' : location ? 
            location.name === 'fromEnvironment' ?
            '117px' : '-110px' : locationId ?  
            locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
            },
        config: {
          duration: 500,
        }
      })


  return {
    container,
    leafimg,
    gearimg,
    brushimg,
    executeScroll,
    myRef
  }
}

export default TechnologyFunctions