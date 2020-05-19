import React from 'react';

function pets(pets) {
    return (Array.isArray(pets) && pets.length)? pets.join(", "): "";
} 
const PeopleDisplay = (props) => {
    return (
        <>
        {props.people.map((element, index) =>
        <p key={index}>
            <div><strong>{element.name}</strong></div>
            <div>{element.age} y.o.</div>
            <div className={element.gender}>{element.gender}</div>
            <div>{(element.gender === "male")? "He": "She"} is from {element.country}</div>
            <div>[ {pets(element.pets)} ]</div>
            <div>
                {(() => {
                    return (Array.isArray(element.pets) && element.pets.length)? element.pets.join(", "): "";
                })()}
            </div>
        </p>
        )}
        </>
    );
}


export default PeopleDisplay;
