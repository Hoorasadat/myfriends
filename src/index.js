import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { friends } from './friends';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card id={friends[0].id} name={friends[0].name} phone={friends[0].phone} email={friends[0].email} image={friends[0].image}/>
      <Card id={friends[1].id} name={friends[1].name} phone={friends[1].phone} email={friends[1].email} image={friends[1].image}/>
      <Card id={friends[2].id} name={friends[2].name} phone={friends[2].phone} email={friends[2].email} image={friends[2].image}/>
      <Card id={friends[3].id} name={friends[3].name} phone={friends[3].phone} email={friends[3].email} image={friends[3].image}/>
      <Card id={friends[4].id} name={friends[4].name} phone={friends[4].phone} email={friends[4].email} image={friends[4].image}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
