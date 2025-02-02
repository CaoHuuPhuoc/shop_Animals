import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';


class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
        {this.context.token === '' ?
            <div><Link to='/login'>Đăng nhập</Link> | <Link to='/signup'>Đăng ký</Link> | <Link to='/active'>Kích hoạt</Link></div>
            :
            <div>Xin chào <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Đăng xuất</Link> | <Link to='/myprofile'>Tài khoản</Link> | <Link to='/myorders'>Đơn đặt hàng</Link></div>
        }
        </div>
        <div className="float-right">
          <Link to='/mycart'>Giỏ hàng</Link> có <b>{this.context.mycart.length}</b> vật phẩm
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;