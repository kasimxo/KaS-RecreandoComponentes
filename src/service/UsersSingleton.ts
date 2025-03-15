import { User } from "../types/userTypes";
import getUsersCollection from '@utils/getUsersCollection'

class UsersSingleton {

    private static instance: UsersSingleton
    private usersCollection: Record<string, User>

    private constructor(){
        this.usersCollection = Object.freeze(getUsersCollection())
        console.log("We declared the singleton obj")
    }

    public static getInstance(): UsersSingleton{
        if(!UsersSingleton.instance){
            UsersSingleton.instance = new UsersSingleton()
        }
        return UsersSingleton.instance
    }

    public getUser(userName: string): User | null{
        return this.usersCollection[userName]
    }

    public hasUser(userName: string): boolean {
        return this.usersCollection.hasOwnProperty(userName)
    }

    public getUserNameList(): string[]{
        return Object.keys(this.usersCollection)
    }

    public getAllUsers(): User[]{
        return Object.values(this.usersCollection)
    }
}

export default UsersSingleton.getInstance()
