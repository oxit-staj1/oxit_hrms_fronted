import React from 'react'

import {

  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

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
              Anlaşma içeriğinde kullanılacak olan yabancı dil çevirileri, fotoğraf, video görüntüleri katılımcı firma tarafından sağlanır
              Ayrı bir sözleşme ile imza altına alınmadığı sürece yayıncı firmanın belirtilen hizmetlerin sağlanması ile ilgili herhangi belirtilen
              sorumluluğu yoktur.
              .
            </p> <hr></hr>
            <h5>Sözleşme Gereksinimleri</h5>
            <DocsExample href="components/alert">
              <CAlert color="secondary">Firma Seçimi</CAlert>
                <form>
                    Firma Adını Giriniz:<br />
                    <input type="text" name="firmaadi :" /><br />
                    <br />
                </form>
              <CAlert color="dark">Hizmet Seçimi</CAlert>
              <label for="hizmet">İSTEDİĞİNİZ HİZMETLERİ SEÇİNİZ:</label>
              <br /><br />
              <select name="hizmet" id="hizmet">
                <option value="DWB">DİNAMİK WEB SİTESİ</option>
                <option value="RP">REKLAM PAKETİ</option>
                <option value="Y">YENİLEME</option>
                <option value="ET">E-TİCARET</option>
              </select>
              <br /><br />
              <CAlert color="secondary">Sözleşme Tarihi</CAlert>

              <label for="birthday">Başlangıç Tarihi:</label>

              <input type="date" id="baştar" name="birthday"></input>&nbsp;&nbsp;

              <label for="birthday">Bitiş Tarihi:</label>

              <input type="date" id="bittar" name="birthday"></input>
              <br /><br />

              <CAlert color="dark">KDV'siz Fiyat</CAlert>

              <form>
                    Firma Adını Giriniz:<br />
                    <input type="text" name="firmaadi :" /><br />
                    <br />
                </form>

              <CAlert color="secondary">KDV'li Fiyat</CAlert>

              <form>
                    Firma Adını Giriniz:<br />
                    <input type="text" name="firmaadi :" /><br />
                    <br />
                </form>

              <CAlert color="dark">Kapora</CAlert>

              
              <form>
                    Ödemeniz Gereken Kapora Miktarı :<br />
                    <input type="text" name="firmaadi :" /><br />
                    <br />
                </form>
              <CAlert color="secondary">Yıllık Yenileme Tutarı</CAlert>

              <form>
                    Yıllık Yenileme Tutatı:<br />
                    <input type="text" name="firmaadi :" /><br />
                    <br />
                </form>

              <CAlert color="secondary">Sözleşme Süresi</CAlert>

                <form>
                    Sözleşme Süresi Giriniz:<br />
                    <input type="text" name="firmaadi :" /><br />
                    <br />
                </form>

              <CAlert color="dark">Sözleşme Dosyası Yükleme</CAlert>


              <form action="" method="post" enctype="multipart/form-data">
                  <input type="file" name="dosya" />
                  <input type="submit" value="Gönder" />
              </form>

                <br /><br />

                <CAlert color="success"></CAlert>

                
                <input type="button" value="ONAYLA"/>

                <input type="button" value="YENİLE"/>

                
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      
      
      
    </CRow>
  )
}

export default Alerts
