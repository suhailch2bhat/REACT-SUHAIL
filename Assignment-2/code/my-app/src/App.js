import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  
     <div className="img">
     <img src={employee.profileImg} alt="img"/>
     <h1 className="nametag">{employee.name}</h1>
     </div>
     <div className="location">
       <p>Location</p>
       <h1>{employee.location}</h1>
       </div>
       <div className="bloodgroup">
        <p>BloodGroup</p>
        <h1>{employee.bloodGroup}</h1>
       </div>
       <div className="age">
         <p>Age</p>
         <h1>{employee.age}</h1>

       </div>
  
  
</div>
)
}



export default App;
