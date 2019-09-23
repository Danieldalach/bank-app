import React, { Component } from 'react';
 

class Icon extends Component {


  render() {
    return (
      <span className="icon"> 
       
      {" | "}
       <a href={this.props.icon.link}> 
       <img src={this.props.icon.image} alt={this.props.icon.title}></img> 

       </a> 


       
       
      </span>
    
      
    );
  }

  
 
}

export default Icon;
