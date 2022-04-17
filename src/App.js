import logo from "./logo.svg";
import "./App.css";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import RouterComponent from "./routes/RouteComponent";
import PageSummary from "./pages/PageSummary";

function App() {
  return (
    <div className="">
      {/* <a href="/first">
        First Page
        <First pageName={"First"} />
      </a>
      <a href="/second">
        Second Page
        <Second pageName={"Second"} />
      </a>
      <a href="/third">
        Third Page
        <Third pageName={"Third"} />
      </a> */}
      <PageSummary />
      <RouterComponent />
    </div>
  );
}

export default App;
