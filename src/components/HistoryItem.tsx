import { validateHeaderValue } from "http";

const HistoryItem = ( {name,value,credit}: any) => {
    return(
        <>
         <li className={credit==true?"plus": "minus"}>
          {name} <span>${value}</span><button className="delete-btn">x</button>
        </li>
        </>
    )
}
export default HistoryItem;