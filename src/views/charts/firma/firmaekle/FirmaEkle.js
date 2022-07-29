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
  const [yetkili_id, setYetkili_id] = useState([]);
  const [yetkili_ad, setYetkili_ad] = useState([]);
  const [yetkili_soyad, setYetkili_soyad] = useState([]);
  const [cep_telefon, setCep_telefon] = useState([]);
  const [sabit_telefon, setSabit_telefon] = useState([]);
  const [firma_adres, setFirma_adres] = useState([]);
  const [firma_not, setFirma_not] = useState([]);
  const [firma_domain_ad, setFirma_domain_ad] = useState([]);

  //yetkili_ad,yetkili_soyad cep_telefon sabit_telefon,vergi_dairesi,
  //vergi_numarasi,e_mail,firma_il,firma_ilce,firma_adres,firma_not,firma_domain_ad
  const url = "http://localhost:8080/api/firma/add";
  const postData = () => {
    axios.post(url, {
      yetkili_ad,
      yetkili_soyad,
      cep_telefon,
      sabit_telefon,
      firma_adres,
      firma_not,
      firma_domain_ad,
    });
    console.log(
      yetkili_ad,
      yetkili_soyad,
      cep_telefon,
      sabit_telefon,
      firma_adres,
      firma_not,
      firma_domain_ad,
    );
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
        <CCardHeader>
            <strong>Firma Ekleme</strong>
          </CCardHeader>
          <CCardBody>
            {/*   <a
              class="btn btn-primary"
              href="/#/icons/coreui-icons"
              role="button"
            >
              Personeller
            </a> */}
            <DocsExample href="components/card">
              <CCard style={{ width: "100%" }}>
                <CCardBody>
                  <form>
                    <div class="row">
                      <div class="col">
                        Yetkili Ad
                        <input
                          class="form-control"
                          placeholder="Yetkili adını giriniz"
                          type="text"
                          name="ad"
                          onChange={(e) => setYetkili_ad(e.target.value)}
                        />
                      </div>
                      <div class="col">
                        Yetkili Soyad
                        <input
                          class="form-control"
                          placeholder="Yekili soyadını giriniz"
                          type="text"
                          name="soyad"
                          onChange={(e) => setYetkili_soyad(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        Cep Telefonu
                        <input
                          class="form-control"
                          placeholder="Cep telefonunu giriniz"
                          type="text"
                          name="baslama"
                          onChange={(e) => setCep_telefon(e.target.value)}
                        />
                      </div>
                      <div class="col">
                        Sabit Telefon
                        <input
                          class="form-control"
                          placeholder="Sabit telefon numarasını giriniz"
                          type="text"
                          name="birthday"
                          onChange={(e) => setSabit_telefon(e.target.value)}
                        />
                      </div>

                      <div class="col">
                        Firma Adresi
                        <input
                          class="form-control"
                          placeholder="Firma adresini giriniz"
                          type="text"
                          name="birthday"
                          onChange={(e) => setFirma_adres(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        Firma Domain
                        <input
                          class="form-control"
                          placeholder="Domaini giriniz"
                          type="text"
                          name="birthday"
                          onChange={(e) => setFirma_domain_ad(e.target.value)}
                        />
                      </div>
                      <div class="col">
                        Firma Not
                        <input
                          class="form-control"
                          placeholder="Notu giriniz"
                          type="text"
                          name="birthday"
                          onChange={(e) => setFirma_not(e.target.value)}
                        />
                      </div>
                    </div>
                    <br></br>

                    <br></br>

                    <input onClick={postData} type="submit" class="btn btn-primary" value="Ekle" />
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
