import React, { useEffect, useState } from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import axios from 'axios'
const WidgetsDropdown = () => {

    const url = "http://localhost:8080/api/firma/getall";
    const [firmas, setFirmas] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setFirmas(response.data.data);
                console.log(response.data.data)           
                console.log(firmas.length);

            })
    }, [])

    const setData = (firma) => {
        let { firma_id, yetkili_ad } = firma;
        localStorage.setItem('firma_id', firma_id);
        localStorage.setItem('yetkili_ad', yetkili_ad);
    }

    const getData = () => {
        axios.get(url)
            .then((getData) => {
                setFirmas(getData.data.data);
            })
    }
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>

FİRMA SAYISI





              <span className="fs-6 fw-normal">
              </span>
            </>
          }
          title={firmas.length}

          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              
              options={{
                
                
            
                
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
          

            <>
              $6.200{' '}
              <span className="fs-6 fw-normal">
                (-40.9%)
              </span>
            </>
          }
          title="Tahmini Gelir"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
                datasets: [
                  {
                    label: 'Veri kümesi',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            

            <>
              17.76{'$'}
            </>
          }
          title="Dolar Kuru"
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                
              }}
              
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              18.01{'€'}
            </>
          }
          title="Euro Kuru"
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: [
                  'Ocak',
                  'Şubat',
                  'Mart',
                  'Nisan',
                  'Mayıs',
                  'Haziran',
                  'Temmuz',
                  'Ağustos',
                  'Eylül',
                  'Ekim',
                  'Kasım',
                  'Aralık',
                  'Ocak',
                  'Şubat',
                  'Mart',
                  'Nisan',
                ],
                datasets: [
                  {
                    label: 'Veri kümesi',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown