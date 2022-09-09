import { StyledHeader } from "./styles";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { FaShoppingCart } from "react-icons/fa";

function Header({
  width,
  setModalOpen,
  setIsFiltered,
  setFilteredList,
  productList,
}) {
  function toggleModal() {
    setModalOpen(true);
  }
  return (
    <StyledHeader>
      <div className="app__header--content">
        <Logo primary={"Burguer"} secondary={"Kenzie"} />
        <Search
          width={width}
          setIsFiltered={setIsFiltered}
          setFilteredList={setFilteredList}
          productList={productList}
        />
        {width <= 1400 && (
          <div id="animationBox">
            <button id="cart" onClick={toggleModal}>
              <FaShoppingCart size={28} />
            </button>
          </div>
        )}
      </div>
    </StyledHeader>
  );
}

export { Header };
