import React from 'react'
import '../App2.css'
import Tabla2 from './Tabla2';









class Tabla3 extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            deshabilitar: true,
            
                       
            posts: [],    
            data: [],
        }
        
       
        
    }
    

    componentDidMount() {
        const url = "https://api-dolares.herokuapp.com/api/tipo_cambio";
        fetch(url, {
            method: "GET"
          })
            .then((response) => {
                return response.json()
            }).then((posts) => {


                console.log("datos de cabecera");
                console.log(posts);
                this.setState({ posts: posts })

            })
            .catch(error => {
                console.error(error)
            });
        

    }


    render() {
        const datos = this.state.posts.map((posts, i) => {
            
            return (
                
                <Tabla2 fecha={posts.fecha} compra={posts.compra}  venta={posts.venta}   />
            )
        })
        
        
        
        return (
            
                
                
                <div>
                    

                    <div className="col-xs-9">
                        <div className="SplitPane row">
                            <div className="inline col-xs-5">
                                <table className="table-small">
                                    <thead>
                                        <tr>
                                            <th className="th">FECHA</th>
                                            <th className="th">COMPRA</th>
                                            <th className="th">VENTA</th>
                                            <th className="th">EDITAR</th>
                                            <th className="th">GUARDAR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {datos}
                                    </tbody>
                                </table>
                                
                            </div>
                            
                        </div>
                    </div>
                    <footer>
                    <div className="row center-xs centrar color">Proyecto SIGAP © 2019</div>
                </footer>
                </div>
                    
                    

                


                
            
        );
    }

}
export default Tabla3;