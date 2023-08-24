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
      localStorage.setItem('metas',[JSON.stringify(data)]);
      console.log(data);
    }
      
    else{
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setAlmacenamiento(almacenamiento=>([...almacenamiento,formJson]));
    setMostrarFormulario(false);

    const toLocalStrg=[...almacenamiento,formJson];
    localStorage.setItem('metas',[JSON.stringify(toLocalStrg)]);
  } 
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
  const borar=()=>{
    let copia=almacenamiento.slice(0);
    copia.splice(index,1);
    console.log(copia);
    setAlmacenamiento(copia);
    localStorage.setItem('metas',[JSON.stringify(copia)]);
    setIndex(undefined);
    setMostrarFormulario(false);
  }