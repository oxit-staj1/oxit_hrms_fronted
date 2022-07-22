import React from "react";

import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import { DocsExample } from "src/components";

const Alerts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>SATIŞ VE HİZMET SÖZLEŞMESİ</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Anlaşma içeriğinde kullanılacak olan yabancı dil çevirileri,
              fotoğraf, video görüntüleri katılımcı firma tarafından sağlanır
              Ayrı bir sözleşme ile imza altına alınmadığı sürece yayıncı
              firmanın belirtilen hizmetlerin sağlanması ile ilgili herhangi
              belirtilen sorumluluğu yoktur. .
            </p>{" "}
            <hr></hr>
            <h5>Sözleşme Gereksinimleri</h5>
            <DocsExample href="components/alert">
              <CAlert color="secondary">Firma Seçimi</CAlert>
              <form>
                Firma Adını Giriniz:
                <br />
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
              </form>
              <CAlert color="dark">Hizmet Seçimi</CAlert>
              <label class="form-control" for="hizmet">
                İSTEDİĞİNİZ HİZMETLERİ SEÇİNİZ:
              </label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                ></input>
                <label class="form-check-label" for="inlineCheckbox1">
                  DİNAMİK WEB SİTESİ
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                ></input>
                <label class="form-check-label" for="inlineCheckbox2">
                  REKLAM PAKETİ
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                ></input>
                <label class="form-check-label" for="inlineCheckbox2">
                  E-TİCARET
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                ></input>
                <label class="form-check-label" for="inlineCheckbox2">
                  YENİLEME
                </label>
              </div>
              <br />
              <br />
              <CAlert color="dark">Dİl Seçimi</CAlert>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                ></input>
                <label class="form-check-label" for="inlineCheckbox1">
                  Evet
                </label>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Example select</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <CAlert color="secondary">Sözleşme Tarihi</CAlert>
              <label for="birthday">Başlangıç Tarihi:</label>
              <input
                class="form-control"
                type="date"
                id="baştar"
                name="birthday"
              ></input>
              &nbsp;&nbsp;
              <label for="birthday">Bitiş Tarihi:</label>
              <input
                class="form-control"
                type="date"
                id="bittar"
                name="birthday"
              ></input>
              <br />
              <br />
              <CAlert color="dark">KDV'siz Fiyat</CAlert>
              <form>
                KDV'siz Fiyatı Giriniz:
                <br />
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
              </form>
              <CAlert color="secondary">KDV'li Fiyat</CAlert>
              <form>
                KDV'li Fiyatı Giriniz
                <br />
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
              </form>
              <CAlert color="dark">Kapora</CAlert>
              <form>
                Ödemeniz Gereken Kapora Miktarı :<br />
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
              </form>
              <CAlert color="secondary">Yıllık Yenileme Tutarı</CAlert>
              <form>
                Yıllık Yenileme Tutarı:
                <br />
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
              </form>
              <CAlert color="secondary">Sözleşme Süresi</CAlert>
              <form>
                Sözleşme Süresi Giriniz:
                <br />
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
              </form>
              <CAlert color="dark">Sözleşme Dosyası Yükleme</CAlert>
              <form action="" method="post" enctype="multipart/form-data">
                <input class="form-control" type="file" name="dosya" />
                <input class="form-control" type="submit" value="Gönder" />
              </form>
              <br />
              <br />
              <CAlert color="success"></CAlert>
              <input class="form-control" type="button" value="ONAYLA" />
              <input class="form-control" type="button" value="YENİLE" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Alerts;
