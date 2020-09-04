import React, { Component } from 'react'


class Category extends Component {
    constructor(props) {
        super(props)
    }
    
    changeColor() {
        document.querySelector("#change-color").style.backgroundColor = "gold"
        document.querySelector("#change-color").style.border = "gold"
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body"  id="change-color"  onClick={ this.changeColor }>
                        {this.props.item}
                    </div>
                </div>
            </div>
        )
    }
}

export default Category