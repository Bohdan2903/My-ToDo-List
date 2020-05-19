import React from 'react';
import PeopleDisplay from "./PeopleDisplay";

class People extends React.Component {
    constructor (props) {
        super(props);
        this.people = [
            {
                name: "Anna",
                age: 28,
                gender: "female",
                pets: ["cat", "parrot", "gold fish"],
                country: "Poland"
            },
            {
                name: "Peter",
                age: 48,
                gender: "male",
                pets: ["cat", "dog"],
                country: "Finland"
            },
            {
                name: "Alex",
                age: 27,
                gender: "male",
                pets: [],
                country: "Finland"
            },
            {
                name: "Sergey",
                age: 41,
                gender: "male",
                pets: ["iguana", "parrot"],
                country: "Ukraine"
            },
            {
                name: "Barbara",
                age: 72,
                gender: "female",
                pets: ["hamster", "cavy"],
                country: "USA"
            },
        ];
    }

    render() {
        return (
            <div className="wrapper">
                <PeopleDisplay people={this.people} />
            </div>
        );
    }
}

export default People;
