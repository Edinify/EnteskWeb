import React,{useState,useRef,useEffect} from 'react'
import img1 from './metaImg/image1.png';
import img2 from './metaImg/image2.png';
import img3 from './metaImg/image3.png';
import {useSpring,animated} from 'react-spring';

const SectionTwo = () => {
  const [Scroll, getScroll] = useState('')  



  const [opacity, setOpacity] = useState(0);
  const myref = useRef(null);
  // cons
  useEffect(() => {
    if(myref.current){
      getScroll(myref.current.offsetTop)
      // 
    }
  }, [])
  

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        // console.log(Scroll)
    };


  window.addEventListener('scroll', handleScroll)

    
    

  const Animation = useSpring({
		to: [{ 
      opacity: Scroll - 300 < scrollPosition ? 1 : 0,
      height: Scroll - 300 < scrollPosition ? "450px": '0px'
    }],
		from: {
      opacity: 0,
      height: "0px"
      },
    config: {
      duration: 1000
    }
	});
  

  return (
    <article className='section-Two' ref={myref}> 
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 ">
              <animated.div className="metatesk-box " >
                
                <div className="img-div">
                  <img src={img2} alt="" />
                </div>
                <p>Anytime, Anywhere</p>
                <p>join the classes</p>
              </animated.div>


            </div>
            
            <div className="col-md-4 ">
              <animated.div className="metatesk-box " >
              <div className="img-div">
                  <img src={img1} alt="" />
              </div>
                <p>Interact</p>
                <p>with other users  in virtual world</p>
              </animated.div>
            </div>

            <div className="col-md-4 ">
              <animated.div className="metatesk-box " >
                <div className="img-div">
                  <img src={img3} alt="" />
                </div>
                <p>Entertain</p>
                <p>with gamified  engaging classes </p>
              </animated.div >
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionTwo