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
                      <option>'Are'are dili</option>
                      <option>Abazaca</option>
                      <option>Abhazca</option>
                      <option>Açece</option>
                      <option>Açice</option>
                      <option>Adigece</option>
                      <option>Afrikaans</option>
                      <option>Ahtnaca</option>
                      <option>Eynuca</option>
                      <option>Aivilik İnuitçesi</option>
                      <option>Akanca</option>
                      <option>Akatekçe</option>
                      <option>Alabamaca</option>
                      <option>Algonkince</option>
                      <option>Almanca</option>
                      <option>Altayca</option>
                      <option>Amharca</option>
                      <option>Anişininice</option>
                      <option>Apsalokece</option>
                      <option>Aragonca</option>
                      <option>Aramice</option>
                      <option>Aranca</option>
                      <option>Arapahoca</option>
                      <option>Arapça</option>
                      <option>Arbereşçe</option>
                      <option>Arikaraca</option>
                      <option>Arnavutça</option>
                      <option>Arviligjuaq İnuitçesi</option>
                      <option>Asturyasça</option>
                      <option>Aşağı Tananaca</option>
                      <option>Atikamekçe</option>
                      <option>Atsinaca</option>
                      <option>Auvergnat dili</option>
                      <option>Avakatekçe</option>
                      <option>Avarca</option>
                      <option>Aymara dili</option>
                      <option>Aynu dili</option>
                      <option>Azerice</option>
                      <option>Baskça</option>
                      <option>Bataklık Kricesi</option>
                      <option>Batı Apaçicesi</option>
                      <option>Batı Kanada İnuitçesi</option>
                      <option>Bengalce</option>
                      <option>Bretonca</option>
                      <option>Beyaz Rusça</option>
                      <option>Boşnakça</option>
                      <option>Bulgarca</option>
                      <option>Burgonyaca</option>
                      <option>Buryatça</option>
                      <option>Cavaca</option>
                      <option>Champenois</option>
                      <option>Çalçitekçe</option>
                      <option>Çeçence</option>
                      <option>Çekçe</option>
                      <option>Çerokice</option>
                      <option>Çilkotince</option>
                      <option>Çince</option>
                      <option>Çingenece</option>
                      <option>Çortice</option>
                      <option>Çuhça</option>
                      <option>Çukçice</option>
                      <option>Çupikçe</option>
                      <option>Çulımca</option>
                      <option>Çuvaşça</option>
                      <option>Dakotaca</option>
                      <option>Dakelce</option>
                      <option>Danca</option>
                      <option>Danezaca</option>
                      <option>Dargince</option>
                      <option>Dauphinois</option>
                      <option>Değinakça</option>
                      <option>Denağinaca</option>
                      <option>Denesulinece</option>
                      <option>Denetaca</option>
                      <option>Doğu Kanada İnuitçesi</option>
                      <option>Donşianca</option>
                      <option>Dzongka</option>
                      <option>Endonezyaca</option>
                      <option>Ermenice</option>
                      <option>Eski İngilizce</option>
                      <option>Eski Nors dili</option>
                      <option>Estonca</option>
                      <option>Evenki dili</option>
                      <option>Eyakça</option>
                      <option>Farsça</option>
                      <option>Faroe dili</option>
                      <option>Felemenkçe</option>
                      <option>Filipince</option>
                      <option>Frizce</option>
                      <option>Fince</option>
                      <option>Fransızca</option>
                      <option>Gagavuzca</option>
                      <option>Galce</option>
                      <option>Galiçyaca</option>
                      <option>Gaskonca</option>
                      <option>Gilanice</option>
                      <option>Goranice</option>
                      <option>Grönlandca</option>
                      <option>Guaranice</option>
                      <option>Guçince</option>
                      <option>Güney Pikence</option>
                      <option>Güney Tuçoncası</option>
                      <option>Gürcüce</option>
                      <option>Hakaltekçe</option>
                      <option>Hakasça</option>
                      <option>Hakka</option>
                      <option>Halaçça</option>
                      <option>Halkomelemce</option>
                      <option>Hanca (Atabask)</option>
                      <option>Hantıca</option>
                      <option>Hausa</option>
                      <option>Haydaca</option>
                      <option>Hereroca</option>
                      <option>Hırvatça</option>
                      <option>Hidatsaca</option>
                      <option>Hikarilaca</option>
                      <option>Hintçe</option>
                      <option>Hoçankça</option>
                      <option>Holikaçukça</option>
                      <option>Hupaca</option>
                      <option>İbranice</option>
                      <option>İngilizce</option>
                      <option>İrlandaca</option>
                      <option>İnguşça</option>
                      <option>İnnuca</option>
                      <option>İnuinnaq İnuitçesi</option>
                      <option>İnyupikçe</option>
                      <option>İskoç dili</option>
                      <option>İspanyolca</option>
                      <option>İsveççe</option>
                      <option>İşilce</option>
                      <option>İtalyanca</option>
                      <option>İtzaca</option>
                      <option>İzlandaca</option>
                      <option>Japonca</option>
                      <option>Kabardeyce</option>
                      <option>Kakçikelce</option>
                      <option>Kalabriyaca</option>
                      <option>Kalmıkça</option>
                      <option>Kangiryuarmiut İnuitçesi</option>
                      <option>Kanhobalca</option>
                      <option>Kannada dili</option>
                      <option>Kantonca</option>
                      <option>Kanuri dili</option>
                      <option>Karaayakça</option>
                      <option>Karakalpakça</option>
                      <option>Karankavaca</option>
                      <option>Kaskaca</option>
                      <option>Kaşgayca</option>
                      <option>Katalanca</option>
                      <option>Kazakça</option>
                      <option>Kazan Tatarcası</option>
                      <option>Keçuva dili</option>
                      <option>Kekçice</option>
                      <option>Kernevekçe</option>
                      <option>Khmerce</option>
                      <option>Kırgızca</option>
                      <option>Kırım Tatarcası</option>
                      <option>Kırımçakça</option>
                      <option>Kiçece</option>
                      <option>Kivalliq İnuitçesi</option>
                      <option>Komoksça</option>
                      <option>Komorca</option>
                      <option>Kongoca</option>
                      <option>Korece</option>
                      <option>Korsikaca</option>
                      <option>Koryakça</option>
                      <option>Koyukonca</option>
                      <option>Krice</option>
                      <option>Krikçe</option>
                      <option>Kuzey Tuçoncası</option>
                      <option>Kürtçe</option>
                      <option>Kwalhioqua–Tlatskanai dili</option>
                      <option>Ladino</option>
                      <option>Lakça</option>
                      <option>Lakotaca</option>
                      <option>Latince</option>
                      <option>Laponca</option>
                      <option>Lazca</option>
                      <option>Lehçe</option>
                      <option>Letonyaca</option>
                      <option>Leonca</option>
                      <option>Lezgice</option>
                      <option>Limburgca</option>
                      <option>Limousin dili</option>
                      <option>Lipanca</option>
                      <option>Litvanyaca</option>
                      <option>Lombardça</option>
                      <option>Lorrain dili</option>
                      <option>Lorraine Frankçası</option>
                      <option>Lüksemburgça</option>
                      <option>Macarca</option>
                      <option>Malay dili</option>
                      <option>Maltaca</option>
                      <option>Makedonca</option>
                      <option>Mamca</option>
                      <option>Manca</option>
                      <option>Mançuca</option>
                      <option>Mandanca</option>
                      <option>Mandarin</option>
                      <option>Mansice</option>
                      <option>Maorice</option>
                      <option>Mapudungun</option>
                      <option>Marathi</option>
                      <option>Mari dili</option>
                      <option>Mayaca</option>
                      <option>Megrelce</option>
                      <option>Meskalero-Çirikavaca</option>
                      <option>Meskvakice</option>
                      <option>Mikasukice</option>
                      <option>Miranda dili</option>
                      <option>Moğolca</option>
                      <option>Moldovca</option>
                      <option>Mopanca</option>
                      <option>Nadoten-Vetsuvetence</option>
                      <option>Nakodaca</option>
                      <option>Nakotaca</option>
                      <option>Napolice</option>
                      <option>Naskapice</option>
                      <option>Natsilik İnuitçesi</option>
                      <option>Nattilik İnuitçesi</option>
                      <option>Naukan Yupikçesi</option>
                      <option>Navahoca</option>
                      <option>Nikolaca</option>
                      <option>Nissart dili</option>
                      <option>Nlakapamukça</option>
                      <option>Normanca</option>
                      <option>Norveççe</option>
                      <option>Nuhalkça</option>
                      <option>Nunatsiavut İnuitçesi</option>
                      <option>Nunavik İnuitçesi</option>
                      <option>Nunivak Çupikçesi</option>
                      <option>Oksitanca</option>
                      <option>Orman Kricesi</option>
                      <option>Osetçe</option>
                      <option>Ova Apaçicesi</option>
                      <option>Ova Kricesi</option>
                      <option>Özbekçe</option>
                      <option>Pali dili</option>
                      <option>Papiamento</option>
                      <option>Pavnice</option>
                      <option>Peçenekçe</option>
                      <option>Pencapça</option>
                      <option>Peştuca</option>
                      <option>Pikartça</option>
                      <option>Pirahã dili</option>
                      <option>Pokomamca</option>
                      <option>Pokomçice</option>
                      <option>Portekizce</option>
                      <option>Potavatomice</option>
                      <option>Provensal</option>
                      <option>Qikiqtaaluk İnuitçesi</option>
                      <option>Romanşça</option>
                      <option>Rumence</option>
                      <option>Rusça</option>
                      <option>Saho</option>
                      <option>Sahtuca</option>
                      <option>Sakapultekçe</option>
                      <option>Salarca</option>
                      <option>Sanskritçe</option>
                      <option>Sekanice</option>
                      <option>Sırpça</option>
                      <option>Sibirya Yupikçesi</option>
                      <option>Sicilyaca</option>
                      <option>Siglit İnuitçesi</option>
                      <option>Sipakapaca</option>
                      <option>Sirenik Yupikçesi</option>
                      <option>Siyuca</option>
                      <option>Slovakça</option>
                      <option>Slovence</option>
                      <option>Sorb dili</option>
                      <option>Sorani</option>
                      <option>Supikçe</option>
                      <option>Svahili</option>
                      <option>Svanca</option>
                      <option>Süryanice</option>
                      <option>Sivandi</option>
                      <option>Şavnice</option>
                      <option>Şayence</option>
                      <option>Şorca</option>
                      <option>Tacikçe</option>
                      <option>Tagalogca</option>
                      <option>Tagişçe</option>
                      <option>Tahltanca</option>
                      <option>Tamilce</option>
                      <option>Tanakrosça</option>
                      <option>Tatarca</option>
                      <option>Tatça</option>
                      <option>Tayca</option>
                      <option>Tayvanca</option>
                      <option>Tektitekçe</option>
                      <option>Telugu</option>
                      <option>Tibetçe</option>
                      <option>Tlınçonca</option>
                      <option>Tlingitçe</option>
                      <option>Tsetsautça</option>
                      <option>Tsutinaca</option>
                      <option>Tswana</option>
                      <option>Tupi</option>
                      <option>Tuvaca</option>
                      <option>Türkçe</option>
                      <option>Türkmence</option>
                      <option>Tzutuhilce</option>
                      <option>Udmurtça</option>
                      <option>Ukrayna dili</option>
                      <option>Ulahça</option>
                      <option>Urduca</option>
                      <option>Uspantekçe</option>
                      <option>Utkuhiksalik İnuitçesi</option>
                      <option>Uygurca</option>
                      <option>Valensiyaca</option>
                      <option>Vapoca</option>
                      <option>Venedikçe</option>
                      <option>Vietnamca</option>
                      <option>Yakutça</option>
                      <option>Yidiş</option>
                      <option>Batı Yugurca</option>
                      <option>Yukarı Kuskokvimce</option>
                      <option>Yukarı Tananaca</option>
                      <option>Yukatek Mayacası</option>
                      <option>Yukice</option>
                      <option>Yunanca</option>
                      <option>Yupikçe</option>
                      <option>Zazaca</option>
                      <option>Zhuangca</option>
                      <option>Zuluca</option>
                      <option>Zunice</option>
                    </select>
                    <label for="exampleFormControlSelect1">Yabancı Dil-2</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Dil Seçiniz</option>
                      <option>'Are'are dili</option>
                      <option>Abazaca</option>
                      <option>Abhazca</option>
                      <option>Açece</option>
                      <option>Açice</option>
                      <option>Adigece</option>
                      <option>Afrikaans</option>
                      <option>Ahtnaca</option>
                      <option>Eynuca</option>
                      <option>Aivilik İnuitçesi</option>
                      <option>Akanca</option>
                      <option>Akatekçe</option>
                      <option>Alabamaca</option>
                      <option>Algonkince</option>
                      <option>Almanca</option>
                      <option>Altayca</option>
                      <option>Amharca</option>
                      <option>Anişininice</option>
                      <option>Apsalokece</option>
                      <option>Aragonca</option>
                      <option>Aramice</option>
                      <option>Aranca</option>
                      <option>Arapahoca</option>
                      <option>Arapça</option>
                      <option>Arbereşçe</option>
                      <option>Arikaraca</option>
                      <option>Arnavutça</option>
                      <option>Arviligjuaq İnuitçesi</option>
                      <option>Asturyasça</option>
                      <option>Aşağı Tananaca</option>
                      <option>Atikamekçe</option>
                      <option>Atsinaca</option>
                      <option>Auvergnat dili</option>
                      <option>Avakatekçe</option>
                      <option>Avarca</option>
                      <option>Aymara dili</option>
                      <option>Aynu dili</option>
                      <option>Azerice</option>
                      <option>Baskça</option>
                      <option>Bataklık Kricesi</option>
                      <option>Batı Apaçicesi</option>
                      <option>Batı Kanada İnuitçesi</option>
                      <option>Bengalce</option>
                      <option>Bretonca</option>
                      <option>Beyaz Rusça</option>
                      <option>Boşnakça</option>
                      <option>Bulgarca</option>
                      <option>Burgonyaca</option>
                      <option>Buryatça</option>
                      <option>Cavaca</option>
                      <option>Champenois</option>
                      <option>Çalçitekçe</option>
                      <option>Çeçence</option>
                      <option>Çekçe</option>
                      <option>Çerokice</option>
                      <option>Çilkotince</option>
                      <option>Çince</option>
                      <option>Çingenece</option>
                      <option>Çortice</option>
                      <option>Çuhça</option>
                      <option>Çukçice</option>
                      <option>Çupikçe</option>
                      <option>Çulımca</option>
                      <option>Çuvaşça</option>
                      <option>Dakotaca</option>
                      <option>Dakelce</option>
                      <option>Danca</option>
                      <option>Danezaca</option>
                      <option>Dargince</option>
                      <option>Dauphinois</option>
                      <option>Değinakça</option>
                      <option>Denağinaca</option>
                      <option>Denesulinece</option>
                      <option>Denetaca</option>
                      <option>Doğu Kanada İnuitçesi</option>
                      <option>Donşianca</option>
                      <option>Dzongka</option>
                      <option>Endonezyaca</option>
                      <option>Ermenice</option>
                      <option>Eski İngilizce</option>
                      <option>Eski Nors dili</option>
                      <option>Estonca</option>
                      <option>Evenki dili</option>
                      <option>Eyakça</option>
                      <option>Farsça</option>
                      <option>Faroe dili</option>
                      <option>Felemenkçe</option>
                      <option>Filipince</option>
                      <option>Frizce</option>
                      <option>Fince</option>
                      <option>Fransızca</option>
                      <option>Gagavuzca</option>
                      <option>Galce</option>
                      <option>Galiçyaca</option>
                      <option>Gaskonca</option>
                      <option>Gilanice</option>
                      <option>Goranice</option>
                      <option>Grönlandca</option>
                      <option>Guaranice</option>
                      <option>Guçince</option>
                      <option>Güney Pikence</option>
                      <option>Güney Tuçoncası</option>
                      <option>Gürcüce</option>
                      <option>Hakaltekçe</option>
                      <option>Hakasça</option>
                      <option>Hakka</option>
                      <option>Halaçça</option>
                      <option>Halkomelemce</option>
                      <option>Hanca (Atabask)</option>
                      <option>Hantıca</option>
                      <option>Hausa</option>
                      <option>Haydaca</option>
                      <option>Hereroca</option>
                      <option>Hırvatça</option>
                      <option>Hidatsaca</option>
                      <option>Hikarilaca</option>
                      <option>Hintçe</option>
                      <option>Hoçankça</option>
                      <option>Holikaçukça</option>
                      <option>Hupaca</option>
                      <option>İbranice</option>
                      <option>İngilizce</option>
                      <option>İrlandaca</option>
                      <option>İnguşça</option>
                      <option>İnnuca</option>
                      <option>İnuinnaq İnuitçesi</option>
                      <option>İnyupikçe</option>
                      <option>İskoç dili</option>
                      <option>İspanyolca</option>
                      <option>İsveççe</option>
                      <option>İşilce</option>
                      <option>İtalyanca</option>
                      <option>İtzaca</option>
                      <option>İzlandaca</option>
                      <option>Japonca</option>
                      <option>Kabardeyce</option>
                      <option>Kakçikelce</option>
                      <option>Kalabriyaca</option>
                      <option>Kalmıkça</option>
                      <option>Kangiryuarmiut İnuitçesi</option>
                      <option>Kanhobalca</option>
                      <option>Kannada dili</option>
                      <option>Kantonca</option>
                      <option>Kanuri dili</option>
                      <option>Karaayakça</option>
                      <option>Karakalpakça</option>
                      <option>Karankavaca</option>
                      <option>Kaskaca</option>
                      <option>Kaşgayca</option>
                      <option>Katalanca</option>
                      <option>Kazakça</option>
                      <option>Kazan Tatarcası</option>
                      <option>Keçuva dili</option>
                      <option>Kekçice</option>
                      <option>Kernevekçe</option>
                      <option>Khmerce</option>
                      <option>Kırgızca</option>
                      <option>Kırım Tatarcası</option>
                      <option>Kırımçakça</option>
                      <option>Kiçece</option>
                      <option>Kivalliq İnuitçesi</option>
                      <option>Komoksça</option>
                      <option>Komorca</option>
                      <option>Kongoca</option>
                      <option>Korece</option>
                      <option>Korsikaca</option>
                      <option>Koryakça</option>
                      <option>Koyukonca</option>
                      <option>Krice</option>
                      <option>Krikçe</option>
                      <option>Kuzey Tuçoncası</option>
                      <option>Kürtçe</option>
                      <option>Kwalhioqua–Tlatskanai dili</option>
                      <option>Ladino</option>
                      <option>Lakça</option>
                      <option>Lakotaca</option>
                      <option>Latince</option>
                      <option>Laponca</option>
                      <option>Lazca</option>
                      <option>Lehçe</option>
                      <option>Letonyaca</option>
                      <option>Leonca</option>
                      <option>Lezgice</option>
                      <option>Limburgca</option>
                      <option>Limousin dili</option>
                      <option>Lipanca</option>
                      <option>Litvanyaca</option>
                      <option>Lombardça</option>
                      <option>Lorrain dili</option>
                      <option>Lorraine Frankçası</option>
                      <option>Lüksemburgça</option>
                      <option>Macarca</option>
                      <option>Malay dili</option>
                      <option>Maltaca</option>
                      <option>Makedonca</option>
                      <option>Mamca</option>
                      <option>Manca</option>
                      <option>Mançuca</option>
                      <option>Mandanca</option>
                      <option>Mandarin</option>
                      <option>Mansice</option>
                      <option>Maorice</option>
                      <option>Mapudungun</option>
                      <option>Marathi</option>
                      <option>Mari dili</option>
                      <option>Mayaca</option>
                      <option>Megrelce</option>
                      <option>Meskalero-Çirikavaca</option>
                      <option>Meskvakice</option>
                      <option>Mikasukice</option>
                      <option>Miranda dili</option>
                      <option>Moğolca</option>
                      <option>Moldovca</option>
                      <option>Mopanca</option>
                      <option>Nadoten-Vetsuvetence</option>
                      <option>Nakodaca</option>
                      <option>Nakotaca</option>
                      <option>Napolice</option>
                      <option>Naskapice</option>
                      <option>Natsilik İnuitçesi</option>
                      <option>Nattilik İnuitçesi</option>
                      <option>Naukan Yupikçesi</option>
                      <option>Navahoca</option>
                      <option>Nikolaca</option>
                      <option>Nissart dili</option>
                      <option>Nlakapamukça</option>
                      <option>Normanca</option>
                      <option>Norveççe</option>
                      <option>Nuhalkça</option>
                      <option>Nunatsiavut İnuitçesi</option>
                      <option>Nunavik İnuitçesi</option>
                      <option>Nunivak Çupikçesi</option>
                      <option>Oksitanca</option>
                      <option>Orman Kricesi</option>
                      <option>Osetçe</option>
                      <option>Ova Apaçicesi</option>
                      <option>Ova Kricesi</option>
                      <option>Özbekçe</option>
                      <option>Pali dili</option>
                      <option>Papiamento</option>
                      <option>Pavnice</option>
                      <option>Peçenekçe</option>
                      <option>Pencapça</option>
                      <option>Peştuca</option>
                      <option>Pikartça</option>
                      <option>Pirahã dili</option>
                      <option>Pokomamca</option>
                      <option>Pokomçice</option>
                      <option>Portekizce</option>
                      <option>Potavatomice</option>
                      <option>Provensal</option>
                      <option>Qikiqtaaluk İnuitçesi</option>
                      <option>Romanşça</option>
                      <option>Rumence</option>
                      <option>Rusça</option>
                      <option>Saho</option>
                      <option>Sahtuca</option>
                      <option>Sakapultekçe</option>
                      <option>Salarca</option>
                      <option>Sanskritçe</option>
                      <option>Sekanice</option>
                      <option>Sırpça</option>
                      <option>Sibirya Yupikçesi</option>
                      <option>Sicilyaca</option>
                      <option>Siglit İnuitçesi</option>
                      <option>Sipakapaca</option>
                      <option>Sirenik Yupikçesi</option>
                      <option>Siyuca</option>
                      <option>Slovakça</option>
                      <option>Slovence</option>
                      <option>Sorb dili</option>
                      <option>Sorani</option>
                      <option>Supikçe</option>
                      <option>Svahili</option>
                      <option>Svanca</option>
                      <option>Süryanice</option>
                      <option>Sivandi</option>
                      <option>Şavnice</option>
                      <option>Şayence</option>
                      <option>Şorca</option>
                      <option>Tacikçe</option>
                      <option>Tagalogca</option>
                      <option>Tagişçe</option>
                      <option>Tahltanca</option>
                      <option>Tamilce</option>
                      <option>Tanakrosça</option>
                      <option>Tatarca</option>
                      <option>Tatça</option>
                      <option>Tayca</option>
                      <option>Tayvanca</option>
                      <option>Tektitekçe</option>
                      <option>Telugu</option>
                      <option>Tibetçe</option>
                      <option>Tlınçonca</option>
                      <option>Tlingitçe</option>
                      <option>Tsetsautça</option>
                      <option>Tsutinaca</option>
                      <option>Tswana</option>
                      <option>Tupi</option>
                      <option>Tuvaca</option>
                      <option>Türkçe</option>
                      <option>Türkmence</option>
                      <option>Tzutuhilce</option>
                      <option>Udmurtça</option>
                      <option>Ukrayna dili</option>
                      <option>Ulahça</option>
                      <option>Urduca</option>
                      <option>Uspantekçe</option>
                      <option>Utkuhiksalik İnuitçesi</option>
                      <option>Uygurca</option>
                      <option>Valensiyaca</option>
                      <option>Vapoca</option>
                      <option>Venedikçe</option>
                      <option>Vietnamca</option>
                      <option>Yakutça</option>
                      <option>Yidiş</option>
                      <option>Batı Yugurca</option>
                      <option>Yukarı Kuskokvimce</option>
                      <option>Yukarı Tananaca</option>
                      <option>Yukatek Mayacası</option>
                      <option>Yukice</option>
                      <option>Yunanca</option>
                      <option>Yupikçe</option>
                      <option>Zazaca</option>
                      <option>Zhuangca</option>
                      <option>Zuluca</option>
                      <option>Zunice</option>
                    </select>
                    <label for="exampleFormControlSelect1">Yabancı Dil-3</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Dil Seçiniz</option>
                      <option>'Are'are dili</option>
                      <option>Abazaca</option>
                      <option>Abhazca</option>
                      <option>Açece</option>
                      <option>Açice</option>
                      <option>Adigece</option>
                      <option>Afrikaans</option>
                      <option>Ahtnaca</option>
                      <option>Eynuca</option>
                      <option>Aivilik İnuitçesi</option>
                      <option>Akanca</option>
                      <option>Akatekçe</option>
                      <option>Alabamaca</option>
                      <option>Algonkince</option>
                      <option>Almanca</option>
                      <option>Altayca</option>
                      <option>Amharca</option>
                      <option>Anişininice</option>
                      <option>Apsalokece</option>
                      <option>Aragonca</option>
                      <option>Aramice</option>
                      <option>Aranca</option>
                      <option>Arapahoca</option>
                      <option>Arapça</option>
                      <option>Arbereşçe</option>
                      <option>Arikaraca</option>
                      <option>Arnavutça</option>
                      <option>Arviligjuaq İnuitçesi</option>
                      <option>Asturyasça</option>
                      <option>Aşağı Tananaca</option>
                      <option>Atikamekçe</option>
                      <option>Atsinaca</option>
                      <option>Auvergnat dili</option>
                      <option>Avakatekçe</option>
                      <option>Avarca</option>
                      <option>Aymara dili</option>
                      <option>Aynu dili</option>
                      <option>Azerice</option>
                      <option>Baskça</option>
                      <option>Bataklık Kricesi</option>
                      <option>Batı Apaçicesi</option>
                      <option>Batı Kanada İnuitçesi</option>
                      <option>Bengalce</option>
                      <option>Bretonca</option>
                      <option>Beyaz Rusça</option>
                      <option>Boşnakça</option>
                      <option>Bulgarca</option>
                      <option>Burgonyaca</option>
                      <option>Buryatça</option>
                      <option>Cavaca</option>
                      <option>Champenois</option>
                      <option>Çalçitekçe</option>
                      <option>Çeçence</option>
                      <option>Çekçe</option>
                      <option>Çerokice</option>
                      <option>Çilkotince</option>
                      <option>Çince</option>
                      <option>Çingenece</option>
                      <option>Çortice</option>
                      <option>Çuhça</option>
                      <option>Çukçice</option>
                      <option>Çupikçe</option>
                      <option>Çulımca</option>
                      <option>Çuvaşça</option>
                      <option>Dakotaca</option>
                      <option>Dakelce</option>
                      <option>Danca</option>
                      <option>Danezaca</option>
                      <option>Dargince</option>
                      <option>Dauphinois</option>
                      <option>Değinakça</option>
                      <option>Denağinaca</option>
                      <option>Denesulinece</option>
                      <option>Denetaca</option>
                      <option>Doğu Kanada İnuitçesi</option>
                      <option>Donşianca</option>
                      <option>Dzongka</option>
                      <option>Endonezyaca</option>
                      <option>Ermenice</option>
                      <option>Eski İngilizce</option>
                      <option>Eski Nors dili</option>
                      <option>Estonca</option>
                      <option>Evenki dili</option>
                      <option>Eyakça</option>
                      <option>Farsça</option>
                      <option>Faroe dili</option>
                      <option>Felemenkçe</option>
                      <option>Filipince</option>
                      <option>Frizce</option>
                      <option>Fince</option>
                      <option>Fransızca</option>
                      <option>Gagavuzca</option>
                      <option>Galce</option>
                      <option>Galiçyaca</option>
                      <option>Gaskonca</option>
                      <option>Gilanice</option>
                      <option>Goranice</option>
                      <option>Grönlandca</option>
                      <option>Guaranice</option>
                      <option>Guçince</option>
                      <option>Güney Pikence</option>
                      <option>Güney Tuçoncası</option>
                      <option>Gürcüce</option>
                      <option>Hakaltekçe</option>
                      <option>Hakasça</option>
                      <option>Hakka</option>
                      <option>Halaçça</option>
                      <option>Halkomelemce</option>
                      <option>Hanca (Atabask)</option>
                      <option>Hantıca</option>
                      <option>Hausa</option>
                      <option>Haydaca</option>
                      <option>Hereroca</option>
                      <option>Hırvatça</option>
                      <option>Hidatsaca</option>
                      <option>Hikarilaca</option>
                      <option>Hintçe</option>
                      <option>Hoçankça</option>
                      <option>Holikaçukça</option>
                      <option>Hupaca</option>
                      <option>İbranice</option>
                      <option>İngilizce</option>
                      <option>İrlandaca</option>
                      <option>İnguşça</option>
                      <option>İnnuca</option>
                      <option>İnuinnaq İnuitçesi</option>
                      <option>İnyupikçe</option>
                      <option>İskoç dili</option>
                      <option>İspanyolca</option>
                      <option>İsveççe</option>
                      <option>İşilce</option>
                      <option>İtalyanca</option>
                      <option>İtzaca</option>
                      <option>İzlandaca</option>
                      <option>Japonca</option>
                      <option>Kabardeyce</option>
                      <option>Kakçikelce</option>
                      <option>Kalabriyaca</option>
                      <option>Kalmıkça</option>
                      <option>Kangiryuarmiut İnuitçesi</option>
                      <option>Kanhobalca</option>
                      <option>Kannada dili</option>
                      <option>Kantonca</option>
                      <option>Kanuri dili</option>
                      <option>Karaayakça</option>
                      <option>Karakalpakça</option>
                      <option>Karankavaca</option>
                      <option>Kaskaca</option>
                      <option>Kaşgayca</option>
                      <option>Katalanca</option>
                      <option>Kazakça</option>
                      <option>Kazan Tatarcası</option>
                      <option>Keçuva dili</option>
                      <option>Kekçice</option>
                      <option>Kernevekçe</option>
                      <option>Khmerce</option>
                      <option>Kırgızca</option>
                      <option>Kırım Tatarcası</option>
                      <option>Kırımçakça</option>
                      <option>Kiçece</option>
                      <option>Kivalliq İnuitçesi</option>
                      <option>Komoksça</option>
                      <option>Komorca</option>
                      <option>Kongoca</option>
                      <option>Korece</option>
                      <option>Korsikaca</option>
                      <option>Koryakça</option>
                      <option>Koyukonca</option>
                      <option>Krice</option>
                      <option>Krikçe</option>
                      <option>Kuzey Tuçoncası</option>
                      <option>Kürtçe</option>
                      <option>Kwalhioqua–Tlatskanai dili</option>
                      <option>Ladino</option>
                      <option>Lakça</option>
                      <option>Lakotaca</option>
                      <option>Latince</option>
                      <option>Laponca</option>
                      <option>Lazca</option>
                      <option>Lehçe</option>
                      <option>Letonyaca</option>
                      <option>Leonca</option>
                      <option>Lezgice</option>
                      <option>Limburgca</option>
                      <option>Limousin dili</option>
                      <option>Lipanca</option>
                      <option>Litvanyaca</option>
                      <option>Lombardça</option>
                      <option>Lorrain dili</option>
                      <option>Lorraine Frankçası</option>
                      <option>Lüksemburgça</option>
                      <option>Macarca</option>
                      <option>Malay dili</option>
                      <option>Maltaca</option>
                      <option>Makedonca</option>
                      <option>Mamca</option>
                      <option>Manca</option>
                      <option>Mançuca</option>
                      <option>Mandanca</option>
                      <option>Mandarin</option>
                      <option>Mansice</option>
                      <option>Maorice</option>
                      <option>Mapudungun</option>
                      <option>Marathi</option>
                      <option>Mari dili</option>
                      <option>Mayaca</option>
                      <option>Megrelce</option>
                      <option>Meskalero-Çirikavaca</option>
                      <option>Meskvakice</option>
                      <option>Mikasukice</option>
                      <option>Miranda dili</option>
                      <option>Moğolca</option>
                      <option>Moldovca</option>
                      <option>Mopanca</option>
                      <option>Nadoten-Vetsuvetence</option>
                      <option>Nakodaca</option>
                      <option>Nakotaca</option>
                      <option>Napolice</option>
                      <option>Naskapice</option>
                      <option>Natsilik İnuitçesi</option>
                      <option>Nattilik İnuitçesi</option>
                      <option>Naukan Yupikçesi</option>
                      <option>Navahoca</option>
                      <option>Nikolaca</option>
                      <option>Nissart dili</option>
                      <option>Nlakapamukça</option>
                      <option>Normanca</option>
                      <option>Norveççe</option>
                      <option>Nuhalkça</option>
                      <option>Nunatsiavut İnuitçesi</option>
                      <option>Nunavik İnuitçesi</option>
                      <option>Nunivak Çupikçesi</option>
                      <option>Oksitanca</option>
                      <option>Orman Kricesi</option>
                      <option>Osetçe</option>
                      <option>Ova Apaçicesi</option>
                      <option>Ova Kricesi</option>
                      <option>Özbekçe</option>
                      <option>Pali dili</option>
                      <option>Papiamento</option>
                      <option>Pavnice</option>
                      <option>Peçenekçe</option>
                      <option>Pencapça</option>
                      <option>Peştuca</option>
                      <option>Pikartça</option>
                      <option>Pirahã dili</option>
                      <option>Pokomamca</option>
                      <option>Pokomçice</option>
                      <option>Portekizce</option>
                      <option>Potavatomice</option>
                      <option>Provensal</option>
                      <option>Qikiqtaaluk İnuitçesi</option>
                      <option>Romanşça</option>
                      <option>Rumence</option>
                      <option>Rusça</option>
                      <option>Saho</option>
                      <option>Sahtuca</option>
                      <option>Sakapultekçe</option>
                      <option>Salarca</option>
                      <option>Sanskritçe</option>
                      <option>Sekanice</option>
                      <option>Sırpça</option>
                      <option>Sibirya Yupikçesi</option>
                      <option>Sicilyaca</option>
                      <option>Siglit İnuitçesi</option>
                      <option>Sipakapaca</option>
                      <option>Sirenik Yupikçesi</option>
                      <option>Siyuca</option>
                      <option>Slovakça</option>
                      <option>Slovence</option>
                      <option>Sorb dili</option>
                      <option>Sorani</option>
                      <option>Supikçe</option>
                      <option>Svahili</option>
                      <option>Svanca</option>
                      <option>Süryanice</option>
                      <option>Sivandi</option>
                      <option>Şavnice</option>
                      <option>Şayence</option>
                      <option>Şorca</option>
                      <option>Tacikçe</option>
                      <option>Tagalogca</option>
                      <option>Tagişçe</option>
                      <option>Tahltanca</option>
                      <option>Tamilce</option>
                      <option>Tanakrosça</option>
                      <option>Tatarca</option>
                      <option>Tatça</option>
                      <option>Tayca</option>
                      <option>Tayvanca</option>
                      <option>Tektitekçe</option>
                      <option>Telugu</option>
                      <option>Tibetçe</option>
                      <option>Tlınçonca</option>
                      <option>Tlingitçe</option>
                      <option>Tsetsautça</option>
                      <option>Tsutinaca</option>
                      <option>Tswana</option>
                      <option>Tupi</option>
                      <option>Tuvaca</option>
                      <option>Türkçe</option>
                      <option>Türkmence</option>
                      <option>Tzutuhilce</option>
                      <option>Udmurtça</option>
                      <option>Ukrayna dili</option>
                      <option>Ulahça</option>
                      <option>Urduca</option>
                      <option>Uspantekçe</option>
                      <option>Utkuhiksalik İnuitçesi</option>
                      <option>Uygurca</option>
                      <option>Valensiyaca</option>
                      <option>Vapoca</option>
                      <option>Venedikçe</option>
                      <option>Vietnamca</option>
                      <option>Yakutça</option>
                      <option>Yidiş</option>
                      <option>Batı Yugurca</option>
                      <option>Yukarı Kuskokvimce</option>
                      <option>Yukarı Tananaca</option>
                      <option>Yukatek Mayacası</option>
                      <option>Yukice</option>
                      <option>Yunanca</option>
                      <option>Yupikçe</option>
                      <option>Zazaca</option>
                      <option>Zhuangca</option>
                      <option>Zuluca</option>
                      <option>Zunice</option>
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
                <div class="col-md-3">
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
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
                <CAlert color="secondary">KDV'li Fiyat</CAlert>
                <div class="col-md-3">
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
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
                <CAlert color="dark">Kapora</CAlert>
                <div class="col-md-3">
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
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
                <CAlert color="secondary">Yıllık Yenileme Tutarı</CAlert>
                <div class="col-md-3">
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
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
                <CAlert color="secondary">Sözleşme Süresi</CAlert>
                Sözleşme Süresi Giriniz:
                <br />
                <input class="form-control" type="text" name="firmaadi :" />
                <br />
                <br />
                <CAlert color="dark">Sözleşme Dosyası Yükleme</CAlert>
                <input class="form-control" type="file" name="dosya" />
                <br />
                <br />
                <input class="form-control" type="button" value="ONAYLA" />
                <br />
                <input class="form-control" type="button" value="YENİLE" />
              </form>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Alerts;
