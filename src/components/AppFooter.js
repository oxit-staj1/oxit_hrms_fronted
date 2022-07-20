import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://www.oxityazilim.com" target="_blank" rel="noopener noreferrer">
          OXIT
        </a>
        <span className="ms-1">&copy; 2022 Oxit Bilişim</span>
      </div>
      <div className="ms-auto">
        <a href="http://www.oxityazilim.com" target="_blank" rel="noopener noreferrer">
          Oxit Bilişim React Yönetim Paneli &amp; Pano Şablonu
        </a>
        <span className="me-1"> Tarafından desteklenmektedir.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
