import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'
import axios from 'axios'
function App() {

    const Mobile=useRef();
    const Name=useRef();
     

   async function handleform(e)
    {
       e.preventDefault();
        
       let mobile=Mobile.current.value;
       let name=Name.current.value;
        
       let obj={
         mobile,name
       }
        const res= await axios.post("http://localhost:8080/api/user",obj)
        console.log(res);

       console.log(mobile,name);
    }
  return (
    <div className="App">
       <h1>Records</h1>
       <form onSubmit={handleform}>
          <div>       
              <label>Name :</label> 
             <input type="text" ref={Name}/>
          </div>

          <div>
            <label>Mobile No :</label>
             <input type="number" ref={Mobile}/> 
          </div>
          
          <button>ADD</button>
       </form>
    </div>
  );
}

export default App;
