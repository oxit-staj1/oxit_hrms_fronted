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
import FormControl from "src/views/forms/form-control/FormControl";

const Cards = () => {
  let history = useNavigate();
  const urlAdd= "http://localhost:8080/api/hizmet/add";

  const [hizmet_ad, setHizmet_ad] = useState([]);


  const getData = () => {
    axios.get(urlGet)
        .then((getData) => {
            setHizmets(getData.data.data);
        })
}
const urlGet = "http://localhost:8080/api/hizmet/getall";
const [hizmets, setHizmets] = useState([]);
useEffect(() => {
    axios.get(urlGet)
        .then((response) => {
            setHizmets(response.data.data);
            console.log(response.data.data)
        })
}, [])
  const postData = () => {

    const response = axios.post(urlAdd, JSON.stringify({ hizmet_ad }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {
        window.location.reload();
      })


  }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Hizmet Ekleme</strong>
          </CCardHeader>
          <CCard>
         
          
          
          </CCard>
        
          <CCardBody>
            <DocsExample href="components/card">
              <CCard style={{ width: "18rem" }}>
                <CCardBody>
                  <CCardTitle>
                    Eklemek İstediğiniz Hizmet Türünü Giriniz
                  </CCardTitle>
                  <CCardText></CCardText>
                  
                  <form className="create-form">
                  
                    <input
                      class="form-control"
                      placeholder="Hizmet adını giriniz"
                      onChange={(e) => setHizmet_ad(e.target.value)}
                    />
                    <br />
                    <button
                      class="btn btn-secondary btn-sm"
                      onClick={postData}
                      type="submit"
                      value="submit"
                    >
                      {" "}
                      Ekle{" "}
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

