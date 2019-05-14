import React, { Component } from 'react'

export class Posts extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        let id = this.props.match.params.post_id
        fetch('http://localhost:5000/product/' + id)
      //   , {
      //     method: "GET", // *GET, POST, PUT, DELETE, etc.
      //     mode: "no-cors", // no-cors, cors, *same-origin
      //     headers: { "Content-Type": "application/json", },
      //     redirect: "follow", // manual, *follow, error
      //     referrer: "no-referrer" // no-referrer, *client
      // })
        .then(res => res.json())
        .then(res => {this.setState({products: res.data})
        console.log(res)})
      }

  render() {
    const { products } = this.state;
    console.log(products)
    const productDetail = products ? (
        products.map(product => {
        return(
        <div className="post">
            <h4 className="center">{product.cpu_brand} {product.cpu_name}</h4>
            <img src={require('../images/'+ product.cpu_imagePath)} alt={product.cpu_name} width={240} height={240} />
            <p>Cores: {product.cpu_cores}</p>
            <p>Ghz: {product.cpu_ghz}</p>
            <p>{product.cpu_turboghz}</p>
            <p>{product.cpu_memory}</p>
            <p>{product.cpu_ram_compatibility}</p>
        </div>
        )
      })
    ) : (
        <div className="container">Loading post...</div>
    )
    return (
      <div className='container'>
        {productDetail}
      </div>
    )
  }
}

export default Posts
