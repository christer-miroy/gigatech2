import Footer from "../components/Footer";
import Header from "../components/Header";

const Reports = () => {
  const pageTitle = "Reports";

  return (
    <div>
      <Header pageTitle={pageTitle} notificationCount={4} />
      Reports
      <Footer />
    </div>
  )
}
export default Reports