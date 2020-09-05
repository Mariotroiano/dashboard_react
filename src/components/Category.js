import React, { Component } from 'react'


class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor : '',
            border : ''

        }
    }    

    changeColor = (e)=> {
        if(this.state.bgColor == ""){
            this.setState({
                bgColor : 'gold',
               
            })
        }else{
            this.setState({
                bgColor : '',
                
            })
        }
      
       
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body change" onClick={ this.changeColor } style={{backgroundColor : this.state.bgColor}}  >
                        {this.props.item}
                    </div>
                </div>
            </div>
        )
    }
}

export default Category