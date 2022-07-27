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

  const url = "http://localhost:8080/api/personel/add";
  const postData = () => {
    axios
      .post(url, {
        personel_ad,
        personel_soyad,
        is_baslangic_tarihi,
        dogum_tarihi,
      })
      .then(() => {
        history.push("icons/coreui-icons");
      });
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <a
              class="btn btn-primary"
              href="/#/icons/coreui-icons"
              role="button"
            >
              Personeller
            </a>
            <DocsExample href="components/card">
              <CCard style={{ width: "18rem" }}>
              <a href="/#/icons/coreui-icons"><CCardImage orientation="top" src={ReactImg} /></a>
                <CCardBody>
                  <CCardTitle>Personel Ekle</CCardTitle>
                  <CCardText></CCardText>
                  <form>
                    <div class="form-group">
                      <label>
                        Ad
                        <input
                          class="form-control"
                          type="text"
                          name="ad"
                          onChange={(e) => setPersonel_ad(e.target.value)}
                        />
                      </label>
                      <label>
                        Soyad
                        <input
                          class="form-control"
                          type="text"
                          name="soyad"
                          onChange={(e) => setPersonel_soyad(e.target.value)}
                        />
                      </label>
                      <label>
                        Başlama Tarihi
                        <input
                          class="form-control"
                          type="text"
                          name="baslama"
                          onChange={(e) =>
                            setİs_baslangic_tarihi(e.target.value)
                          }
                        />
                      </label>
                      <label>
                        Doğum Günü
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setDogum_tarihi(e.target.value)}
                        />
                      </label>
                      <label>
                        Birimi
                        <input class="form-control" type="text" name="birim" />
                      </label>
                      <br></br>

                      <br></br>
                      {/*     <form action="" method="post" enctype="multipart/form-data">
                        <input type="file" name="dosya" />
                        <br>
                        </br>
                        <br></br>
                      </form> */}
                      <input onClick={postData}class="btn btn-primary" type="submit" value="Ekle" />
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
