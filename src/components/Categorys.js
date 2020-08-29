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
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src="/images/product_dummy.svg" alt="imagen"/>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                            <a target="_blank" rel="nofollow" href="/">View product detail</a>
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