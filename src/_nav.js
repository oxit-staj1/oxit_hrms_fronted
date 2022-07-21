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
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Ana Sayfa',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
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
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    
  },
  {
    component: CNavItem,
    name: 'Firma İstatistikleri',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Personeller',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
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
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
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
