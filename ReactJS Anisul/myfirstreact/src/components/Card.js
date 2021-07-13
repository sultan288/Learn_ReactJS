// const todoTitle = "Call Family";
// const todoDesc = "Created by Md Tipu sultan";

// const headingStyle = {
//   color : "white",
//   backgroundColor : "purple",
//   textAlign : "center",
//   padding : "15px"
// }


const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
    const{titleText, descText} = props;
  return <div className="card">
            <h3 className="cardTitle">{titleText}</h3>
            <p className="cardDesc">{descText}</p>
            <p className="cardFooter">{dateName +"/"+ monthName +"/"+ currentYear}</p>
          </div>
}

export default Card;