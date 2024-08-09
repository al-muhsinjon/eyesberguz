import { faCircleUser, faMoneyBill1, faQrcode } from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidv4} from 'uuid';

export const navItems = [
    {
        id: uuidv4(),
        name: 'Скачать приложение',
        path: '',
        img: faQrcode
    },
    {
        id: uuidv4(),
        name: 'Стать специалистом',
        path: 'spec',
        img: faMoneyBill1
    },
    {
        id: uuidv4(),
        name: 'Вход',
        path: 'cabinet',
        img: faCircleUser
    },
    
]