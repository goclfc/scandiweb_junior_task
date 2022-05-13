import { useQuery, gql } from "@apollo/client";
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
    <ul style={{display:'flex'}}>
      {data.categories[0].products.map((products,i) => (
        <div key={products.id}> 
        <li key={products.name} style={{margin:"10px",listStyle:"none"}}>{products.name}</li>
        <img src={products.gallery[0]} style={{width:'100px'}} key={products.id}/>
        </div>
      ))}
    </ul>
  );
}
export default AllProducts;