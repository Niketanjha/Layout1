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
          <h1 id="h1Heading">Page Heading</h1>
          <h3 id="secondaryText">Secondary Text</h3>
        </div>
        <div className="horizontalLine">
          <hr style={{marginLeft:"60px",marginRight:"60px"}} />
        </div>        
        <div className="gridMain">
          {this.state.numbGrid.map((id,element)=>{
            return(
              <div className="row" key={id.id}>
                <div className="column">
                  <div className="card">
                    <div className="imageGray">700 x 400</div>
                    <h4 style={{color:'blue',marginTop:"0px"}}>Project Name</h4>
                    <p style={{marginTop:"-10px", width:"110%",fontSize:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    Nam viverra euismod odio, 
                    gravida pellentesque urna varius vitae.</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer1">
          <p style={{paddingTop:"50px"}}>copyright &copy; your website 2014</p>
        </div>
      </div>
      
    );
  }
}

export default App; 