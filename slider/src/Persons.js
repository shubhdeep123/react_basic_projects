import React from "react";
import Button from "./Button"
import Person from "./Person"

function Persons({people,index,setIndex}) {
  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return <Person position={position} person={person} />;
      })}
      <Button index={index} setIndex={setIndex} />
    </div>
  );
}

export default Persons;
