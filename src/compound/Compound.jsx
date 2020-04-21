import React from 'react';
import CompoundModal from '../components/CompoundModal';

function Compound(props) {
  return (
    <div>
      <CompoundModal>
        <CompoundModal.Content>
          <div>
            Hi there
          </div>
          <CompoundModal.CloseButton>Close me</CompoundModal.CloseButton>
        </CompoundModal.Content>
        <CompoundModal.OpenButton>Open me</CompoundModal.OpenButton>
      </CompoundModal>
    </div>
  );
}

export default Compound;