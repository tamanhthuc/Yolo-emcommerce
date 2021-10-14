import React from "react";
import Helmet from "../components/Helmet";
import productData from "../assets/fake-data/catalog/femaleCatalog/products";
import ProductView from "../components/ProductView";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

const FemaleProduct = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);

  const relatedProducts = productData.getProducts(4);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <div className="container">
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>Khám phá thêm</SectionTitle>

          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default FemaleProduct;
