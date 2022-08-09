import React, { useEffect, useState } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'
import axios from 'axios'
const Flags = () => { 
  const url = "http://localhost:8080/api/personel/getall"
  const [personels, setPersonels] = useState([])
  const [details, setDetails] = useState([])
  const columns = [
    'personel_id',
    'personel_ad' ,
    'personel_soyad',
    'is_baslangic_tarihi',
    'dogum_tarihi',
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    filter: false,
    sorter: false,
  },
]
  
const setData = [
  { 

},

  
]

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setPersonels(response.data.data);
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

  const onDelete = (personel_id) => {
    axios.delete(`http://localhost:8080/api/personel/delete/${personel_id}`)
      .then(() => {
window.location.reload()

      })
  }
  return (
    <>
    <CSmartTable
      
      columnSorter
      pagination
      items={personels}
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

        show_details: (personel) => {
          return (
            <td>
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(personel.personel_id)
                }}
              >
                {details.includes(personel.personel_id) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          )
        },
        details: (personel) => {
          return (
            <CCollapse visible={details.includes(personel.personel_id)}>
              <CCardBody>

                <CButton size="sm" color="danger" className="ml-1"  onClick={() => onDelete(personel.personel_id)}>
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

export default Flags