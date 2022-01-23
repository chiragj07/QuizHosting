import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'
 const HomePage = () => {
    const navigate = useNavigate();
    const [name, setName] =useState('');
    const handleChange =(e)=>{
        setName(e.target.value);
    }
    const handleClick =  ()=>{
            sessionStorage.setItem('kid', JSON.stringify(name));
            navigate('/quiz');
    }
  return (<div className='home'>
        <h2>Welcome to the Animal Quiz</h2>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={handleClick}>Start Quiz</button>
  </div>)
};
export default HomePage