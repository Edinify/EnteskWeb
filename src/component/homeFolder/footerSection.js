import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDatabase, ref, set} from "firebase/database";
import uuid from 'react-uuid';
import insta from '../../images/saytisnta.png'
import swp from '../../images/saytwp.png'
import saytyoutube from '../../images/saytyoutube.png'
import saytfb from '../../images/saytfb.png'
import saytlinkedin from '../../images/saytlinkedin.png'
import tiktoksayt from '../../images/tiktoksayt.png'
import { send } from 'emailjs-com';
import { useAlert } from 'react-alert'

const FooterSection =(props) =>{
  const {scrollTop} = props
  const alert = useAlert()
  // console.log(props)
  const [subscribe, setSubscribe] = useState({
    email: "",
    error: 'example@gmail.com'
  })



  const time = new Date()
  
  
  function writeSubscribe(e){


    

    e.preventDefault()
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    

    if(re.test(subscribe.email)){
      alert.show(<div style={{ color: 'green' }}>Sizinlə əlaqə saxlanilacaq </div>)
      send(
        'service_n5lz3c9',
        'template_q5qpc7d',
        subscribe,
        'user_8z8JeLlj7Y36toehPZWQm'
        )
        setSubscribe({
        email: '',
        error: 'example@gmail.com'
        })
    }else{
      setSubscribe({
        error: '! invalid email'
      })
    }
    
    if(subscribe){
      const date = `${time.getFullYear()},${time.getMonth()+1},${time.getDate()},${time.getHours()}:${time.getMinutes()}:${time.getMilliseconds()}`
      const db = getDatabase();
      set(ref(db, 'subscribers/' + uuid()), {
      subscriber:subscribe,
      date:date
    });
    // setSubscribe('')
    }

  }


  return(
    <article className="footer-section">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6">
              <ul>
                <p>Keçidlər</p>
                <Link to='/' onClick={scrollTop}>
                  <li>
                    Ana Səhifə
                  </li>
                </Link >
                <Link to='/məhaullar'>
                  <li>
                    Tədris
                  </li>
                </Link >
                <Link to='/About'>
                  <li>
                    Haqqımızda
                  </li>
                </Link >
                <Link to={{
											pathname:'/',
											aboutProps:{
												name: 'toAbout'
											}
										}}>
                  <li>
                    Əlaqə
                  </li>
                </Link >
                {/* <Link to={{
											pathname:'/məhsullar',
											aboutProps:{
												name: ''
											}
										}}>
                  <li>
                    Məhsullar
                  </li>
                </Link > */}
              </ul>
            </div>  
            {/* kurslar */}
            <div className="col-md-3 col-sm-6 col-6 ">
              <ul>
                <p>Tədris</p>
                {
                  props.data.map((subject) =>{
                    const  {name, Category,id} = subject
                  return(
                    <Link key={id} 
                      to={{pathname:`${Category}/${name}`,
                    aboutProps:{
                      name: name,
                    }
                    }}>
                      <li>
                        {name}
                      </li>
                    </Link >
                    )
                  })
                }
              </ul>
            </div>
          {/* elaqe */}

          <div className="col-md-6">
            <div className="div-1">

              <ul>
                <p>Ünvan</p>
                <li>
                  Bakı ş. Yasamal r. 
                </li>
                <li>
                  A. M. Şərifzadə küç. 237 A 
                </li>
              </ul>
                <span>contact@enteskedu.com</span>
              
              <div className='subscribe' >
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    onChange={(e) =>{
                      setSubscribe({
                        ...subscribe, email: e.target.value
                      })
                    }} 
                    value={subscribe.email}
                    placeholder={subscribe.error}  required />
                </div>
                <button type="submit" onClick={writeSubscribe} > Abunə ol </button>
              </div>
                {
                  subscribe.error === '! invalid email' ? (
                    <p class='error' > ! email düzgün yazılmayıb </p>
                  ):
                  (
                    <p> </p>
                  )
                }

            </div>
              
              <div className="social-media">
                <p>
                  <span>
                    <img src={swp} alt="img" />
                  </span>
                  <a href="https://api.whatsapp.com/send?phone=994559450412" >
                    +994 55 945 04 12
                  </a>
                </p>
                <p>
                  <span>
                    <img src={insta} alt="img" />
                  </span>
                  <a href="https://www.instagram.com/enteskedu/" >
                  @enteskedu
                  </a>
                </p>
                <p>
                  <span>
                     <img src={saytfb} alt="img" />
                  </span>
                  <a href="https://www.facebook.com/enteskedu-103143677933426" >
                    @enteskedu
                  </a>
                </p>
                <p>
                  <span>
                     <img src={saytyoutube} alt="img" />
                  </span>
                  <a href="https://www.youtube.com/channel/UCML2-bEpQ6NFKMIYUew_LBQ" >
                    @enteskedu
                  </a>
                </p>
                <p>
                  <span>
                     <img src={tiktoksayt} alt="img" />
                  </span>
                  <a href="https://www.instagram.com/enteskedu/" >
                  @enteskedu
                  </a>
                </p>
                <p>
                  <span>
                     <img src={saytlinkedin} alt="img" />
                  </span>
                  <a href="https://www.instagram.com/enteskedu/" >
                  @enteskedu
                  </a>
                </p>

              </div>
              
              
          </div>



            <div className="col-md-12">
              <p>Entesk. Bütün hüquqlar qorunur. ©{time.getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FooterSection
