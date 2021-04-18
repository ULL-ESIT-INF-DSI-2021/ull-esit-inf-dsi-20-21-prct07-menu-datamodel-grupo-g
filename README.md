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

Para el desarrollo de la práctica hemos realizado las clases Food, Plate, Menu, MenuCard y Comanda, y los archivos list_food, list_plates y list_menu que guardan ingredientes, platos y menus respectivamente. Se han implementado 84 alimentos, 22 platos y 5 menus. 

### 4.1 Food
Esta clase tendrá como objetivo construir nuestro objeto base `Food` el cual representará nuestros alimentos. Se indicará el nombre del alimento, el grupo alimenticio (carne, pescado, fruta, verdura, quesos...), el origen geográfico, los valores nutricionales (hidratos de carbono, proteinas y lípidos) y el precio por cada kilo del alimento.

### 4.2 Plate
La clase `Plate` se engargará de crear los distintos platos que formarán nuestra carta y nuestros menus. Se indicará el nombre del plato, cada uno de los alimentos que lleva junto a la cantidad en gramos del alimento y el tipo de plato (entrante, primer plato...).a

Tendremos un método de impresión que estructurará e imprimirá la información del plato por pantalla, incluyendo los ingredientes del mismo, su información nutricional y el precio del mismo. 

Tendremos dos métodos de ajuste de datos que serán el `getNutricional()` y `priceGenerator()`, ambos calcularán la equivalencia de los datos generales a los datos particulares de los platos.

El método `getNutricional()` calculará los valores nutricionales totales del plato, analizando todos los alimentos que componen el plato. En primer lugar crearemos una variable `multiplier` y dentro de ella almacenaremos el resultado de la division de la cantidad de cada alimento indicada en gramos entre 100, hacemos esto porque los valores nutricionales se encuentran indicados por cada 100 gramos del alimento. Luego para cada valor nutricional recogeremos el valor del mismo y lo multiplicaremos por nuestra variable `multiplier` y sumaremos este valor con el resto de valores del mismo valor nutricional que recojamos de los alimentos de nuestros platos.a

El método `priceGenerator()` recoge eñ 



### 4.3 Menu

### 4.4 MenuCard
La clase MenuCard se encargará de realizar la composición de la carta de nuestro restaurante, formada por los platos de nuestra clase `Plate` y los menus de nuestra clase `Menu`, declarados en listas separadas `list_food`, `list_plates` y `list_menu`.

Los atributos serán vectores de `Plate` y de `Menu` los cuales rellenaremos con los elementos declarados en las listas mencionadas anteriormente.

El método printMenu() se encarga de estructurar la información de los platos y menus e imprimirla por pantalla separando los platos por su categoría (entrante, primer plato...) y luego añadiendo los menus.


### 4.5 Comanda
El objetivo de la clase comanda es implementar una interfaz interactiva con el usuario, mediante la cual este podrá visualizar la carta del restaurante, realizar una comanda, y además, que esta quede guardada en un archivo de texto.

En la clase comanda hacemos uso de las librerias **lowdb**, e **inquirer**, basándonos en los ejemplos ofrecidos en el libro de TypeScript del campus virtual.

Para visualizar la carta hacemos uso de un método definido en la clase `MenuCard`, que imprime toda los platos y menús disponibles, por categorías.

Para realizar la comanda, o pedir los platos/menus, hacemos que el inquirer recoja como opciones todos los platos y menus disponibles en la clase `MenuCard`, de manera que puede disponerlos todos como elecciones. Una vez seleccionado el plato se pide al usuario la cantidad de raciones que desea pedir, y se guardan mediante **lowdb**, tanto el plato elegido como la cantidad de este plato en `Comanda.json`.

## 5. Conclusiones

## 6. Bibliografía

