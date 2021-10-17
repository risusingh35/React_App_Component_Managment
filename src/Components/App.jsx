import HeadingFood from "./heading";
import ListItem from "./ListItem";
import "../CSS/styles.css";

export default function App() {
  return (
    <div className="App">
      {/* {HeadingFood()}//both medhot can be use to call a function by using name or tag name  */}
      <HeadingFood />
      <ListItem />
    </div>
  );
}
