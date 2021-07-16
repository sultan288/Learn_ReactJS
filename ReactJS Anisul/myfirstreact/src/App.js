//import React from "react";
//import Card from "./components/Card";
//import Data from "./data.json";
// import Card2 from "./components/Card2"
// import Card3 from "./components/Card3";
//import State from "./State"
//import ConditionalRendering from "./Conditional_Rendering/Index"
//import Event_Handler_Class from "./Event_Handler/index"
//import EventBinding from "./Event_Binding/EventBinding"
//import HooksUseState from "./Hooks_UseState/HooksState"
//import HooksUseStateUsingFnC from "./Hooks_UseState/HooksUseStateUsingFnC";
//import Form from "./Form/Form";
//import ShortEventHandler from "./Form/ShortEventHandler";
import Form_pr from './Form/Form_pr'

function App(){

    //console.log(Data[0].title);

    // let items = [];
    // for(let x = 0; x<Data.length; x++){
    //     items.push(<Card titleText={Data[x].title} descText ={Data[x].desc}/>)
    // }

    //    let items = []; 
    //    items = Data.map((item) => <Card titleText={item.title} descText ={item.desc}/>)

    return <div>
            <Form_pr />

           </div>
}

// {/* <h1 className="headingStyle">Todo App</h1>
//              {Data.map((item, index) => <Card key={index} titleText={item.title} descText ={item.desc}/>)} */}
              

export default App;