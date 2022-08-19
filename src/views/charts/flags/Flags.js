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
  CForm,
  CFormLabel,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import { DocsExample } from "src/components";

import ReactImg from "src/assets/images/react.gif";
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {

  //const { personel_id, personel_ad, personel_soyad,is_baslangic_tarihi,dogum_tarihi} = personel;

  const url = "http://localhost:8080/api/personel/getall";
  const [personels, setPersonels] = useState([]);

  useEffect((e) => {
    axios.get(url)
      .then((response) => {
        setPersonels(response.data.data);
        // console.log(response.data.data)
      })

  }, [])
  /*    const getData = () => {
         axios.get(url)
             .then((getData) => {
                 setPersonels(getData.data.data);
             })
     } */

  const [personel_ad, setPersonel_ad] = useState([]);
  const [personel_soyad, setPersonel_soyad] = useState([]);
  const [is_baslangic_tarihi, setİs_baslangic_tarihi] = useState([]);
  const [dogum_tarihi, setDogum_tarihi] = useState([]);
  const [departmans, setDepartmans] = useState([]);
  const [departman, setDepartman] = useState([]);
  const [departman_id, setDepartman_id] = useState([]);
  const [departman_ad, setDepartman_ad] = useState([]);
  //<Table.Cell>{personel.departman?.departman_ad}</Table.Cell>

  const [departmanId, setDepartmanId] = useState(departman_id.departman_id);
  const [departmanAd, setDepartmanAd] = useState(departman_ad.departman_ad);
  const [personelAd, setPersonelAd] = useState(personel_ad.personel_ad);
  const [personelSoyad, setPersonelSoyad] = useState(personel_soyad.personel_soyad);
  const [personelİsbaslangic, setPersonelİsbaslangic] = useState(is_baslangic_tarihi.is_baslangic_tarihi);
  const [personelDogumTarihi, setPersonelDogumTarihi] = useState(dogum_tarihi.dogum_tarihi)

  const postData = (e) => {
    //console.log(departman)
    //console.log(departman[0])
    const departmanId = departman[0];
    axios.post(`http://localhost:8080/api/personel/add`, JSON.stringify({
      personelAd,
      personelSoyad,
      personelİsbaslangic,
      personelDogumTarihi,
      departmanId

    }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
    /* .then(() => {
        history.push('icons/coreui-icons')
}) */
    console.log(personelAd,
      personelSoyad,
      personelİsbaslangic,
      personelDogumTarihi,
      departman,
    )

  }

  const urlDep = "http://localhost:8080/api/departman/getall";

  useEffect(() => {
    axios.get(urlDep)
      .then((response) => {
        setDepartmans(response.data.data);
        console.log(response.data.data)
      })
  }, [])
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
                            onChange={(e) => setPersonelAd(e.target.value)}
                          />
                        </div>
                        <div class="col">
                          Soyad
                          <input
                            class="form-control"
                            placeholder="Soyadını giriniz"
                            type="text"
                            name="soyad"
                            onChange={(e) => setPersonelSoyad(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          Başlama Tarihi
                          <input
                            class="form-control"
                            placeholder="Başlama tarihini giriniz"
                            type="date"
                            name="baslama"
                            onChange={(e) =>
                              setPersonelİsbaslangic(e.target.value)
                            }
                          />
                        </div>
                        <div class="col">
                          Doğum Günü
                          <input
                            class="form-control"
                            placeholder="Doğum gününü giriniz"
                            type="dateg"
                            name="birthday"
                            onChange={(e) => setPersonelDogumTarihi(e.target.value)}
                          />
                        </div>
                        <div class="col ">
                          Birimi
                          <select
                            onChange={(e) => setDepartman(e.target.value)}
                          >
                            {
                              departmans.map((departman) => (

                                <option
                                  key={departman.departman_id}

                                >
                                  {

                                    departman.departman_id + "  "
                                  }
                                  <span>
                                    {departman.departman_ad}

                                  </span>
                                </option>

                              ))
                            }
                          </select>
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
