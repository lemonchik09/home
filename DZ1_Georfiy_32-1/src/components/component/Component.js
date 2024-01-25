import React from 'react';
import classes from './component.module.css';


const Component = ( {text} ) => {

  return (
    <div className={classes.component}>
      <h1>
        {text}
      </h1>
    </div>
  );
};

export default Component;


// const user= {
//   name: "Bakyt",
//   age: 18
// }
//
// const {name} = user
//
// console.log(name);