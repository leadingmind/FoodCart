import "./styles.css";
import Head from "./components/head"
import Content from "./components/content"
import Foot from "./components/foot"
export default function App() {
  return (
    <div className="App">
      <Head />
      <Content />
      <Foot />
    </div>
  );
}
