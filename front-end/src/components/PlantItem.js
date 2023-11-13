import "../style/PlantItems.css";
import CareScale from "./CareSale";
function PlantItem({ name, cover, id, water, light  , price}) {
     return (
		<li className='jh-plant-item' onClick={() => handleClick}>
			<span className='jh-plant-item-price'>{price}€</span>
			<img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick(plantName) {
	alert(`You want to buy 1 ${plantName}? Very good choice 🌱✨`)
}

export default PlantItem;
