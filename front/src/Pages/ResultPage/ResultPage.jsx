import React, { useEffect, useState } from 'react';
import './result.css'
import { useNavigate } from 'react-router-dom';
const ResultPage = () => {
  const [dataFromDB, setDataFromDB] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    
    const clickHandler = async ()=>{
      let wrongcount=!sessionStorage.getItem('wrong') ? 0 :JSON.parse(sessionStorage.getItem('wrong')) ;
      console.log(wrongcount);
      try{
        const dateToSend= new Date();
        const res= await fetch('/wrongans',{
        method:"POST",
        headers:{
          'Content-Type' :'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify({
          "name":JSON.parse(sessionStorage.getItem('kid')),
          "wrongAns": wrongcount,
          "createdAt":dateToSend
        })
      })
  
      const data= await res.json();
      if(res.status === 400){
          alert('failed to save the progess')
          sessionStorage.setItem('currentQuestionIndex',JSON.stringify(0));
          sessionStorage.setItem('wrong',JSON.stringify(0));
        }else{
        setDataFromDB(data.kid);
     
        
      }
      }catch(err){
        sessionStorage.setItem('currentQuestionIndex',JSON.stringify(0));
        sessionStorage.setItem('wrong',JSON.stringify(0));
        
      }
      setLoading(false);
  }
  clickHandler();

  },[navigate])
  
  const handleTry =()=>{
        
        sessionStorage.setItem('currentQuestionIndex',JSON.stringify(0));
        sessionStorage.setItem('wrong',JSON.stringify(0));
        navigate('/quiz');
    }
    const handleFinish = ()=>{
      sessionStorage.setItem('currentQuestionIndex',JSON.stringify(0));
      sessionStorage.setItem('wrong',JSON.stringify(0));
      sessionStorage.removeItem('kid');
      navigate('/')
    }
  return (<>
        { !loading ? (
          <div className='result-container'>
            { dataFromDB ? (<><h2>Hello, {dataFromDB.name}</h2>
            <h3>Wrong Answers: {dataFromDB.wrongAns}</h3>
            <h4>Time of Submission : {dataFromDB.createdAt}</h4>
            </>):<>
              <h1>Failed To save Data</h1>
            </>} <div className='button-div'>
               
            <button onClick={handleFinish}>Exit</button>
            <button onClick={handleTry} >Try Again</button>
          </div>
          </div>):(<div className='result-container'> Loading.... </div>)  } 
 </> )
}


export default ResultPage
