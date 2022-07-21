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

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Hizmet</strong> <small>Ekleme</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/card">
              <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardTitle>
                    Eklemek İstediğiniz Hizmet Türünü Giriniz
                  </CCardTitle>
                  <CCardText></CCardText>
                  <form>
                    Hizmet Türü : <br />
                    <input type="text" class="form-control" name="adi" />
                    <br />
                  </form>
                </CCardBody>
                <CCardBody>
                  <CButton href="#" color="black">
                    Onayla
                  </CButton>
                </CCardBody>
              </CCard>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Cards;
