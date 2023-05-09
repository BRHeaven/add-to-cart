import React from "react";

export default function ModalCart(props) {
  const renderCart = () => {
    return props.products.map((object, index) => {
      return ( 
      <tr className="cardCart" key={index}>
        <td>
          <p>{object.id}</p>
        </td>
        <td>
          <img src={object.src} alt={index} />
        </td>
        <td>
          <p>{object.name}</p>
        </td>
        <td>
          <p>{object.price.toLocaleString()}</p>
        </td>
        <td>
          <div className="quantity">
            <button className="addQuantity" onClick={()=>{props.changeQuantity(object.id, 1)}}>+</button>
            <p>{object.quantity}</p>
            <button className="reduceQuantity" onClick={()=>{props.changeQuantity(object.id,-1)}}>-</button>
          </div>
        </td>
        <td>
          <p>{(object.price * object.quantity).toLocaleString()}</p>
        </td>
        <td>
          <button onClick={() => {props.remove(object.id)}}>xoá</button>
        </td>
      </tr>
      );
    });
  }
  const totalPrice = () => {
    let total = 0; 
    for ( let i = 0; i < props.products.length; i++ ) {
      total += (props.products[i].price * props.products[i].quantity);
    }
    return total.toLocaleString();
  }
  return (
    <section>
      <div className="modal fade" id="addToCart"
        data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
        aria-labelledby="modalTitleAddToCart" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleAddToCart">Giỏ Hàng</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
            </div>
            <div className="modal-body">
              <table className="modalCart">
                <thead>
                  <tr className="title">
                    <th>
                      <p>mã</p>
                    </th>
                    <th>
                      <p>tên</p>
                    </th>
                    <th>
                      <p>hình ảnh</p>
                    </th>
                    <th>
                      <p>giá hàng</p>
                    </th>
                    <th>
                      <p>số lượng</p>
                    </th>
                    <th>
                      <p>tổng tiền</p>
                    </th>
                    <th>
                      <p></p>
                    </th>
                  </tr>
                  {renderCart()}
                  <tr className="cardCart">
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p>{totalPrice()}</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thanh Toán</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
