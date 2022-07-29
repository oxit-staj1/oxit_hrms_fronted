import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilGroup,
  cilHome,
  cilBarChart,
  cilUserPlus,
  cilWrapText,
  cilPenAlt,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Ana Sayfa',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: '',
    },
  },
 
  {
    component: CNavTitle,
    name: 'Hizmetlerimiz',
  },
  {
    component: CNavItem,
    name: 'Hizmet Ekleme',
    to: '/base',
    icon: <CIcon icon={cilWrapText} customClassName="nav-icon" />,
    
  },
  
  {
    component: CNavGroup,
    name: 'Firma',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Firmalar',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Firma Ekle',
        to: '/icons/firma/firmaekle',
        badge: {
          color: 'success',
          text: '',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Personeller',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Personeller',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: '',
        },
      },
      {
        component: CNavItem,
        name: 'Personel Ekle',
        to: '/icons/flags',
      },
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Sözleşmeler',
    icon: <CIcon icon={cilPenAlt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sözleşme Ekle',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Sözleşmeler',
        to: '/notifications/badges',
      },
      
    ],
  }
]

export default _nav
  