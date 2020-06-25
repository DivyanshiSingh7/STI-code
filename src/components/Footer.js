import React,{Component} from 'react';


import './Footer.css';
import './images/social_flat_rounded_rects_svg/Google+.svg';
import './images/social_flat_rounded_rects_svg/Email.svg';
import './images/social_flat_rounded_rects_svg/Facebook.svg';
import './images/social_flat_rounded_rects_svg/LinkedIn.svg';
import './images/social_flat_rounded_rects_svg/Twitter.svg';



class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
          a : 2,
        };
       
    }

   
    render(){
        return (
            <div style={{marginTop:"15%",backgroundColor:"#FFFCFC",paddingTop:"3.5%",paddingBottom:"5%"}}>
                <h1 style={{color:"#163948"}}>Share Now</h1>
                <p style={{color:"#163948",paddingBottom:"1.5%"}}>Let’s aim to enhance our collective emotional well-being. Share it with someone who might benefit from this.</p>
                <ul class="share-buttons" data-source="simplesharingbuttons.com" style={{textAlign:"center"}}>
                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2FPMDD-tool%2F&quote=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!" title="Share on Facebook" target="_blank"><img alt="Share on Facebook" src={require("./images/social_flat_rounded_rects_svg/Facebook.svg")} /></a></li>
                    <li><a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2FPMDD-tool%2F&text=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!:%20http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2FPMDD-tool%2F" target="_blank" title="Tweet"><img alt="Tweet" src={require("./images/social_flat_rounded_rects_svg/Twitter.svg")} /></a></li>
                    <li><a href="https://plus.google.com/share?url=http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2FPMDD-tool%2F" target="_blank" title="Share on Google+"><img alt="Share on Google+" src={require("./images/social_flat_rounded_rects_svg/Google+.svg")} /></a></li>
                    <li><a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2FPMDD-tool%2F&title=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!&summary=&source=http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2FPMDD-tool%2F" target="_blank" title="Share on LinkedIn"><img alt="Share on LinkedIn" src={require("./images/social_flat_rounded_rects_svg/LinkedIn.svg")} /></a></li>
                    <li><a href="mailto:?subject=Proactive%E2%80%99s%20self-screening%20tool%20for%20PMDD%20provides%20a%20comprehensive%20assessment%20of%20your%20symptoms.%20Just%20answer%20few%20questions%20and%20get%20actionable%20insights!&body=:%20http%3A%2F%2Fwww.proactiveforher.com%2Ftools%2FPMDD-tool%2F" target="_blank" title="Send email"><img alt="Send email" src={require("./images/social_flat_rounded_rects_svg/Email.svg")} /></a></li>
                </ul>



           
            </div>
            

        )
    }


}



export default Footer;