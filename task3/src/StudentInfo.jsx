import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function StudentInfo(props){
  const { id } = useParams();
  const [name,SetName] = useState("yo");
  const arr= props.students;
  const student = arr.find((student)=>student.id === parseInt(id));
  
  useEffect(()=>{
    if (student) {
      SetName(student.name);
    }
  }, [id]);

  return(
    <main className="detail-page">
      <p className="detail-label">Student profile / {String(id).padStart(2, '0')}</p>
      <h1>{name} <em>in focus.</em></h1>
      {student && (
        <>
          <p className="detail-intro">Currently studying {student.course}, {name} is part of a thoughtful community learning through practice, collaboration, and ambitious ideas.</p>
          <div className="detail-stats">
            <div className="detail-stat"><strong>{student.age}</strong><span>Years old</span></div>
            <div className="detail-stat"><strong>{student.year}</strong><span>Current year</span></div>
            <div className="detail-stat"><strong>{student.marks}%</strong><span>Latest marks</span></div>
          </div>
        </>
      )}
    </main>
  )
}

export default StudentInfo;