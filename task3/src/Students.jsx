import { Link } from "react-router-dom";

function Students(props){
  const array = props.students;
  return(
    <main>
      <section className="page-heading">
        <div>
          <p className="eyebrow">A collection of curious minds</p>
          <h1>Meet the <em>people</em> behind the progress.</h1>
        </div>
        <p className="heading-note">A considered look at our student community, their disciplines, and the work they are building next.</p>
      </section>
      <section className="student-grid">
        {
          array.map((student)=>{
            return (
              <article className="student-card" key={student.id}>
                <div>
                  <span className="card-number">{String(student.id).padStart(2, '0')}</span>
                  <h2>{student.name}</h2>
                  <p className="course">{student.course}</p>
                </div>
                <div>
                  <div className="card-meta">
                    <span>Year {student.year}</span>
                    <span>{student.marks}% marks</span>
                  </div>
                  <Link className="card-link" to={`${student.id}`}>View profile <span>↗</span></Link>
                </div>
              </article>
            )
          })
        }
      </section>
    </main>
  )
}

export default Students;