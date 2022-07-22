// Importamos React Bootstrap:
import Button from 'react-bootstrap/Button';

// Importamos las funciones usadas:
import { useState } from "react";

// Colocamos valores defaults en los props "stock" e "initial", ya que si nos olvidamos de colocarlos en los productos, no funcionaría:
const ItemCount = ({ stock = 2, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const updateCount = (operator) => {
    if (operator === "remove" && count > 0) {
      setCount(count - 1);
    }
    if (operator === "add" && count < stock) {
      setCount(count + 1);
    }
  };

  const updateCountInput = (e) => {
    const { value } = e.target;
    if (value <= stock) {
      setCount(isNaN(value) ? 0 : parseInt(value));
    }
  };

  return (
    <>
        <div className="d-flex justify-content-center mt-3 mb-2">
        <Button variant="light" type="button" className="border-secondary" id="button-addon1"           
          onClick={() => updateCount("remove")}>
          -
        </Button>

        <input style={{ width: '2rem' }}
          onChange={(e) => updateCountInput(e)}
          placeholder=""
          value={count}
          type="number"
        />
        
        <Button variant="light" type="button" className="border-secondary"  id="button-addon2"         
          onClick={() => updateCount("add")}>
          +
        </Button>
        </div>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="button"
          onClick={() => onAdd(count)}
          disabled={count === "" || count === 0}
          >Agregar al Carrito!
          </Button>
        </div>    
    </>
  );
};

export default ItemCount;
