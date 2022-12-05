import React, {
    // useEffect,
    useState} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { friends } from './friends';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

function App() {
    const myFriends = friends;
    // const [myFriends, setMyFriends] = useState([]);
    const [searchField, setSearchField] = useState('');

    // useEffect(() => { // robofriends
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => setMyFriends(users));
    // },[])

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredFriends = myFriends.filter(friend => {
        return (friend.name.toLowerCase().includes(searchField.toLowerCase()))
    });
    return !myFriends.length ?
    <h1>Loading</h1> :
    <div className = "tc">
        <h1 className='f2'>My Friends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <ErrorBoundry>
                <CardList friends={filteredFriends}/>
            </ErrorBoundry>
        </Scroll>
    </div>
    ;
}

export default App;
