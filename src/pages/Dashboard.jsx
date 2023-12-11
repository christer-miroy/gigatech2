import Graph from "../components/GRaph";
import Header from "../components/Header";
import RecentOrders from "../components/RecentOrders";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import RecentDeposits from "../components/RecentDeposits";

const Dashboard = ({orders}) => {
  const pageTitle = "Dashboard";
  const recentOrderLimit = 5;

  
  return (
    <>
      <Header pageTitle={pageTitle} notificationCount={4} />
      <div className="flex flex-col gap-4 m-1 p-4">
        <div className="flex gap-4">
          <div className="bg-white p-2 shadow-lg w-4/5">
            <Graph />
          </div>
          <div className="bg-white p-2 shadow-lg w-1/5">
            <RecentDeposits />
          </div>
        </div>
        <div className="bg-white p-3 shadow-lg">
          <RecentOrders orders={orders} limit={recentOrderLimit} />
          <Link to="/orders" className="block text-blue-500 text-sm mt-4 underline">See more orders</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard