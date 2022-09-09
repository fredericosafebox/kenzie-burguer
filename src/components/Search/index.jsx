import { WrapperForm } from "./styles";
import { FaSearch } from "react-icons/fa";

function Search({ width, setIsFiltered, setFilteredList, productList }) {
  const buttonText = "Pesquisar ";
  function handleSubmit(event) {
    event.preventDefault();
    const text = Array.from(event.target).find((element) => {
      return element.name === "search";
    });
    setIsFiltered(true);
    setFilteredList(
      productList.filter((product) => {
        return (
          product.prod.name.toLowerCase().includes(text.value.toLowerCase()) ||
          product.prod.category.toLowerCase().includes(text.value.toLowerCase())
        );
      })
    );
  }
  return (
    <WrapperForm>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digitar pesquisa" name="search"></input>
        <button type="submit">
          {width > 580 && buttonText}
          <FaSearch />
        </button>
      </form>
    </WrapperForm>
  );
}

export { Search };
