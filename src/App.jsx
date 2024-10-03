import { useContext, useEffect } from 'react';
import { CtContext } from './context/Ct';
import './App.css';
import Forms from './components/Forms';
import Lista from './components/Lista';
import Lista2 from './components/Lista2';

const App = () => {
  const [CtState, dispatch] = useContext(CtContext);
  return (
    <div>
      {CtState.Stage === 'First' && <Forms />}
      {CtState.Stage === 'Second' && <Lista />}
      {CtState.Stage === 'Third' && <Lista2 />}
    </div>
  );
};

export default App;
