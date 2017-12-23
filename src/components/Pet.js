import React from 'react';

export default function Pet(props) {
    let animal = props.animal;
    return(
        <section className={`${props.species} `}>
            <h2>{animal.name}</h2>
            <img src={animal.imageURL} alt={animal.imageDescription}></img>
            <main>
                <dl>
                    <dt>Name:</dt>
                    <dd>{animal.name}</dd>
                    <dt>Sex:</dt>
                    <dd>{animal.sex}</dd>
                    <dt>Age:</dt>
                    <dd>{animal.age}</dd>
                    <dt>Breed:</dt>
                    <dd>{animal.breed}</dd>
                    <dt>Story:</dt>
                    <dd>{animal.story}</dd>
                </dl>
                <button type="button" id="adopt-animal" onClick={e => props.onAdopt()}>Adopt</button>
            </main>
        </section>
    )
}