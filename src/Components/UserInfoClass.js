import {Component} from "react";
class UserInfoClass extends Component {
  constructor(props) {
    super(props);
    // to create the state variable in class based component
    this.state={
       count:0,
       count1:1
    }
    console.log("component constructor")
  }

  render() {
    console.log("component render")
    const { name,location } = this.props;
let  {count}=this.state;
    return (
      <div className="userCard">
        <h1>Hello {name},{location}</h1>
        <h2>Sindhudurga </h2>
        <h2>Kankavli</h2>
        <h2>9970561589</h2>
        <button onClick={()=>{
this.setState({count:this.state.count+1,
    count1:this.state.count1+1

        })
    
        }}>count+</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
  componentDidMount(){
console.log("component Did mount")
  }
}
export default UserInfoClass;
