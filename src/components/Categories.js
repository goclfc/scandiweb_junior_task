import { useQuery, gql } from "@apollo/client";
import "./categories.css";
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
    <div className="categories-wrapper">
      <div className="categories-items">
      <ul style={{ display: "flex" }}>
        {data.categories.map((item) => (
          <li
            key={item.name}
            style={{ margin: "10px", listStyle: "none" }}
            className="categories-item"
          >
            {item.name}
          </li>
        ))}
      </ul>
      </div>
      <div className="header-logo">
        logo
      </div>
      <div className="header-cart">
        cart
      </div>
    </div>
  );
}
export default Categories;
