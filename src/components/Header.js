import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({ title, onAdd, showAdd }) => {

// const onClick = () => {
//     console.log('click me')
// }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

// This is the for the type casting the input
// Header.propTypes = {
//   title: propTypes.string,
// };

export default Header;
