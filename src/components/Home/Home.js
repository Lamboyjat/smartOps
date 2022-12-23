import React from 'react'
import './Home.css'

const Home = () => {
    const items = [
        { id: 1, title: 'Name', name: 'BOB THE BOAT' },
        { id: 2, title: 'IMO', name: '2718281' },
        { id: 3, title: 'MMIS', name: '314159265' },
        { id: 4, title: 'Call sign', name: 'ABCD' },
    ];

    return (
        <div className="home_content">
            <h1>Speaking now</h1>
            <div className="signal">
                <img></img>
            </div>


            <div className="feature">
                <ul className="items-list">
                    {items.map(item => (
                        <Item key={item.id} title={item.title} name={item.name} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Item = ({ title, name }) => (
    <li className="item">
        <h2>{title}</h2>
        <p>{name}</p>
    </li>
);

export default Home;
