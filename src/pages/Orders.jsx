import Header from "../components/Header"
import RecentOrders from "../components/RecentOrders"
import Footer from "../components/Footer"
import allOrders from "../orders.json"

const Orders = () => {
  const pageTitle = "Orders"
  const orders = allOrders

  return (
    <div>
      <Header pageTitle={pageTitle} notificationCount={4} />
      <div className="bg-white p-5 m-5 shadow-lg">
        <RecentOrders orders={orders} />
      </div>
      <Footer />
    </div>
  )
}
export default Orders