# ctd-esp-fe2-final

Examen Final de Frontend V

## Indice

- [Requisitos](#requisitos)
  - [Condiciones mínimas de aprobación](#condiciones-mínimas-de-aprobación)
  - [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
- [Funcionalidades](#funcionalidades)
  - [Funcionalidades obligatorias](#funcionalidades-obligatorias)
- [Desarrollo](#desarrollo)
  - [Iniciando la App](#iniciando-la-app)
  - [Dependencias](#dependencias)
  - [Dependencias de Desarrollo](#dependencias-de-desarrollo)
- [Entrega](#entrega)
  - [Fecha de Entrega](#fecha-de-entrega)
  - [Formato de Entrega](#formato-de-entrega)
- [Guía para comenzar](#guía-para-comenzar)
  - [Paso 0 - Instalación](#paso-0---instalación)
  - [Paso 1 - Creación de Custom Render](#paso-1---creación-de-custom-render)
  - [Paso 2 - Escribimos los test del componente Quote.tsx](#paso-2---escribimos-los-test-del-componente-quote.tsx)
  - [Paso 3 - Styled Components](#paso-3---styled-components)
  - [Paso 4 - Noticias](#paso-4---noticias)

## Requisitos

Es indispensable realizar un Fork de este proyecto, para poder trabajar de forma _individual_. No se aceptarán proyectos que se hayan realizado sin partir de este template.

### Condiciones mínimas de aprobación

Las siguientes condiciones son requisitos mínimos necesarios para la aprobación del final:

    * Cumplir con todas las funcionalidades obligatorias
    * El proyecto deberá realizarse sobre la base del template entregado. No se aceptarán proyectos que se hayan realizado sin respetar dicho requerimiento.
    * Solo se podrán utilizar las librerías que se detallan en este documento y/o el archivo README que se encuentra dentro del repositorio.
    * Cualquier funcionalidad que sea implementada utilizando una librería distinta a las permitidas, no se considerará realizada.
    * El proyecto deberá ser desarrollado utilizando TypeScript como lenguaje.
    * Deberá contar con tests unitarios escritos para la primera sección, tal como se indica en la consigna número 1. Para ello deberá emplearse Jest y React Testing Library. Además, se deberá utilizar MSW o alguna otra librería para interceptar los request y mockear una respuesta.
    * Se espera que el proyecto cuente con un coverage de al menos 50% como condición mínima de aprobación.
    * En los casos en que se requiera dar estilos a componentes, deberá realizarse utilizando la librería Styled Components. Los estilos dinámicos también deberán manejarse mediante esta librería.
    * Se espera que al menos puedan aplicar 1 principio SOLID para resolver la primera consigna, explicando en un comentario en qué parte del código podemos ver dicha aplicación.

### Aspectos que modifican la valoración final de la nota

Los siguientes aspectos son _extras_ al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su implementación sea correcta:

    TypeScript
      * En el caso de que se deba llevar adelante una refactorización del código (consigna número 3), será tenido en cuenta el uso de TypeScript para el tipado de los componentes y demás funciones que desarrollen lógica reutilizable.
      * Se valorará la reutilización de tipos comunes que se repiten a lo largo del código, especialmente mediante la reutilización de interfaces.

    Documentación
      * Se valorará el correcto uso de la documentación en todas las funciones y componentes en caso de ser necesario.

    Validaciones
      * Se valorará el agregado de validaciones de flujos alternativos al normal y el manejo de errores en las distintas funcionalidades implementadas.

    Testing unitario y coverage
      * Se valorará el correcto uso del testing unitario y el incremento del porcentaje de cobertura de código (coverage) más allá del 50%.

    Buenas Prácticas
      * Se prestará especial atención al uso de buenas prácticas, principios SOLID, reutilización de componentes y funcionalidades comunes, y renderizado dinámico.

## Funcionalidades

### Funcionalidades obligatorias

Las siguientes funcionalidades son requisitos mínimos necesarios para la aprobación del final y es fundamental que funcionen correctamente.

### _Seccion 1: Citas de los Simpsons._

    En esta sección, el usuario cuenta con la posibilidad de obtener citas de Los Simpsons. Hay dos maneras:

    - Primero, haciendo clic en el botón correspondiente sin ingresar ningún nombre en el input. Esto devuelve una cita al azar.
    - Segundo, si se ingresa el nombre de un personaje antes de presionar el botón, la API devuelve una cita de ese personaje.

    Por otra parte, si se ingresa un valor numérico, se muestra un mensaje de error. La funcionalidad está implementada con Redux Toolkit usando thunk para el request a la API.

    Deberás escribir los tests de esta sección. Para ello deberás:

    * Crear un custom render agregando el provider de Redux para poder disparar las acciones.
    * Utilizar MSW o alguna otra librería para interceptar los request y mockear una respuesta. No se permite mockear el método fetch.
    * Desarrollar test de integración sobre el componente “Quotes”, evaluando los distintos test cases que contemplen los distintos flujos de comportamiento.

    El código base de esta sección se encuentra dentro de src/features/quotes. Allí encontrarás el componente y demás utilidades a tener en cuenta para escribir los tests.

### _Seccion 2: Bio._

    En esta parte se presenta una sección que tiene una botonera que permite alternar entre la biografía de cada personaje. En este caso, lo que pretendemos es maquetar la sección usando Styled Components.

    Además, para el caso de los botones, se requiere aplicar estilos basados en props para poder resaltar el botón del personaje cuya bio se está mostrando en la pantalla.

    El código base para trabajar en esta sección se encuentra en src/features/bio. El componente se encuentra funcionando según lo esperado, por lo que es importante verificar que dicha funcionalidad no haya sido afectada luego de la refactorización.

### _Seccion 3: Noticias._

    Esta sección presenta un listado de noticias acerca de Los Simpsons. Cada noticia tiene una prop esPremium que determina si el usuario puede acceder a la misma o no.

    Si puede, al hacer clic en el botón “Ver más” se abre un modal con el detalle completo de la noticia.
    Si no, se abre un modal que invita al usuario a suscribirse.

    El código base de esta sección se encuentra dentro de la carpeta src/features/news. Allí encontrarás el archivo Noticias.jsx, dentro del cual puede verse que hay múltiples componentes y funciones que realizan tareas sobre la información. En este caso, el requerimiento consiste en refactorizar el código aplicando los principios y buenas prácticas que hemos visto a lo largo de la cursada. En especial, se espera que puedas aplicar los principios SOLID durante el proceso de refactorización. A tal fin, está permitido crear nuevos archivos dentro de la carpeta “news”, en caso de que lo consideres necesario para extraer cierta lógica del código. Sin embargo, debe tenerse en cuenta que solo debe trabajarse sobre el archivo Noticias.jsx. No deberá modificarse el contenido de los archivos fakeRest.ts y styled.ts, ya que ello no forma parte de la consigna.

## Desarrollo

### Iniciando la App

Instalamos las dependencias

`npm install`

Podemos iniciar nuestra aplicación con el comando

`npm run start`

### Dependencias

Se utilizara la version de React 18.1.0, junto con la version 5 de React Scripts.

Solo se podrán utilizas las siguientes dependencias:

- Redux (incluida @reduxjs/toolkit)
- Typescript
- Thunk
- Styled Components
- Jest
- React Testing Library

### Dependencias de Desarrollo

Para resolver la consigna número 1, se deberá haer uso de MSW o librería equivalente para interceptar lor requests a la API y poder devolver una respuesta.

Además, se podrán hacer uso de las siguientes dependencias adicionales para desarrollo (devDependencies), pero las mismas _no_ modificaran la nota en forma positiva, ni son requisitos para la aprobación. Solo se brinda la posibilidad de usarlas, para aquel que sabe lo que esta haciendo y se siente cómodo con ellas.

- Redux Devtools Extension
  - Esta herramienta fue utilizada en clase, para visualizar el estado de Redux. Puede ser útil para debuggear y solucionar algunos problemas de nuestro código.
- ESLint
  - Esta herramienta fue explicada en clase y nos permite visualizar reglas de estilo y buenas prácticas para la escritura de nuestro código.

## Entrega

### Fecha de Entrega

Solo se admitirán entregas recibidas hasta el cierre de la clase 24, clase de Evaluación Final.

### Formato de Entrega

Se aceptará la entrega mediante la submisión de la URL de un repositorio de Github Privado, que haya compatido acceso a las siguientes cuentas:

- Camada 1 - Profesor: Joan Gil - Cuenta de Github @joandvgv
- Camada 2 - Profesor: Matias Rivas - Cuenta de Github @mrivasdh

El link al Google Form para la submisión será enviado por el profesor a cargo de la comisión.

## Guía para comenzar

Ahora que ya vimos cuáles son los requerimientos y funcionalidades que deberás llevar a cabo en este proyecto, haremos un recorrido por los principales pasos a seguir para poder completar el desarrollo de tu aplicación.

### Paso 0 - Instalación

Instalar MSW (si vas a utilizar otra librería puedes saltear este paso)

`npm install msw --save-dev`

### Paso 1 - Creación de custom render

El primer paso para poder escribir y correr nuestros test correctamente, consiste en crear un custom render que nos permita "envolver" los componentes que vamos a testear dentro del provider de Redux. Para ello, crearemos un archivo test-utils.tsx dentro de la carpeta _src_. Dentro del mismo, importamos las dependencias y creamos el custom render:

```test-utils.tsx
// Importamos las dependencias que vamos a utilizar
import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import quoteReducer from "./features/quote/quoteSlice";
import { RootState } from "./app/store";

// Creamos el custom render
const customRender = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        quote: quoteReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: RootState;
    store?: ReturnType<typeof configureStore>;
  } = {}
) => {
  const Wrapper: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => <Provider store={store}>{children}</Provider>;

  render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};

// re-exportamos todo
export * from "@testing-library/react";

// sobrescribimos el método render.
export { customRender as render };

```

### Paso 2 - Escribimos los test del componente Quote.tsx

Para resolver la primera consigna, deberás ubicarte en la carpeta _src/features/quote_ y, allí, crear un nuevo archivo _Quote.test.tsx_.

Dentro del mismo, el primer paso será crear el mock de la API utilizando MSW o la librería que hayas decidido utilizar.
Luego, podrás comenzar a escribir los _test cases_ del componente. Para ello, ten en cuenta los distintos escenarios posibles que puede presentarse en el componente, evaluando no solo el "camino feliz" sino también los flujos alternativos.

**Importante**
Recuerda evaluar el nivel de cóverage de tus test, ya que para poder aprobar esta consigna deberás tener al menos un 50%. Para ello, puedes agregar el flag _--coverage_ al momento de correr el test.

### Paso 3 - Styled Components

Para resolver la segunda consigna deberás ubicarte en la carpeta _src/features/bio_. Allí, crearemos un archivo _styled.ts_, dentro del cual se encontrarán los componentes que deberás crear utilizando **Styled Components**.

Los estilos de cada componente, puedes obtenerlos del archivo _styles.modules.css_ que se encuentra dentro de la carpeta.

Recuerda que un punto importante de la consigna, consiste en agregar estilos dinámicos a los botones, de manera de poder identificar el personaje que se encuentra activo.
Para ello, puedes utilizar el valor de la variable _bioActiva_ que se encuentra dentro del componente **Bio**

**Importante**
Esta sección se encuentra funcionando correctamente en el código base. Es importante verificar el comportamiento actual antes de proceder a refactorizarlo, de forma tal que una vez realizada la consigna, puedas testear que la sección sigue comportándose de la misma manera.

### Paso 4 - Noticias

Dentro de la carpeta _src/features/news_, encontraremos el archivo
_Noticias.tsx_. Allí, se encuentra toda la lógica de esta sección.
Para poder resolver esta consigna, es importante poder abstraernos un poco de la creación de la UI, y del HTML, para pensar en que funcionalidades pueden ser generalizadas y extraídas del componente
en particular. Por ejemplo, una función que agrega mayúsculas a un string, es algo que puede ser utilizado en cualquier lado (no solo en este componente), por lo que puede crearse una función utilitaria para realizar esta tarea cada vez que sea necesario.
Recuerda además lo aprendido sobre los distintos principios SOLID al momento de pensar en las oportunidades de refactorización que se nos presentan en este caso.

Mucha suerte y éxitos!
