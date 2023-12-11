import Footer from "../components/Footer";
import Header from "../components/Header";

const CurrentMonth = () => {
  const pageTitle = "Current Month";

  return (
    <div>
      <Header pageTitle={pageTitle} notificationCount={4} />
      Current Month
      <Footer />
    </div>
  )
}
export default CurrentMonth