import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CMultiSelect } from '@coreui/react-pro'
import { DocsExample } from "src/components";
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'

const Alerts = () => {
  const urlFirma = "http://localhost:8080/api/firma/getall";
  useEffect(() => {
    axios.get(urlFirma)
      .then((response) => {
        setFirmas(response.data.data);
      })
  }, [])


  const urlHizmet = "http://localhost:8080/api/hizmet/getall";
  useEffect(() => {
    axios.get(urlHizmet)
      .then((response) => {
        setHizmets(response.data.data);
      })
  }, [])

  const urlDil = "http://localhost:8080/api/dil/getall";
  useEffect(() => {
    axios.get(urlDil)
      .then((response) => {
        setDils(response.data.data);
      })
  }, [])
  const [dil, setDil] = useState([])
  const [hizmet, setHizmet] = useState([])

  const [hizmets, setHizmets] = useState([]);
  const [dils, setDils] = useState([]);
  const [firmas, setFirmas] = useState([]);
  const [kdvsizFiyat, setKdvsizFiyat] = useState([]);
  const [kapora, setKapora] = useState([]);
  const [yillikYenilemeTutari, setYillikYenilemeTutari] = useState([]);
  const [sozlesmeBaslangicTarihi, setSozlesmeBaslangicTarihi] = useState([]);
  const [sozlesmeSonlandirmaTarihi, setSozlesmeSonlandirmaTarihi] = useState([]);
  const [firma, setFirma] = useState([])
  const postData = (e) => {

    const firmaId = firma[0]

    const dilId = dil[0]
    const hizmetId = hizmet[0]

    axios.post(`http://localhost:8080/api/sozlesme/add`, JSON.stringify({

      dilId,
      hizmetId,
      kdvsizFiyat,
      kapora,
      firmaId,
      yillikYenilemeTutari,
      sozlesmeBaslangicTarihi,
      sozlesmeSonlandirmaTarihi
    }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
    console.log(e.target.value)
    console.log(

      dilId,
      hizmetId,
      kdvsizFiyat,
      kapora,
      firmaId,
      yillikYenilemeTutari,
      sozlesmeBaslangicTarihi,
      sozlesmeSonlandirmaTarihi
    )

  }
  return (
    <CForm className="row mt-2 gx-3 gy-3 align-items-center">
      <CCol md={12} sm={3} >
        <h4> Firma Ad </h4>
        <CFormSelect onChange={(e) => setFirma(e.target.value)}>
          {
            firmas.map((firma) => (

              <option
                key={firma.firma_id}

              >

                <span>
                  {firma.firma_id + "  " + firma.yetkili_ad}

                </span>
              </option>

            ))
          }
        </CFormSelect >
      </CCol>

      <CCol md={6} sm={3} >
        <h4 >Hizmet AD </h4>

        <CFormSelect onChange={(e) => setHizmet(e.target.value)}>
          {
            hizmets.map((hizmet) => (
              <option key={hizmet.hizmet_id}>
                {hizmet.hizmet_id + " " + hizmet.hizmet_ad}
              </option>
            ))
          }
        </CFormSelect>
      </CCol>
      <CCol md={6} sm={3} >
        <h5 > Dil Ad </h5>

        <CFormSelect onChange={(e) => setDil(e.target.value)}>
          {
            dils.map((dil) => (
              <option key={dil.dil_id}>
                {dil.dil_id + " " + dil.dil_ad}
              </option>
            ))
          }
        </CFormSelect>
      </CCol>
      <br />
      <CCol md={4} sm={3}   >

        <h5 > Kdvsiz Fiyat </h5>

        <CFormInput id="specificSizeInputName" placeholder="kdvsiz" onChange={(e) => setKdvsizFiyat(e.target.value)} />
      </CCol>

      <CCol md={4} sm={3}  >
        <h5 > Kapora </h5>

        <CFormInput id="specificSizeInputName" placeholder="kapora " onChange={(e) => setKapora(e.target.value)} />
      </CCol>
      <CCol md={4} sm={3}  >
        <h5 > Yillik Yenileme Tutari </h5>
        <CFormInput id="specificSizeInputName" placeholder="yillik yenileme" onChange={(e) => setYillikYenilemeTutari(e.target.value)} />
      </CCol>

      <CCol md={6} sm={3}  >
        <h5 > Sozlesme Baslangic Tarihi </h5>
        <CFormInput id="specificSizeInputName" placeholder="sozlesme baslangic tarihi" onChange={(e) => setSozlesmeBaslangicTarihi(e.target.value)} />
      </CCol>
      <CCol md={6} sm={3}  >
        <h5 > Sozlesme Sonlandirma Tarihi</h5>
        <CFormInput id="specificSizeInputName" placeholder="sozlesme sonlandirma  tarihi" onChange={(e) => setSozlesmeSonlandirmaTarihi(e.target.value)} />
      </CCol>
      <br />
      <CCol xs="auto">
        <CButton type="submit" onClick={postData}>Submit</CButton>
      </CCol>
 
    </CForm>
  );
};

export default Alerts;
