import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe';
import Navbar from './Navbar.js';
import {Carousel} from 'antd' ;

const contentStyle= {
    height : '100px',
    color : 'black' ,
    lineHeight : '76px',
    textAlign : 'center' ,
    background : 'white' , 
    margin : "1% 30% 0% 30%" ,
    borderColor : "#ec307a" ,
    borderStyle : 'groove' 

}



class Cart extends Component{

    constructor(props)
     {
        super(props);
         this.state={
             cart : false
         }
     }

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
   
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: Rs{item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
        <div>
        <Navbar addedItems={addedItems}/>
        <Carousel autoplay>
            <div>
                <p style={contentStyle}>10% instant discount with ICICI bank credit card</p>
            </div>
            <div>
                <p style={contentStyle}>10% instant discount with SBI bank credit card</p>
            </div>
            <div>
                <p style={contentStyle}>10% instant discount with HDFC bank credit card</p>
            </div>
            <div>
                <p style={contentStyle}>10% instant discount with IDFC bank credit card</p>
            </div>


        </Carousel>
            <div className="container">
                
                <div className="cart">
                    <h5>Shipping Bag:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)