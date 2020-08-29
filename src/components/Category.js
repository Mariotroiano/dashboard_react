import React, { Component } from 'react'


class Category extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body">
                        {this.props.item}
                    </div>
                </div>
            </div>
        )
    }
}

export default Category