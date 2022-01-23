
import React, {useEffect,useState} from 'react';
import animals from '../../assets/animals';
import Quiz from '../../Components/Quiz/Quiz';
const QuizPage = () => {
  const[desiredList , setDesiredList]=useState([])
  useEffect(()=>{
      const randarr=[];
      for(var i=0; i<5;){
          const randIndex= Math.floor(Math.random()*animals.length);
          if(randarr.indexOf(animals[randIndex]) !== -1) continue;
          randarr.push(animals[randIndex]);
          i++;
        }
      setDesiredList(randarr);
  },[])
  return ( <>
        {
            <Quiz  animalList={desiredList}  />
        }
  </> );
};

export default QuizPage;

