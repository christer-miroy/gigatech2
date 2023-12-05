import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
const Header = ({pageTitle, notificationCount}) => {
  return (
    <div className="flex justify-between items-center bg-blue-500 text-white py-4 px-8 shadow-lg">
        <h1 className='text-xl font-semibold'>{pageTitle}</h1>
        <FontAwesomeIcon icon={faBell} />
        {
         notificationCount > 0 && (
            <div className="absolute top-5 right-5 bg-purple-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {notificationCount}
            </div>)
        }
    </div>
  )
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  notificationCount: PropTypes.number.isRequired
}

export default Header