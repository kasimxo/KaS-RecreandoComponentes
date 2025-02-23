export default function GenerateData(): ChatLog {
    const usersOrg = ["Pepito", "Manolito", "Elenita", "Zutanito", "Sarita", "Marquitos", "Andreita", "Pedrito", "Luisito"]
    const messages: Message[] = [] 
    const chatLog: ChatLog = {
        messages: messages
    }
    const interactions = Math.floor(Math.random()*5)+1

    let date = Date.now()
    date = date - 7*24*3600*1000

    for(let i = 0; i<interactions; i++){ 
        const msgs = Math.floor(Math.random()*3)+1
        const currUser = usersOrg[Math.floor(Math.random()*usersOrg.length)]
        for(let j = 0; j<msgs; j++){
            const msg: Message = {
                date: new Date(date),
                user: currUser,
                content: messagesOrg[Math.floor(Math.random()*messagesOrg.length)]
            }
            messages.push(msg)
            date += 1000*60 + Math.round(Math.random()*1000*3600)
        }
    }

    return chatLog
}

type ChatLog = {
    messages: Message[]
}

type Message = {
    date: Date,
    user: string,
    content: string
}

const messagesOrg = [
    "Me aburro", 
    "LOL", 
    "LMAO", 
    "Se me han caído los macarrones al suelo",
    "¿Qué hacéis?", 
    "Acabo de comprar", 
    "Me voy a dormir",
    "Mañana hay examen",
    "Paso de ir a clase",
    "Te he visto por la calle", 
    "¿Quedamos este finde?",
    "Me he visto la peli que dijisteis",
    "¿Queréis pipas? Tengo muchas XD",
    "Tremendo tattoo",
    "Os tengo que contar una cosa que... vais a flipar", 
    "Es el cumple de mi perro"]
    