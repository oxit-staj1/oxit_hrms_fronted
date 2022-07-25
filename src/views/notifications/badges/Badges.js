import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CBadge,
  CRow,
} from "@coreui/react";
import { DocsExample } from "src/components";

const Badges = () => {
  return (
    <CRow>
      <CCol lg={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>OXİT BİLİŞİM TEKNOLOJİLERİ YÜKÜMLÜLÜKLERİ</strong>
          </CCardHeader>

          <CCardBody>
            <p className="text-medium-emphasis small">
              Müşteriye sağlanmakta olan hizmetlerle ilgili oluşabilecek
              yazılımsal hataları ve sorunları 5 iş günü içerisinde düzeltmekle
              yükümlüdür.Bu düzeltmeler için ücret talep edilmeyecektir. Müşteri
              için hazırlanmış tasarımdaki mevcut bölümlerdeki basit
              değişiklikler için, gerekli çalışmayı tamamladıktan sonra{" "}
              <b> OXIT BİLİŞİM VE TEKNOLOJİLERİ</b> 'nin belirleyeceği en kısa
              süre içinde gerekli düzenleme ve ilaveleri sisteme entegre
              edeceğini beyan eder. Bu düzeltmeler için ücret talep
              edilmeyecektir. Müşteri tarafından talep edilen ek tasarım içn
              gerekli çalışmayı tamamladıktan sonra belirleyeceği en kısa süre
              içerisinde gerekli düzenleme ve ilaveleri ek ücret mukabilinde
              sisteme entegre edeceğini beyan eder. Web sitesinin hazırlanması
              müşteri haricinde bir sebepten dolayı iş tamamlanmayacak ise{" "}
              <b> OXIT BİLİŞİM TEKNOLOJİLERİ LTD. ŞTİ </b>
              sözleşme tarihinden itibaren 20 iş günü içerisinde işi bitirip
              teslim etmekle yükümlüdür. Yayıncı firmanın hazırlamış olduğu web
              sitesinin arama motorlarında görüntülenmesi, üst sıralarda
              çıkması, sponsor bağlantısı yapılması vb. hizmetlerle ilgili bir
              sorumluluğu yoktur. Ancak bu hizmetlerin katılımcı firmaya fayda
              sağlaması adına <b> OXIT BİLİŞİM TEKNOLOJİLERİ LTD. ŞTİ.</b>{" "}
              gerekli olan alt yapıya sahiptir.
            </p>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>MEVCUT SATIŞ VE HİZMET SÖZLEŞMESİ.</strong>
          </CCardHeader>

          <CCardBody>
            <p className="text-medium-emphasis small">
              <form method="get" action="file.doc" size="large">
                <a href="/sözleşme.pdf" class="btn btn-primary" tabindex="-1" role="button" aria-disabled="true" download>İndirmek İçin Tıklayınız</a>
              </form>
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Badges;
