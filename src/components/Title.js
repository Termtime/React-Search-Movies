import React from 'react';

/*
    De-estructuracion del componente props ya que
    vamos a utilizar solamente una propiedad
    llamada children, entonces vamos a extraer
    solamente esa propiedad para no tener
    que hacer props.children

    tambien nombramos nuestro componente
    y exportamos ese componente para que 
    en donde queramos utilizar ese
    compontente tengan que utilizar el mismo
    nombre
*/
export const Title =  ({children}) => {
    return <h1 className='title'>{children}</h1>
}
