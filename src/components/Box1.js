import React,{Component} from 'react';
import Ques1 from './Ques1';
import Ques2 from './Ques2';
import Ques3 from './Ques3';
import Ques4 from './Ques4';
import Ques5 from './Ques5';
import Ques6 from './Ques6';
import Ques7 from './Ques7';
import Ques8 from './Ques8';
import Ques9 from './Ques9';
import Ques10 from './Ques10';

import './Box1.css';

class Box1 extends Component{
    state ={
                selectedOption1:"",
                selectedOption2:"",
                selectedOption3:"",
                selectedOption4:"",
                selectedOption5:"",
                selectedOption6:"",
                selectedOption7:"",
                selectedOption8:"",              
                selectedOption9:"",
                selectedOption10:"",
                arr08 : [0,0,0,0,0,0,0,0],
                bapp : false,
                edu : false,
                ans:false,
                step:1,
                stage:1,
        };
        
    

    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };

    prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
    };
    nextStage = input=> q => {
        var x = q.target.value;
        {console.log(x)}
        var y = Number(x)
        this.setState({ [input] : x});
        const { step, stage } = this.state;
        
        console.log(typeof stage)
        
        this.setState({
          step: stage
        });
      };

   
        
        
   

    handleOptionChange1 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[0] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange2 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[1] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange3 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[2] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange4 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[3] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange5 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[4] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange6 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[5] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange7 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[6] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange8 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[7] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange9 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[8] = y;
        this.setState({arr08:new_arr})
    };
    handleOptionChange10 = input => e => {
        this.setState({ [input] : e.target.value});
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[9] = y;
        this.setState({arr08:new_arr})
    };

    handlepart = () => {
        this.setState({ans:true})
        var s = this.state.arr08[0] + this.state.arr08[1] + this.state.arr08[2] + this.state.arr08[3] + this.state.arr08[4] + this.state.arr08[5] +this.state.arr08[6] + this.state.arr08[7]; 
        if(s>4){
            this.setState({bapp:true,edu:false})
        }else if((s<=4) && this.state.selectedOption9 ==="yes"){
            this.setState({bapp:true,edu:false})
        }else if((s<=4) && this.state.selectedOption9 === "no"){
            this.setState({edu:true,bapp:false})
        }
    };
    render(){

        const { step } = this.state;
        const { selectedOption1,selectedOption2,selectedOption3,selectedOption4,selectedOption5,selectedOption6,selectedOption7,selectedOption8,selectedOption9,selectedOption10,arr08, bapp,edu ,ans,stage } = this.state;
        const values = {  selectedOption1,selectedOption2,selectedOption3,selectedOption4,selectedOption5,selectedOption6,selectedOption7,selectedOption8,selectedOption9,selectedOption10 ,arr08, bapp,edu ,ans,stage};
        switch (step) {
            case 1:
              return (
                  <div>
                <Ques1 
                    nextStep = {this.nextStep}
                    nextStage = {this.nextStage}
                    handleOptionChange1 = {this.handleOptionChange1}
                    values ={values}
                /> 
                
                </div>              
              );
            case 2:
              return (
                  <div>
               <Ques2
                   
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    nextStage = {this.nextStage}
                    handleOptionChange2 = {this.handleOptionChange2}
                    values ={values}
                 />
                </div>
              );
            case 3:
              return (
                <div>
                 <Ques3
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                nextStage = {this.nextStage}
                handleOptionChange3 = {this.handleOptionChange3}
                values ={values}
             />
              </div>
               
              );
            case 4:
              return (
                <div>
                <Ques4
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                nextStage = {this.nextStage}
                handleOptionChange4 = {this.handleOptionChange4}
                values ={values}
             />
             </div>

              );
            case 5:
                return (
                    <div>
                    <Ques5
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange5 = {this.handleOptionChange5}
                    values ={values}
                 />
                  </div>
  
                );
            case 6:
                return (
                    <div>
                    <Ques6
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange6 = {this.handleOptionChange6}
                    values ={values}
                 />
                    </div>
                );
            case 7:
                return (
                    <div>
                    <Ques7
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange7 = {this.handleOptionChange7}
                    values ={values}
                 />
                    </div>
                );
            case 8:
                return (
                    <div>
                    <Ques8
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange8 = {this.handleOptionChange8}
                    values ={values}
                 />
                    </div> 
                );
            case 9:
                return (
                    <div>
                    <Ques9
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange9 = {this.handleOptionChange9}
                    values ={values}
                 />
                   </div>
                );
            case 10:
                return (
                    <div>
                    <Ques10
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange10 = {this.handleOptionChange10}
                    values ={values}
                 /> 
                 </div>
                );
            case 11:
                return(
                    <div>
                        <a className="myButton" onClick={this.handlepart}>Results</a>
                        {this.state.ans && this.state.bapp?<div style={{backgroundColor:"#163948",marginTop:"5%" ,color:"white",padding:"10%"}}><h1>Book Appointment</h1></div>:this.state.ans && this.state.edu?<div style={{backgroundColor:"#163948",marginTop:"5%" ,color:"white",padding:"10%"}}><h1>Patient Education</h1></div>:null}
                        
                    </div>
                
                    
    
              );  
            default:
              (console.log('This is a multi-step form built with React.'))
          }
          
    }


}
export default Box1;


/*

if(this.state.selectedOption1==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[0] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption2==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[1] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption3==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[2] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption4==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[3] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption5==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[4] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption6==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[5] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption7==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[6] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption8==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[7] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption9==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[8] = y;
            this.setState({arr08:new_arr})
        }else if(this.state.selectedOption10==="yes"){
            let y = 0;
            if(e.target.value==="yes"){
                y =1;
            }
            
            let new_arr = this.state.arr08.slice();
            new_arr[9] = y;
            this.setState({arr08:new_arr})
        }










constructor(){
        super()
        this.state ={
                selectedOption1:"",
                selectedOption2:"",
                selectedOption3:"",
                selectedOption4:"",
                selectedOption5:"",
                selectedOption6:"",
                selectedOption7:"",
                selectedOption8:"",              
                selectedOption9:"",
                selectedOption10:"",
                arr08 : [0,0,0,0,0,0,0,0],
                bapp : false,
                edu : false,
                ans:false,
                step:1,
        };
        this.handleOptionChange1 = this.handleOptionChange1.bind(this)
        this.handleOptionChange2 = this.handleOptionChange2.bind(this)
        this.handleOptionChange3 = this.handleOptionChange3.bind(this)
        this.handleOptionChange4 = this.handleOptionChange4.bind(this)
        this.handleOptionChange5 = this.handleOptionChange5.bind(this)
        this.handleOptionChange6 = this.handleOptionChange6.bind(this)
        this.handleOptionChange7 = this.handleOptionChange7.bind(this)
        this.handleOptionChange8 = this.handleOptionChange8.bind(this)
        this.handleOptionChange9 = this.handleOptionChange9.bind(this)
        this.handleOptionChange10 = this.handleOptionChange10.bind(this)
        this.handlepart = this.handlepart.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };

    prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
    };

    handleOptionChange1(e) {
        this.setState({selectedOption1:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[0] = y;
        this.setState({arr08:new_arr})

    }
    handleOptionChange2(e) {
        this.setState({selectedOption2:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[1] = y;
        this.setState({arr08:new_arr})           
    }
    handleOptionChange3(e) {
        this.setState({selectedOption3:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[2] = y;
        this.setState({arr08:new_arr})
    }
    handleOptionChange4(e) {
        this.setState({selectedOption4:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[3] = y;
        this.setState({arr08:new_arr})
    }
    handleOptionChange5(e) {
        this.setState({selectedOption5:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[4] = y;
        this.setState({arr08:new_arr})
    }
    handleOptionChange6(e) {
        this.setState({selectedOption6:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[5] = y;
        this.setState({arr08:new_arr})
    }
    handleOptionChange7(e) {
        this.setState({selectedOption7:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[6] = y;
        this.setState({arr08:new_arr})
    }
    handleOptionChange8(e) {
        this.setState({selectedOption8:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        let new_arr = this.state.arr08.slice();
        new_arr[7] = y;
        this.setState({arr08:new_arr})
    }
    handleOptionChange9(e) {
        this.setState({selectedOption9:e.target.value})
        var x = e.target.value;
        let y = 0;
        if(e.target.value==="yes"){
            y =1;
        }
        
        let new_arr = this.state.arr08.slice();
        new_arr[8] = y;
        this.setState({arr08:new_arr})
    }
    handleOptionChange10(e) {
        this.setState({selectedOption10:e.target.value});
        
        
    };

    handleOptionChange = input => e => {
        this.setState({ [input] : e.target.value});
    }
    handlepart(e){
        this.setState({ans:true})
        var s = this.state.arr08[0] + this.state.arr08[1] + this.state.arr08[2] + this.state.arr08[3] + this.state.arr08[4] + this.state.arr08[5] +this.state.arr08[6] + this.state.arr08[7]; 
        if(s>4){
            this.setState({bapp:true})
        }else if((s<=4) && this.state.selectedOption9 ==="yes"){
            this.setState({bapp:true})
        }else if((s<=4) && this.state.selectedOption9 === "no"){
            this.setState({edu:true})
        }
    }
    render(){

        const { step } = this.state;
        const { selectedOption1,selectedOption2,selectedOption3,selectedOption4,selectedOption5,selectedOption6,selectedOption7,selectedOption8,selectedOption9,selectedOption10 } = this.state;
        const values = {  selectedOption1,selectedOption2,selectedOption3,selectedOption4,selectedOption5,selectedOption6,selectedOption7,selectedOption8,selectedOption9,selectedOption10 };
        switch (step) {
            case 1:
              return (
                <Ques1 
                    nextStep = {this.nextStep}
                    handleOptionChange1 = {this.handleOptionChange1}
                    values ={values}
                />                
              );
            case 2:
              return (
               <Ques2
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange2 = {this.handleOptionChange2}
                    values ={values}
                 />
                
              );
            case 3:
              return (
                <p>it is case 2</p>
              /*   <Ques3
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleOptionChange3 = {this.handleOptionChange3}
                values ={values}
             />
               
              );
            case 4:
              return (
                <Ques4
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleOptionChange4 = {this.handleOptionChange4}
                values ={values}
             />

              );
            case 5:
                return (
                    <Ques5
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange5 = {this.handleOptionChange5}
                    values ={values}
                 />
  
                );
            case 6:
                return (
                    <Ques2
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange6 = {this.handleOptionChange6}
                    values ={values}
                 />
    
                );
            case 7:
                return (
                    <Ques2
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange7 = {this.handleOptionChange7}
                    values ={values}
                 />
    
                );
            case 8:
                return (
                    <Ques2
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange8 = {this.handleOptionChange8}
                    values ={values}
                 />
    
                );
            case 9:
                return (
                    <Ques2
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange9 = {this.handleOptionChange9}
                    values ={values}
                 />
    
                );
            case 10:
                return (
                    <Ques2
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleOptionChange10 = {this.handleOptionChange10}
                    values ={values}
                 />   
                     
    
                    );   
                    default:
                      (console.log('This is a multi-step form built with React.'))
                  }
            }
        
*/



/*







<p>1)	I feel much more depressed, down, tearful, sad or hopeless before the start of my period.   </p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption1 === "yes"} 
                                            onChange={this.handleOptionChange1} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption1 === "no"} 
                                onChange={this.handleOptionChange1} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption1}
                  <p>2)	I feel anxious, tense, nervous, “keyed up” or “on edge” before the start of my period.</p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption2 === "yes"} 
                                            onChange={this.handleOptionChange2} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption2 === "no"} 
                                onChange={this.handleOptionChange2} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption2}
                  <p>3)	I feel hypersensitive to rejection, or, My emotions feel very unstable and unpredictable before the start of my period. </p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption3 === "yes"} 
                                            onChange={this.handleOptionChange3} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption3 === "no"} 
                                onChange={this.handleOptionChange3} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption3}
                  <p>4)	I feel much more irritable or I get angry easily before the start of my period.</p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption4 === "yes"} 
                                            onChange={this.handleOptionChange4} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption4 === "no"} 
                                onChange={this.handleOptionChange4} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption4}
                  <p>5)	I experience feelings of hopelessness before the start of my period.</p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption5 === "yes"} 
                                            onChange={this.handleOptionChange5} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption5 === "no"} 
                                onChange={this.handleOptionChange5} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption5}
                  <p>6)	I am much less interested than usual in my hobbies and daily activities before the start of my period.</p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption6 === "yes"} 
                                            onChange={this.handleOptionChange6} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption6 === "no"} 
                                onChange={this.handleOptionChange6} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption6}
                  <p>7)	I find it much harder to concentrate before the start of my period.</p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption7 === "yes"} 
                                            onChange={this.handleOptionChange7} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption7 === "no"} 
                                onChange={this.handleOptionChange7} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption7}
                  <p>8)	I am bothered by breast tenderness or swelling, increased headaches, joint or muscle pain, bloating or water retention, and/or weight gain before the start of my period.</p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption8 === "yes"} 
                                            onChange={this.handleOptionChange8} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption8 === "no"} 
                                onChange={this.handleOptionChange8} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption8}
                  <p>9)	These symptoms interfere or cause problems in my day-to-day activities and/or relationships. </p>
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption9 === "yes"} 
                                            onChange={this.handleOptionChange9} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption9 === "no"} 
                                onChange={this.handleOptionChange9} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption9}
                  <p>10) Most of my symptoms disappear by the end of my period.</p> 
                  <form style={{textAlign:"center"}}>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="yes" 
                                            checked={this.state.selectedOption10 === "yes"} 
                                            onChange={this.handleOptionChange10} />
                                Yes
                            </label>
                        </div>
                        <div className="radio" style={{display:"inline"}}>
                            <label>
                                <input type="radio" value="no" 
                                checked={this.state.selectedOption10 === "no"} 
                                onChange={this.handleOptionChange10} />
                                No
                            </label>
                        </div>
                            
                    </form>
                    {this.state.selectedOption10} 
                    <br />
                    <br />
                    <hr style={{width:"100%" ,color:"black",paddingTop:"0%"}} />

                    <a className="myButton" onClick={this.handlepart}>Confirm</a>
                    <br />
                    <br />
                    {this.state.ans && this.state.bapp?<div>Book Appointment</div>:null}
                    {this.state.ans && this.state.edu?<div>Patient Education</div>:null}




                    <br /><br /><br />

*/

