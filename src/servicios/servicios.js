
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
export async function actualizarMeta(){
    const response=await fetch('/metas.json');
    const metaActualizada=await response.json();
    console.log('meta actualizada',metaActualizada);
    return metaActualizada;
}
export async function borrarMeta(){
    const response=await fetch('/metas.json');
    const metaBorrada=await response.json();
    console.log('meta creada',metaBorrada.id);
    return metaBorrada.id;
}