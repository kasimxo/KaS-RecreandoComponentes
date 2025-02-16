export default function GenerateData(): TrelloColumn{
    const foods = ["Patata","Tomate","Lechuga", "Pan", "Escoba", "Recogedor", "Almohada", "Aspirador"]
    const foodsLen: number = Math.floor(Math.random()*5) + 1
    const foodArr: string[] = []
    for(let i = 0; i<foodsLen; i++){
        let el: string = foods[Math.floor(Math.random()*foods.length)]
        while(foodArr.some((word)=>word===el)){
            el = foods[Math.floor(Math.random()*foods.length)]
        }
        foodArr.push(el)
    }
    const trelloColumn = {
        title: "Lista de la compra",
        cards: foodArr
    }
    return trelloColumn
}

type TrelloColumn = {
    title: string,
    cards: string[]
}
