
import React from 'react';
import Header from './components/Header';
import TrustBar from './components/TrustBar';
import Methodology from './components/Methodology';
import Advantages from './components/Advantages';
import TargetAudience from './components/TargetAudience';
import Modules from './components/Modules';
import Bonuses from './components/Bonuses';
import Checkout from './components/Checkout';
import Instructor from './components/Instructor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Header />
      <TrustBar />
      <Methodology />
      <Advantages />
      <TargetAudience />
      <Modules />
      <Bonuses />
      <Checkout />
      <Instructor />
      <Footer />
    </div>
  );
};

export default App;
