import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { friends } from './friends';

class App extends Component {
    constructor() {
        super();
        this.state = {friends: friends}
    }

    onSearchChange = (event) => {
        const searchedFriend = event.target.value;
        const filteredFriends = friends.filter(friend => {
            return (friend.name.toLowerCase().includes(searchedFriend.toLowerCase()))
        });
        this.setState({friends: filteredFriends});
    }

    render() {
        return (
            <div className = "tc">
                <h1 className='f2'>My Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList friends={this.state.friends}/>
            </div>
        );
    };
}

export default App;
