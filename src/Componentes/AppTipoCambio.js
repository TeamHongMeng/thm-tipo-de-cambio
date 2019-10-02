import React, { Component } from 'react';
//import './App.css';
import '../App2.css'
import "react-table/react-table.css";
import Navegacion from './Navegacion';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';
import PropTypes from 'prop-types';
import Tabla from './Tabla';
import Tabla4 from './Tabla4';



class AppTipoCambio extends Component {

  render() {

    return (
      <div>
          <Tabla />
          <hr></hr>
          
          <Tabla4 />
          <div>
            
          </div>
      </div>

    );
  }

}



export default AppTipoCambio;





//Pago-row.js