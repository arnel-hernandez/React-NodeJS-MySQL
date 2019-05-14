import React, { Component } from 'react'
import inteli9 from '../images/Corei9.jpg'
import AMDryzen7 from '../images/Ryzen7.jpg'

export class Products extends Component {

    state = {
        products: []
    }

    componentDidMount(){
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(res => {this.setState({products: res.data})})
        .catch(err => console.error(err))
      }

    render() {
      const { products } = this.state;
      const getAMD = products.filter(product => product.cpu_brand === 'AMD')
      const getIntel = products.filter(product => product.cpu_brand === 'Intel')
      console.log(getAMD)
      console.log(getIntel)
      
      const listProducts = getAMD.length ? (
        getAMD.map(product => {
            return (
            <div>
                <div className="col s12 m6">
                  <img className='' src={AMDryzen7} alt="" height={240} width={240} />
                  <h4>{product.cpu_brand} {product.cpu_name}</h4>
                </div>
            </div>
      )}))
      : 
      (
        <div className="center">No Posts Yet</div>
      );

      const listProducts2 = getIntel.length ? (
        getIntel.map(product => {
            return (
            <div>
              <div className="row">
                <div className="col s12 m6 l4">
                  <img className='' src={inteli9} alt="" height={240} width={240} />
                  <h4>{product.cpu_brand} {product.cpu_name}</h4>
                </div>
              </div>
            </div>
      )}))
      : 
      (
        <div className="center">No Posts Yet</div>
      );

      return (
          <div>
            <div className="center">
              <h1>Our Products</h1>
            </div>
          
            <div className="container">
              <div className="left">{listProducts}</div>
              <div className="right">{listProducts2}</div>
            </div>
          </div>
          )
        }
      }

export default Products