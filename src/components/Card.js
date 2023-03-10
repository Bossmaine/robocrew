import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 tc shadow-5 w-20'>
            <img src={`https://robohash.org/${id}`} alt='robot' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;


