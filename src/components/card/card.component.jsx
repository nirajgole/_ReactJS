import React from 'react'
import './card.styles.css'

export const Card=props=> {
    return (
        <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}/?set=set2`}/>
        {/* <img alt='monster' src={`https://i.pravatar.cc/200?img=${props.monster.id}`}/> */}
           <h2>{props.monster.name}</h2> 
           <h1>{props.monster.email}</h1>
        </div>
    )
}
