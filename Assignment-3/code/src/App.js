import React from 'react';
// import logo from './logo.svg';
import './App.css';


var arrow="<"
function App() {
  const emp={
    Name: "Alan Ford",
    EmployeeID:"00005152",
    Appointment:"9:00 (04-04-2022)",
    Email:"alenford@gmail.com",
    Phone:"+31123456789",
    Status:"In Progress",
    Door:"Door",
    Time:"10:30(04-04-2022)",
    profileImg:'https://www.w3schools.com/howto/img_avatar.png'
  };
  return (
    <div className="site-container">
   <div className='para'>
     <div>{arrow}</div>
     <div className='name' >
     <p>{emp.Name}<br/>
        {emp.EmployeeID}
     </p>
     </div>
     
     <button className="btn" onClick="window.print()">Print
      </button>
   </div>
   <div class="contact">
     <div className='line'>  
         <h1>Appointment<span className='spann'>{emp.Appointment}</span></h1><br/>
         <h1>Email<span className='spann'>{emp.Email}</span></h1><br/>
         <h1>Phone<span className='spann'>{emp.Phone}</span></h1>
      </div>

   </div>
   <div class="list">
     <table>
     <tr>
       <th>Status</th>
       <th>Door</th>
       <th>Time</th></tr>
       <tr>
         <ul>
      <li> <td>{emp.Status}</td></li>
       </ul>
       <td>{emp.Door}</td>
       <td>{emp.Time}</td>
       </tr>
     </table>
   </div>
   <div className='imgg'>
     <input className='box'input type="checkbox"></input>
    <div className='p1'><img src={emp.profileImg} alt="img1"/>
    </div>
    <div className='p2'>
      <div>
     <h1 className='h1'>Boltaart Bosbessen</h1><br/><br/>
     <p className='p3'>overheerlijke Boltaart met Boshessen uit de keuken van de bijenkorf</p>
     </div>
   </div>
  
    </div>
    </div>
  );
}

export default App;
