import React, { Component } from 'react'

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>$320,800</td>
                <td>
                    <ul>
                        <li>Category 01</li>
                        <li>Category 02</li>
                        <li>Category 03</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li><span class="text-danger">Red</span></li>
                        <li><span class="text-primary">Blue</span></li>
                        <li><span class="text-success">Green</span></li>
                    </ul>
                </td>
                <td>245</td>
            </tr>
        )
    }
}

export default TableRow