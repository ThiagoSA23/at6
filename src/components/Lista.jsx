import { useContext } from 'react';
import { CtContext } from '../context/Ct';

const Car = (props) => {
  return <li>I am a {props.brand}</li>;
};

const Lista = () => {
  const [CtState, dispatch] = useContext(CtContext);
  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'CHANGE_STAGE' })}>
        Proximo
      </button>
    </>
  );
};

export default Lista;
