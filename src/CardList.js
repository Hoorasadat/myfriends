import React from 'react';
import Card from './Card';


const CardList = (props) => {
    const { friends } = props;
    const cardsArray = friends.map(friend => {
        return (
            <Card
                key={friend.id}
                id={friend.id} // robofriends
                name={friend.name}
                phone={friend.phone}
                email={friend.email}
                image={friend.image}
            />
        );
    });
    return (
        <div>
            {cardsArray}
        </div>
    )
};

export default CardList;
