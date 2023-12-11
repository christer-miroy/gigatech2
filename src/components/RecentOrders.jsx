import PropTypes from "prop-types";

const RecentOrders = ({ orders = [], limit }) => {
  const recentOrders = orders.slice(0, limit);

  return (
    <div>
      <h2 className="text-lg font-semibold text-blue-500 mb-4">Recent orders</h2>
      <table className="min-w-full">
        <thead>
            <tr className="border-b text-left text-sm">
                <th>Date</th>
                <th>Name</th>
                <th>Ship To</th>
                <th>Payment Method</th>
                <th>Sale Amount</th>
            </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr key={index} className="border-b text-sm">
              <td>{order.date}</td>
              <td>{order.name}</td>
              <td>{order.shipTo}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.saleAmount}</td>
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