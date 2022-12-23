import React from 'react';

const ShipList = () => {
    const ships = [
        { id: 1, name: 'Enterprise', captain: 'James T. Kirk' },
        { id: 2, name: 'Defiant', captain: 'Benjamin Sisko' },
        { id: 3, name: 'Voyager', captain: 'Kathryn Janeway' },
        { id: 4, name: 'Discovery', captain: 'Gabriel Lorca' },
    ];

    return (
        <div>
            <h1>Ship List</h1>
            <ul>
                {ships.map(ship => (
                    <Ship key={ship.id} name={ship.name} captain={ship.captain} />
                ))}
            </ul>
        </div>
    );
};

const Ship = ({ name, captain }) => (
    <li>
        <img src={`/images/ships/${name}.jpg`} alt={name} />
        <h2>{name}</h2>
        <p>Captain: {captain}</p>
    </li>
);

export default ShipList;
