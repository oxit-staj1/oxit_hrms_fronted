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
              <form>
                <br />
                <br />
                <div class="row">
                  <div class="col">
                    <CAlert color="dark">Firma Seçimi</CAlert>

                    <input
                      class="form-control"
                      type="text"
                      placeholder="Firma adını giriniz"
                      name="firmaadi :"
                    />
                    <br />
                    <CAlert color="dark">Hizmet Seçimi</CAlert>
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
                  </div>
                  <br />
                  <br />

                  <div class="col">
                    <CAlert color="dark">Dİl Seçimi</CAlert>

                    <div class="form-check form-check-inline">
                      <div class="col">
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">
                            Yabancı Dil-1
                          </label>
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
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
                        </div>
                        <div class="col">
                          <label for="exampleFormControlSelect1">
                            Yabancı Dil-2
                          </label>
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
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
                        </div>
                        <div class="col">
                          <label for="exampleFormControlSelect1">
                            Yabancı Dil-3
                          </label>
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
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
                        </div>
                        <br></br>
                        <button type="submit" class="btn btn-primary mb-3">
                          Seçilen Dil(ler)i Onayla
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div class="row">
                  <div class="col">
                    <CAlert color="dark">KDV'siz Fiyat</CAlert>
                    <div class="col-md-3">
                      <label for="validationCustom04" class="form-label">
                        Para Türü
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option>₺</option>
                        <option>$</option>
                        <option>€</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>

                    <br />
                    <input
                      class="form-control"
                      placeholder="KDV'siz fiyatı giriniz"
                      type="text"
                      name="firmaadi :"
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="col">
                    <CAlert color="dark">Kapora</CAlert>
                    <div class="col-md-3">
                      <label for="validationCustom04" class="form-label">
                        Para Türü
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option>₺</option>
                        <option>$</option>
                        <option>€</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>
                    <br />
                    <input
                      class="form-control"
                      placeholder="Kapora miktarını giriniz"
                      type="text"
                      name="firmaadi :"
                    />
                  </div>
                  <br />
                  <br />
                  <div class="col">
                    <CAlert color="dark">Yıllık Yenileme Tutarı</CAlert>
                    <div class="col-md-3">
                      <label for="validationCustom04" class="form-label">
                        Para Türü
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option>₺</option>
                        <option>$</option>
                        <option>€</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>
                    <div class="col">
                      <br />
                      <input
                        class="form-control"
                        placeholder="Yıllık yenileme tutarını giriniz"
                        type="text"
                        name="firmaadi :"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <CAlert color="dark">Sözleşme Tarihi</CAlert>
                      <div class="col">
                        <label for="birthday">Başlangıç Tarihi:</label>
                        <input
                          class="form-control"
                          type="date"
                          id="baştar"
                          name="birthday"
                        ></input>
                      </div>
                      &nbsp;&nbsp;
                      <div class="col">
                        <label for="birthday">Bitiş Tarihi:</label>
                        <input
                          class="form-control"
                          type="date"
                          id="bittar"
                          name="birthday"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <CAlert color="dark">Sözleşme Dosyası Yükleme</CAlert>
                    <br />
                    <input class="form-control" type="file" name="dosya" />
                  </div>
                </div>{" "}
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
