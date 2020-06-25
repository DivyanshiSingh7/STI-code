import React, { Component } from 'react';
import './Box1.css';

export class Ques6 extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    


    render() {
        const { values,handleOptionChange6 } = this.props;

        return (
            <div className="d">
            <p className="pa">I am much less interested than usual in my hobbies and daily activities before the start of my period. </p>
            <br />
            <br />
            <form style={{textAlign:"center"}}>
                                    <div className="radio" style={{display:"inline"}}>
                                        <label style={{color:"#163948",paddingRight:"5%",fontSize:"x-large"}}>
                                            <input type="radio" value="yes" 
                                                        checked={values.selectedOption6 === "yes"} 
                                                        onChange={handleOptionChange6('selectedOption6')} />
                                            Yes
                                        </label>
                                    </div>
                                    <div className="radio" style={{display:"inline"}}>
                                        <label style={{color:"#163948",paddingRight:"5%",fontSize:"x-large"}}>
                                            <input type="radio" value="no" 
                                            checked={values.selectedOption6 === "no"} 
                                            onChange={handleOptionChange6('selectedOption6')} />
                                            No
                                        </label>
                                    </div>
                                        
                                </form>
                                <a className="myButtona" onClick={this.back}>Back</a>
                                <a className="myButtona" onClick={this.continue}>Continue</a>
                                <br />
                                <br />
                                <a className="myButtony"  value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtony" value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtony" value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtony" value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtony" value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtony" value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" ></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" ></a>
            </div>
        )

    }


}

export default Ques6;