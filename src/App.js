import "./App.css";

import PreLoader from "./components/preloader/PreLoader";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <PreLoader />
      <div className={`App bg-[#f9f4ed]`}>
        <HomePage />
      </div>
    </>
  );
}

export default App;
