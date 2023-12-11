import Footer from "../components/Footer";
import Header from "../components/Header";


const Customers = () => {
  const pageTitle = "Customers";

  return (
    <div>
      <Header pageTitle={pageTitle} notificationCount={4} />
      Customers
      <Footer />
    </div>
  )
}
export default Customers