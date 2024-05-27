import React from 'react'
import {useSpring, animated} from 'react-spring'
import circle from '../images/circle.png'
import leaf from '../images/leaf.png'
import brush from '../images/brush.png'
import Toggle from './toggl'

const Circular = () => {
  const leafStyles = useSpring({
    
    to: [
      { opacity: 0.1,  },
      { opacity: 0.5,  },
      { opacity: 1  },
    ],
    from: { opacity: 0.1,  },
    delay: 500,
    config :{
      duration: 1000
    }
  })

  const gearStyles = useSpring({
    
    to: [
      { opacity: 0.1,  },
      { opacity: 0.5,  },
      { opacity: 1  },
    ],
    from: { opacity: 0,  },
    delay: 1500,
    config :{
      duration: 1000
    },
  })

  const brushStyles = useSpring({
    
    to: [
      { opacity: 0.1,  },
      { opacity: 0.5,  },
      { opacity: 1  },
    ],
    from: { opacity: 0,  },
    delay: 2500,
    config :{
      duration: 1000
    }
  })
  
  return (
    <div className='container'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 text-center '>
          <div className='loading'>
          <div className='loading-text'>
            <animated.div style={leafStyles} >
              <p>
                Environment
              </p>
              </animated.div>
            <animated.div style={gearStyles} > <p>Technology</p> </animated.div>
            <animated.div style={brushStyles} > <p>Skills</p>  </animated.div>
          </div> 
            
            < div  className='loading-img'>
              {/* <Toggle /> */}
              < animated.img style={leafStyles} src={leaf} alt="img"></animated.img>
              < animated.img style={gearStyles} src={circle} alt="img"></animated.img>
              < animated.img style={brushStyles} src={brush} alt="img"></animated.img>
            </ div>

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Circular
