import "../style/PlantItems.css";
import CareScale from "./CareSale";
function PlantItem({ name, cover, id, water, light  , price}) {
     return (
		<div className='jh-plant-item' >
			<span className='jh-plant-item-price'>{price}€</span>
			<img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</div>
	)
}



export default PlantItem;
