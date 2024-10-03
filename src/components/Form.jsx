import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Form() {
  const [inputs, setInputs] = useState({
    username: '',
    age: '',
    manufacturer: '',
    L: ''
  });

  const LOptions = {
    topLinguagem: ['JavaScript', 'Python', 'PHP'],
    MaisComplexas: ['C++', 'Assembly', 'Haskell'],
    MenosUsada: ['COBOL', 'Fortran', 'Ada']
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert("Obrigado volte sempre!"); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
       Nome:
        <input 
          type="text" 
          name="username" 
          value={inputs.username} 
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
     Idade:
        <input 
          type="number" 
          name="age" 
          value={inputs.age} 
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
      Categoria da Linguagem:
        <select 
          name="manufacturer"
          value={inputs.manufacturer} 
          onChange={handleChange} 
          required
        >
          <option value="">Selecione</option>
          <option value="topLinguagem">Top 3 Linguagens</option>
          <option value="MaisComplexas">Mais Complexas</option>
          <option value="MenosUsada">Menos Usadas</option>
        </select>
      </label>
      <br />

      {inputs.manufacturer && (
        <label>
          Escolha seu Linguagem favorita:
          <select 
            name="L"
            value={inputs.L} 
            onChange={handleChange} 
            required
          >
            <option value="">Selecione uma linguagem</option>
            {LOptions[inputs.manufacturer].map((LOption, index) => (
              <option key={index} value={LOption}>
                {LOption}
              </option>
            ))}
          </select>
        </label>
      )}
      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Form />);
export default Form