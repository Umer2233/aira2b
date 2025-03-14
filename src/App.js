import MainRoutes from "./routes";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  const userLocation = location.pathname;
  if (userLocation === '/terms_&_conditions') {
    window.location.href = "https://aira2b.info/terms-conditions"
  } else if (userLocation === '/privacy_policy') {
    window.location.href = "https://aira2b.info/privacy-policy"
  } else if (userLocation === '/media_&_investors') {
    window.location.href = "https://aira2b.info/media-investors"
  } else if (userLocation === '/contact_us') {
    window.location.href = "https://aira2b.info/contact-us"
  } else {
    return <MainRoutes />;
  }
}

export default App;
