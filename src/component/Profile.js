import '../App.css';
import React from "react"
class Profile extends React.Component{
constructor(){
    super()
    this.state={
        fullName :' Frida Kahlo',
        bio:"Née le 6 juillet 1907, à Coyoacán au Mexique, Frida Kahlo est une artiste peintre et l'une des plus grandes figures de l'art mexicain du XXe siècle. Auteur de plusieurs centaines de tableaux, dont de nombreux autoportraits, elle est célèbre pour ses toiles réalistes, qui sont le reflet de ses passions et de sa souffrance, mais aussi de son pays, le Mexique. ",
        profession:'Artiste peintre',

    }
}
componentDidMount(){setInterval(()=>this.setState({count:this.state.count+1}),1000)}
render(){
    return(
        <div className="center">
            <h2>{this.state.count}</h2>       
        <h1>{this.state.fullName}</h1>
        <img className="image" src='frida.png'/>
        <p>{this.state.bio}</p>
        <h3>{this.state.profession}</h3>
        </div>
    )
}
}
export default Profile
