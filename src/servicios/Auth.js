export async function registrar(cuenta){
    const response=await fetch('/api/cuentas/signup',{
        method:'POST',
        body:JSON.stringify(cuenta),
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    if(response.status !==200)throw new Error();
    const token=await response.json();
    return token;
}
export async function acceder(cuenta){
    const response=await fetch('/api/cuentas/login',{
        method:'POST',
        body:JSON.stringify(cuenta),
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    if(response.status !==200)throw new Error();
    const token=await response.json();
    return token;
}