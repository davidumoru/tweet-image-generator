"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTASection from "./components/CTASection";

function App() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;
