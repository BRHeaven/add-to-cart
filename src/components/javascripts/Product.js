import React, { Component } from 'react'
import data from '../data/data.json';
import Card from '../props/Card';
import ModalCard from '../props/ModalCard';
import ModalCart from '../props/ModalCart';

export default class Product extends Component {
    state = {
        cart: [],
        objectForDetail: {}
    }
    setDeital = (object) => {
      return this.setState({objectForDetail : object});
    }
    removeQuantityCart = (value) => {
      let valueQuantityCart = document.querySelector("#totalQuantity").value;
      let valueNew = valueQuantityCart - value;
      document.querySelector("#totalQuantity").value = valueNew;
    }
    quantityInCart = (number) => {
      let valueOld = document.querySelector("#totalQuantity").value;
      let valueNew = parseInt(valueOld) + number;
      document.querySelector("#totalQuantity").value = valueNew;
    }
    addToCart = (product) => {
      let object = {id: product.id, name: product.name, src: product.src, price: product.price, quantity: 1};
      let index = this.state.cart.findIndex( obj => obj.id === object.id);
      if ( index !== -1 ) {
        this.state.cart[index].quantity += 1;
      } else {
        this.state.cart.push(object);
      }
      this.setState({cart: this.state.cart})
      return ;
    }
    removeCardInCart = (id) => {
      let index = this.state.cart.findIndex(object => object.id === id);
      this.removeQuantityCart(this.state.cart[index].quantity);
      if (index !== -1) {
        this.state.cart.splice(index,1);
      }
      this.setState({ cart : this.state.cart})
    }
    changeQuantity = (id, number) => {
      let index = this.state.cart.findIndex(product => product.id === id);
      if ( this.state.cart[index].quantity === 1  && number === -1) {
        return alert("không được nhỏ hơn 1");
      }
      if (index !== -1) {
        this.state.cart[index].quantity += number;
      }
      this.quantityInCart(number);
      this.setState({cart: this.state.cart});
    }
    renderProduct = (data) => {
        return data.map(( object, index) => {
            return <Card object={object} setDetail={this.setDeital} addToCart={this.addToCart} key={index}/>
        })
    }
    phone = this.renderProduct(data.phone);
    tablet = this.renderProduct(data.tablet);
    laptop = this.renderProduct(data.laptop);
    smartWatch = this.renderProduct(data.smartWatch);
  render() {
    return (
      <section>
        <div id='tabs'>
          <ul className="nav nav-pills" id="listNavProductTabs" role="tablist">
            <li className="tabsItem" role="presentation">
              <button className="nav-link active" id="arrayPhoneTab"
               data-bs-toggle="pill" data-bs-target="#arrayPhone"
               type="button" role="tab" aria-controls="arrayPhone" aria-selected="true">phone</button>
            </li>
            <li className="tabsItem" role="presentation">
              <button className="nav-link" id="arraySmartWatchTab"
                data-bs-toggle="pill" data-bs-target="#arraySmartWatch" 
                type="button" role="tab" aria-controls="arraySmartWatch" aria-selected="false">smart watch</button>
            </li>
            <li className="tabsItem" role="presentation">
              <button className="nav-link" id="arrayTabletTab"
                data-bs-toggle="pill" data-bs-target="#arrayTablet" 
                type="button" role="tab" aria-controls="arrayTablet" aria-selected="false">tablet</button>
            </li>
            <li className="tabsItem" role="presentation">
              <button className="nav-link" id="arrayLaptopTab"
               data-bs-toggle="pill" data-bs-target="#arrayLaptop"
               type="button" role="tab" aria-controls="arrayLaptop" aria-selected="false">laptop</button>
            </li>
          </ul>
          <div className="tab-content" id="listProductTabs">
            <div className="tab-pane fade show active" id="arrayPhone" role="tabpanel" aria-labelledby="arrayPhoneTab">
              <div className='tabContent'>{this.phone}</div>
            </div>
            <div className="tab-pane fade" id="arraySmartWatch" role="tabpanel" aria-labelledby="arraySmartWatchTab">
              <div className='tabContent'>{this.smartWatch}</div>
            </div>
            <div className="tab-pane fade" id="arrayTablet" role="tabpanel" aria-labelledby="arrayTabletTab">
              <div className='tabContent'>{this.tablet}</div>
            </div>
            <div className="tab-pane fade" id="arrayLaptop" role="tabpanel" aria-labelledby="arrayLaptopTab">
              <div className='tabContent'>{this.laptop}</div>
            </div>
          </div>
        </div>

        <ModalCard product={this.state.objectForDetail} total={this.totalQuantity} quantityInCart={this.quantityInCart}/>
        <ModalCart products={this.state.cart} remove={this.removeCardInCart} changeQuantity={this.changeQuantity}/>
      </section>
    );
  }
}
