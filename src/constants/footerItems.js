import {v4 as uuidv4} from 'uuid';
import telegram from '../assets/images/telegram.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import playmarket from '../assets/images/playmarket.png'
import appStore from '../assets/images/appStore.png'
import appgallery from '../assets/images/appgallery.png'
import { faBars, faHouseUser, faPlus } from '@fortawesome/free-solid-svg-icons';


export const footerList = [
    {
        id: uuidv4(),
        name: 'Компания',
    },
    {
        id: uuidv4(),
        name: 'Продукт',
    },
    {
        id: uuidv4(),
        name: 'Ресурсы',
    },
    
]


export const company = [
  {
      id: uuidv4(),
      name: 'Вакансии',
      path: 'job'
  },
]


export const product = [
  {
    id: uuidv4(),
    name: 'Каталог услуг',
    path: ''
  },
  {
      id: uuidv4(),
      name: 'Стать специалистом',
      path: 'spec'
  },
  {
      id: uuidv4(),
      name: 'Создать услугу',
      path: ''
  },
]

export const resource = [
  {
    id: uuidv4(),
    name: 'Блог',
    path: ''
  },
  {
    id: uuidv4(),
    name: 'Частые вопросы',
    path: ""
  },
  {
    id: uuidv4(),
    name: 'Контакты',
    path: 'contact'
  }
]

// SOCIALS
export const socials = [
  {
    id: uuidv4(),
    name: 'telegram',
    path: 'https://telegram.com',
    icon: telegram
  },
  {
    id: uuidv4(),
    name: 'instagram',
    path: 'https://instagram.com',
    icon: instagram
  },
  {
    id: uuidv4(),
    name: 'linkedin',
    path: 'https://linkedin.com',
    icon: linkedin
  },
]


export const download = [
  {
    id: uuidv4(),
    name: 'playmarket',
    path: 'https://playmarket.com',
    icon: playmarket
  },
  {
    id: uuidv4(),
    name: 'appStore',
    path: 'https://appStore.com',
    icon: appStore
  },
  {
    id: uuidv4(),
    name: 'appgallery',
    path: 'https://appgallery.com',
    icon: appgallery
  }
]


export const privacy = [
  {
    id: uuidv4(),
    name: 'Политика конфиденциальности',
    path: '/legal/privacy-policy',
  },
  {
    id: uuidv4(),
    name: 'Условия использования',
    path: '/legal/terms-of-use',
  },
  {
    id: uuidv4(),
    name: `© 2015-${new Date().getFullYear()}. Все права защищены`,
  }
]


export const bottomNav = [
  {
    id: uuidv4(),
    name: 'Главная',
    path: '/',
    icon: faHouseUser
  },
  {
    id: uuidv4(),
    name: 'Создать',
    path: '/order',
    icon: faPlus
  },
  {
    id: uuidv4(),
    name: `Каталог`,
    icon: faBars
  } 
]