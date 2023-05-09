/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerContent">
            <div className="headerChild headerLogo">
                <i className="fa fa-biohazard"></i>
            </div>
            <div className="headerChild headerNav">
                <ul className="headerListNav">
                    <li className="headerItem"><a href="#" className="headerLink">trang chủ</a></li>
                    <li className="headerItem"><a href="#" className="headerLink">sản phẩm công nghệ</a></li>
                    <li className="headerItem"><a href="#" className="headerLink">tin tức công nghệ</a></li>
                    <li className="headerItem"><a href="#" className="headerLink">hỏi đáp</a></li>
                </ul>
            </div>
            <div className="headerChild headerSearch">
                <form action="">
                    <input type="text" placeholder='tìm kiếm'/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="headerChild headerUser">
                <div className="headerTemp">
                    <div id="user">
                        <a href="#">bolide panigale</a>
                        <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="headerButton">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addToCart">giỏ hàng (<input id='totalQuantity' value={0} disabled/>)<i className="fa fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
  }
}
