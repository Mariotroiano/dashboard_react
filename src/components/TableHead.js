import React, { Component } from 'react'

class TableHead extends Component {
    render() {
        return (
            <>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Color</th>
                        <th>Descripción</th>
                        <th>Talle</th>

                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Color</th>
                        <th>Descripción</th>
                        <th>Talle</th>
                    </tr>
                </tfoot>
            </>
        )
    }
}

export default TableHead