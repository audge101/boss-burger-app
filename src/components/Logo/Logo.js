import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
	<div className={classes.Logo}>
		<img src={burgerLogo} alt="Burger Boss" />
	</div>
);

export default logo;