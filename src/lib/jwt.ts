import jwt, { JwtPayload } from "jsonwebtoken";

interface ISignOption {
    expiresIn? : string | number;

}

const DEFAULT_SIGN_OPTION:ISignOption = {
    expiresIn: "5h"
}

export function signJwtAccessToken(payload: JwtPayload, options: ISignOption = DEFAULT_SIGN_OPTION){
    const secretKey = process.env.SECRET_KEY
   
    const token = jwt.sign(payload, secretKey!, options)
    return token
}

export function verifyJwt(token: string){
    try {
        const secretKey = process.env.SECRET_KEY
        const decoded = jwt.verify(token, secretKey!)
        return decoded as JwtPayload

    } catch (error) {
        console.log(error);
        return null
        
    }
}