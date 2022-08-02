import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='App'>
      {/* Header */}
      <Header />
      {/* App Body */}
      <main className='main'>
        <Sidebar />
      </main>
      {/* Sidebar */}
      {/* Feed */}
    </div>
  );
}

export default App;
