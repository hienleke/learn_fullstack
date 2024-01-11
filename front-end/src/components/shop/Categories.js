import { plantList } from "../../datas/plantList";
function Category() {
     const Categories = plantList.reduce((acc, plaint) => (acc.includes(plaint.category) ? acc : acc.concat(plaint.category)), []);
     return (
          <ul>
               {Categories.map((category) => (
                    <li key={category.id}>{category}</li>
               ))}
          </ul>
     );
}

export default Category;
