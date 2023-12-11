import Footer from "../components/Footer";
import Header from "../components/Header";

const LastQuarter = () => {
  const pageTitle = "Last Quarter";

  return (
    <div>
      <Header pageTitle={pageTitle} notificationCount={4} />
      LastQuarter
      <Footer />
    </div>
  )
}
export default LastQuarter