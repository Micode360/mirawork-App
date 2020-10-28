import React, {createContext, useState} from 'react';
import uuid from 'react-uuid'

export const Data = createContext();

function Randomworld(props) {
  console.log(props, 'from props');
  const [person, inputData] = useState([
    {name:"Sam Tanayaki", region:"Okahoma Region", id:uuid()},
    {name:"Tina Saboya", region:"Indian Region", id:uuid()},
    {name:"Conan Hamilton", region:"Greens Region", id:uuid()},
  ]);

  const putData = (text, location) =>{
    inputData([...person, {name: text, region: location, id:uuid()}]);
  }


  return (
      <div>
      <Data.Provider value={{person, putData}}>
        {props.children}
      </Data.Provider>
      </div>
  );
}

export default Randomworld;