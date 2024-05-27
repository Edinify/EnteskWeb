import React,{useState,useEffect} from 'react'
import Moment from 'react-moment';

const ClassList = ({
  table, 
  boolean,
  searchByDateForTeacher,
  dispatch,
  count,
  Query,
  setQuery,
  Calculate
}) => {
  const [CountDate, setCountDate] = useState(0)
  useEffect(() => {
    if(Query.skip === 1){
      setCountDate(count) 
    }
    if(Query.state === 1){
      dispatch(Calculate(Query))
      console.log(Query)
    }
    if(Query.state !== 1){
      dispatch(searchByDateForTeacher(Query))
      console.log(Query)
    }
    
  }, [Query.skip])

    const [tables, setTables] = useState([
    ]);

    useEffect(() => {
      const sortedAndUniqueTables = table
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .reduce((acc, table) => {
          if (!acc.some(item => item.name === table.name && item.date === table.date)) {
            acc.push(table);
          }
          return acc;
        }, []);
      setTables(sortedAndUniqueTables);
    }, [table]);

  return (
    <article>
      <h1> class list </h1>
      {
        boolean && (
          <p> {count} </p>
        )
      }
      <table>
            <tbody>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>date</th>
            <th>Class Name</th>
            <th>Class State</th>
            <th>Class Information</th>
          </tr>
        {
          (tables.map((data,i) =>{
            
            const {StudentsArray,date,class_Name,_id,table_State,class_Comment} = data
            const lessonDate = new Date(date)
            return(
              <tr key={i} >
                <td> 
                  {
                    StudentsArray.map((student,i) =>{
                      const {student_Name} = student
                      return(
                        <b key={i} > {student_Name}, </b>
                      )
                    })
                  } 
                </td>
                <td> <Moment format="HH:mm " utc>{date}</Moment> </td>
                <td> {lessonDate.getMonth().toString().length === 1 ? `0${lessonDate.getMonth() + 1}` :  lessonDate.getMonth() + 1}/
                        {lessonDate.getDate().toString().length === 1 ? `0${lessonDate.getDate()}` :  lessonDate.getDate()}  </td>
                <td> {class_Name} </td>
                <td> {table_State === 1 ? 
                <b style={{color:"green"}}>Təsdiq olunmuş</b> : <b style={{color:"red"}}>ləğv olunmuş</b> }  </td>
                <td> {class_Comment} </td>
              </tr>
            )
          })) 
        }
            </tbody>
      </table>


      <div className="mobile-box">
              {
                table.length > 0 && (
                  table.map((data,i) =>{
                    table.sort( function(a, b) {
                      return a.date.localeCompare(b.date);
                    })
                    const {student_Name,date,class_Name,_id,table_State,class_Comment} = data
                    const lessonDate = new Date(date)

                    return(
                      <div key={i}> 
                        <p> <b> Name : </b>   {student_Name} </p>
                        <p> <b> Time : </b> {`${lessonDate.getHours().toString().length === 1 ? `0${lessonDate.getHours()}`:`${lessonDate.getHours()}`}
                          :${lessonDate.getUTCMinutes().toString().length === 1 ? `0${lessonDate.getUTCMinutes()}`:`${lessonDate.getUTCMinutes()}`}`} </p>
                        <p> <b> date : </b> {lessonDate.getMonth().toString().length === 1 ? `0${lessonDate.getMonth() + 1}` :  lessonDate.getMonth() + 1}/
                          {lessonDate.getDate().toString().length === 1 ? `0${lessonDate.getDate()}` :  lessonDate.getDate()} </p>
                        <p> <b> Class Name : </b> {class_Name} </p>
                        <p> {table_State === 1 ? 
                          <b style={{color:"green"}}>Təsdiq olunmuş</b> : <b style={{color:"red"}}>ləğv olunmuş</b> }  </p>
                          <p> <b>Class Information : </b>  {class_Comment} </p>
                      </div>
                    )
                  })
                )
              }

            </div>
          {
            CountDate >= 6 &&
              <button 
              onClick={(e) =>{
                setQuery({
                  ...Query, 
                  skip:Query.skip + 1
                })
                setCountDate(CountDate - 5)
              }}
              >
                next
              </button>
          }
          {
            Query.skip !== 1 && <button 
              onClick={(e) =>{
                setQuery({
                  ...Query, 
                  skip:Query.skip - 1
                })
                setCountDate(CountDate + 5)
              }}
              >
                prev
              </button>
          }

    </article>
  )
}

export default ClassList