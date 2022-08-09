import React, { useEffect, useState } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'
import axios from 'axios'

const Charts = () => { 
  const url = "http://localhost:8080/api/firma/getall"
  const [firmas, setFirmas] = useState([])
  const [details, setDetails] = useState([])
  const columns = [
    'firma_id' ,
    'yetkili_ad' ,
    'yetkili_soyad',
    'cep_tel',
    'firma_domain_ad',
    'email',
    'firma_il',
    'firma_ilce',
    'firma_not',
    'sabit_tel',
    'vergi_dairesi',
    'vergi_numarasi',
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    filter: false,
    sorter: false,
  },
] 
const setData = [
  { firma_id:"",cep_tel: "",email: "",firma_adres: "",firma_domain_ad: "",firma_il: "",firma_ilce: "",firma_not: "",sabit_tel: "",
  vergi_dairesi: "",vergi_numarasi: "",yetkili_ad: "",yetkili_soyad: "",},
]
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setFirmas(response.data.data);
        console.log(response.data.data)
      })
  }, [])
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  const onDelete = (firma_id) => { 
    axios.delete(`http://localhost:8080/api/firma/delete/${firma_id}`)
      .then(() => {
        window.location.reload();

      })
  }
  return (
    <>
    <CSmartTable
      columnSorter
      pagination
      items={firmas}
      columns ={columns}
      cleaner
      itemsPerPage={5}
      itemsPerPageSelect
      clickableRows
      tableFilter
      tableProps={{
        hover: true,
        responsive: true,
      }}
      scopedColumns={{
        show_details: (firma) => {
          return (
            <td>
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(firma.firma_id)
                }}
              >
                {details.includes(firma.firma_id) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          )
        },
        details: (firma) => {
          return (
            <CCollapse visible={details.includes(firma.firma_id)}>
              <CCardBody>
                <CButton size="sm" color="danger" className="ml-1"  onClick={() => onDelete(firma.firma_id)} >
                  Delete
                </CButton>           
              </CCardBody>
            </CCollapse>
          )
        },
      }}
    />

  </>

  )
}
export default Charts;