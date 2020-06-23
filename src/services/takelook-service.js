export default class TakeLookService {

        studios =  [{
            "id": 12,
            "name": "Фламинго",
            "price": 1200,
            "view": ["https://picsum.photos/240/185?random=1"],
            "params": ["птица", "окно"]
        },
        {
            "id": 13,
            "name": "Семейная",
            "price": 1800,
            "view": ["https://picsum.photos/240/185?random=2"],
            "params": ["камин", "качель", "окно"]
        },
        {
            "id": 15,
            "name": "Ночная",
            "price": 2000,
            "view": ["https://picsum.photos/240/185?random=3"],
            "params": ["зеркало", "стул", "портрет"]
        },
        {
            "id": 122,
            "name": "Калибри",
            "price": 1240,
            "view": ["https://picsum.photos/240/185?random=4"],
            "params": ["картина", "слон", "стекло"]
        },
        {
            "id": 123,
            "name": "Стильная",
            "price": 1500,
            "view": ["https://picsum.photos/240/185?random=5"],
            "params": ["занавес", "тумба"]
        },
        {
            "id": 100,
            "name": "Лофт",
            "price": 2200,
            "view": ["https://picsum.photos/240/185?random=6"],
            "params": []
        },
        {
            "id": 178,
            "name": "Таганка",
            "price": 1100,
            "view": ["https://picsum.photos/240/185?random=7"],
            "params": ["картина", "обои", "окно"]
        },
        {
            "id": 1221,
            "name": "Лондон",
            "price": 1250,
            "view": ["https://picsum.photos/240/185?random=8"],
            "params": ["камин", "картина", "окно"]
        },
        {
            "id": 1891,
            "name": "Уют",
            "price": 1450,
            "view": ["https://picsum.photos/240/185?random=9"],
            "params": ["камин", "обои", "картина"]
        }
    ]
        
    getStudios() {
         return new Promise(resolve => {
            resolve(this.studios);
        });
}
}

