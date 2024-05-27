import React,{useState,useEffect} from 'react'
import ClassList from './ClassList'
import { useSelector,useDispatch } from 'react-redux';
import { searchByDateForTeacher,Calculate } from '../../../../reducer/crmRedux/action';
import Swal from 'sweetalert2'

const FinishedClass = ({ReturnParms}) => {
  const [Query, setQuery] = useState({
    from:'',
    to:'',
    state:'',
    limit:'',
    skip:''
  })
  const {Return, setReturn} = ReturnParms
  const [boolean, setBoolean] = useState(false)


  const dispatch = useDispatch()
  const table = useSelector((state) => state.teachertable.table)
  const count = useSelector((state) => state.teachertable.count)

  
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })

  const search = (e) =>{
    e.preventDefault()
    if(Query.state === 1 && Query.from && Query.to){
      dispatch(Calculate(Query))
      setBoolean(true)
      setTimeout(() => {
        setReturn(Return + 1)
      }, 2000);
      
      Toast.fire({
        icon: 'success',
        title: 'Loading ...'
      })
    }else if(Query.from && Query.to) {
      dispatch(searchByDateForTeacher(Query))
      setBoolean(false)
      setTimeout(() => {
        setReturn(Return + 1)
      }, 2000);
      Toast.fire({
        icon: 'success',
        title: 'Loading ...'
      })
    } else  {
      Swal.fire({
        color:"red",
        text: "please complete form",
      })
    }
  }
// when return query 
  useEffect(() => {
    if(Return === 0){
      setQuery({
        ...Query,
        from:'',
        to:'',
      })
    }
  }, [Return])
  

  return (
    <article className='Finished-class-Section'>
      {
        Return >= 1 ? 
        (
          <ClassList 
            table={table}  
            boolean={boolean} 
            searchByDateForTeacher={searchByDateForTeacher}
            dispatch={dispatch}
            count={count}
            Query={Query}
            setQuery={setQuery}
            Calculate={Calculate}
          />
        ) : (
          <form action="">
            <p>Start Date</p>
            <input type="date" onChange={(e) => setQuery({
              ...Query,
              from: e.target.value,
              limit:5,
              skip:1
            }) } />
            <p>End Date</p>
            <input type="date" onChange={(e) => setQuery({
              ...Query ,to: e.target.value
            }) } />

            <button onClick={(e) => {
              search(e)
            } }>
              Query
            </button>
            
            <label htmlFor="state" onChange={(e) =>{
              if(e.target.checked){
                setQuery({
                  ...Query,
                  state:1
                })
              }else{
                setQuery({
                  ...Query,
                  state:''
                })
              }
            }}
            >
            calculate confirmed class: 
            <input type="checkbox"  id='state' 
              defaultChecked={Query.state === 1 && true} />
             </label>
          </form> 
        )
      }
    </article>
  )
}

export default FinishedClass