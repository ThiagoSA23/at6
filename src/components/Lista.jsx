import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';


function Car(props) {
  return (
    <div className="car-container">
      <img src={props.image} alt={props.brand} className="car-image" />
      <p className="car-brand">{props.brand}</p>
    </div>
  );
}

function Modelos() {
  const [currentList, setCurrentList] = useState(0);

  const carLists = [
    { 
      title: 'Top 3 linguagens de programação', 
      cars: [
        { brand: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
        { brand: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
        { brand: 'PHP', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXalRyF7J7QRLkJfMwCMqA47UUDCFdHJ-dFQ&s' }
      ]
    },
    { 
      title: 'Top 3 linguagens mais complexas', 
      cars: [
        { brand: 'C++', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
        { brand: 'Assembly', image: 'https://logowik.com/content/uploads/images/media-assembly7210.jpg' },
        { brand: 'Haskell', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QUGGFE23wiomJrTMXYvhvflQbccKKclWnQ&s' }
      ]
    },
    { 
      title: 'Top 3 linguagens menos usadas', 
      cars: [
        { brand: 'COBOL', image: 'https://www.oriongovernance.com/wp-content/uploads/2022/08/Cobol.png' },
        { brand: 'Fortran', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg' },
        { brand: 'Ada', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyilLOZIApVJ1AIW9h7waOmkcCOzjtBdMzw&s' }
      ]
    }
  ];

  const handleNext = () => {
    setCurrentList((prevList) => prevList + 1);
  };

  return (
    <>
      {currentList < carLists.length ? (
        <>
          <h1>{carLists[currentList].title}</h1>
          <div className="car-list">
            {carLists[currentList].cars.map((car, index) => (
              <Car key={index} brand={car.brand} image={car.image} />
            ))}
          </div>
          <button onClick={handleNext}>
            {currentList === carLists.length - 1 ? 'Formulário' : 'Próxima'}
          </button>
        </>
      ) : (
        <div>
          <h1>Nos diga qual o seu favorito!</h1>
          {<Form/>}
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Modelos />);


export default List