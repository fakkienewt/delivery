import { title } from "process";
import { MenuItem } from "./models/MenuItem";

export class AppService {
    getRestaurants(): { id: number, title: string, img: string }[] {
        return this.restaurants.map(r => ({
            id: r.id,
            title: r.title,
            img: r.img
        }));
    }

    getRestaurant(restId: number) {
        const rest = this.restaurants.find(r => r.id === restId)!;
        return { title: rest.title, img: rest.img };
    }

    getMenu(restId: number): MenuItem[] {
        return this.restaurants.find(r => r.id === restId)?.menu ?? [];
    }

    getAllCategories(): [] {
        return [];
    }

    public restaurants = [
        {
            id: 1,
            title: 'Burger King',
            img: 'https://eda.yandex/images/3490902/5ce3a8059f71e9de916f6a0c7eabe5ad-648x312.jpg',
            order: 'Order',
            allCategories: [
                { id: 1, name: 'Акции' },
                { id: 2, name: 'Бургеры' },
                { id: 3, name: 'Говядина' },
            ],
            menu: [
                {
                    itemId: 1,
                    itemTitle: 'Classic Cheeseburger',
                    itemDescription: '111111',
                    price: 11.5,
                    img: '',
                    categories: [1, 2, 3],
                },
                {
                    itemId: 2,
                    itemTitle: '222',
                    itemDescription: '22222222',
                    price: 12.5,
                    img: '',
                    categories: [1],
                },
                {
                    itemId: 3,
                    itemTitle: '333',
                    itemDescription: '3333333',
                    price: 13.5,
                    img: '',
                },
            ],
        },
        {
            id: 2,
            title: 'KFC',
            img: 'https://eda.yandex/images/3772784/363315778e80282c639d899dfc8819e4-648x312.jpg',
            order: 'Order',
            menu: [],
        },
        {
            id: 3,
            title: 'Gan Bei',
            img: 'https://eda.yandex/images/2796335/1f85f1696ffd42259de282b73cb7af48-648x312.jpg',
            order: 'Order',
        },
        {
            id: 4,
            title: 'Gusto',
            img: 'https://eda.yandex/images/14790567/74a2344d71b04e1b96d9437cdd59a37c-648x312.jpg',
            order: 'Order',
        },
        {
            id: 5,
            title: 'Kebab Town',
            img: 'https://eda.yandex/images/3528150/a1b962fbe92a0e8affa04061fb957935-648x312.jpg',
            order: 'Order',
        },
        {
            id: 6,
            title: 'Pho Bo',
            img: 'https://eda.yandex/images/3490335/a20cc5a68ecc40f0a6d183015f17565b-648x312.jpg',
            order: 'Order',
        },
        {
            id: 7,
            title: 'Tasty Food',
            img: 'https://eda.yandex/images/3456802/bd9872fe9fe230e270ae4b44ae938b0e-648x312.jpg',
            order: 'Order',
        },
        {
            id: 8,
            title: 'Formosa Bubble Tea',
            img: 'https://eda.yandex/images/3534679/a63bbaba7acbf91fb1ed3c336f2223b6-648x312.jpg',
            order: 'Order',
        },
        {
            id: 9,
            title: 'Ajia',
            img: 'https://eda.yandex/images/2794391/7a3602bf878a446c9b46e0d0b234a619-648x312.jpg',
            order: 'Order',
        },
        {
            id: 10,
            title: 'Phu Quoc',
            img: 'https://eda.yandex/images/3813301/84ca91f50d285a9fc7f94d32a7ff5a41-648x312.jpg',
            order: 'Order',
        },
        {
            id: 11,
            title: 'Pizza Yolo',
            img: 'https://eda.yandex/images/3518584/d38679646bbbc39e41353ab40259c92e-648x312.jpg',
            order: 'Order',
        },
        {
            id: 12,
            title: 'Veg Harmony Cafe',
            img: 'https://eda.yandex/images/13873613/bdbba0113f0d497b99d7d4d8503e401d-648x312.jpg',
            order: 'Order',
        },
        {
            id: 13,
            title: 'Mangal Master',
            img: 'https://eda.yandex/images/1463280/87b1d262880253815e88ebe158500a34-648x312.jpeg',
            order: 'Order',
        },
        {
            id: 14,
            title: 'Cheezus',
            img: 'https://eda.yandex/images/3490335/8ed66b0c9b794ab9876f6e25e5ab00ff-648x312.jpg',
            order: 'Order',
        },
        {
            id: 14,
            title: 'Fork',
            img: 'https://eda.yandex/images/3808326/004ac9002723d63c05c1e6620c1671db-648x312.jpg',
            order: 'Order',
        },
        {
            id: 14,
            title: 'Grill Kebab BBQ',
            img: 'https://eda.yandex/images/13802765/520cb74adc264a2a91e6cce36246e132-648x312.jpg',
            order: 'Order',
        },
    ];
}