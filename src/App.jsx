import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Customers from "./pages/Customers"
import Reports from "./pages/Reports"
import Integrations from "./pages/Integrations"
import YearEndSale from "./pages/YearEndSale"
import LastQuarter from "./pages/LastQuarter"
import CurrentMonth from "./pages/CurrentMonth"
import ordersData from "./orders.json"

function App() {
  const orders = ordersData;

  return (
    <div className="app">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Dashboard orders={orders} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/yearendsale" element={<YearEndSale />} />
          <Route path="/lastquarter" element={<LastQuarter />} />
          <Route path="/currentmonth" element={<CurrentMonth />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
