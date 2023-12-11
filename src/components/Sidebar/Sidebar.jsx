import { useState } from "react";
import "./sidebar.style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUsers, faFileAlt, faLayerGroup, faBarChart, faDashboard, faBars } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidebar ${isMinimized ? "minimized" : ""} flex flex-col gap-2 text-gray-500`}>
      <button onClick={toggleSidebar} className="toggle-btn flex justify-end py-3.5 px-8">
        {isMinimized ? <FontAwesomeIcon icon={faBars} className="justify-center" /> : "<"}
      </button>
      {!isMinimized && (
        <>
          <hr />
        </>
      )}
      <div className="content">
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/" className="flex gap-3 text-sm">
              {isMinimized ? (
                <FontAwesomeIcon icon={faDashboard} className="minimized-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faDashboard} />
                  Dashboard
                </>
              )}
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex gap-3 text-sm">
              {isMinimized ? (
                <FontAwesomeIcon icon={faShoppingCart} className="minimized-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Orders
                </>
              )}
            </Link>
          </li>
          <li>
            <Link to="/customers" className="flex gap-3 text-sm">
              {isMinimized ? (
                <FontAwesomeIcon icon={faUsers} className="minimized-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faUsers} />
                  Customers
                </>
              )}
            </Link>
          </li>
          <li>
            <Link to="/reports" className="flex gap-3 text-sm">
              {isMinimized ? (
                <FontAwesomeIcon icon={faBarChart} className="minimized-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faBarChart} />
                  Reports
                </>
              )}
            </Link>
          </li>
          <li>
            <Link to="/integrations" className="flex gap-3 text-sm">
              {isMinimized ? (
                <FontAwesomeIcon icon={faLayerGroup} className="minimized-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faLayerGroup} />
                  Integrations
                </>
              )}
            </Link>
          </li>
          <hr />
          {!isMinimized && (
            <>
              <p className="text-xs">Saved Reports</p>
            </>
          )}
          <li>
            <Link to="/currentmonth" className="flex gap-3 text-sm">
              {isMinimized ? (
                <FontAwesomeIcon icon={faFileAlt} className="minimized-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faFileAlt} />
                  Current Month
                </>
              )}
            </Link>
          </li>
          <li>
            <Link to="/lastquarter" className="flex gap-3 text-sm">
              {isMinimized ? (
                <FontAwesomeIcon icon={faFileAlt} className="minimized-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faFileAlt} />
                  Last Quarter
                </>
              )}
            </Link>
          </li>
          <li>
            <Link to="/yearendsale" className="flex gap-3 text-sm">
              {isMinimized ? (
                <FontAwesomeIcon icon={faFileAlt} className="minimized-icon" />
              ) : (
                <>
                  <FontAwesomeIcon icon={faFileAlt} />
                  Year End Sale
                </>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar