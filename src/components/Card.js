import { ReactComponent as PatternDivider } from '../images/pattern-divider-desktop.svg';
import { ReactComponent as Dice } from '../images/icon-dice.svg';
import { useFetch } from '../hooks/useFetch';

// styles
import './Card.css';
function Card() {
  const { data, isPending, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  data.map((todo) => {
    return todo.tilte;
  });

  return (
    <div className='cardContainer'>
      <h4 className='advice'>Advice #</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
        quia.
      </p>
      <PatternDivider />
      <div className='diceContainer'>
        <Dice className='dice' />
      </div>
    </div>
  );
}

export default Card;
