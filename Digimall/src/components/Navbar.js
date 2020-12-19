import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Dropdown } from "antd";


const { SubMenu } = Menu;
const menu = (
  
    <Menu>
      <Menu.Item key="4"> <Link  style={{ "color": "#ec307a" }}> Orders </Link></Menu.Item>
      <Menu.Item key="3"><Link  style={{ "color": "#ec307a" }}>Saved Address</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/" style={{ "color": "#ec307a" }}>Log Out</Link></Menu.Item>
    </Menu>
    
);
class Navbar extends Component{

    constructor(props)
    {
       super(props);
        this.state={
            addedItems : props.addedItems
        }
    }

    render(){
        console.log("added items" , this.state.addedItems)
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link className="brand-logo" style={{"color" : "black"}}>DigiMall</Link>
                    
                    <ul className="right">
                        
                        <li><Link to="/dashboard" style={{"color" : "black"}}>Products</Link></li>
                      
                        <li style={{"marginTop" : "5px"}}><Link to="/cart" style={{"color" : "black"}}>
                            <div style={{"display" : "flex"}}><i className="material-icons">shopping_cart</i>
                            <span style={{"marginTop" : "-14px"}}  >{this.state.addedItems && this.state.addedItems.length > 0 && this.state.addedItems.length}</span></div></Link></li>
                        <li style={{"marginTop" : "5px"}}> <Dropdown overlay={menu}  trigger={['click']} >
                            <i className="material-icons" style={{"color" : "black"}} >person</i></Dropdown></li>

                    </ul>
                </div>
            </nav>
   
        
    )
}
}



export default Navbar;