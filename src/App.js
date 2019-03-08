import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/AnimalCard";
import friends from "./animals.json";

class App extends React.Component {
  constructor(props){
    super(props);
    this.onClick=this.onClick.bind(this)
  }

  state={
    friends,
    score:0,
    highscore:0
  }
  
  

   showFriends(arr){
    let tempHolder
    for (let i = arr.length-1; i > 0; i--){
        let pickElement = Math.floor(Math.random() * i)

        tempHolder = arr[i];
        arr[i] = arr[pickElement];
        arr[pickElement] = tempHolder; 
    }
     this.setState({
       friends:arr
     })
  }

  onClick(){
    this.showFriends(this.state.friends)
  }
  render(){

  
  return (
    <Wrapper>
      <Title>Friends List</Title>
     {friends.map(friend => (

      <FriendCard
        image={friend.image}
        onClick={this.onClick}
        clickCount={this.clickCount}
      />
     ))}
     
     
     </Wrapper>
  );
}}

export default App;
