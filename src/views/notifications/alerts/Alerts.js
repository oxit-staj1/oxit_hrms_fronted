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
              fotoğraf, video görüntüleri katılımcı firma tarafından sağlanır.
              Ayrı bir sözleşme ile imza altına alınmadığı sürece yayıncıx
              firmanın belirtilen hizmetlerin sağlanması ile ilgili herhangi
              belirtilen sorumluluğu yoktur..
            </p>{" "}
            <hr></hr>
            <h5>Sözleşme Gereksinimleri</h5>
            <DocsExample href="components/alert">
              <CAlert color="secondary">Firma Seçimi</CAlert>
              <form>
                Firma Adını Giriniz:
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder="Firma adını giriniz"
                  name="firmaadi :"
                />
                <br />
                <br />
                <CAlert color="dark">Hizmet Seçimi</CAlert>
                <label class="form-control" for="hizmet">
                  İstediğiniz Hizmetleri Seçiniz...
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
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Yabancı Dil-1</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Dil Seçiniz</option>
                      <option>Türkçe</option>
                      <option>İngilizce</option>
                      <option>Almanca</option>
                      <option>Fransızca</option>
                      <option>İtalyanca</option>
                      <option>Japonca</option>
                      <option>Rusça</option>
                      <option>Azerice</option>
                      <option>Arapça</option>
                      <option>Danca</option>
                    </select>
                    <label for="exampleFormControlSelect1">Yabancı Dil-2</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Dil Seçiniz</option>
                      <option>Türkçe</option>
                      <option>İngilizce</option>
                      <option>Almanca</option>
                      <option>Fransızca</option>
                      <option>İtalyanca</option>
                      <option>Japonca</option>
                      <option>Rusça</option>
                      <option>Azerice</option>
                      <option>Arapça</option>
                      <option>Danca</option>
                    </select>
                    <label for="exampleFormControlSelect1">Yabancı Dil-3</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Dil Seçiniz</option>
                      <option>Türkçe</option>
                      <option>İngilizce</option>
                      <option>Almanca</option>
                      <option>Fransızca</option>
                      <option>İtalyanca</option>
                      <option>Japonca</option>
                      <option>Rusça</option>
                      <option>Azerice</option>
                      <option>Arapça</option>
                      <option>Danca</option>
                    </select>
                    <br></br>
                    <button type="submit" class="btn btn-primary mb-3">
                      Seçilen Dil(ler)i Onayla
                    </button>
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
                <div class="col-md-1">
                  <label for="validationCustom04" class="form-label">
                    Para Türü
                  </label>
                  <select class="form-select" id="validationCustom04" required>
                    <option>₺</option>
                    <option>$</option>
                    <option>€</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                KDV'siz Fiyatı Giriniz:
                <br />
                <input
                  class="form-control"
                  placeholder="KDV'siz fiyatı giriniz"
                  type="text"
                  name="firmaadi :"
                />
                <br />
                <br />
                <CAlert color="secondary">KDV'li Fiyat</CAlert>
                <div class="col-md-1">
                  <label for="validationCustom04" class="form-label">
                    Para Türü
                  </label>
                  <select class="form-select" id="validationCustom04" required>
                    <option>₺</option>
                    <option>$</option>
                    <option>€</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                KDV'li Fiyatı Giriniz
                <br />
                <input
                  class="form-control"
                  placeholder="KDV'li fiyatı giriniz"
                  type="text"
                  name="firmaadi :"
                />
                <br />
                <br />
                <CAlert color="dark">Kapora</CAlert>
                <div class="col-md-1">
                  <label for="validationCustom04" class="form-label">
                    Para Türü
                  </label>
                  <select class="form-select" id="validationCustom04" required>
                    <option>₺</option>
                    <option>$</option>
                    <option>€</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                Ödemeniz Gereken Kapora Miktarı :<br />
                <input
                  class="form-control"
                  placeholder="Kapora miktarını giriniz"
                  type="text"
                  name="firmaadi :"
                />
                <br />
                <br />
                <CAlert color="secondary">Yıllık Yenileme Tutarı</CAlert>
                <div class="col-md-1">
                  <label for="validationCustom04" class="form-label">
                    Para Türü
                  </label>
                  <select class="form-select" id="validationCustom04" required>
                    <option>₺</option>
                    <option>$</option>
                    <option>€</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                Yıllık Yenileme Tutarı:
                <br />
                <input
                  class="form-control"
                  placeholder="Yıllık yenileme tutarını giriniz"
                  type="text"
                  name="firmaadi :"
                />
                <br />
                <br />
                <CAlert color="secondary">Sözleşme Süresi</CAlert>
                Sözleşme Süresi Giriniz:
                <br />
                <input
                  class="form-control"
                  placeholder="Sözleşme süresini giriniz"
                  type="text"
                  name="firmaadi :"
                />
                <br />
                <br />
                <CAlert color="dark">Sözleşme Dosyası Yükleme</CAlert>
                <input class="form-control" type="file" name="dosya" />
                <br />
                <input class="form-control" type="button" value="ONAYLA" />
                <br />
                <input class="form-control" type="button" value="YENİLE" />
              </form>
              <br />
              <br />
              <CAlert color="success"></CAlert>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Alerts;
