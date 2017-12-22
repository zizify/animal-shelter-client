import React from 'react';
import Pet from './Pet';

export default function Dashboard(props) {
    let cat = props.catToAdopt;
    let dog = props.dogToAdopt;

    return(
        <div className="dashboard-container">
            <Pet animal={cat} species="cat" onAdopt={input => console.log('Pet adopted')}/>
            <Pet animal={dog} species="dog" onAdopt={input => console.log('Pet adopted')}/>
        </div>
    )
}