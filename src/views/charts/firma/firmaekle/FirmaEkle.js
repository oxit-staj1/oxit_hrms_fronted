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
  const [yetkili_id, setPersonel_id] = useState([]);
  const [yetkili_ad, setYetkili_ad] = useState([]);
  const [yetkili_soyad, setYetkili_soyad] = useState([]);
  const [cep_telefon, setCep_telefon] = useState([]);
  const [sabit_telefon, setSabit_telefon] = useState([]);
  const [vergi_dairesi, setVergi_dairesi] = useState([]);
  const [vergi_numarasi, setVergi_numarasi] = useState([]);
  const [e_mail, setE_mail] = useState([]);
  const [firma_il, setFirma_il] = useState([]);
  const [firma_ilce, setFirma_ilce] = useState([]);
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
      vergi_dairesi,
      vergi_numarasi,
      e_mail,
      firma_il,
      firma_ilce,
      firma_adres,
      firma_not,
      firma_domain_ad
    })
    console.log(yetkili_ad,yetkili_soyad,cep_telefon,sabit_telefon,vergi_dairesi,
                vergi_numarasi,e_mail,firma_il,firma_ilce,firma_adres,firma_not,firma_domain_ad)

  }
  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
          {/*   <a
              class="btn btn-primary"
              href="/#/icons/coreui-icons"
              role="button"
            >
              Personeller
            </a> */}
            <DocsExample href="components/card">
              <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardTitle>Personel Ekle</CCardTitle>
                  <CCardText></CCardText>
                  <form>
                    <div class="form-group">
                      <label>
                        Yetkili AD
                        <input
                          class="form-control"
                          type="text"
                          name="ad"
                          onChange={(e) => setYetkili_ad(e.target.value)}
                        />
                      </label>
                      <label>
                        Yetkili SOYAD
                        <input
                          class="form-control"
                          type="text"
                          name="soyad"
                          onChange={(e) => setYetkili_soyad(e.target.value)}
                        />
                      </label>
                      <label>
                        CEP TELEFONU
                        <input
                          class="form-control"
                          type="text"
                          name="baslama"
                          onChange={(e) =>
                            setCep_telefon(e.target.value)
                          }
                        />
                      </label>
                      <label>
                        SABİT TELEFON
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setSabit_telefon(e.target.value)}
                        />
                      </label>
                      <label>
                        VERGİ DAİRESİ
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setVergi_dairesi(e.target.value)}
                        />
                      </label>
                      <label>
                        VERGİ NUMARASI
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setVergi_numarasi(e.target.value)}
                        />
                      </label>

                      <label>
                        EMAİL
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setE_mail(e.target.value)}
                        />
                      </label>
                      <label>
                        İL
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setFirma_il(e.target.value)}
                        />
                      </label>
                      <label>
                        İLÇE
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setFirma_ilce(e.target.value)}
                        />
                      </label>
                      <label>
                        FİRMA ADRESİ
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setFirma_adres(e.target.value)}
                        />
                      </label>
                      <label>
                        FİRMA NOT
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setFirma_not(e.target.value)}
                        />
                      </label>
                      <label>
                        FİRMA DOMAİN AD
                        <input
                          class="form-control"
                          type="text"
                          name="birthday"
                          onChange={(e) => setFirma_domain_ad(e.target.value)}
                        />
                      </label>
                      <br></br>

                      <br></br>
                          
                      <input onClick={postData} type="submit" value="Ekle" />
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
