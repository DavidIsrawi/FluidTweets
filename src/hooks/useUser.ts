import React from "react"
import { IUser } from "../types"

export const useUser = (): [IUser | undefined, (name: string) => void] => {
    const [user, setUser] = React.useState<IUser | undefined>(undefined);

    const updateUser = (name: string) => {
        setUser({name});
    }

    return [user, updateUser];
}