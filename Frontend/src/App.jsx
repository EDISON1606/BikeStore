import { useState } from "react";
import Footer from "./components/footer/Footer";
Footer;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Footer />
    </>
  );
}

export default App;
