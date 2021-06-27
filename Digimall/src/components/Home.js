import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import Navbar from './Navbar.js';
import { message, Modal ,  Avatar, Card, Button, Carousel  } from 'antd';

const { Meta } = Card;
const ContentStyle = {
 height : '202px',
 color : '#fff',
marginTop : "1%"

}


 class Home extends Component{
     constructor(props)
     {
        super(props);
         this.state={
             addedtoCart : false,
             addedItems : [],
             data : []
         }
     }
    
    handleClick = (id , title)=>{

        this.props.addToCart(id); 
        this.setState({addToCart : true })
        this.state.addedItems.push({"title" : title})
        message.success(title + ' added successfully to cart !!!');
    }

    showModal = (items) => {

        this.setState({
            visible: true, 
        });
        
        console.log("data" , items)
        if(this.state.data.length >0)
            this.state.data.splice(0, 1)
      
            this.state.data.push(items)
    };

    handleOk = e => {
        console.log(e);
        this.forceUpdate();
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render(){
       
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <a><img src={item.img} style={{width : "50%" , marginLeft : "18%"}} alt={item.title} onClick={()=>{this.showModal(item)}}/></a>
                            <span className="card-title">{item.title}</span>
                            {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id , item.title)}}> {!this.state.addedtoCart ? <i className="material-icons">add</i> : "Added"} </span> */}
                        </div>

                        <div className="card-content">
                           
                            <p><b>Price: Rs.{item.price}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div>
            <Navbar />
            <Carousel autoplay>
                { this.props.items.map(item => 
                    <div>
                        <h3 style={ContentStyle}> <img src= {item.img} style={{width : "12%" , marginLeft : "43%"}} /></h3>
                    </div>

                )}


            </Carousel>


            <div className="containerHome" >
                
                <h4 className="center" style={{"marginTop" : "20px"}}  >Biggest Offers of Sale test dev</h4>
                <div className="box">
                    {itemList}
                </div>
            </div>
            <Modal
                    title="Product Details"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                   {this.state.data && this.state.data.map(i =>

                        <Card class="cardStyle" style={{ width: "100%" }} >
                            <Meta
                                avatar={
                                        <Avatar src={i.img}  style={{ width: "81px" , height : "70px" }} />
                                }
                                title={i.title}
                                description={i.desc}

                            />
                            <p style={{  marginLeft: 40 , marginTop: 10 }}>Price: Rs.{i.price}</p>
                            <Button to="/" onClick={()=> {this.handleClick(i.id , i.title)}}>Add to Cart </Button>
                        </Card>
                        )}
            </Modal>



            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)