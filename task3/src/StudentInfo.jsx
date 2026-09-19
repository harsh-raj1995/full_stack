import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function StudentInfo(props){
  const { id } = useParams();
  const [name,SetName] = useState("yo");
  const arr= props.students;
  
  useEffect(()=>{
    const student = arr.find((student)=>student.id === parseInt(id));
    if (student) {
      SetName(student.name);
    }
  }, [id]);

  return(
    <>
    <h3>hi {id}:{name}</h3>
    </>
  )
}

export default StudentInfo;