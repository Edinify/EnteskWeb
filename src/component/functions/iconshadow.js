import React from 'react'
import {useSpring,} from 'react-spring'
import HomeFunctions from './homeFunctions'

const  Iconshadow =() => {
  
  const {openSide,location,width} = HomeFunctions()

  const leafshadow = useSpring({
    to:[{	zIndex:openSide? 3: 0,
      left: width <= 767 && width >= 600 ?
          location? 
          openSide? '37%' : '30%' : openSide? '30%' : '37%': 
           width <= 600 && width >= 430 ? location? 
          openSide? '36%' : '30%' : openSide? '30%' : '36%':
          width <= 430 ? 
          location? 
          openSide? '33%' : '30%' : openSide? '30%' : '33%':
          location? 
          openSide? '39%' : '30%' : openSide? '30%' : '39%',
      
          top: width <= 991 && width >= 768 ? location? 
          openSide ? '55%' : '24%' : 
          openSide ? '24%' : '55%' :
          width >= 400 && width <= 767 ?  location ?
          openSide ? '51%' : '35%' : 
          openSide ? '35%' : '51%' :
          width <= 400 ? location ? 
          openSide ? '50%' : '35%' : 
          openSide ? '35%' : '50%' :
          location ?
          openSide ? '55%' : '30%' : 
          openSide ? '30%' : '55%' ,

          width: width <= 700 && width >= 600?  
          location? 
          openSide ? '10%': '15%' : openSide ? '15%' : '10%' :
          width <= 600 && width >= 430?
          location? 
          openSide ? '12%': '15%' : openSide ? '15%' : '12%':
          width <= 429 ? 
          location?
          openSide ? '13%': '15%' : openSide ? '15%' : '13%':
          location ?
          openSide ? '8%': '15%' : openSide ? '15%' : '8%',
          
        }],
    from:{left: location? 
          location.name === 'fromNavication' ? 
          '30%' : location.name === 'fromTechnology' ?
          '0%' : location.name ==="fromEnvironment" ?  
          "50%" : location.name === 'fromSkill'? 
          '0%' : '30%' : '30%',

          top: location? location.name === 'fromNavication' ? 
          "-50%" : location.name === 'fromEnvironment' ? 
          '-15%' : '30%' :  '30%',
          width: '15%'},
    config: {
        duration: 500
      }
    })

    return{
      leafshadow
    }
}

export default Iconshadow
