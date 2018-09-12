// import React from "react";

// // const Pet = props => {
// //   return React.createElement("div", {}, [
// //     React.createElement("h1", {}, props.name),
// //     React.createElement("h2", {}, props.animal),
// //     React.createElement("h2", {}, props.breed)
// //   ]);
// // };
// //this is same as below infact the code snippet below is converted to the above code

// const Pet = props => {
//   const { name, animal, breed } = props;
//   //called as object destructuring
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{animal}</h2>
//       <h2>{breed}</h2>
//     </div>
//   );
// };

// //just translating the html tags into React.createElement function calls

// export default Pet;

import React, { Component } from "react";
import { Link } from "@reach/router";

class Pet extends Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    let hero = "http://placecorgi.com/300/300";
    if (photos[0] && photos[0].value) {
      hero = photos[0].value;
    }
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
