import { Request, Response } from "express"


export const login = (req: Request, res: Response) => {
    res.send('LOGIN')
}

export const generateCode = (eq: Request, res: Response) => {
    res.send('GENERATE CODE')
}


