import { StyledWrapper } from "./styles";

function Modal({ children, setModalOpen }) {
  function closeModal(event) {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  }
  return <StyledWrapper onClick={closeModal}>{children}</StyledWrapper>;
}

export { Modal };
