function Display(props){
  if(props.data.name==""){
    return(
      <section className="students-panel" id="students" aria-labelledby="students-title">
        <div className="section-heading">
          <p className="card-number">02</p>
          <h2 id="students-title">Student directory</h2>
        </div>
        <div className="empty-state">Your first student profile will appear here.</div>
      </section>
    )
  }else{
    return(
      <section className="students-panel" id="students" aria-labelledby="students-title">
        <div className="section-heading">
          <p className="card-number">02</p>
          <h2 id="students-title">Student directory</h2>
        </div>
        <article className="student-card">
          <span className="accent-dot" aria-hidden="true"></span>
          <p className="student-index">01</p>
          <h3>{props.data.name}</h3>
          <p className="student-course">{props.data.course}</p>
          <dl>
            <div><dt>Email</dt><dd>{props.data.email}</dd></div>
            <div><dt>Phone</dt><dd>{props.data.phone}</dd></div>
          </dl>
        </article>
      </section>
    )
  }
}
export default Display