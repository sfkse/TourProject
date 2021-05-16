import React from 'react';
import './Card.css';
import { data } from '../../helpers/data';

export default function Card() {
    return (

        <div className="card-container">
            {data.map((card) => (
                <div className="cards" key={card.id}>
                    <div className="title">
                        <h2 >{card.title}</h2>
                    </div>

                    <img className="card-image" src={card.image} alt={card.title} />
                    <div className="card-over">
                        <p>{card.desc}</p>
                    </div>

                </div>


            ))}

        </div>
    )
}
