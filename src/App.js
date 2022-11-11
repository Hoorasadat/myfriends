import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { friends } from './friends';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            friends: friends,
            // friends: [], // robofriends
            searchField: ''
        }
    }

    // componentDidMount() { // robofriends
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({friends: users}));
    // }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});

    }

    render() {
        const { friends, searchField} = this.state;
        const filteredFriends = friends.filter(friend => {
            return (friend.name.toLowerCase().includes(searchField.toLowerCase()))
        });
        return !friends.length ?
        <h1>Loading</h1> :
        <div className = "tc">
            <h1 className='f2'>My Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList friends={filteredFriends}/>
            </Scroll>
        </div>
        ;
    };
}

export default App;
