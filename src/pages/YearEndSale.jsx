import Footer from "../components/Footer"
import Header from "../components/Header"

const YearEndSale = () => {
  const pageTitle = "Year End Sale"

  return (
    <div>
      <Header pageTitle={pageTitle} notificationCount={4} />
      YearEndSale
      <Footer />
    </div>
  )
}
export default YearEndSale