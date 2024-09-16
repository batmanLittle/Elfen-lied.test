import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, selectedCard }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
