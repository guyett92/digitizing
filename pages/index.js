import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <Layout pageTitle="Digitzing Inc">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Service />
      <Contact />
      <Footer />
    </Layout>
  );
};
export default Index;
