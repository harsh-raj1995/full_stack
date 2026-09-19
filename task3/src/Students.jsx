import { Link } from "react-router-dom";

function Students(props){
  const array = props.students;
  return(
    <>
    <h1>Students Page</h1>
    {
      array.map((student)=>{
        return (
          <div className="card" key={student.id}>
            {student.name}
            <Link to={`${student.id}`}>Tap to View more details</Link>
          </div>
        )
      })
    }
    </>
  )
}

export default Students;