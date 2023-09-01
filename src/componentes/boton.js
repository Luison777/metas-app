function Boton({texto,onClick,className,type}){
      
    return (<button className={className} onClick={onClick} type={type} >
    {texto}
  </button>)
  }

export default Boton;
