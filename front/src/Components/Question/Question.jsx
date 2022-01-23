import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './question.css'
const Question = (props) => {
    const navigate = useNavigate();
   const {questions,setCurrQuestionIndex,currQuestionIndex, wrong,setWrong} = props;
   const {question,options,image_url,correct_ans} = questions;
   const [selectedAns, setSelectedAns]= useState('');
   const [prevSel, setPrevSel] = useState(null);
   const handleQuit =()=>{
    sessionStorage.setItem('currentQuestionIndex',JSON.stringify(0));
    sessionStorage.setItem('wrong',JSON.stringify(0));
    sessionStorage.removeItem('kid');
    navigate('/')
}
   const handleNext =()=>{
    if(selectedAns==="") {
        alert("select an option to go ahead");
        return ;
    }
    if(selectedAns !== correct_ans){
        setWrong(wrong+1);
        sessionStorage.setItem('wrong', JSON.stringify(wrong+1));
        var labelEle = document.getElementById(selectedAns);
        if(prevSel){
            let preLab = document.getElementById(prevSel);
            preLab.style.color="black";
        }
        labelEle.style.color="red";
        let divELE = document.getElementById('errmsg');
        divELE.innerText = "Wrong Answer. Choose right answer to move ahead";
        divELE.style.color = "red";
        setPrevSel(selectedAns)
        return;
    }
    else{
        let divELE = document.getElementById('errmsg');
        divELE.innerText = "";
    }
    
    
    if(currQuestionIndex===4){
        navigate('/result');
    }
    else{

        setCurrQuestionIndex(currQuestionIndex+1);
        sessionStorage.setItem('currentQuestionIndex',JSON.stringify(currQuestionIndex+1));
    }
}
    
   const handleChange= e=>{
        setSelectedAns(e.target.value);
   }
  return (<div className='question-container'>
        <h3>{question}</h3>
            <img src={image_url} alt="question" />
            <span id='errmsg'></span>
            <div className='options'>
            {   
                options.map ( (option,ind)=>  <div key={ind} className='option'>
                <input type="radio"  name="answer" value={option} onChange={handleChange} />
                <label htmlFor={option} id={option} >{option}</label>
            </div>)
            }
            </div>
            <div className='ques-button'>
            <button onClick= {handleQuit}>Quit</button>
            <button onClick= {()=>handleNext()}>Next</button>

            </div>
  </div>); 
};

export default Question