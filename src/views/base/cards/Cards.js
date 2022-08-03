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
import { useNavigate } from "react-router-dom";
import HizmetList from "./HizmetList";

const Cards = () => {
  const url = "http://localhost:8080/api/hizmet/add";
  let history = useNavigate();

  const [hizmet_ad, setHizmet_ad] = useState([]);

  const postData = () => {
    const response = axios.post(url, JSON.stringify({ hizmet_ad }), {
      headers: { "Content-Type": "application/json" },
    });

    console.log(hizmet_ad);
    console.log(response);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Hizmet Ekleme</strong>
          </CCardHeader>
          <CCardBody style={{ width: "70%" }}>
            <DocsExample href="components/card">
              <CCard style={{ width: "100%" }}>
                <CCardBody>
                  <CCardTitle>
                    Eklemek İstediğiniz Hizmet Türünü Giriniz
                  </CCardTitle>

                  <form className="create-form d-flex justify-content-center">
                    <input
                      class="form-control"
                      placeholder="Hizmet adını giriniz"
                      onChange={(e) => setHizmet_ad(e.target.value)}
                    />
                    <br />
                    <button
                      class="btn btn-primary btn-sm"
                      onClick={postData}
                      type="sumbit"
                    >
                      Ekle
                    </button>
                  </form>
                </CCardBody>
              </CCard>
            </DocsExample>
            <HizmetList />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Cards;
