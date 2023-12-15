import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'
import './index.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // console.log("Puppies list: ", puppyList);
  // console.log(puppies);

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  // console.log("Featured puppy: ", featuredPup);

  return (
    <div className="App">
    {
      puppies.map(puppy => {
        return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
      })
    }
    {/* <p>{featPupId}</p> */}
    {/* { featuPupID && <p>{ featPupId }</p> }  */}

    {featPupId && (
        <div className="puppyDetails">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

    </div>
  )
}

export default App
