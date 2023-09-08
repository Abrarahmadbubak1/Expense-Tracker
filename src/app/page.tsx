import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Header from "@/components/Header";
import History from "@/components/History";
import IncomeExpense from "@/components/IncomeExpense";


export default function Home() {
  return (
<>
    <Header />
    <div className="container">
    <Balance />
    <IncomeExpense />
    <History />
    <AddTransaction />
    </div>
</>
  )
}
