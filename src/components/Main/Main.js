import "./Main.css";
// import InfoProduct from "../InfoProduct/InfoProduct";
import Categories from "../Categories/Categories";
import Marquees from "../Marquees/Marquees";
import Blog from "../Blog/Blog";

function Main() {
  return (
    <main className="main">
      <Categories />
      <Marquees />
      <Blog />
    </main>
  );
}

export default Main;
