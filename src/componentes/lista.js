import Meta from './meta';

const listaMock=[
  {
    descripcion:'ej. correr 52',
    frecuencia:'1',
    tiempo:'dia',
    veces:'58',
    fecha:'fffff',
    completada:'1',
    emoji:'🏃‍♂️',
   },
   {
    descripcion:'ej. correr 52',
    frecuencia:'1',
    tiempo:'dia',
    veces:'58',
    fecha:'fffff',
    completada:'1',
    emoji:'🏃‍♂️',
   },
   {
    descripcion:'ej. correr 52',
    frecuencia:'1',
    tiempo:'dia',
    veces:'58',
    fecha:'fffff',
    completada:'1',
    emoji:'🏃‍♂️',
   }
];

function Lista(){
  return listaMock.map(obj=><Meta obj={obj}></Meta>);
}

export default Lista;