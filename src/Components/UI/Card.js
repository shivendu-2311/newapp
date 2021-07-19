import React from 'react';
import classes from "./Card.module.css";
import AvailableMeal from '../Meals/AvailableMeal';


const Card=(props)=>{


{
    return (
<div className={classes.card}>
    {props.children}
</div>
    );
}


}
export default Card;