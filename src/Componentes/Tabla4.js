import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import ReactTable from "react-table";
//import './App2.css';

class Tabla4 extends Component {

    constructor(props) {
        super(props);
    
        this.state = {  
          posts: [],    
          data: [],
          refrescar: false
          
        };
        
        this.renderEditable = this.renderEditable.bind(this);
      }
      renderEditable(cellInfo) {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.state.data];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ data });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.data[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
      }
    
      handleSubmit = e => {
        this.setState({ value: this.textInput.current.value})
      }
    
      mostrarInput() {
        alert("boton presionado");
        //const { showMe } = this.state;
        //this.setState({ showMe: !showMe })
      }
    
      fomulario(e){
        const prueba = e.target.value
        console.log(prueba)
        
      }
    
      componentDidMount() {
        const url = "https://api-dolares.herokuapp.com/api/tipo_cambio";
        fetch(url, {
          method: "GET"
        }).then(response => response.json()).then(posts => {
          this.setState({ posts: posts, data : posts })
        })
      }
    
    
      onclick(event) {
        console.log(event.target.type);
    
      }
    


    render() {
        

        const columns = [
            {
                Header: <b>Fecha</b>,
                accessor: "fecha",
                style: {
                    textAlign: "center"
                },
                width: 150,
                maxWidth: 100,
                minWidth: 100,
                sortable: false,
                filterable: true,
                Filter: ({filter, onChange}) => (
                  <input type='text'
                         placeholder="yyyy-mm-dd"
                         value={filter ? filter.value : ''}
                         onChange={event => onChange(event.target.value)}
                  />
                )

            },
            {
                Header: <b background-color="red">Compra</b>,
                Cell: this.renderEditable,
                accessor: "compra",
                style: {
                    textAlign: "center",

                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                sortable: false,
                filterable: false
            },
            {
                Header: <b>Venta</b>,
                accessor: "venta",
                Cell: this.renderEditable,
                style: {
                    textAlign: "center",

                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                sortable: false,
                filterable: false
            },

            
            {
                Header: <b>Guardar</b>,
                accessor: "guardar",
                Cell: props => {
                    return (
                        <a className="waves-effect waves-light btn-small"
                            onClick={() => {
                                console.log(props);
                                const data = {

                                    fecha: props.original.fecha,
                                    compra: props.original.compra,
                                    venta: props.original.venta
                                }

                                axios.put("https://tcs-tipocambio.herokuapp.com/actualizarFecha/"+data.fecha, data)
                                    .then(data => {
                                        console.log("llego xd");
                                        Swal.fire("Good job!", "You clicked the button!", "success").then(function () {
                                            window.location.reload();
                                        });

                                        //window.location.reload();
                                    }).catch(err => {
                                        console.log("aggg")
                                        Swal.fire("Oops, Algo salió mal!!", "", "error")
                                        //window.location.reload();                 



                                    })
                            }}><i className="material-icons center">save</i></a>
                    )
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                sortable: false,
                filterable: false
            },
        ]

        return (
          <div>
            
            <div className="vistaTabla">
              
                <h4>Fechas de pagos en dolares con Tipo de cambio</h4>
                <ReactTable
                    columns={columns}
                    data={this.state.posts}
                    filterable
                    noDataText={"No hay pagos"}
                    defaultPageSize={7}


                /></div>
          </div>
            
        );

    }
}

export default Tabla4;