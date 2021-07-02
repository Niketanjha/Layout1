import  React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={numbGrid:[{id:Math.random(),element:1},
      {id:Math.random(),element:1}, {id:Math.random(),element:1}
      ,{id:Math.random(),element:1},{id:Math.random(),element:1}
      ,{id:Math.random(),element:1},{id:Math.random(),element:1}
      ,{id:Math.random(),element:1},{id:Math.random(),element:1}]      
    };
  }
  render(){
    return(
      <div className="mainDiv">

        <div className="navBar">
          <ul id ="navList">
            <li ><a className="firstElement" href="#">Layout 1</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>          

        <div className="pageHeading">
          <h1 style={{marginBottom:"0px", fontWeight:"400" ,display:"inline-block",color:"#333333",fontFamily:"Arial, Helvetica, sans-serif"}} id="h1Heading">Page Heading</h1>
          <span className="secondaryText">Secondary Text</span>
        </div>

        <div className="horizontalLine">
          <hr style={{marginLeft:"110px",marginRight:"110px"}} />
        </div>        

        <div className="gridMain">
          {this.state.numbGrid.map((id,element)=>{
            return(
                  <div className="card">
                    <div className="imageGray">700 x 400</div>
                    <h1 style={{fontSize:"28px",fontWeight:"bold",color:"#3c81cf",marginTop:"10px",fontFamily:"djavue"}}>Project Name</h1>
                    <p style={{marginTop:"-10px", width:"95%",fontSize:"13px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    Nam viverra euismod odio, 
                    gravida pellentesque urna varius vitae.</p>
                  </div>
            );
          })}
        </div>
        <div className="footer">
          <div className="horizontalLine">
          <hr style={{marginLeft:"110px",marginRight:"110px"}} />
          </div>
          <p style={{paddingTop:"40px",paddingBottom:"40px",paddingLeft:"110px"}}>copyright &copy; your website 2014</p>
        </div>
      </div>
      
    );
  }
}

export default App; 