import Fragment from 'react';
import React from 'react';
import classes from './Header.module.css';
import MealsImg from '../../Assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
    return ( <div> 
        <header className={classes.header}>
            <h1>React meals</h1>
           <HeaderCartButton/>
        </header>

       <div className={classes['main-image']}>
       <img src={MealsImg}alt="This is a Food Image" />
       </div>
 </div>);
}
export default Header;
