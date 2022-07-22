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
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from "@coreui/react-chartjs";
const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Personel</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/card/#card-groups">
              <CCardGroup>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Gizem ***</CCardTitle>
                    <CCardText>Bildiği diller C#, C++, ...</CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        İşe giriş tarihi = 16.04.2019
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Doğum tarihi = 05.07.1995
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Birimi = Web designer
                      </small>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Gizem ***</CCardTitle>
                    <CCardText>Bildiği diller C#, C++, ...</CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        İşe giriş tarihi = 16.04.2019
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Doğum tarihi = 05.07.1995
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Birimi = Web designer
                      </small>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Gizem ***</CCardTitle>
                    <CCardText>Bildiği diller C#, C++, ...</CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        İşe giriş tarihi = 16.04.2019
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Doğum tarihi = 05.07.1995
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Birimi = Web designer
                      </small>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCardGroup>
              <CCardGroup>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Gizem ***</CCardTitle>
                    <CCardText>Bildiği diller C#, C++, ...</CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        İşe giriş tarihi = 16.04.2019
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Doğum tarihi = 05.07.1995
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Birimi = Web designer
                      </small>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Gizem ***</CCardTitle>
                    <CCardText>Bildiği diller C#, C++, ...</CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        İşe giriş tarihi = 16.04.2019
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Doğum tarihi = 05.07.1995
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Birimi = Web designer
                      </small>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Gizem ***</CCardTitle>
                    <CCardText>Bildiği diller C#, C++, ...</CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        İşe
                        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgiriş
                        tarihi = 16.04.2019
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Doğum tarihi = 05.07.1995
                      </small>
                    </CCardText>
                    <CCardText>
                      <small className="text-medium-emphasis">
                        Birimi = Web designer
                      </small>
                    </CCardText>
                  </CCardBody>
                </CCard>
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
