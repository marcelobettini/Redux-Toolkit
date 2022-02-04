import React, { useState } from "react";

import { useFetchBreedsQuery } from "../features/dogs/dogsApiSlice";

const Dogs = () => {
  const [numDogs, setNumDogs] = useState();
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label htmlFor="numDogs">Dogs to fetch: </label>
          <select
            name="numDogs"
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
};

export default Dogs;
