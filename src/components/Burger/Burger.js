import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
	console.log(props);
	let newIngredients = Object.keys(props.ingredients).map( igKey => {
			return [...Array(props.ingredients[igKey] )].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />
			});
		})
		.flat();
		
	if (newIngredients.length === 0) {
		newIngredients = <p>Please start adding ingredients!</p>
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="top-bread" />
			{newIngredients}
			<BurgerIngredient type="bottom-bread" />
		</div>
	);
};

export default burger;