import React,{Component} from 'react';

import './Header.css';




class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
          a : 2,
        };
       
    }

   
    render(){
        return (
            <div>
           
            <div className="header">
                <a href="http://www.proactiveforher.com/" className="logo" style={{textDecoration:"none",color: "white", fontFamily: "Abril Fatface"}}>Proactive</a>
                <div className="header-right">
                <a href="http://www.proactiveforher.com/" style={{textDecoration:"none",color: "white"}}>Home</a>
                <a href="http://www.proactiveforher.com/webinar/" style={{textDecoration:"none",color: "white"}}>Webinars</a>
                <a href="http://www.proactiveforher.com/blog/" style={{textDecoration:"none",color: "white"}}>Blog</a>
                <a href="http://www.proactiveforher.com/doctors/" style={{textDecoration:"none",color: "white"}}>Book</a>
                </div>
            </div>
            <br />
            <br />
                    <h1 className="hh" style={{textAlign:"center",color:"#163948",paddingTop:"4%", paddingBottom:"1%"}}><strong>PMDD Screening Tool</strong></h1>
                    <p style={{paddingLeft:"5%",paddingRight:"5%",textAlign:"center",paddingBottom:"0%"}}>Premenstrual dysphoric disorder (PMDD) has symptoms similar to PMS, but their severity can disrupt one’s daily life. </p>
                    <p style={{paddingLeft:"24%",paddingRight:"24%",textAlign:"center",marginBottom:"2%",paddingTop:"0%"}}>With Proactive’s PMDD screening tool, you can understand your symptoms better and take necessary action in time.</p>
                

            </div>
            

        )
    }


}



export default Header;