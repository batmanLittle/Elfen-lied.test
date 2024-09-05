import "./Main.css";
import InfoProduct from "../InfoProduct/InfoProduct";
import Categories from "../Categories/Categories";
import Marquees from "../Marquees/Marquees";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <main className="main">
      <InfoProduct />
      <Categories />
      <Marquees />
      <Blog />
      <Footer />
    </main>
  );
}

export default Main;
