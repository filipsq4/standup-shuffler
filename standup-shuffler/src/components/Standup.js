import React, { useState } from "react";

function Standup() {
  const memberArr = [[
    "Julia Joachimowicz",
    "Emma Mallon",
    "Jen Grajkowski",
    "Jennifer Guo",
    "Luis Díaz",
    "Julianna Hindemith",
    "Eduardo Arrangóiz",
  ],[
    "Abner Rojas",
    "Augusto Pavía Rosas",
    "Cesar Villegas",
    "Michael Li",
    "Jéssica Motta",
    "Kathryn Robertson",
    "Marcos Herrera",
    "Shaun Seeram",
    "Enrique Lozano",
    "Filip Swierczynski",
    "Joao Dantas",
    "Robert Ling",
  ]];


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
  }

  

  React.useEffect(() => {
   shuffleArray(memberArr[0]);
    shuffleArray(memberArr[1]);  
    
  }, []);

  

 

  const [index, setIndex] = useState(0);
  const [arrIndex,setArrIndex] = useState(0);
  const [buttonStatus,setButtonStatus] = useState(false)

  let displayMember = (arr, index, arrIndex) => {
    console.log('test',arr[arrIndex][index])

    if(index < arr[arrIndex].length){
        return arr[arrIndex][index];
    } else {
        setIndex(0)
        setArrIndex(1);
        setButtonStatus(true);
        console.log('reset index')
    } 

  };

  let displayUpNext = () => {

  }

  let nextMember = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  
  return (
    <div>
      <p>Standup</p>

      {index <= memberArr[arrIndex].length ? displayMember(memberArr, index,arrIndex) : ""}
      

      <button disabled={buttonStatus} type="button" onClick={nextMember}>
        Next
      </button>
    </div>
  );
}

export default Standup;
