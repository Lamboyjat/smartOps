import React from 'react';
import './Ships.css'

const ShipGallery = () => {
    const ships = [
        { id: 1, name: 'Enterprise', captain: 'Shaanoor' },
        { id: 2, name: 'Defiant', captain: 'Elena' },
        { id: 3, name: 'Voyager', captain: 'Lamin' },
        { id: 4, name: 'Discovery', captain: 'Mangrad' },
    ];

    return (
        <div className="ships_content">
            {ships.map(ship => (
                <Ship key={ship.id} name={ship.name} captain={ship.captain} />
            ))}
        </div>
    );
};

const Ship = ({ name, captain }) => (
    <div className="ship_img">
        <img src={`/images/ships/${name}.jpg`} alt={name} />
        {/* <h2>{name}</h2>
        <p>Captain: {captain}</p> */}
    </div>
);

export default ShipGallery;
