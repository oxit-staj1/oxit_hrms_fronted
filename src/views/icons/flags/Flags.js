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
          <CCardBody>
            <DocsExample href="components/card">
              <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={ReactImg} />
                <CCardBody>
                  <CCardTitle>Personel Ekle</CCardTitle>
                  <CCardText></CCardText>
                  <form>
                    <div class="form-group">
                      <label>
                        Ad
                        <input class="form-control" type="text" name="ad" />
                      </label>
                      <label>
                        Soyad
                        <input class="form-control" type="text" name="soyad" />
                      </label>
                      <label>
                        Başlama Tarihi
                        <input
                          class="form-control"
                          type="date"
                          name="baslama"
                        />
                      </label>
                      <label>
                        Doğum Günü
                        <input
                          class="form-control"
                          type="date"
                          name="birthday"
                        />
                      </label>
                      <label>
                        Birimiiiilllllllaaaaaaaşşşşşşşşşşşşüüüüüüüüüüüüüügggggggggggggyyyyyyyyyyyyyyyyyyçççççççç
                        <input class="form-control" type="text" name="birim" />
                      </label>
                      <br></br>

                      <br></br>
                      <form action="" method="post" enctype="multipart/form-data">
                  <input type="file" name="dosya" />
                  <br>
                  </br>

                  
                  <br></br>

              </form>

                
                      
                      <input type="submit" value="Ekle" />
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
