import React, { Component, useState } from 'react'


export default function Form_pr() {

    const [count, setCount] = useState(0)
    const handleIncrement = () =>{
        setCount(count + 1)
    }
    


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}



// export default class Form_pr extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count : 0
//         }
//     }

//     handleClick = () =>{
//        this.setState({
//         count: this.state.count + 1
//        })
//     }
    

//     render() {
//         const {count} = this.state
    
//         return (
//             <div>
//                 <h1>{count}</h1>
//                 <button onClick={this.handleClick}>Increment</button>
                
//             </div>
//         )
//     }
// }
