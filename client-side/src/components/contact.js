import React, { Component } from 'react'

const Contact = (props) => {
    //SET TIMEOUT FROM PAGE CONTACT TO ANOTHER PAGE ABOUT
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    
    return (
      <div>
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>1999 Baker St.</p>
            <p>Arlington, TX 76051-12234</p>
            <p>Phone: 214 564 8796</p>
        </div>
      </div>
    )
  }

export default Contact
