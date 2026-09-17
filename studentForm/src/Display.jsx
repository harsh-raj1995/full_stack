function Display(props){
  if(props.data.name==""){
    return(
      <>
      <h3>Display Board</h3>
      <h4>No Data is inserted Yet</h4>
      </>
    )
  }else{
    return(
      <>
        <h3>Display Board</h3>
        <p>Name: {props.data.name}</p>
        <p>Email: {props.data.email}</p>
        <p>Course: {props.data.course}</p>
        <p>Phone: {props.data.phone}</p>
      </>
    )
  }
}
export default Display