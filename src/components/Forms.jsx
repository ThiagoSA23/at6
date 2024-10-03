import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CtContext } from "../context/Ct";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ''}
          onChange={handleChange}
        />
      </label>
      <button onChange={() => dispatch({ type: 'CHANGE_STAGE' })}>Proximo</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default Forms;
