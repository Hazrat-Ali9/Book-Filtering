import "./App.css";
import BookGrid from "./components/book/bookGrid";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import Navbar from "./components/ui/navbar";

function App() {
  return (
    <body className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header />
        <BookGrid />
      </main>
      <Footer />
    </body>
  );
}

export default App;

// Apps js
