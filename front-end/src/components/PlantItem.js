import "../style/PlantItems.css";
import CareScale from "./CareSale";
function PlantItem({ name, cover, id, water, light }) {
    
  
     return (
         <li id={id} className='jh-plant-item' >
             <img    className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
             {name}
             <div>
                 <CareScale careType='water'  scaleValue={water}/>
                 <CareScale  careType='light'  scaleValue={light} />
               </div>
          </li>
     );
}

export default PlantItem;
