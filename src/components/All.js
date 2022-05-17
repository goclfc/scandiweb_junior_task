import { useQuery, gql } from "@apollo/client";
import {ProductCard} from '../utils/utilities'
function AllProducts() {
  const GetProducts = gql`
  {
    categories{
        products{
          name:name
          id:id
          gallery:gallery
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GetProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data.categories[0].products)
  return (
    <div className="products-wrapper">
      {data.categories[0].products.map((products,i) => (
        
        <ProductCard 
          src={products.gallery[0]}
          about={products.name}
          price='50$'
          />
       
      ))}
    </div>
  );
}
export default AllProducts;