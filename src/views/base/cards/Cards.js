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
  const url = "http://localhost:8080/api/hizmet/add"
  let history = useNavigate();
  const [hizmet_ad, setHizmet_ad] = useState([])

  const postData = () => {
    axios.post(url, {
      hizmet_ad
    }).then(() => { history.push('/read') })
  }

  

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
                <CCardBody>
                  <CCardTitle>
                    Eklemek İstediğiniz Hizmet Türünü Giriniz
                  </CCardTitle>
                  <CCardText></CCardText>
                  <form className="create-form">
                    <label>Hizmet AD </label>
                    <input placeholder='hizmet adınnı giriniz' onChange={(e) => setHizmet_ad(e.target.value)} />
                    <button onClick={postData} type='sumbit'> Ekle </button>
                  </form>
                </CCardBody>
              </CCard>
            </DocsExample>
            <HizmetList/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Cards;