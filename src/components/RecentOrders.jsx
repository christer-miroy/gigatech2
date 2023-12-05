import PropTypes from "prop-types";

const RecentOrders = ({ orders = [], limit }) => {
  const recentOrders = orders.slice(0, limit);

  return (
    <div>
      <h2 className="text-xl font-semibold text-blue-500">Recent orders</h2>
      <table className="min-w-full">
        <thead>
            <tr className="border-b text-left">
                <th className="p-3">Date</th>
                <th className="p-3">Name</th>
                <th className="p-3">Ship To</th>
                <th className="p-3">Payment Method</th>
                <th className="p-3">Sale Amount</th>
            </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{order.date}</td>
              <td className="p-3">{order.name}</td>
              <td className="p-3">{order.shipTo}</td>
              <td className="p-3">{order.paymentMethod}</td>
              <td className="p-3">{order.saleAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

RecentOrders.propTypes = {
    orders: PropTypes.array.isRequired,
    limit: PropTypes.number
  };

export default RecentOrders;