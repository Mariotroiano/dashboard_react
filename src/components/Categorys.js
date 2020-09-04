import React, { Component } from 'react'
import Category from './Category'


class Categorys extends Component {

    constructor(props){
        super(props)
        this.state = {
            categorys : []
        }
    }

    componentDidMount(){
		
        let url = "http://localhost:3030/api/products/categorys"
        fetch(url)			
        .then(results => results.json())
        .then(data =>{    
            this.setState({
               categorys : data.data.categorysName
                
            })
        })	

        let url2 = "http://localhost:3030/api/products/lastProduct"
        fetch(url2)
        .then(results => results.json())
        .then(data =>{
            console.log(data.data.products.name)
            this.setState({
                name: data.data.products.name,
                price: data.data.products.price,
                size: data.data.products.size,
                color: data.data.products.color
            })

        })
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Último producto cargado</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={"/images/shirt-icon.png"} alt="imagen"/>
                            </div>
                            <p>Descripción: {this.state.name}</p>
                            <p>Precio: $ {this.state.price}</p>
                            <p>Talle: {this.state.size}</p>
                            <p>Color: {this.state.color}</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Categorías en base de datos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {this.state.categorys.map((category, i) => <Category key={category + i} item={`${category}`} />)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Categorys 