import React from 'react'
import '../App2.css'
import Swal from 'sweetalert2'


class Tabla2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deshabilitar: true,
            
            
            fecha: this.props.fecha,
            compra: this.props.compra,
            venta: this.props.venta

        }
        this.xd = this.xd.bind(this);
    }

    xd(){
        this.setState({
            deshabilitar:false
        })
        console.log("edita");

      /*var editImporte = this.props.importe.toString();
      var _importe_ = this.props.importe;
      document.getElementById(editImporte).value = _importe_;
      document.getElementById(editImporte).disabled = false;
      document.getElementById(editImporte).style.background = '#F2F2F2';
      document.getElementById(editImporte).focus();*/


    }


    guardarTipoCambio(event){

        console.log("guarda");
        
        
    
        
        


    }


    render() {

        return (
            <tr >
                    
                    <td className="td"> {this.props.fecha} </td>
                    <td className="td"><input className="center-align inp-auth" type="text" disabled={this.state.deshabilitar} placeholder={this.props.compra} ></input></td>
                    <td className="td"><input className="center-align inp-auth" 
                                        type="text" id={this.props.venta} 
                                        disabled={this.state.deshabilitar} 
                                        placeholder={this.props.venta}></input></td>                    
 
                    <td className="td"><a onClick={this.xd} className="waves-effect waves-light btn"><i className="large material-icons center grey-text text-lighten-5">edit</i></a></td>
                    <td className="td"><button className="waves-effect waves-light btn" type="submit" onClick={this.guardarTipoCambio}><i className="large material-icons center">save</i>
                                            </button></td>

                </tr>
        )
    }
}

export default Tabla2;
