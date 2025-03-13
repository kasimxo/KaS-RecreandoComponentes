export default class UsersSingleton {

    private static instance: UsersSingleton
    private usersCollection: Record<string, User>

    private constructor(){
        this.usersCollection = {}
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

    public setUser(user: User): void {
        this.usersCollection[user.userName] = user
    }

    public hasUser(userName: string): boolean {
        return this.usersCollection.hasOwnProperty(userName)
    }
}

interface User {
    userName: string,
    profilePicture: string,
    bio: string,
    url: string
}