import React,{ useEffect, useState } from 'react';
import Question from '../Question/Question';
const Quiz = (props) => {
    const {animalList}=props;
    const [loading, setLoading] = useState(true);
    let wrongans;
    if(sessionStorage.getItem('wrong')){
        wrongans=JSON.parse(sessionStorage.getItem('wrong'));
    }
    else{
      wrongans=0;
    }
    const [wrong, setWrong] =useState(wrongans);
    let curr;
    if(sessionStorage.getItem('currentQuestionIndex')){
        curr=JSON.parse(sessionStorage.getItem('currentQuestionIndex'));
    }
    else{
      curr=0;
    }
    const [currQuestionIndex, setCurrQuestionIndex ] = useState(curr);
    const [currQuestion, setCurrQuestion ] = useState({});
    const [questionList, setQuestionList ] = useState(animalList);
    
    useEffect(()=>{
            setLoading(true);
            
            setQuestionList(animalList)
            setCurrQuestion(questionList[currQuestionIndex])
            setLoading(false);
    },[currQuestionIndex,questionList,animalList])
    
    return (
  <>    
    { !loading &&(
        currQuestion && 
    <Question key={currQuestion.id} questions= {currQuestion} wrong={wrong} setWrong={setWrong} setCurrQuestionIndex={setCurrQuestionIndex} currQuestionIndex={currQuestionIndex} />  
              )
    }
  </>
  );
};

export default  Quiz;
