import React from 'react';
import CompoundModal from '../components/CompoundModal';

function BasicModal({ children, showClose = true }) {
  return (
    <CompoundModal>
      <CompoundModal.Content>
        {children}
        {showClose && <CompoundModal.CloseButton>Close me</CompoundModal.CloseButton>}
      </CompoundModal.Content>
      <CompoundModal.OpenButton>Open me</CompoundModal.OpenButton>
    </CompoundModal>
  );
}

export default BasicModal;