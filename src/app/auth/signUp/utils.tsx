export function verifySignUpData(name:string, password:string, email:string) : boolean{
    if(name.length > 4 && password.length > 5 && email.includes("@")){
        return true
    }
    return false
}

