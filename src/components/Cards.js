import React, {Component} from 'react'
import Card from './Card'

class Cards extends Component{	
	constructor(props){
		super(props)

		this.state = {
			totalProducts : 0,
			amountProducts : 0,	
			totalUsers : 0		
		}	
							
	}

	componentDidMount(){
		
		fetch("http://localhost:3030/api/products")			
		.then(results => results.json())
		.then(data =>{			
			this.setState({
				totalProducts : data.data.products.length,
				amountProducts : data.data.totalPrice,
				
			})
		})	

		fetch("http://localhost:3030/api/users")			
		.then(results => results.json())
		.then(data =>{			
			this.setState({
			totalUsers : data.data.totalUsers
				
			})
		})	
	}	

	render(){
    return(
        <div className="row">
			<Card tittle="Products in Data Base" number={this.state.totalProducts} styleComponent="primary" icon="clipboard-list"/>
			<Card tittle="Amount in products" number={this.state.amountProducts} styleComponent="success" icon="dollar-sign"/>
			<Card tittle="Users quantity" number={this.state.totalUsers} styleComponent="warning" icon="user-check"/>
	    </div>
    )
 }							
}

export default Cards
