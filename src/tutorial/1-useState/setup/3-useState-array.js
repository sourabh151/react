import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data);
  const deletePerson = (id)=>{
    setPeople(people.filter((person)=>{
      if(id === person.id){
        return false;
      }
      return true;
    }))
  }
  return (
    <>
      {
        people.map((person)=>{
          const {id,name} = person;
          return (
            <div key = {id} className = "item">
              <h4>
                {name}
              </h4>
            {/*cant pass arguments with handler because it gets called
            rather wrap inside another arrow function*/}
              <button type = "button" onClick = {()=>{deletePerson(id)}} className = "btn">
                remove
              </button>
            </div>
            )
        })
      }
      <button type = "button" onClick = {()=>{setPeople([])}} className = "btn">
        Clear Items
      </button>
    </>
    );
};

export default UseStateArray;
