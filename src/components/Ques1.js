import React, { Component } from 'react';
import './Box1.css';

export class Ques1 extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      



    render() {
        const { values,handleOptionChange1,nextStage } = this.props;

        return (
            <div className="d">
            <p className="pa">I feel much more depressed, down, tearful, sad or hopeless before the start of my period.  </p>
            <br />
            <br />
            <form style={{textAlign:"center"}}>
                                    <div className="radio" style={{display:"inline"}}>
                                        <label style={{color:"#163948",paddingRight:"5%",fontSize:"x-large"}}>
                                            <input type="radio" value="yes" 
                                                        checked={values.selectedOption1 === "yes"} 
                                                        onChange={handleOptionChange1('selectedOption1')} />
                                            Yes
                                        </label>
                                    </div>
                                    <div className="radio" style={{display:"inline"}}>
                                        <label style={{color:"#163948",paddingRight:"5%",fontSize:"x-large"}}>
                                            <input type="radio" value="no" 
                                            checked={values.selectedOption1 === "no"} 
                                            onChange={handleOptionChange1('selectedOption1')} />
                                            No
                                        </label>
                                    </div>
                                        
                                </form>
                                
                                
                                <a className="myButton" style={{marginLeft:"25%",marginRight:"20%"}} onClick={this.continue}>Continue</a>
                                <br />
                                
                                <a className="myButtony"  value="3" checked={values.stage === "3"} onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" checked={values.stage === "4"} onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="3" onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" onClick={nextStage('stage')}></a><hr style={{width:"40px",display:"inline-block",marginBottom:"6%"}} />
                                <a className="myButtonx" value="4" onClick={nextStage('stage')}></a>
                                
            </div>
        )

    }


}

export default Ques1;