import React, { useState } from "react";
import dmh from "../assets/dmh.png";
import "../styles.css";
const imArr = [
  "Julia Joachimowicz",
  "Emma Mallon",
  "Jen Grajkowski",
  "Jennifer Guo",
  "Luis Díaz",
  "Julianna Hindemith",
  "Eduardo Arrangóiz",
];

const devArr = [
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
];

function fyShuffle(arr) {
  let i = arr.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
  }
  return arr;
}

let shuffledIM = fyShuffle(imArr);
let shuffledDev = fyShuffle(devArr);
let combinedShuffled = shuffledIM.concat(shuffledDev);

function Standup() {
  const [imArr, setImArr] = useState(shuffledIM);
  const [index, setIndex] = useState(0);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [showList, setShowList] = useState(false);
  const [allMembers,setAllMembers] = useState(combinedShuffled);

  let displayMember = (arr, index) => {
    console.log("test", arr[index]);
    if (index < arr.length) {
      return arr[index];
    } else {
      setButtonStatus(true);
    }
  };

  let nextMember = (index) => {
    setIndex((prevIndex) => prevIndex + 1);

    removeElement(index);
  };

  const removeElement = (index) => {
    const newImList = imArr.filter((_, i) => i !== index);
    setImArr(newImList);
  };

  const startStandup = () => {
    setShowList(!showList);
  };

  const removeMember = (member) => {
    setAllMembers(allMembers.filter(el => el !== member));
  }


  return (
    <div
      className={showList ? "standup_container" : "standup_container center"}
    >
      <div className="person_list">
        <div className={showList ? "" : ""}>
          <div class="order_list_container">
            <div className="order_list ">
              <h2>IM/IS/IC </h2>
              <h3>Order List :</h3>
              {imArr.map((member, index) => (
                <li
                onClick={removeMember}
                  key={index}
                  className={
                    member !== displayMember(allMembers, index)
                      ? "test"
                      : ""
                  }
                >
                  {member}
                </li>
              ))}
            </div>

            <div className="order_list ">
              <h2>Dev/Content/QA </h2>
              <h3>Order List :</h3>
              {devArr.map((member, index) => (
                <li  key={index}>{member}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="current_speaker_container">
        <div className="diamon_hands_icon">
          
          <img src={dmh} alt="diamond hands" />
        </div>
        <button
          type="button"
          onClick={startStandup}
          className={!showList ? "visible button start_button" : "hidden"}
        >
          Start standup
        </button>

        <div className={showList ? "current_speaker" : "hidden"}>
          <h2>
            {index < allMembers.length
              ? displayMember(allMembers, index)
              : "Done"} 
          </h2>
          <button
            disabled={buttonStatus}
            type="button"
            className={index < allMembers.length ? "button": "hidden"}
            onClick={nextMember}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Standup;
