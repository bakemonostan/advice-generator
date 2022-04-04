import { ReactComponent as PatternDivider } from '../images/pattern-divider-desktop.svg';

// styles
import './Card.css';
function Card() {
  return (
    <div className='cardContainer'>
      <h3 className='advice'>Advice #</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
        quia.
      </p>
      <PatternDivider />
    </div>
  );
}

export default Card;
