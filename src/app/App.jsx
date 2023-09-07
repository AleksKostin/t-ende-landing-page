import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import MainPage from '../pages/MainPage/MainPage';
import JsonData from '../data/data.json';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navbar />
      <MainPage data={landingPageData.MainPage} />
    </div>
  );
};

export default App;
