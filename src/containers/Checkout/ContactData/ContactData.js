import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false
	}

	orderHandler = (e) => {
		e.preventDefault();
		this.setState({loading: true});
		const order = {
			ingredients: this.props.ingredients,
			price: this.state.price,
			customer: {
				name: 'Audge Flem',
				address: {
					street: 'Teststreet 1',
					zipcode: '12345',
					country: 'United States'
				},
				email: 'audge@audge.audge'
			},
			deliveryMethod: 'fastest'
		}
		axios.post('/orders.json', order)
			.then( response => {
				this.setState({loading: false});
				this.props.history.push('/');
			} )
			.catch( err => { 
				this.setState({loading: false});
			} );
	}

	render() {
		let form = (
			<form>
				<input className={classes.Input} type="text" name="name" placeholder="Your Name" />
				<input className={classes.Input} type="email" name="email" placeholder="Your email" />
				<input className={classes.Input} type="text" name="street" placeholder="Street" />
				<input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
				<Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}

		return (
			<div className={classes.ContactData}>
				<h4>Enter Your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;