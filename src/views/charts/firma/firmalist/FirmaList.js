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

const FirmaEkle = () => {
  const [personel_id, setPersonel_id] = useState([]);
  const [yetkili_ad, setYetkili_ad] = useState([]);
  const [yetkili_soyad, setYetkili_soyad] = useState([]);
  const [cep_tel, setCep_tel] = useState([]);
  const [sabit_tel, setSabit_tel] = useState([]);
  const [vergi_dairesi, setVergi_dairesi] = useState([]);
  const [vergi_numarasi, setVergi_numarasi] = useState([]);
  const [email, setEmail] = useState([]);
  const [firma_il, setFirma_il] = useState([]);
  const [firma_ilce, setFirma_ilce] = useState([]);
  const [firma_adres, setFirma_adres] = useState([]);
  const [firma_not, setFirma_not] = useState([]);
  const [firma_domain_ad, setFirma_domain_ad] = useState([]);
  //yetkili_ad,yetkili_soyad,cep_tel,sabit_tel,
  //vergi_dairesi,vergi_numarasi,email,firma_il,firma_ilce,firma_adres,firma_not,
  //firma_domain_ad
  const url = "http://localhost:8080/api/firma/add";/*Burayı düzeltt*/
  const postData = () => {
    const response = axios.post(url, JSON.stringify({
      yetkili_ad,
      yetkili_soyad,
      cep_tel,
      sabit_tel,
      vergi_dairesi,
      vergi_numarasi,
      email,
      firma_il,
      firma_ilce,
      firma_adres,
      firma_not,
      firma_domain_ad
    }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
    console.log(yetkili_ad, yetkili_soyad, cep_tel, sabit_tel,
      vergi_dairesi, vergi_numarasi, email, firma_il,
      firma_ilce, firma_adres, firma_not, firma_domain_ad)
    console.log(response)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <a
              class="btn btn-primary"
              href="#"
              role="button"
            >
              Firmalar
            </a>
            <DocsExample href="components/card">
              <CCard style={{ width: "18rem" }}>
                <a href="#"><CCardImage orientation="top" src={ReactImg} /></a>
                <CCardBody>
                  <CCardTitle>Firma Ekle</CCardTitle>
                  <CCardText></CCardText>
                  <form>
                    <div class="form-group">

                      <label>
                        Firma Yetkilisinin Adı
                        <input
                          class="form-control"
                          placeholder="Yetkilinin adını giriniz"
                          type="text"
                          name="soyad"
                          onChange={(e) => setYetkili_ad(e.target.value)}

                        />
                      </label>
                      <label>
                        Firma Yetkilisinin Soyadı
                        <input
                          class="form-control"
                          placeholder="Yetkilinin soyadını giriniz"
                          type="text"
                          name="soyad"
                          onChange={(e) => setYetkili_soyad(e.target.value)}

                        />
                      </label>
                      <label>
                        Telefon Numarası
                        <input class="form-control"
                          placeholder="Telefon numarasını giriniz" type="text" name="Telefon Numarası"
                          onChange={(e) => setCep_tel(e.target.value)}

                        />
                      </label>
                      <label>
                        Firmanın Sabit Telefonu
                        <input
                          class="form-control"
                          placeholder="Sabit telefonu giriniz"
                          type="text"
                          name="Firmanın Sabit Telefonu"
                          onChange={(e) => setSabit_tel(e.target.value)}


                        />
                      </label>
                      <label>
                        Firma Domain Adresi
                        <input
                          class="form-control"
                          placeholder="Domain adresini giriniz"
                          type="text"
                          name="Firma Domain Adresi"
                          onChange={(e) => setFirma_domain_ad(e.target.value)}

                        />
                      </label>
                      <label>
                        Firma Adresi
                        <input
                          class="form-control"
                          placeholder="Firmanın adresini giriniz"
                          type="text"
                          name="Firma Adresi"
                          onChange={(e) => setFirma_adres(e.target.value)}

                        />
                      </label>
                      <label>
                        Firmanın Bulunduğu İl
                        <input
                          class="form-control"
                          placeholder="Firmanın ilini giriniz"
                          type="text"
                          name="Firmanın Bulunduğu İl"
                          onChange={(e) => setFirma_il(e.target.value)}

                        />
                      </label>
                      <label>
                        Firma Notu
                        <input
                          class="form-control"
                          placeholder="Firma notunu giriniz"
                          type="text"
                          name="not"
                          onChange={(e) => setFirma_not(e.target.value)}

                        />
                      </label>
                      <br></br>

                      <br></br>

                      <input onClick={postData} class="btn btn-primary" type="submit" value="Ekle" />
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

export default FirmaEkle;
