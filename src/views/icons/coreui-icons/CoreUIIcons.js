import React, { useState, useEffect } from "react";
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
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from "@coreui/react-chartjs";
import axios from "axios";

const Cards = () => {
  const url = "http://localhost:8080/api/personel/getall";
  const [personels, setPersonels] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setPersonels(response.data.data);
        console.log(response.data.data)
      })
  }, [])

  const setData = (personel) => {
    const { personel_id, personel_ad, personel_soyad, is_baslangic_tarihi, dogum_tarihi } = personel;
    localStorage.setItem('personel_id', personel_id);
    localStorage.setItem('personel_ad', personel_ad);
    localStorage.setItem(' personel_soyad', personel_soyad);
    localStorage.setItem('is_baslangic_tarihi', is_baslangic_tarihi);
    localStorage.setItem('dogum_tarihi', dogum_tarihi);
  }

  const getData = () => {
    axios.get(url)
      .then((getData) => {
        setPersonels(getData.data.data);
      })
  }

  const onDelete = (personel_id) => {
    axios.delete(`http://localhost:8080/api/personel/delete/${personel_id}`)
      .then(() => {
        getData();
      })
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-3">
          <CCardHeader>
            <strong>Personel</strong>
          </CCardHeader>
          <CCardBody >
            <DocsExample href="components/card/#card-groups">
              <CCardGroup>

                {
                  personels.map((personel) => {
                    return (
                      <CCard>
                        <CCardBody>
                          <CCardTitle>{personel.personel_ad}</CCardTitle>
                          <CCardTitle>{personel.personel_soyad}</CCardTitle>

                          <CCardText>
                            <small className="text-medium-emphasis">

                              İşe giriş tarihi ={personel.is_baslangic_tarihi}
                            </small>
                          </CCardText>
                          <CCardText>
                            <small className="text-medium-emphasis">
                              Doğum tarihi = {personel.dogum_tarihi}
                            </small>
                          </CCardText>
                          <CCardText>
                            <small className="text-medium-emphasis">
                              Birimi =web
                            </small>
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    )
                  })
                }

              </CCardGroup>
              
            
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Satış Grafiği</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ["Gizem", "Hakkı", "Ömer", "Çağrı", "Eren", "Doğa"],
                datasets: [
                  {
                    label: "Personellerin satış yaptığı firma sayısı",
                    backgroundColor: "#f87979",
                    data: [60, 20, -3, 39, 52, 45],
                  },
                ],
              }}
              labels="aylar"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Cards;
