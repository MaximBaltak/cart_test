import React from 'react'
import './App.css';
import AddFrom from "./components/AddFrom/AddFrom";
import Submit from "./components/Submit/Submit";
import Price from "./components/Price/Price";
function App() {
  return (
    <div className="container">
        <h1 className='title'>Корзина</h1>
        <AddFrom/>
        <div className='flex'>
            <Price/>
            <Submit/>
        </div>
    </div>
  );
}

export default App;
