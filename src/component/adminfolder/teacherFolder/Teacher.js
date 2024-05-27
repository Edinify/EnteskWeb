import React, {useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import {GetTeacherTable,CreateComment} from '../../../reducer/crmRedux/action';
import './teacher.css'
import {useSpring, animated } from 'react-spring'
import Query from './Query/Query';
import Calendar from './calendar/Calendar';
import FinishedClass from './ClassFolder/FinishedClass';
import Swal from 'sweetalert2'

const Teacher = () => {
  const [id, setId] = useState(10);
  const [Display, setDisplay] = useState(false)
  const [Return, setReturn] = useState(0)
  const profile = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  // get teacher data
  // useEffect(() => {
  //   dispatch(GetTeacherTable(profile.superAdmin._id))
  // }, [])

  const [div, setDiv] = useState(10)
  const container = useSpring({
		to: [{height: div < 10  ? '500px' : '50px' }],
		from: {height: '50px'},
    config: {
			duration: 500
		}
	})

  const containers = useSpring({
		to: [{height: div === 10  ? '60px' : '0px',
     border: div === 10  ? "1px solid blue" :  "0px solid blue"}],
		from: {height: '0px', border: "0px solid blue" },
    config: {
			duration: 500
		}
	})

  const text = useSpring({
		to: [{opacity: div === 10  ? '1' : '0',}],
		from: {opacity: '0'},
    config: {
			duration: 300
		}
	})


  const btn = useSpring({
		to: [{opacity: div === 10  ? '0' : '1',}],
		from: {opacity: '0'},
    config: {
			duration: 300
		}
	})

  const component = [
    {
      name:'My schedule',
      className:'Schedule'
    },
    {
      name:'My Calendar',
      className:'Calendar'
    },
    {
      name:'My Finished Classes',
      className:'Classes'
    },
  ]


  useEffect(() => {
    setTimeout(() => {
      setDisplay(true)
    },2000 );
    if(!Display){
      Swal.fire({
        color:"green",
        text: `Welcome Dear ${profile.superAdmin.name} Teacher `,
        timer:1900,
        icon: 'info',
        showConfirmButton: false,
      })
    }
  }, [])
  

  
  return (
    <>
    {
      Display ? (
        <div className="container main-teacher-page ">
        <div className="container-fluid">
          <div className="row">
            {
              component.map((div, i) =>{
                  const {name,className} = div

                  return(
                    <div  key={i}  className={`col-md-4 teacher-menu `}>
                      <animated.div style={containers}  onClick={() => setDiv(i)}>
                        <animated.p style={text} > {name} </animated.p> 
                      </animated.div>
                    </div>
                  )
              })
            }
            <div className="col-md-12">
              <animated.div style={container} className="infoComponent">
                {
                   Return === 0  ? 
                  (
                    < animated.button style={btn}  onClick={() => setDiv(10)} className='close'>
                        x
                    </animated.button>
                  ): 
                  (
                    <span 
                      onClick={() =>  Return === 2 ? setReturn(Return - 2):setReturn(Return - 1) }  > 
                      &#9664;
                    </span>
                  )
                }
              {
                div === 0 ? (
                  <Query ReturnParms={{Return, setReturn}} />
                ):div === 1 ? (
                  <Calendar  />
                ): div === 2 ?(
                  <FinishedClass ReturnParms={{Return, setReturn}} />
                ):(
                  <></>
                )
              }

              </animated.div>
            </div>
          </div>
        </div>
      </div>
      ) :(
        <></>
      )
    }
      
    </>
  )
}

export default Teacher
