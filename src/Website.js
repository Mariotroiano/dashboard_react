import React, { Component } from 'react';
import Nabvar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Cards from './components/Cards'
import Categorys from './components/Categorys'
import Table from './components/Table'


class Website extends Component {
  render() {
    return (

      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Nabvar />

            <div className="container-fluid">
              <Cards />

              <Categorys />
              <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
              <Table />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Website;
