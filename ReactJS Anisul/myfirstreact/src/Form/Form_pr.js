import React, { useState } from 'react'


export default function FormPr() {

    const [user, setUser] = useState({name: '', email: '', password: ''})
    const {name, email, password} = user

    const handleChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value})
    } 

    const handleSubmit = (e) =>{
        console.log("Form is submitter");
        console.log(user);
        e.preventDefault();
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={name} onChange={handleChange} />

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={email} onChange={handleChange}/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={handleChange} />

                <button type="submit">Registration</button>
                </div>
            </form>
        </div>
    )
}



// export default function Form_pr() {

//     const [count, setCount] = useState(0)
//     const handleIncrement = () =>{
//         setCount(count + 1)
//     }
    


//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleIncrement} disabled={count===7 ? true : false}>Increment</button>
//         </div>
//     )
// }



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
