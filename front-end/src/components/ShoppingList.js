import { useState } from "react";
import { plantList } from "../datas/plantList";
import "../style/ShopppingList.css";
import PlantItem from "./PlantItem";
function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    const [plantListdata, setplantList] = useState(plantList);
     return (
         <div className="jh-shopping-list">
             <button onClick={() => {
                 reset();
             }} >Reset</button>
       <label htmlFor="Categories">Select an Categories:</label>
      <select id="Categories" onChange={(event)=> filterBycategories(event.target.value)}>
        {categories.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

               <ul className="jh-plant-list">
                    {plantListdata.map(({ id, cover, name, water, light, price }) => (
                       <li  key={id}> <div>
                              <PlantItem id={id} name={name} cover={cover} water={water} light={light} price={price} />
                              <button onClick={() => addTocart(name, price)}>ADD</button>
                        </div>
                        </li> 
                    ))}
               </ul>
          </div>
    );
    
    function reset()
    {
        setplantList([...plantList])
    }

    function filterBycategories(categories)
    {
        let plantListFilter = plantList.filter(x => x.category === categories);
        console.log(plantListFilter);
        setplantList([...plantListFilter])
    }

    function addTocart(name, price) {
        if (Array.isArray(cart) )
        {
            let isHas = cart.find((plant) => plant.name === name);
          
            if (isHas) {
                 cart = cart.filter((plaint) => plaint.name !== name);
                 updateCart([...cart, { name, price, amount: isHas.amount + 1 }]);
           }
           else
                updateCart([...cart,{ name, price, amount: 1 }]);
          }
       
     }
}

export default ShoppingList;
