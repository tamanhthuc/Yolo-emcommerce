import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import policy from "../assets/fake-data/policy";

import PolicyCard from "../components/PolicyCard";
import MarginTopHeader from "../components/MarginTopHeader";
import Section, { SectionBody } from "../components/Section";
import { SectionSellMale } from "../components/SectionSellMale";
import Helmet from "../components/Helmet";
import InfinityList2 from "../components/InfinityList2";
import CheckBox from "../components/CheckBox";

import productData from "../assets/fake-data/catalog/femaleCatalog/products";
import category from "../assets/fake-data/catalog/femaleCatalog/category.js";
import colors from "../assets/fake-data/catalog/product-color";
import size from "../assets/fake-data/catalog/product-size";
import Container3 from "../components/Container3";

const Female = () => {
  const productList = productData.getAllProducts();

  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const [filter, setFilter] = useState(initFilter);

  const [products, setProducts] = useState(productList);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;

        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.color],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;

        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;

        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clearFilter = () => setFilter(initFilter);

  const filterRef = useRef(null);

  const [modal, setModal] = useState(false);

  const showHiderFiter = () => {
    filterRef.current.classList.toggle("active");
    setModal(!modal);
  };

  return (
    <Helmet title="s???n ph???m">
      <div className="container">
        <MarginTopHeader />
        <Section>
          <SectionBody>
            <Container3>
              {policy.map((item, index) => (
                <Link key={index} to="/policy">
                  <PolicyCard
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                </Link>
              ))}
            </Container3>
          </SectionBody>
        </Section>
      </div>
      <>
        <SectionSellMale title="S???N PH???M M???I RA M???T" />
      </>

      <div className="container">
        <div className="catalog">
          <div className="catalog__fliter" ref={filterRef}>
            <div
              className="catalog__fliter__close"
              onClick={() => showHiderFiter()}
            >
              <i className="bx bx-left-arrow-alt"></i>
            </div>

            <div className="catalog__fliter__widget">
              <div className="catalog__fliter__widget__title">
                <div className="catalog__fliter__widget__title__name">
                  danh m???c s???n ph???m
                </div>

                <div className="catalog__fliter__widget__title__icon">
                  <i className="bx bx-caret-down-circle"></i>
                </div>
              </div>

              <div className="catalog__fliter__widget__content">
                {category.map((item, index) => (
                  <div
                    key={index}
                    className="catalog__fliter__widget__content__item"
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("CATEGORY", input.checked, item)
                      }
                      checked={filter.category.includes(item.categorySlug)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="catalog__fliter__widget">
              <div className="catalog__fliter__widget__title">
                <div className="catalog__fliter__widget__title__name">
                  m??u s???c
                </div>
                <div className="catalog__fliter__widget__title__icon">
                  <i className="bx bx-caret-down-circle"></i>
                </div>
              </div>

              <div className="catalog__fliter__widget__content">
                {colors.map((item, index) => (
                  <div
                    key={index}
                    className="catalog__fliter__widget__content__item"
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("COLOR", input.checked, item)
                      }
                      checked={filter.color.includes(item.color)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="catalog__fliter__widget">
              <div className="catalog__fliter__widget__title">
                {" "}
                <div className="catalog__fliter__widget__title__name">
                  K??ch c???
                </div>
                <div className="catalog__fliter__widget__title__icon">
                  <i className="bx bx-caret-down-circle"></i>
                </div>
              </div>

              <div className="catalog__fliter__widget__content">
                {size.map((item, index) => (
                  <div
                    key={index}
                    className="catalog__fliter__widget__content__item"
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("SIZE", input.checked, item)
                      }
                      checked={filter.size.includes(item.size)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="catalog__fliter__widget">
              <div className="catalog__filter__widget__content">
                <div
                  className="catalog__fliter__widget__content__btn"
                  onClick={() => clearFilter()}
                >
                  X??a b??? l???c
                </div>
              </div>
            </div>
          </div>
          <div
            className="catalog__filter__toggle"
            onClick={() => showHiderFiter()}
          >
            <div className="catalog__filter__toggle__icon">
              <i className="bx bx-chevron-down"></i>
            </div>

            <div className="catalog__filter__toggle__name">B??? l???c</div>
          </div>
          <div className="catalog__content">
            <div className="catalog__content__title">
              N??? <span>({products.length} s???n ph???m) </span>
            </div>
            <div className="catalog__content__description">
              <span>Th???i trang nam</span> Yody mang l???i s??? h??a h???p v??? c?? t??nh,
              ??em l???i c???m gi??c tho???i m??i t??? b??n trong v?? t?? tin ??? b??n ngo??i v???i
              c??c s???n ph???m th???i trang qu???c d??n nh?? ??o polo, ??o thun,
              <span> ??o s?? mi</span>, qu???n ??u, qu???n jean v??{" "}
              <span>gi??y nam</span>.
            </div>

            <InfinityList2 data={products} />
          </div>
          {modal && (
            <div
              className="catalog__overlay"
              onClick={() => showHiderFiter()}
            ></div>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Female;
