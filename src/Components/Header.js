import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

function Header ({data}) {
 

    if(data){
      var name = data.name;
      var occupation= occupation;
      var description= data.description;
      var city= data.address.city;
      var networks= data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Members</a></li>
	         <li><a className="smoothscroll" href="#resume">Providers</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
      <AudioPlayer data={data} autoPlay={false}></AudioPlayer>
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3><span>{occupation}</span>{description}.</h3>
            <h3 >{data.mainTarget}</h3>
            <h3>{data.subDescription}</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

Header.propTypes = {
   data: PropTypes.object
}
export default Header;
