import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// var images = require.context('../images', true);

export class Home extends Component {

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
    //LEFT LIST
    const listProducts = getIntel.length ? (
      getIntel.map(product => {
        console.log(product)
        // let img_src = images('./Corei'+product.idcpu_products+'.jpg');
        return (
          <div key={product.cpu_id}>
          <div class="row">
          <div class="col s12 m7">
            <div className="card-content">
              <img src={require('../images/'+ product.cpu_imagePath)} alt={product.cpu_name} width={240} height={240} />
              {/* //PUT LINK TO TITLE WITH ID */}
              <Link to={'/' + product.cpu_id}>
                <span className="card-title">{product.cpu_brand} {product.cpu_name}</span>
              </Link>
              <p>{product.cpu_ram_compatibility}</p>
              {/* <img src={img_src} alt={product.cpu_name} width={240} height={240}/>
              <img src={require('../images/Corei'+ product.idcpu_products +'.jpg')} alt={product.cpu_name} width={240} height={240} /> */}
            </div>
            </div>
           </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Posts Yet</div>
    );

    //RIGHT LIST
    const listProducts2 = getAMD.length ? (
      getAMD.map(product => {
        return (
          <div key={product.cpu_id}>
            <div className="row">
              <div className="col s12 m7">
                <div className="card-content">
                  <img src={require('../images/'+ product.cpu_imagePath)} alt={product.cpu_name} width={240} height={240} />
                  {/* //PUT LINK TO TITLE WITH ID */}
                    <Link to={'/' + product.cpu_id}>
                      <span className="card-title">{product.cpu_brand} {product.cpu_name}</span>
                    </Link>
                  <p>{product.cpu_ram_compatibility}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Posts Yet</div>
    );

    return (
      <div>
        <div className="center"><h1>Latest Products</h1></div>
          <div className="container">
            <div className="left">{listProducts}</div>
            <div className="right">{listProducts2}</div>
          </div>
      </div>
    )
  }
}

export default Home