import { plantList } from "../datas/plantList";
import '../style/ShopppingList.css'
import PlantItem from "./PlantItem";
function ShoppingList({ updateCart}) {
    return (
        <div>
          <ul className='jh-plant-list' >
                {plantList.map(
                    ({id , cover , name ,water , light, price}) => (
                        <PlantItem id={id} name={name} cover={cover} water={water} light={light} price={price}  />
                    ))
               }
                
            </ul>
        </div>

     );
}

export default ShoppingList;
