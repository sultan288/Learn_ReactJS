//import React from "react";
//import Card from "./components/Card";
//import Data from "./data.json";
// import Card2 from "./components/Card2"
// import Card3 from "./components/Card3";
//import State from "./State"
import ConditionalRendering from "./Conditional_Rendering/Index"

function App(){

    //console.log(Data[0].title);

    // let items = [];
    // for(let x = 0; x<Data.length; x++){
    //     items.push(<Card titleText={Data[x].title} descText ={Data[x].desc}/>)
    // }

    //    let items = []; 
    //    items = Data.map((item) => <Card titleText={item.title} descText ={item.desc}/>)

    return <div>
          <ConditionalRendering />

            
           </div>
}

// {/* <h1 className="headingStyle">Todo App</h1>
//              {Data.map((item, index) => <Card key={index} titleText={item.title} descText ={item.desc}/>)} */}
              

export default App;