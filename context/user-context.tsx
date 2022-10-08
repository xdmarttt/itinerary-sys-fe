import React from "react";

export const UserContext = React.createContext<IUserContext>(undefined)

export type IUserContext = {_id: string} | undefined
