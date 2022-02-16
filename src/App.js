import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListPatient from "./components/ListPatient";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Form />
        <ListPatient />
      </main>
      <Footer />
    </div>
  );
}

export default App;
