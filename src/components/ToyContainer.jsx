import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map((toy)=><ToyCard  toy={toy} onDelete={props.onDelete} onLikes={props.onLikes}/>)}
    </div>
  );
}

export default ToyContainer;
