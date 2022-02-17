import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Form />
        <ListPatients />
      </main>
      <Footer />
    </div>
  );
}

export default App;
