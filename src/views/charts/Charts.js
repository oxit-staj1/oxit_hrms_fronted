import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="Bu sayfada çubuk grafik üzerinden hizmet alan firma sayılarını aylık olarak, çizgi grafik üzerinden hizmetlerini yenileyen ve yenilemeyen firmaların aylık olarak artış ve azalışlarını, donut grafik üzerinden firmaların hangi hizmetten ne kadar yararlandığını, yuvarlak grafik üzerinden hangi hizmet paketlerinin ne kadar kullanıldığınını, kutup alanı grafik üzerinden hangi hizmet seviyelerinden ne kadar kullanıldığını, radar grafik üzerinden firamaların sitelerinde kullanmayı tercih ettiği yabancı dillerin ne kadar kullanıldığını görebilirsiniz."
        />
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Çubuk Grafik</CCardHeader>
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
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Çizgi Grafik</CCardHeader>
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
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Donut Grafik</CCardHeader>
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
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Yuvarlak Grafik</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Ekonomik', 'Standart', 'Profesyonel'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Kutup Alanı Grafik</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Bronz', 'Silver', 'Gold'],
                datasets: [
                  {
                    data: [11, 16, 7],
                    backgroundColor: ['#cd7f32', '#C0C0C0', '#FFD700'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
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
      </CCol>
    </CRow>
  )
}

export default Charts