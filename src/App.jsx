import "./App.css";
import Card from "./components/Home/Card/Card";
import DetailsCard from "./components/Home/Card/DetailsCard";
import Hero3 from "./components/Home/Card/Hero3";
import ReviewsSection from "./components/Home/Card/Reviews/ReviewsSection";
import Faq from "./components/Home/FAQ/Faq";
import Books from "./components/Home/Hero/Books";
import Hero from "./components/Home/Hero/Hero";
import Hero2 from "./components/Home/Hero/Hero2";
import QuoteBox from "./components/Home/QuoteBox/QuoteBox";
import ScrollBar from "./components/Home/ScrollBar/ScrollBar";
import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Header/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>

        <ScrollBar></ScrollBar>

        <Hero2></Hero2>

        <Card></Card>
        <QuoteBox></QuoteBox>
        <DetailsCard></DetailsCard>
        <Hero3></Hero3>
        <ReviewsSection></ReviewsSection>
        <Books></Books>

        <Faq></Faq>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
