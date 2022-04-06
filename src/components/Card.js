import { ReactComponent as PatternDivider } from '../images/pattern-divider-desktop.svg';
import { useEffect, useState } from 'react';
import { ReactComponent as Dice } from '../images/icon-dice.svg';

// styles
import './Card.css';

function Card() {
  const [randomAdvice, setRandomAdvice] = useState({
    id: '',
    advice: '',
  });
  const [isLoading, setIsLoadng] = useState(false);

  const fetchData = async () => {
    setIsLoadng(true);
    const response = await fetch('https://api.adviceslip.com/advice');
    const { slip } = await response.json();

    setRandomAdvice(slip);
    setIsLoadng(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getAdvice = () => {
    fetchData();
    console.log(randomAdvice.advice);
  };
  return (
    <div className='cardContainer'>
      {isLoading ? (
        <p style={{ color: 'hsl(150, 100%, 66%)' }}>Loading...</p>
      ) : (
        <>
          <h4 className='advice'>Advice #{randomAdvice.id}</h4>
          <p>{randomAdvice.advice}</p>
          <PatternDivider />
          <div className='diceContainer'>
            <Dice className='dice' onClick={getAdvice} />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
