import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Temperature(){
  let[state,setState]=useState('');
  let[city,setCity]=useState('');
  let[temp,setTemp]=useState('');
  let[sites,newSites]=useState([]);
  function addNew(e){
    e.preventDefault();
    const newSite={state,city,temp};
    newSites([...sites,newSite])
  };
    return(
        <>
        <div className="container">
        
              <table  className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">City</th>
                    <th scope="col">Temperature</th>
                  </tr>
                </thead>
                <tbody>
                 {sites.map((site) => (
              <tr>
                <td>{site.state}</td>
                <td>{site.city}</td>
                <td>{site.temp} °C</td>
              </tr>
            ))}
          </tbody>
              </table>
            
          <h1>Add new sites:</h1>
          
          <form>
          
            <div className="mb-3">
              <label htmlFor="stateInput" className="form-label">State:</label>
              <input onInput={(e)=>setState(e.target.value)} type="text" className="form-control" id="stateInput" aria-describedby="emailHelp" />
          
            </div>
            <div className="mb-3">
              <label htmlFor="cityInput" className="form-label">City</label>
              <input onInput={(e)=>setCity(e.target.value)} type="text" className="form-control" id="cityInput" />
            </div>
            <div className="mb-3">
              <label className="form-check-label" htmlFor="inputTemperature">Temperature:</label>
              <input onInput={(e)=>setTemp(e.target.value)} type="text" className="form-control" id="inputTemperature" />
          
            </div>
            <div className="d-grid gap-2">
            <button onClick={addNew} type="submit" className="btn btn-primary">ADD</button>
  
            </div>
            
          </form>
        </div>

        </>
    )

}

export default Temperature;
