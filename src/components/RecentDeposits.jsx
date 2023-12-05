import { Link } from "react-router-dom"

const RecentDeposits = () => {
  return (
    <div className="h-40 w-40 float-left flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-blue-500">Recent Deposits</h2>
        <p className="text-3xl">$3,024.00</p>
        <p className="text-gray-500">on 15 March, 2019</p>
        
        <Link
            to="/reports"
            className="text-blue-500 block mt-[80px]"
        >
            View Balance
        </Link>
    </div>
  )
}
export default RecentDeposits