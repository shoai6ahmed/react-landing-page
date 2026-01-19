import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClientSection from './components/ClientSection';
import FeatureSection from './components/FeatureSection';
import StatSection from './components/StatSection';
import PricingSection from './components/PricingSection';
import ReviewSection from './components/ReviewSection';
import ActionSection from './components/ActionSection';
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <ClientSection />

      <Banner title="Our Services" />

      <FeatureSection />
      <StatSection />
      <PricingSection />
      <ReviewSection />
      <ActionSection />
    </>
  );
}

export default App;