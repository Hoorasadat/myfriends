import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { friends } from './friends';

class App extends Component {
    constructor() {
        super();
        this.state = {
            friends: friends,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});

    }

    render() {
        const filteredFriends = this.state.friends.filter(friend => {
            return (friend.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        });
        return (
            <div className = "tc">
                <h1 className='f2'>My Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList friends={filteredFriends}/>
            </div>
        );
    };
}

export default App;
