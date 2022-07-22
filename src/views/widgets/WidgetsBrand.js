import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol, } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibLinkedin, cibTwitter, cibInstagram } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'
import {Link} from 'react-router-dom';

const WidgetsBrand = ({ withCharts }) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  
            
                  
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<a> <CIcon icon={cibFacebook} height={52} className="my-4 text-white" /></a>}
          values={[
            { title: 'arkadaşlar', value: '235' },
            { title: 'beğeniler', value: '235' },
          ]}
          style={{
            '--cui-card-cap-bg': '#3b5998',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  
                    
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibTwitter} height={52} className="my-4 text-white" />}
          values={[
            { title: 'takipçiler', value: '-' },
            { title: 'tweetler', value: '-' },
          ]}
          style={{
            '--cui-card-cap-bg': '#00aced',
          }}
        >
          
        </CWidgetStatsD>
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  
                }}
                options={chartOptions}
              />
            ),
          })}



          icon={<CIcon icon={cibLinkedin} height={52} className="my-4 text-white" />}
          values={[
            { title: 'takipçiler', value: '253' },
            { title: 'gönderiler', value: '3' },
            



          ]}
          style={{
            '--cui-card-cap-bg': '#4875b4',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          color="warning"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibInstagram} height={52} 
          className="my-4 text-white"/>
        }
          values={[
            { title: 'takipçiler', value: '310' },
            { title: 'gönderiler', value: '1' },
          ]}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
