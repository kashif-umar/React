function Details(props){
    return(
       <div className="Details">
          <dl>
            <dt>{props.name}</dt>
            <dd>{props.position}</dd>
            <p>{props.salary}</p>
          </dl>
       </div>
    );
}
export default Details;