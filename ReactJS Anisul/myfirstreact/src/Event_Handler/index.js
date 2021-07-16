import React, { Component } from 'react'

class Event_Handler_Class extends Component {

    // handleClick = () => {
    //     console.log("Clicked");
    // }
 

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }
    

    handleChange = (e) => {
        
        this.setState({
            changedValue : e.target.value
        }, ()=>{
            console.log(this.state.changedValue)
        })

        //Here callback function is used

        
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <p>{this.state.changedValue}</p>
                <button onClick={this.handleClick} >Click Here</button>
            </div>
        )
    }
}

export default Event_Handler_Class