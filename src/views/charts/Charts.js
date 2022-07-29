import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'
import { Table } from 'semantic-ui-react'
import axios from 'axios'
import { Button } from '@coreui/coreui'
const FirmaList = () => { // firma list olacak 

  const url = "http://localhost:8080/api/firma/getall"
  const [firmas, setFirmas] = useState([])

  // yetkili_ad, yetkili_soyad, cep_tel, sabit_tel,
  // vergi_dairesi, vergi_numarasi, email, firma_il, firma_ilce, firma_adres, firma_not, firma_domain_ad
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setFirmas(response.data.data);
        console.log(response.data.data)
      })
  }, [])

  const setData = (firma) => {
    const { firma_id, yetkili_ad, yetkili_soyad, cep_tel, sabit_tel,
      vergi_dairesi, vergi_numarasi, email, firma_il,
      firma_ilce, firma_adres, firma_not, firma_domain_ad } = firma;
    localStorage.setData('personel_id', firma_id);
    localStorage.setData('personel_ad', yetkili_ad);
    localStorage.setData(' personel_soyad', yetkili_soyad);
    localStorage.setData('is_baslangic_tarihi', cep_tel);
    localStorage.setData('dogum_tarihi', sabit_tel);
    localStorage.setData('dogum_tarihi', vergi_dairesi);
    localStorage.setData('dogum_tarihi', vergi_numarasi);
    localStorage.setData('dogum_tarihi', email);
    localStorage.setData('dogum_tarihi', firma_il);
    localStorage.setData('dogum_tarihi', firma_ilce);
    localStorage.setData('dogum_tarihi', firma_adres);
    localStorage.setData('dogum_tarihi', firma_not);
    localStorage.setData('dogum_tarihi', firma_domain_ad);
  }

  const getData = () => {
    axios.get(url)
      .then((getData) => {
        setFirmas(getData.data.data);
      })
  }

  const onDelete = (firma_id) => { 
    axios.delete(`http://localhost:8080/api/firma/delete/${firma_id}`)
      .then(() => {
        getData();
      })
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CTable>
          <CTableHead>
            <CTableRow>

              <CTableHeaderCell scope='col'>yetkili ad</CTableHeaderCell>
              <CTableHeaderCell scope='col'>yetkili soyad</CTableHeaderCell>
              <CTableHeaderCell scope='col'>cep tel</CTableHeaderCell>
              <CTableHeaderCell scope='col'>sabit tel</CTableHeaderCell>
              <CTableHeaderCell scope='col'>vergi dairesi</CTableHeaderCell>
              <CTableHeaderCell scope='col'>vergi numarasi</CTableHeaderCell>
              <CTableHeaderCell scope='col'>email</CTableHeaderCell>
              <CTableHeaderCell scope='col'>il</CTableHeaderCell>
              <CTableHeaderCell scope='col'>ilce</CTableHeaderCell>
              <CTableHeaderCell scope='col'>adres</CTableHeaderCell>
              <CTableHeaderCell scope='col'>not</CTableHeaderCell>
              <CTableHeaderCell scope='col'>domain</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          {
            firmas.map((firma) => (
              <CTableBody>
                <CTableRow key={firma.firma_id}>
                  <CTableHeaderCell scope='row'>{firma.yetkili_ad}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.yetkili_soyad}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.cep_tel}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.sabit_tel}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.vergi_dairesi}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.vergi_numarasi}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.email}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.firma_il}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.firma_ilce}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.firma_adres}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.firma_not}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{firma.firma_domain_ad}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>
                    <button onClick={() => onDelete(firma.firma_id)}>Delete</button>
                  </CTableHeaderCell>
                  
                </CTableRow>
              </CTableBody>
            ))
          }

        </CTable>
      </CCol>
      {/*    <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Firmaların Tercih Ettiği Yabancı Diller Grafiği</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
                datasets: [
                  {
                    label: 'Firma Sayısı',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="aylar"
            />
          </CCardBody>
        </CCard>
      </CCol> */}
      {/*  <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Hizmetleri Yenileyen/Yenilenmeyen Firma Sayısı Grafiği</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
                datasets: [
                  {
                    label: 'Hizmetleri Yenileyen Firmalar',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: 'Hizmetleri Yenilemeyen Firmalar',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
      {/*   <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Alınan Hizmet Sayısı Grafiği</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Dinamik Web Site', 'Reklam Paketi', 'Yenileme', 'E-Ticaret'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [30, 20, 40, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
      {/* <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Radar Grafik</CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: [
                  'Türkçe',
                  'İngilizce',
                  'Almanca',
                  'Fransızca',
                  'İtalyanca',
                  'Japonca',
                  'Rusça',
                  'Azerice',
                  'Arapça',
                  'Danca',
                ],
                datasets: [
                  {
                    label: 'Kullanılan Yabancı Diller',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [28, 48, 40, 19, 96, 27, 100,76,23,54],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default FirmaList