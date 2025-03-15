export interface User {
    userName: string,
    profilePicture: string,
    bio: string,
    url: string,
    targets: Target[], 
}

export type Target = {
    name: string,
    component: () => React.JSX.Element
}