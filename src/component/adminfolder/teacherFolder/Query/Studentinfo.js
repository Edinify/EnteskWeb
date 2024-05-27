import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateComment } from "../../../../reducer/crmRedux/action";
import Moment from 'react-moment';



const Studentinfo = ({ studentData }) => {
  const [comment, setComment] = useState({
    comment: "",
    id: "",
  });
  const dispatch = useDispatch();
  
  const { class_Name, date, StudentsArray, _id, class_Comment } = studentData[0];

  useEffect(() => {
    setComment({
      ...comment,
      id: _id,
    });
  }, []);

  const lessonDate = new Date(date);
  
  return (
    <article className="student_info">
      <div className="card">
        <div className="card-header">Student info</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Name : </b> 
            {
              StudentsArray.map((student,i) =>{
                const {name} = student
                return(
                  <b key={i} > {name}, </b>
                )
              })
            }
          </li>
          <li className="list-group-item">
            {" "}
            <b>time: </b>
            <Moment format="HH:mm ">{date}</Moment>
          </li>
          <li className="list-group-item">
            {" "}
            <b>Class Name: </b> <p> {class_Name} </p>{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Class Info: </b> <p> {class_Comment} </p>{" "}
          </li>
        </ul>
      </div>
      <form>
        <input
          type="text"
          placeholder="Write comment"
          value={comment.comment}
          maxLength="50"
          onChange={(e) => {
            setComment({ ...comment, comment: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(CreateComment(comment));
            setComment({...comment, comment:""})
          }}
        >
          add comment
        </button>
      </form>
    </article>
  );
};

export default Studentinfo;
