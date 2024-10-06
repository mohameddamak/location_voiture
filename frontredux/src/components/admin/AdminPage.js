
import React from 'react';
import ControlledCarousel from '../Acceuil/Carousel';
import Sidebar from './Sidebar';
import MultipleCarousels from '../Acceuil/Carousel';
import VoitureCards from './VoitureCards';

function AdminPage() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ flex: 1 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 3 }}>
        <VoitureCards />
      </div>
    </div>
  );
}

export default AdminPage;
