import React, {useEffect,useState } from 'react';
//import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

const App = () => {
const [mutualState,SetNutualState] =useState( { foo: 'bar',resumeData: {}});
 

   /*  ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname); */



  const getResumeData=()=>{
    $.ajax({
      url:"./resumeData.json",
      dataType:'json',
      cache: false,
      success: (data)=>{
        SetNutualState({resumeData: data});
      },
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  useEffect(()=>{
    getResumeData();
  },[])
 
    return (
      <div className="App">
        {mutualState.resumeData.main && <Header data={mutualState.resumeData.main}/>}
        <About data={mutualState.resumeData.main}/>
        <Resume data={mutualState.resumeData.resume}/>
        <Portfolio data={mutualState.resumeData.portfolio}/>
        <Contact data={mutualState.resumeData.main}/>
        <Footer data={mutualState.resumeData.main}/>
      </div>
    );
  
}

export default App;
