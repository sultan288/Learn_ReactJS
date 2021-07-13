import React, { Component } from 'react'
import HomePage from './HomePage'
import LogIn from './LogIn'

class Conditional_rendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true   
        }
    }
    

    render() {

        const {isLoggedIn} = this.state

        return(
            <div>
                {isLoggedIn && <HomePage />}
            </div>
        )

       
    }
}

export default Conditional_rendering;