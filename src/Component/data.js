import UserImg1 from '../Assets/Images/news1.jpg';
import UserImg2 from '../Assets/Images/news2.jpg';
import UserImg3 from '../Assets/Images/news3.jpg';
import UserImg4 from '../Assets/Images/news4.jpg';
import Family2 from '../Assets/Images/family1.png';
import Family1 from '../Assets/Images/family2.png';
const Users = () => [
    {
        id: 1,
        image: `${UserImg1}`,
        job: 'Бизнес',
        date: 'Апр 6, 2022',
        subtitle: 'Взломать стеклянный потолок гендерной...',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.'
    },
    {
        id: 2,
        image: `${UserImg2}`,
        job: 'Финансы',
        date: 'Дек 23, 2022',
        subtitle: 'На прошлой неделе войти в культовый рейтинг...',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.'
    },
    {
        id: 3,
        image: `${UserImg3}`,
        job: 'Предприятие',
        date: 'Сен 17, 2022',
        subtitle: 'Градиентный ИИ нацелен как на андеррайтинг, так...',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.'
    },
    {
        id: 4,
        image: `${UserImg4}`,
        job: 'Предприятие',
        date: 'Сен 17, 2022',
        subtitle: 'Градиентный ИИ нацелен как на андеррайтинг, так...',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.'
    }
]
const Family = () => [
    {
        id: 1,
        title: 'Строительство и недвижимость',
        image: `${Family1}`,
    },
    {
        id: 2,
        title: 'Страхование безопасности',
        image: `${Family2}`,
    },
]
export { Users, Family }
