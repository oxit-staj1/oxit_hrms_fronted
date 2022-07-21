import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from "@coreui/react";
import { DocsExample } from "src/components";

import ReactImg from "src/assets/images/react.gif";
import HizmetService from "src/service/hizmetService";

const Cards = () => {
  const [hizmets, setHizmets] = useState({});

  useEffect(() => {
    const hizmetService = new HizmetService();
    hizmetService.getHizmet().then((result) => setHizmets(result.data.data));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setHizmets({ hizmet_ad: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/hizmet/add", hizmets)
      .then((response) => {
        console.log(response.status);
      });
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Hizmet</strong> <small>Ekleme</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/card">
              <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardTitle>
                    Eklemek İstediğiniz Hizmet Türünü Giriniz
                  </CCardTitle>
                  <CCardText></CCardText>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="hizmet ad ">
                      Hizmet Ad :
                      <input
                        class="form-control"
                        type="text"
                        name="hizmetAd"
                        value={hizmets.hizmet_ad}
                        onChange={handleChange}
                      />
                    </label>
                    <button class="btn btn-light" type="submit">
                      Ekle
                    </button>
                  </form>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Cards;
