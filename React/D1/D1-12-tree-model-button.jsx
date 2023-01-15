// ./src/components/Navbar.js
// ... previous import stays unchanged
 
import Button from './Button';
 
class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <p>React - Components & props</p>
        <Button />
        <Button />
      </nav>
    );
  }
}
 
export default Navbar;