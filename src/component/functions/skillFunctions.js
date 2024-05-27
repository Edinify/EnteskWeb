import {useSpring} from 'react-spring'
import { useEffect,useRef } from 'react'
import GetDimension from './getDimension'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 150)
const SkillFunctions = (
  location,
	locationId,
	name
) =>{

  
  const {screenSize} =GetDimension()
  const { innerWidth: width} = window;
  const myRef = useRef(null)


  const executeScroll = () => scrollToRef(myRef)

	useEffect(() => {
    //  console.log(location)
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
to: [{ 
left:location ? location.name === 'fromEnvironment'? 
'0%': '0%' : '0%' ,

top: width <= 768 ? '37px' : '117px'
 }],


from: { left: location ?
  location.name === 'fromEnvironment'? 
  '50%' : '0%' : '25%',

top: width <= 768 ? 
location ? 
location.name === 'fromEnvironment'? 
'-50px' : '37px' : '37px'  :  location ?
location.name === 'fromEnvironment'? 
'-100px' : '117px' : locationId ?  
  locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
},
config: {
  duration: 500
}
})

// brush animation --------------

const brushimg = useSpring({
to: [{top: '5%', right: '50%' }],


from: {
top: locationId ? locationId.id === 'fromNav-skill'? '0%' : '0%' : 
location ? location.name === name?  '0%' : '25%' : '25%' ,


right: location ? location.name === 'fromEnvironment'?
'0%' : location.name === name? '41%' : '-5%' : locationId ? locationId.id === 'fromNav-skill'? 
'41%' : '0%'  : '23%' },


config: {
  duration: 500
}
})

// Gear animation --------------

const gearimg= useSpring({
  to: [{ 
    right:location ? 
    location.name === 'fromEnvironment'? 
    '0%' : '0%': '0%',


    top: width <= 768 ?
    location ? location.name === 'fromEnvironment'? 
    '37px' : '37px' : '37px' : location ?
    location.name === 'fromEnvironment'? 
    '117px' : '117px' : '117px'
  }],
  from: { 
    right:  location ? 
    location.name === 'fromEnvironment' ? 
    '100%' : '50%' : '50%' ,



    top: width <= 768 ?
    location ? location.name === 'fromEnvironment'? 
    '37px' : '-97px' : '37px' : location ? 
    location.name === 'fromEnvironment'? 
    '117px' : '-117px' : locationId ?  
    locationId.id === 'fromNav-technology' ? '-80px' : '-80px' : '117px'
   },
config: {
  duration: 500
}
})

  return{
    gearimg,
    brushimg,
    leafimg,
    container,
    executeScroll
  }
}

export default SkillFunctions