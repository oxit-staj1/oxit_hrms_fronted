import React from 'react'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cifTr,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilBuilding,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import Popup from 'reactjs-popup';  
import 'reactjs-popup/dist/index.css';
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'


const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressGroupExample1 = [
    { title: 'Pazartesi', value1: 34, value2: 78 },
    { title: 'Salı', value1: 56, value2: 94 },
    { title: 'Çarşamba', value1: 12, value2: 67 },
    { title: 'Perşembe', value1: 43, value2: 91 },
    { title: 'Cuma', value1: 22, value2: 73 },
    { title: 'Cumartesi', value1: 53, value2: 82 },
    { title: 'Pazar', value1: 9, value2: 69 },
  ]
  
  const tableExample = [
    {
      avatar: { src: avatar1},
      user: {
        name: 'Çağrı',
        new: true,
        registered: 'Ocak 1, 2021',
      },
      country: { name: 'Türkiye', flag: cifTr },
      usage: {
        value: 50,
        period: 'Temmuz 11, 2021 - Temmuz 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '200$',
      
    },
    {
      avatar: { src: avatar2},
      user: {
        name: 'Ömer',
        new: false,
        registered: 'Ocak 1, 2021',
      },
      country: { name: 'Türkiye', flag: cifTr },
      usage: {
        value: 22,
        period: 'Temmuz 11, 2021 - Temmuz 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '50€',
    },
    {
      avatar: { src: avatar3},
      user: { name: 'Eren', new: true, registered: 'Ocak 1, 2021' },
      country: { name: 'Türkiye', flag: cifTr },
      usage: {
        value: 94,
        period: 'Haziran 11, 2021 -  10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '100$',
    },
    {
      avatar: { src: avatar4},
      user: { name: 'Doğa', new: true, registered: 'Ocak 1, 2021' },
      country: { name: 'Türkiye', flag: cifTr },
      usage: {
        value: 98,
        period: 'Haziran 11, 2021 - Temmuz 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: '500₺'
      ,
    },
    {
      avatar: { src: avatar5},
      user: {
        name: 'Tuğba',
        new: true,
        registered: 'Ocak 1, 2021',
      },
      country: { name: 'Türkiye', flag: cifTr },
      usage: {
        value: 22,
        period: 'Haziran 11, 2021 - Temmuz 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: '250₺',
    },
    {
      avatar: { src: avatar6},
      user: {
        name: 'İbrahim',
        new: true,
        registered: 'Haziran 1, 2021',
      },
      country: { name: 'Türkiye', flag: cifTr },
      usage: {
        value: 43,
        period: 'Temmuz 11, 2021 - Ağustos 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: '0€',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <WidgetsBrand withCharts />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Firmalar {' & '} Satışlar</CCardHeader>
            <CCardBody>

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilBuilding} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Firma</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Ülke</CTableHeaderCell>
                    <CTableHeaderCell>Kullanım Oranı</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Ödeme yöntemi</CTableHeaderCell>
                    
                    <CTableHeaderCell>Ödenen Ücret</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new }</span>Kayıt Tarihi:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Fiyat</div>
                        <strong>{item.activity}</strong>
                        <br></br>
                        <Popup trigger={<button type="button"
        data-bs-toggle="popover" data-bs-placement="right"
        data-bs-custom-class="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables." class="btn btn-primary">Firma Detayları</button>} position="left center">
                             <div>{item.activity}</div>
                        </Popup>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard