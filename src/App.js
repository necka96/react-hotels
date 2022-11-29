import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./container/Footer";
import { About, Brands, Categorys, Header, Services } from "./container/index";
import Preloader from "./wraper/Preloader";

function App() {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setPreloader(false);
    }, 5000);

    return () => {
      clearTimeout(time);
      setPreloader(false);
    };
  }, []);

  return (
    <Preloader loading={preloader}>
      <Nav />
      <Header />
      <Brands />
      <About />
      <Categorys />
      <Services />
      <Footer />
    </Preloader>
  );
}

export default App;
