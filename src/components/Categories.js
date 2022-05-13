import { useQuery, gql } from "@apollo/client";
function Categories() {
  const GetCategories = gql`
    {
      categories {
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(GetCategories);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul style={{display:'flex'}}>
      {data.categories.map((item) => (
        <li key={item.name} style={{margin:"10px",listStyle:"none"}}>{item.name}</li>
      ))}
    </ul>
  );
}
export default Categories;
