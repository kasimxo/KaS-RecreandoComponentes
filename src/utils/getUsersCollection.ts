import { User } from "../types/userTypes";
import getContributorsNamesParticipations from "./getContributorsNamesParticipations"

export default function getUsersCollection(): Record<string, User>{
    const usersCollection: Record<string, User> = {}

    const participations = getContributorsNamesParticipations();

    participations.forEach( p => {
        usersCollection[p.name] = {
            userName: p.name,
            profilePicture: "",
            bio:"Hola tete, soy un tron makinero de confianza",
            url: "",
            targets: p.targets
        }
    })

    return usersCollection
}
