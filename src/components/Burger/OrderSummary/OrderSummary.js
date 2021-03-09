import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	//Change to functional component
	componentDidUpdate() {
		console.log('Order summmary will update');
	}
	render () {
		const ingredientObject = Object.keys(this.props.ingredients);
		const ingredientSummary = ingredientObject.map(igKey => {
			return ( 
				<li key={igKey}>
					<span 
						style={{textTransform: 'capitalize'}}>{igKey}
					</span>: {this.props.ingredients[igKey]}
				</li>
		)});
		return (
			<Aux>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total price: {this.props.price.toFixed(2)} </strong></p>
				<p>Continue to Checkout?</p>
				<Button
					buttonType="Danger"
					clicked={this.props.purchaseCanceled}>CANCEL</Button>
				<Button
					buttonType="Success"
					clicked={this.props.purchaseContinued}>CONTINUE</Button>
			</Aux>
		);
	}

};

export default OrderSummary;