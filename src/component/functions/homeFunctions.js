import react, {useState,useRef, useEffect} from 'react'
import {useSpring, } from 'react-spring'
import GetDimension from './getDimension'

const HomeFunctions = (props) =>{
  const {location} = props
  const myRef = useRef(null)
  const [openSide, setopenSide ] = useState(false);
  const { innerWidth: width} = window;
  // getDimension screen for responsive

	const {screenSize} = GetDimension()
  // scroll 

  const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
			const position = window.pageYOffset;
			setScrollPosition(position);
	};

// handlerSide functions for banner elements 

const handlerSide = function(props){
  if(openSide === false){
    setopenSide(true)
  }else{
    setopenSide(false)
  }
}

window.addEventListener('scroll', handleScroll)


useEffect(() => {
  scrollPosition >= 5 ? setopenSide(true) : setopenSide(false)  
}, [scrollPosition])

  // container height animation------------------

	const container = useSpring({
		to: [{height: screenSize.dynamicWidth <= 2300 && screenSize.dynamicWidth >= 1800 ?
				"900px"	:	screenSize.dynamicWidth <= 1800 && screenSize.dynamicWidth >= 1400 ?
			 	"700px" : screenSize.dynamicWidth <= 991 && screenSize.dynamicWidth >= 768 ?
			  "500px" : screenSize.dynamicWidth >= 390 && screenSize.dynamicWidth <= 768 ? 
				"300px" : screenSize.dynamicWidth <= 390 ? "240px" : "550px"  ,

				zIndex: location? openSide? -5 : 0 : openSide? 0 : -5
				}],

		from: {
			height: screenSize.dynamicWidth === 767 ?
			location ? "400px" :'550px':
			location ? "400px" :'550px',
			}
	})

  // banner text animation -------------------------



	const bannerStyleText = useSpring({
		to: [{
			top: width >= 1800 && width <= 2300 ? location ?
			openSide? '44.5rem' : '8rem' : 
			openSide? '8rem' : '44.5rem' :
			width >= 1400 && width <= 1800 ? location ?
			openSide? '34.5rem' : '8rem' : 
			openSide? '8rem' : '34.5rem' :
			width <= 991 && width >= 769 ? location ?
			openSide? '23rem' : '4.9rem' : 
			openSide? '4.9rem' : '23rem' :
			width <= 769 &&  width >= 600 ? 
			location ?
			openSide? '14.5rem' : '4rem' :
			openSide? '4rem' : '14.5rem': 
			width <= 600 &&  width >= 450 ?  location ?
			openSide? '14.5rem' : '4rem' : 
			openSide? '4rem' : '14.5rem' :
			width <= 450 && width >= 389 ? location ? 
			openSide? '14rem' : '3.7rem' : 
			openSide? '3.7rem' : '14rem' :
			width <= 389 ? location ? 
			openSide? '11.2rem' : '3.6rem' : 
			openSide? '3.6rem' : '11.2rem' :
			location ? 
			openSide? '26.5rem' : '6.5rem' : 
			openSide? '6.5rem' : '26.5rem' ,

			fontSize: width >= 1400 && width <= 1800 ?
			location ? 
			openSide? '2.1vw' : '1.1vw' :
			openSide? '1.1vw' : '2.1vw':
			width <= 991 && width >= 769 ? 
			location ? 
			openSide? '2.1vw' : '1.5vw' :
			openSide? '1.5vw' : '2.1vw': 
			width <= 768 &&  width >= 600 ? 
			location ?
			openSide? '2.4vw' : '1.4vw' :
			openSide? '1.4vw' : '2.4vw': 
			width <= 600 && width >= 450 ? 
			location ? 
			openSide? '2.7vw' : '2.1vw':
			openSide? '2.1vw' : '2.7vw':
			width <= 450 ?
			location ? 
			openSide? '3.1vw' : '2.2vw':
			openSide? '2.2vw' : '3.1vw':
			location ? 
			openSide? '2.1vw' : '1.1vw':
			openSide? '1.1vw' : '2.1vw' ,

			

		}],
		from: { 
				top: '30rem',
			 	fontSize: '1.1vw',
				},
		config: {
			duration: 500
		}
	})

	// paraggraph text animation --------------

	const paragraphtxt = useSpring({
		to:[{
			marginLeft: width >= 1400 && width <= 1800 ?location?  
			openSide? "1.3rem" : "0.6rem" :
			openSide? "0.6rem" : "1.3rem" :
			width >= 1199 && width <= 1400 ?location?  
			openSide? "1.2rem" : "0.6rem" :
			openSide? "0.6rem" : "1.2rem":
			openSide? "0.6rem" : "0.8rem" ,

			
			marginRight: width >= 1400 && width <= 1800 ?location?  
			openSide? "1.3rem" : "0.6rem" :
			openSide? "0.6rem" : "1.3rem" :
			width >= 1199 && width <= 1400 ?location?  
			openSide? "1.2rem" : "0.6rem" :
			openSide? "0.6rem" : "1.2rem":
			openSide? "0.6rem" : "0.8rem" ,
		}],

		from:{
			marginLeft:"0px" ,
			marginRight:"0px",
		},
		config: {
			duration: 500
		}
	})

  // banner style animation------------------------------

	const bannerStyleLogo = useSpring({
		to:[{	top: width <= 991 && width >= 768 ? location?
					openSide? '8%' : '-25%' : 
					openSide? '-25%' : '8%' :
					width <= 768 &&  width >= 390 ?
					location?
					openSide? '0%' : '-25%' : 
					openSide? '-25%' : '0%' :
					width <= 390 ? location?
					openSide? '0%' : '-20%' : 
					openSide? '-20%' : '0%' :
					location?
					openSide? '5%' : '-29%' : 
					openSide? '-29%' : '5%' ,

					paddingTop: location? openSide? '30px' : '0px': openSide? '0px' : '30px' ,
				}],
	from:{	top: location? '-60%' : '0%',
					paddingTop: '20px'},

		config: {
			duration: 500
		}
	})

  // leaf img animation----------------------------------

	const leafimg = useSpring({
		to:[{	
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


  // brush img animation --------------------

	const brushimg = useSpring({
		to:[{left: width <= 767 && width >= 600 ?
					location? 
					openSide? '63%' : '70%' : openSide? '70%' : '63%':
					width <= 600 && width >= 430 ?
					location? 
					openSide? '64%' : '70%' : openSide? '70%' : '64%':
					width <= 430?
					location? 
					openSide? '67%' : '70%' : openSide? '70%' : '67%':
					location?
					openSide? '61%' : '70%' : openSide? '70%' : '61%',

			
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
				openSide ? '8%': '15%' : openSide ? '15%' : '8%'
		}],
			from: {left: location? 	
			location.name === 'fromNavication' ?
			'70%' : location.name === 'fromEnvironment'?
			'100%' : location.name === 'fromTechnology' ? 
			'100%' : location.name === 'fromSkill'? 
			'50%' : '70%' : '70%',


			top: location? location.name === 'fromNavication' ? 
					"-50%" : location.name === 'fromSkill' ? 
					'-15%' : '30%' :  '30%',
					width: '15%'
				},
			config: {
				duration: 500
			}
		})

  //  circle img animation -----------------------

	const circleimg = useSpring({
		to:[{left: '50%',
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
				openSide ? '8%': '15%' : openSide ? '15%' : '8%'
			}],
				from: {left: location? 
				location.name === 'fromNavication' ?
				'50%' : location.name === 'fromTechnology' ?
				'50%' :  location.name === 'fromEnvironment'? 
				'0%' : location.name === 'fromSkill'? 
				'100%' : '50%' :  '50%',


				top: location? location.name === 'fromNavication' ? 
				"-50%" : location.name === 'fromTechnology' ? 
				'-15%' : '30%' :  '30%',
				width: '15%'
			},
			config: {
				duration: 500
			}
		})

  // scroll for section

	function scrollTop() {
		window.scrollTo(0, 0 )
	}

  useEffect(() => {
    location ? location.name === "toAbout" ?
    window.scrollTo(0, myRef.current.offsetTop ) : 
    location.name === "fromKSM" ?
    window.scrollTo(0, myRef.current.offsetTop ) : 
    location.name === "fromproducts" ? 
    window.scrollTo(0, myRef.current.offsetTop ) :
    window.scrollTo(0, 0):
    window.scrollTo(0, 0 )
  }, [location] );


	
  

  return {
    myRef, 
    scrollPosition,
    handleScroll,
    openSide,
    setopenSide,
    handlerSide,
    container,
    bannerStyleText,
    bannerStyleLogo,
    leafimg,
    brushimg,
    circleimg,
		paragraphtxt,
		scrollTop,
		location,
		openSide,
		width
  }
}

export default HomeFunctions
