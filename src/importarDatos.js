const importarTodosLosDatos = () => {
    const context = require.context('./datos/', false, /\.json$/);
    const datos = {};
  
    context.keys().forEach(key => {
      const nombreArchivo = key.replace('./', '').replace('.json', '');
      datos[nombreArchivo] = context(key);
    });
    
    return datos;
  };

export default importarTodosLosDatos;