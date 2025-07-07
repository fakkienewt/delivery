import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  restaurants = [
    {
      id: 1,
      title: 'Burger King',
      img: 'https://eda.yandex/images/3490902/5ce3a8059f71e9de916f6a0c7eabe5ad-648x312.jpg',
      order: 'Order',
    },
    {
      id: 2,
      title: 'KFC',
      img: 'https://eda.yandex/images/3772784/363315778e80282c639d899dfc8819e4-648x312.jpg',
      order: 'Order',
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
    }
  ]
}
