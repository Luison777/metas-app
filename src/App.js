
import './App.css';
import { useState } from 'react';
const EntradaLateral=({nombre,destino,clase,src})=>{
  return  (<button className={clase} onClick={destino}>
   <img className='tarjetaicon' src={src}></img>{nombre}
 </button>)
 }
function App() {
  const[mostrarFormulario,setMostrarFormulario]=useState(false);
  const[seeButtonUpdate,setseeButtonUpdate]=useState(true);
  const[seeButtonCrear,setseeButtonCrear]=useState(true);
  const[almacenamiento,setAlmacenamiento]=useState([]);
  
  const[index,setIndex]=useState(undefined);
  const[update,setUpdate]=useState(false);
  /*esta seccion contiene todos los elementos usados en la app*/
    const[input1,setInput1]=useState("ej. 52 caminatas");
    const[input2,setInput2]=useState("1");
    const[input4,setInput4]=useState();
    const[input6,setInput6]=useState();
    const[input7,setInput7]=useState();
    
  const Formulario=()=>{
    
   
    const Input=({etiqueta,type,id,idlabel,idcontenedor,defaultValue,name})=>{
  
      return(
        <div className='contenedor' id={idcontenedor}>
       <label id={idlabel}>{etiqueta}</label>
        <input name={name}type={type} defaultValue={defaultValue} id={id} />
        </div>
      )
    }
    const Boton=({texto,destino,clase})=>{
      
      return (<button className={clase} onClick={destino} >
      {texto}
    </button>)
    }
   
    return (

      <>
      <form method="post" onSubmit={handleSubmit}>
      <Input name={"v1"}defaultValue={input1} etiqueta={"DESCRIBE TU META"} type={"text"} />

      <Input name={"v2"}defaultValue={input2} etiqueta={"¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META? (ej. 1 vez a la semana)"} type={"number"} idcontenedor={'cont2'} idlabel={"label2"}/>

      <select name={"v3"} id='select1'>
      <option>al dia</option>
        <option>a la semana</option>
        <option>al mes</option>
        <option>al año</option>
      </select >
      
      <Input name={"v4"}defaultValue={input4} etiqueta={"¿CUANTAS VECES DESEAS COMPLETAR ESTA META?"} type={"number"} />

      <Input name={"v5"}etiqueta={"¿TIENES UNA FECHA LIMITE?"} type={"date"} />

      <Input name={"v6"} defaultValue={input6} etiqueta={"¿CUANTAS VECES HAS COMPLETADO YA ESTA META?"} type={"number"} />
      
      <div className='contenedor'>
      <label>{"ESCOGE EL ICONO PARA LA META"}</label>
      <select name={"v7"} id='select2'>
        <option>🏃‍♂️</option>
        <option>💻</option>
        <option>📖</option>
        <option>🍎</option>
      </select >
      </div>
     
    
      <div className='footerForm'>
      {seeButtonCrear? <Boton texto={"Crear"} clase={"crearButton"} type={"submit"}/>:null}
      {seeButtonUpdate? <Boton texto={"Actualizar"} clase={"updateButton"} type={"submit"} />:null}
      <Boton texto={"Cancelar"} clase={"cancelarButton"} destino={clickCancelarForm} />
      
      </div>
  
      </form>
      </>
    )
    
   
    
  }
  const CrearTarjeta= almacenamiento.map((obj,key)=>{
    let tiempo= obj["v3"]=="al dia"? "dia": obj["v3"]=="a la semana"? "semana":obj["v3"]=="al mes"? "mes":"año";

  

    let inicio=parseInt(obj['v6']);
    let fin=parseInt(obj['v4']);
    
    let ancho;
    if (inicio<fin){
      ancho={ width: inicio*100/fin+'%'};
    }else(ancho={width:100+'%'})


    const clickTarjeta=({})=>{
      setIndex(key);
      setMostrarFormulario(true);
      setseeButtonUpdate(true);
      setseeButtonCrear(false);
      setUpdate(true);
    
        setInput1(almacenamiento[key]["v1"]);
        setInput2(almacenamiento[key]["v2"]);
        setInput4(parseInt(almacenamiento[key]["v4"]));
        setInput6(parseInt(almacenamiento[key]["v6"]));
        setInput7(almacenamiento[key]["v7"]);
      
    }

    const completado=()=>{
      if (inicio<fin){
      inicio++;
      setInput6(almacenamiento[key]["v6"]=inicio);
      }else{setInput6(almacenamiento[key]["v6"]=fin);}
    }
    
     

    return  (
      <div key={key} className='tarjeta' >
      <div className='divtarjeta' type="button" id={key} onClick={clickTarjeta} >
        <p className='cero'>{obj["v7"]}</p>
        <p className='uno'>{obj["v2"]}/{tiempo}</p>
        <p  className='dos'>{obj["v1"]}</p>
        <span>{obj["v6"]} de {obj["v4"]}
        <div className='barra1'><div style={ancho} className='barra2'></div></div>
        </span>
      </div>
      <button onClick={completado} >Completado</button>
      </div>
    );
    });

  const Mensaje=()=>{
    return(<div className='mensaje'>Parece que aún no has creado ninguna meta.</div>)
  }
/*esta seccion contiene las funciones que dan interactividad a la app*/
  function handleSubmit(e) {

    if(update==true){
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      const data=almacenamiento.slice(0);
      data[index]=formJson;
      setAlmacenamiento(data);
      setMostrarFormulario(false);
      
    }
      
    else{
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setAlmacenamiento(almacenamiento=>([...almacenamiento,formJson]));
    setMostrarFormulario(false);}
   
  }
  function clickCancelarForm({}){
    setMostrarFormulario(false);
   
    setIndex(undefined);
    setUpdate(false);
  }
  function clickNuevaMeta({}){
    setMostrarFormulario(true);
    setseeButtonUpdate(false);
    setseeButtonCrear(true);
    setIndex(undefined);
    setUpdate(false);
    setInput1("ej. 52 caminatas");
    setInput2("1");
    setInput4("1");
    setInput6("0");
    }
  function clickListaMetas({}){
    setMostrarFormulario(false);
    setIndex(undefined);
    setUpdate(false);
  }

  /*esta seccion es donde se define la estructura de la app*/
  return (
    <div className="App">
      <>
     <header><img className='fuego' src='.\fuego.png'></img>METAS APP</header>
     <aside>
        <EntradaLateral src='.\lista.png' clase={"lateral"} nombre={'Lista de Metas'} destino={clickListaMetas}/>
        <EntradaLateral src='.\plus.png' clase={"lateral"} nombre={'Nueva Meta'} destino={clickNuevaMeta}/>
     </aside>
     <main>
      {mostrarFormulario? <Formulario/>:null}
      {almacenamiento.length>0 && mostrarFormulario==false ? CrearTarjeta:null}
      {almacenamiento.length==0 && mostrarFormulario==false ? <Mensaje/>:null}
    </main>
     <footer>Developed and Designed by Luis Angel Perez Frausto. &copy; 2023 All rights reserved.</footer> 
     </>
    </div>
  );
}

export default App;
