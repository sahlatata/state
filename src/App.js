import React from "react"
import './App.css';
import Profile from "./component/Profile";


class App extends React.Component{
constructor(){
  super()
  this.state={
  bool : false
  }
}
reverse=()=>this.setState({bool :!this.state.bool})
render(){
  return(
<div className="center">
  <button onClick={this.reverse}> {this.state.bool? "Cacher" : "Montrer"} </button>
  {this.state.bool && <Profile/>}
    </div>
  )
    
  
}
}

export default App