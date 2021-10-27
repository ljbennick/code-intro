// import React, { useEffect } from "react";

// const Food = () => {
//     const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//   fetch("http://api.tripadvisor.com/api/partner/2.0/location/155507?key=<YOUR KEY HERE>")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         setIsLoaded(true);
//         setItems(results)
//       },
//       (error) => {
//         setIsLoaded(true)
//         setError(error)
//       }
//     )
//   }, [])
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>
//   } else {
//     return (
//       <ul>{items.map(item => (
//         <li key={item.id}>
//           {item.name} {item.price}
//         </li>
//       ))}
//         </ul>
//     )
//   }
//   }

// export default Food;

import React from "react";

var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://documenu.p.rapidapi.com/restaurant/4072702673999819",
  headers: {
    "x-api-key": "079bf48183a00bea95f74d11c8d300a5",
    "x-rapidapi-host": "documenu.p.rapidapi.com",
    "x-rapidapi-key": "SIGN-UP-FOR-KEY",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const Food = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Right",
        alignItems: "Right",
        height: "100vh",
      }}
    >
      <h1>Here will be information about places to eat.</h1>
    </div>
  );
};

export default Food;

