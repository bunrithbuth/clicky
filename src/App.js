import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

const max = friends.length;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  state = {
    friends: friends,
    score: 0,
    maxScore: 0
  };

  removeFriend = id => {
    const newfriends = this.state.friends.filter(friend => friend.id !== id);

    if( (max - this.state.score) === (newfriends.length) ){
      //if max score is lower than score, we update max score. user loses
      if(this.state.maxScore < this.state.score){
        this.setState({ friends: friends, score: 0, maxScore: this.state.score });
      }else{
        this.setState({ friends: friends, score: 0});
      }

    }else{
      if(this.state.maxScore < (max - newfriends.length)){
        //if max score is lower than score, we update max score. user continues
        this.setState({ friends: newfriends, score: (max - newfriends.length), maxScore: (max - newfriends.length) });
      }else{
        this.setState({ friends: newfriends, score: (max - newfriends.length) });
      }
    }

  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <h1 className="subtitle">score: {this.state.score}/12 max-score: {this.state.maxScore}</h1>
        {this.state.score === 12 ? <h1 className="subtitle"> You Win</h1> : 
        shuffle(friends).map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
