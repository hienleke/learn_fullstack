import { plantList } from "../datas/plantList";
import '../style/ShopppingList.css'
import PlantItem from "./PlantItem";
function ShoppingList({ updateCart}) {
    return (
        <div>
          <ul className='jh-plant-list' >
                {plantList.map(
                    ({id , cover , name ,water , light}) => (
                        <PlantItem id={id} name={name} cover={cover} water={water} light={ light} />
                    ))
               }
                
            </ul>
        </div>

     );
}

export default ShoppingList;
