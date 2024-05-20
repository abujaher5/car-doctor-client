import About from "./About/About";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import OurService from "./OurService/OurService";
import PopularProducts from "./PopularProducts/PopularProducts";
import OurTeam from "./Team/OurTeam";
import WhyChoseUs from "./WhyChoseUs/WhyChoseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <OurService></OurService>
      <PopularProducts></PopularProducts>
      <OurTeam></OurTeam>
      <WhyChoseUs></WhyChoseUs>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
