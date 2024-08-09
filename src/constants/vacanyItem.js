import { v4 as uuidv4 } from "uuid";
import {
	faClock,
	faLocationDot,
	faSuitcase,
	faLaptop,
	faClipboardCheck,
	faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
export const VACANCY_ITEM_CONTENT = [
	{
		id: uuidv4(),
		name: "Удобный рабочий график 5/2 с 10 до 19 часов",
		icon: faClock,
	},
	{
		id: uuidv4(),
		name: "Работа с уникальным проектом и отзывчивой командой",
		icon: faSuitcase,
	},
	{
		id: uuidv4(),
		name: "Любая необходимая техника и софт",
		icon: faLaptop,
	},
	{
		id: uuidv4(),
		name: "Офис на левом берегу Астаны",
		icon: faLocationDot,
	},
	{
		id: uuidv4(),
		name: "Оформление в соответствии с ТК РК",
		icon: faClipboardCheck,
	},
	{
		id: uuidv4(),
		name: "Стабильная и высокая оплата труда",
		icon: faDollarSign,
	},
];
