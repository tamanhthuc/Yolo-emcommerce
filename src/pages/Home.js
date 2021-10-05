import React from "react";
import policy from "../assets/fake-data/policy";
import heroSliderData from "../assets/fake-data/hero-slide";
// import productData from "../assets/fake-data/home/all-productData";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Banner from "../components/Banner";
import ImgStore from "../components/ImgStore";

import Section, { SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";

// import { setProducts } from "../redux/actions/productAction";
import { SectionSellBest } from "../components/SectionSellBest";
import { SectionSellMale } from "../components/SectionSellMale";
import { SectionSellFemale } from "../components/SectionSellFemale";
import { SectionSellChild } from "../components/SectionSellChild";
import Container3 from "../components/Container3";

const Home = () => {
  // const products = useSelector((state) => state.AllProducts.products);

  // const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   dispatch(setProducts(productData.getAllProducts()));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <Helmet title="Trang chủ">
      {/* hero-slider */}

      <HeroSlider data={heroSliderData} />
      {/* end hero slider */}

      {/* policycard */}
      <div className="container">
        <Section>
          <SectionBody>
            <Container3>
              {policy.map((item, index) => (
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  key={index}
                />
              ))}
            </Container3>
          </SectionBody>
        </Section>
      </div>

      {/* end policy card */}

      {/* best selling home */}

      <SectionSellBest />

      <SectionSellMale
        title="THỜI TRANG NAM"
        description="Thời trang nam Yody mang lại sự hòa hợp về cá tính, đem lại cảm giác thoải mái từ bên trong và tư tin ở bên ngoài với các sản phẩm thời trang quốc dân như áo polo, áo thun, áo sơ mi, quần âu, quần jean và giày nam."
      />

      <SectionSellFemale title="sản phẩm hot" />

      <Banner />

      <SectionSellChild />

      <ImgStore />
    </Helmet>
  );
};

export default Home;
