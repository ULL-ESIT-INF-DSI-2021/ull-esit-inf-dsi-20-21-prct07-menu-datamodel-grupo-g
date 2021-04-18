# Repositorio de la Práctica 7 de la asignatura de Desarrollo de Sistemas Informáticos
## 1. Datos
  * **Integrantes:** Bruno Lorenzo Arroyo Pedraza, Carla Cristina Olivares Rodriguez y Aitor Alonso Melián
  * **Gmail:** alu0101123677@ull.edu.es, alu0101120218@ull.edu.es y alu0101122496@ull.edu.es
  * **Univeridad:** Universidad de La Laguna
  * **Asignatura:** Desarrollo de Sistemas Informáticos
  * **Práctica:** Práctica 7 Modelo de datos de un sistema que permite el diseño de menús

## 2. Introducción

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-g/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-g/actions/workflows/node.js.yml)

Informe de la septima práctica de la asignatura de **Desarrollo de Sistemas Informáticos**. En la práctica propuesta se ha realizado 1 ejercicio en **typescript** que modela un sistema que permite el diseño de menús utilizando **Inquirer.js** y **Lowdb**, así cómo la utilización de las **GitHub Actions**. 

## 3. Objetivos

El objetivo principal de la práctica es la realización de la modelación del diseño de menús para profundizar en Typescript y Javascript con la utilización de **Inquirer.js** y **Lowdb** y la implementación de **GitHub Actions** para la comprobación de **test unitarios** y la comprobación del cubrimiento del código con **coveralls**.

## 4. Desarrollo

Para el desarrollo de la práctica hemos realizado las clases [Food](./src/Food.ts), [Plate](./src/Plate.ts), [Menu](./src/Menu.ts), [MenuCard](./src/MenuCard.ts) y [Comanda](./src/Comanda.ts), y los archivos [list_food](./src/list_food.ts), [list_plates](./src/list_plates.ts) y [list_menu](./src/list_menu.ts) que guardan ingredientes, platos y menus respectivamente. Se han implementado 84 alimentos, 22 platos y 5 menus. 

### [4.1 Food](./src/Food.ts)
Esta clase tendrá como objetivo construir nuestro objeto base `Food` el cual representará nuestros alimentos. Se indicará el nombre del alimento, el grupo alimenticio (carne, pescado, fruta, verdura, quesos...), el origen geográfico, los valores nutricionales (hidratos de carbono, proteinas y lípidos) para cada 100 gramos y el precio por cada kilo del alimento.

Se cuenta con un **getter** y un **setter** para cada atributo de la clase así cómo de una función `getKcal` que cálcula las kilocalorias totales a partir de los valores nutricionales de cada alimento.

### [4.2 Plate](./src/Plate.ts)
La clase `Plate` se engargará de crear los distintos platos que formarán nuestra carta y nuestros menus. Se indicará el nombre del plato, cada uno de los alimentos que lleva junto a la cantidad en gramos del alimento y el tipo de plato (entrante, primer plato...).a

Tendremos algunos métodos que nos ayudarán a la hora de mostrar la información por pantalla, los métodos `printFood()` y `getGroups()` 

`printFood()` es un método de impresión que estructurará e imprimirá la información del plato por pantalla, incluyendo los ingredientes del mismo, su información nutricional y el precio del mismo. 

El método `getGroups()` se encarga de buscar en nuestros platos los tipos de alimentos que contienen (carne, pescado, verduras, leche...) y los almacenará en una cadena que luego mostramos por pantalla en `printFood()`.

Tendremos dos métodos de ajuste de datos que serán el `getNutricional()` y `priceGenerator()`, ambos calcularán la equivalencia de los datos generales a los datos particulares de los platos.

El método `getNutricional()` calculará los valores nutricionales totales del plato, analizando todos los alimentos que componen el plato. En primer lugar crearemos una variable `multiplier` y dentro de ella almacenaremos el resultado de la division de la cantidad de cada alimento indicada en gramos entre 100, hacemos esto porque los valores nutricionales se encuentran indicados por cada 100 gramos del alimento. Luego para cada valor nutricional recogeremos el valor del mismo y lo multiplicaremos por nuestra variable `multiplier` y sumaremos este valor con el resto de valores del mismo valor nutricional que recojamos de los alimentos de nuestros platos.a

El método `priceGenerator()` recoge el precio de cada uno de los alimentos (que se encuentra en €/kg) y realiza una comparación con el peso del alimento que se utiliza en el plato, multiplicando este por el precio del alimento (en kg) y dividiendo este entre mil (para corresponderlo con los gramos, que es la unidad en la que se encuentra el peso de los alimentos). Hemos agregado tambien un valor extra para el precio que será el precio de la mano de obra, el cual incrementará el precio final.

### [4.3 Menu](./src/Menu.ts)
La clase `Menu` se encargará de formar los menus con nuestros objetos de tipo `Plate`. Estará formado por el nombre del menú, 3 platos obligatorios y uno opcional. Se deberán insertar en el orden correspondiente: entrante, primer plato, segundo plato, postre (opcional). Ya que el postre es opcional hemos tenido en cuenta esta condicion a lo largo de todo el código.

Para incorporar el precio de los menus trabajaremos con un método `getPrice()` que sumara los precios de los platos y devolverá el precio total.
El método `getPlates()` devolverá los platos que contiene el menú.

También contaremos con el método de impresión `printMenu()` que estructurará e imprimirá los menus en un formato determinado, mostrando los platos que lo conforman, su información nutricional y el precio. Para la impresión también tendremos la función `printCategories()` que mostrará por pantalla los tipos de alimentos que tiene cada uno de los platos del menú (carne, pescado, cereales...)

El método `getNutritional()` que recolecta y estructura la información nutricional en una variable Map que contiene el nombre del valor nutricional y su valor numérico (que obtendremos sumando los valores nutricionales de todos los platos).

### [4.4 MenuCard](./src/MenuCard.ts)
La clase MenuCard se encargará de realizar la composición de la carta de nuestro restaurante, formada por los platos de nuestra clase `Plate` y los menus de nuestra clase `Menu`, declarados en listas separadas `list_food`, `list_plates` y `list_menu`.

Los atributos serán vectores de `Plate` y de `Menu` los cuales rellenaremos con los elementos declarados en las listas mencionadas anteriormente.

El método `printMenu()` se encarga de estructurar la información de los platos y menus e imprimirla por pantalla separando los platos por su categoría (entrante, primer plato...) y luego añadiendo los menus.

### [4.5 Comanda](./src/Comanda.ts)
El objetivo de la clase comanda es implementar una interfaz interactiva con el usuario, mediante la cual este podrá visualizar la carta del restaurante, realizar una comanda, y además, que esta quede guardada en un archivo de texto.

En la clase comanda hacemos uso de las librerias **lowdb**, e **inquirer**, basándonos en los ejemplos ofrecidos en el libro de TypeScript del campus virtual.

Para visualizar la carta hacemos uso de un método definido en la clase `MenuCard`, que imprime toda los platos y menús disponibles, por categorías.

Para realizar la comanda, o pedir los platos/menus, hacemos que el inquirer recoja como opciones todos los platos y menus disponibles en la clase `MenuCard`, de manera que puede disponerlos todos como elecciones. Una vez seleccionado el plato se pide al usuario la cantidad de raciones que desea pedir, y se guardan mediante **lowdb**, tanto el plato elegido como la cantidad de este plato en `Comanda.json`.

## 5. Conclusiones

En conclusión la utilización de **lowdb** y **inquirer** nos permite crear interfaces interactivas y cómodas a la hora de interactuar con los usuarios y conseguir un feedback de mayor calidad cuando los usuarios quieran escoger sus platos o menús o ver cómo es la carta, que platos hay y toda la información relevante en relación a ellos.

Por otro lado la implementación de de GitHub Actions implementa un mayor workflow y comprobación de errores entre todos los integrantes del grupo.

## 6. Bibliografía

* [Guión Práctica 7](https://ull-esit-inf-dsi-2021.github.io/prct07-menu-dataModel/)
* [Video de integracion de GitHub Action](https://drive.google.com/file/d/1hwtPovQlGvthaE7e7yYshC4v8rOtLSw0/view)
* [Coveralls con GitHub](https://drive.google.com/file/d/1yOonmpVbOyvzx3ZbXMQTAPxvA3a7AE7w/view)
* Capítulo 1 del libro Essential TypeScript: From Beginner to Pro
