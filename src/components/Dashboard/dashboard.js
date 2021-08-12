import React from 'react'
import {NavLink,Route,Switch} from "react-router-dom";
import AddProduct from './AddProduct';
import ListProduct from './ListProduct';

export default function Dashboard() {

    
    return (
       <> 

            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-2">
                        <ul className="list-group">
                            <li className="list-group-item"> <NavLink to="/dashboard/add-product"> Add Product </NavLink> </li>
                            <li className="list-group-item"><NavLink to="/dashboard/list-product"> List Product </NavLink></li>
                            <li className="list-group-item"><NavLink to=""> Logout </NavLink></li>                            
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <Switch>
                            <Route path="/dashboard/add-product" component={AddProduct} />
                            <Route path="/dashboard/list-product" component={ListProduct} />
                         </Switch>
                    </div>
                </div>
            </div>

       </>
    )
}
