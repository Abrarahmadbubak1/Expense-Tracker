import HistoryItem from "./HistoryItem";

const History =() => {
    return(
        <>
         <h3>History</h3>
         
        <ul id="list" className="list">
        <HistoryItem credit={true} name="Salary"  value="50000"/>
        <HistoryItem credit={true} name="Website"  value="30000"/>
        <HistoryItem credit={true} name="Compnay"  value="40000"/>
        <HistoryItem credit={false} name="Rent"  value="500"/>
        <HistoryItem credit={false} name="Shopping"  value="5000"/>
        
        </ul>

        </>
    )
}
export default History;