import { useContext, useEffect } from 'react';
import { CtContext } from './context/Ct';
import './App.css';
import Lista from './components/Lista';
import Lista2 from './components/Lista2';
import Forms from './components/Forms';

const App = () => {
  const [CtState, dispatch] = useContext(CtContext);
  return (
    <div>
      {CtState.Stage === 'First' && <Lista />}
      {CtState.Stage === 'Second' && <Lista2 />}
      {CtState.Stage === 'Third' && <Forms />}
    </div>
  );
};

export default App;
