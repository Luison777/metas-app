
export async function pedirMetas(){
    const response=await fetch('/api/metas');
    const metas=await response.json();
    return metas;
}
export async function pedirMera(id){
    const response=await fetch(`/api/metas${id}`);
    const meta=await response.json();
    return meta;
}
export async function crearMeta(meta){
    const response=await fetch('/api/metas',{
        method:'POST',
        body:meta,
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    const metaCreada=await response.json();
    //console.log('meta creada',metaCreada);
    return metaCreada;
}
export async function actualizarMeta(meta,id){
    const response=await fetch(`/api/metas/${id}`,{
        method:'PUT',
        body:JSON.stringify(meta),
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    const metaActualizada=await response.json();
    //console.log('meta actualizada',metaActualizada);
    return metaActualizada;
}
export async function borrarMeta(id){
   await fetch(`/api/metas/${id}`,{
        method:'DELETE'
    });
    
    console.log('meta borrada',id);
  
}