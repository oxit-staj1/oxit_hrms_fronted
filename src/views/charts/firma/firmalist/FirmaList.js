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

  const url = "http://localhost:8080/api/personel/add";/*Burayı düzeltt*/
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
                        Firma Tam Ünvanı
                        <input
                          class="form-control"
                          placeholder="Firmanın ünvanını giriniz"
                          type="text"
                          name="Firma Tam Ünvanı"
                        />
                      </label>
                      <label>
                        Firma Yetkilisinin Adı
                        <input
                          class="form-control"
                          placeholder="Yetkilinin adını giriniz"
                          type="text"
                          name="soyad"
                        />
                      </label>
                      <label>
                        Firma Yetkilisinin Soyadı
                        <input
                          class="form-control"
                          placeholder="Yetkilinin soyadını giriniz"
                          type="text"
                          name="soyad"
                        />
                      </label>
                      <label>
                        Firma Adresi
                        <input
                          class="form-control"
                          placeholder="Firmanın adresini giriniz"
                          type="text"
                          name="Firma Yetkilisi"
                        />
                      </label>
                      <label>
                        E-Mail
                        <input
                          class="form-control"
                          placeholder="E-Maili giriniz"
                          type="text"
                          name="E-Mail"
                        />
                      </label>
                      <label>
                        Telefon Numarası
                        <input class="form-control"
                          placeholder="Telefon numarasını giriniz" type="text" name="Telefon Numarası" />
                      </label>
                      <label>
                        Firmanın Sabit Telefonu
                        <input
                          class="form-control"
                          placeholder="Sabit telefonu giriniz"
                          type="text"
                          name="Firmanın Sabit Telefonu"
                        />
                      </label>
                      <label>
                        Firma Domain Adresi
                        <input
                          class="form-control"
                          placeholder="Domain adresini giriniz"
                          type="text"
                          name="Firma Domain Adresi"
                        />
                      </label>
                      <label>
                        Firma Adresi
                        <input
                          class="form-control"
                          placeholder="Firmanın adresini giriniz"
                          type="text"
                          name="Firma Adresi"
                        />
                      </label>
                      <label>
                        Firmanın Bulunduğu İl
                        <input
                          class="form-control"
                          placeholder="Firmanın ilini giriniz"
                          type="text"
                          name="Firmanın Bulunduğu İl"
                        />
                      </label>
                      <label>
                        Firmanın Bulunduğu İlçe
                        <input
                          class="form-control"
                          placeholder="Firmanın ilçesini giriniz"
                          type="text"
                          name="Firmanın Bulunduğu İlçe"
                        />
                      </label>
                      <label>
                        Vergi Dairesi
                        <input
                          class="form-control"
                          placeholder="Vergi dairesini giriniz"
                          type="text"
                          name="Vergi Dairesi"
                        />
                      </label>
                      <label>
                        Vergi Numarası
                        <input
                          class="form-control"
                          placeholder="Vergi Numarasını giriniz"
                          type="text"
                          name="Vergi Numarası"
                        />
                      </label><label>
                        Firma Notu
                        <input
                          class="form-control"
                          placeholder="Firma notunu giriniz"
                          type="text"
                          name="not"
                        />
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
