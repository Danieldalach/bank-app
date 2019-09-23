import React, { Component } from 'react';
import Icon from './Icon';
 

class Bar extends Component {

  state={
    Links:[
{title:"שאלות נפוצות", link: "http://ynet.co.il", image:"https://www.xrite.com/-/media/xrite/images/anchored-cta-icons/homepage-contact-us.png"},
{title:"זיהוי לקוח", link: "http://ynet.co.il", image:"https://www.shareicon.net/data/512x512/2015/11/12/671149_papers_512x512.png"},
{title:"עוש", link: "http://ynet.co.il", image:"https://cdn1.iconfinder.com/data/icons/infographic-bar-16/512/17-512.png"},
{title:"ערוצים ישירים", link: "http://ynet.co.il", image:"https://www.shareicon.net/data/512x512/2016/11/22/854845_mathematics_512x512.png"},
{title:"כרטיסי אשראי", link: "http://ynet.co.il", image:"https://www.trzcacak.rs/myfile/full/80-804719_png-file-svg-credit-card-icon-png.png"},
{title:"פקדונות", link: "http://ynet.co.il", image:"https://static.thenounproject.com/png/91988-200.png"},
]

    
}


  render() {
   
    
    return (
      <div  className="bar" align="center"> 

       {
           this.state.Links.map( i=> <Icon   icon={i}    />  )
       }
     </div>

     
   );

  }

  
 
}

export default Bar;



