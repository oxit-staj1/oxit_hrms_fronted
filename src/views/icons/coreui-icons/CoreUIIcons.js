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
const Flags = () => { // firma list olacak 

  const url = "http://localhost:8080/api/personel/getall"
  const [personels, setPersonels] = useState([])

  
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setPersonels(response.data.data);
        console.log(response.data.data)
      })
  }, [])

  const setData = (personel) => {
    const {personel_id,personel_ad,personel_soyad,is_baslangic_tarihi,dogum_tarihi,birimi } = personel;
    localStorage.setData('personel_id', personel_id);
    localStorage.setData('personel_ad', personel_ad);
    localStorage.setData(' personel_soyad', personel_soyad);
    localStorage.setData('is_baslangic_tarihi', is_baslangic_tarihi);
    localStorage.setData('dogum_tarihi', dogum_tarihi);
    localStorage.setData('birimi', birimi);
  }

  const getData = () => {
    axios.get(url)
      .then((getData) => {
        setPersonels(getData.data.data);
      })
  }

 
  const onDelete = (personel_id) => {
    axios.delete(`http://localhost:8080/api/personel/delete/${personel_id}`)
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
            <CTableHeaderCell scope='col'>personel_ad   </CTableHeaderCell>
            <CTableHeaderCell scope='col'>personel_soyad   </CTableHeaderCell>
            <CTableHeaderCell scope='col'>  is_baslangic_tarihi </CTableHeaderCell>
            <CTableHeaderCell scope='col'>   dogum_tarihi</CTableHeaderCell>
            <CTableHeaderCell scope='col'>birimi</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          {
            personels.map((personel) => (
              <CTableBody>
                <CTableRow key={personel.personel_id}>
                  <CTableHeaderCell scope='row'>{personel.personel_ad}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{personel.personel_soyad}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{personel.is_baslangic_tarihi}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{personel.dogum_tarihi}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>{personel.birimi}</CTableHeaderCell>
                  <CTableHeaderCell scope='row'>
                    <button onClick={() => onDelete(personel.personel_id)}>Delete</button>
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
                  'İngilizce',
                  'Almanca',
                  'Fransızca',
                  'İspanyolca',
                  'Fransızca',
                  'Rusça',
                  'İtalyanca',
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
                    data: [28, 48, 40, 19, 96, 27, 100],
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

export default Flags