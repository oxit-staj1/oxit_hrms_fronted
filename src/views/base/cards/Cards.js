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
  let history = useNavigate();
  const [hizmet_ad, setHizmet_ad] = useState([]);
  
  const postData = () => {
      axios.post(`http://localhost:8080/api/hizmet/add`, {
          hizmet_ad,
      }).then(() => {
          history.push('/read')
      })
  }
  console.log(hizmet_ad)
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
