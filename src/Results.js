import React, { Component } from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import SearchBox from "./SearchBox";
import { Consumer } from "./SearchContext";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.search();
  }

  search = () => {
    petfinder.pet
      .find({
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed,
        output: "full"
      })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          pets = data.petfinder.pets.pet;
        } else {
          pets = [data.petfinder.pets.pet];
        }
        this.setState({ pets });
      });
  };

  render() {
    const { pets } = this.state;
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {pets.map(pet => {
          const { animal, id, name, media } = pet;
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              animal={animal}
              key={id}
              name={name}
              breed={breed}
              media={media}
              location={`${pet.contact.city} , ${pet.contact.state}`}
              id={id}
            />
          );
        })}
      </div>
    );
  }
}

export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}
