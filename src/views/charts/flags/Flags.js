import React from "react";
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
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [personel_id, setPersonel_id] = useState([]);
  const [personel_ad, setPersonel_ad] = useState([]);
  const [personel_soyad, setPersonel_soyad] = useState([]);
  const [is_baslangic_tarihi, setİs_baslangic_tarihi] = useState([]);
  const [dogum_tarihi, setDogum_tarihi] = useState([]);
  const [birimi, setBirimi] = useState([]);

  const url = "http://localhost:8080/api/personel/add";
  const postData = () => {
    axios
      .post(url, {
        personel_ad,
        personel_soyad,
        is_baslangic_tarihi,
        dogum_tarihi,
        birimi,
      })
  
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
        <CCardHeader>
            <strong>Personel Ekleme</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/card">
              <CCard style={{ width: "100%" }}>
                <CCardBody>
                  <CCardTitle></CCardTitle>

                  <form>
                    <div>
                      <div class="row">
                        <div class="col">
                          Ad
                          <input
                            class="form-control"
                            placeholder="Adını giriniz"
                            type="text"
                            name="ad"
                            onChange={(e) => setPersonel_ad(e.target.value)}
                          />
                        </div>
                        <div class="col">
                          Soyad
                          <input
                            class="form-control"
                            placeholder="Soyadını giriniz"
                            type="text"
                            name="soyad"
                            onChange={(e) => setPersonel_soyad(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          Başlama Tarihi
                          <input
                            class="form-control"
                            placeholder="Başlama tarihini giriniz"
                            type="text"
                            name="baslama"
                            onChange={(e) =>
                              setİs_baslangic_tarihi(e.target.value)
                            }
                          />
                        </div>
                        <div class="col">
                          Doğum Günü
                          <input
                            class="form-control"
                            placeholder="Doğum gününü giriniz"
                            type="text"
                            name="birthday"
                            onChange={(e) => setDogum_tarihi(e.target.value)}
                          />
                        </div>
                        <div class="col">
                          Birimi
                          <input
                            class="form-control"
                            placeholder="Birimini giriniz"
                            type="text"
                            name="birim"
                            onChange={(e) => setBirimi(e.target.value)}

                          />
                        </div>
                      </div>
                      <br></br>

                      <br></br>
                      {/*     <form action="" method="post" enctype="multipart/form-data">
                        <input type="file" name="dosya" />
                        <br>
                        </br>
                        <br></br>
                      </form> */}
                      <CButton color="secondary" onClick={postData} class="btn btn-primary">Ekle</CButton>
                    </div>
                  </form>
                </CCardBody>
                <CCardBody></CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Cards;
