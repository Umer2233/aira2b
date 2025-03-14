import GoToTop from "../utils/GoToTop";
import Footer from "../layouts/Footer";
import Terms from "../components/Terms";
import { useLocation, Navigate } from 'react-router-dom';
import { useEffect } from "react";

const TermsPage = () => {

  const location = useLocation();

  const myLoader = () => {

    window.location.replace('https://')

    const userLocation = location.pathname;
    if (userLocation === '/terms_&_conditions') {
      window.location.href = "https://aira2b.info/terms-conditions";
      // alert('Yess');
      // <Navigate to='https://aira2b.info/terms-conditions' />
    } else {
      // alert('noooo')
    }
  };

  useEffect(() => {
    myLoader();
  }, [])


  return (
    <>
      <Terms />
      <Footer />
      <GoToTop />
    </>
  );
};

export default TermsPage;
