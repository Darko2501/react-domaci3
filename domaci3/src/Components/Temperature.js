import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Temperature() {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [place, setPlace] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function addNew(e) {
    e.preventDefault();
    const newPlace = { state, city, temp };
    setSites([...place, newPlace]);
    setState('');
    setCity('');
    setTemp('');
    setShowForm(false); 
  }

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <div className="container">
        <h1>Places and Temperatures:</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col">Temperature</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((place, index) => (
              <tr key={index}>
                <td>{place.state}</td>
                <td>{place.city}</td>
                <td>{place.temp} °C</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-primary mb-3" onClick={toggleForm}>
          {showForm ? 'Hide Form' : 'Add New Place'}
        </button>

        {showForm && (
          <form onSubmit={addNew}> 
            <div className="mb-3">
              <label htmlFor="stateInput" className="form-label">
                State:
              </label>
              <input
                onChange={(e) => setState(e.target.value)}
                type="text"
                className="form-control"
                id="stateInput"
                value={state}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cityInput" className="form-label">
                City:
              </label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control"
                id="cityInput"
                value={city}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputTemperature" className="form-label">
                Temperature:
              </label>
              <input
                onChange={(e) => setTemp(e.target.value)}
                type="text"
                className="form-control"
                id="inputTemperature"
                value={temp}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Temperature;
