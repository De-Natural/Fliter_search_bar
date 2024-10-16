import { useState } from 'react'
import './App.css'
import { data } from './data'

function App() {
  const [Search, setSearch] = useState('');
  console.log(Search);
  

  return (
    <div className='container'>
      <h2>Contact keeper</h2>
      <div className="input_div">
        <input type="text" onChange={(event)=> setSearch(event.target.value)} placeholder='Search contacts'/>
      </div>
      <table>
        <thead>
          <tr>
            <th>Profile picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>

          {data.filter((item) => {
            return Search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(Search);
          }).map((item) => (
            <tr key={item.id}>
               <td>
                <img 
                  src={item.profile_picture} 
                  alt={`${item.first_name} ${item.last_name}`} 
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
              </td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default App
