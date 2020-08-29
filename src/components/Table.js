import React, { Component } from 'react'
import TableHead from './TableHead'

class Table extends Component {

constructor(props){
    super(props)
    this.state = {
        products : []
    }
}
componentDidMount(){
		
    let url = "http://localhost:3030/api/products"
    fetch(url)			
    .then(results => results.json())
    .then(data =>{    
        this.setState({
           products : data.data.products
            
        })
    })	
}	
    

    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" >
                            <TableHead />
                                <tbody>
                            {this.state.products.map((prod, i) => 
                                <tr key={prod + i}>
                                    <td>{prod.name}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.color}</td>
                                    <td>{prod.description} </td>                                       
                                    <td>{prod.size}</td>     
                                                 
                                </tr>
                                )}
                            </tbody>

                            

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table