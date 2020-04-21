import React, { useState, useCallback, createContext, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


const ModalContext = createContext({});

function CloseButton({ children, ...otherProps }) {
  const { closeModal } = useContext(ModalContext);
  return <Button variant="contained" onClick={closeModal} {...otherProps}>{children}</Button>
}

function OpenButton({ children, onClick, ...otherProps }) {
  const { openModal } = useContext(ModalContext);
  return <Button variant="contained" onClick={openModal} {...otherProps}>{children}</Button>
}

function Content({ children }) {
  const { isOpen, closeModal } = useContext(ModalContext);

  if (isOpen) {
    return (<Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={{ minWidth: "300px", minHeight: "200px" }}>
        {children}
      </div >
    </Dialog>)
  }
  return null;
}

function CompoundModal({ initiallyIsOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(initiallyIsOpen);

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return <ModalContext.Provider value={{ isOpen, openModal, closeModal, setIsOpen }}>
    {children}
  </ModalContext.Provider>
}

CompoundModal.Content = Content;
CompoundModal.OpenButton = OpenButton;
CompoundModal.CloseButton = CloseButton;

export default CompoundModal;