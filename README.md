# Repositorio de la Práctica 7 de la asignatura de Desarrollo de Sistemas Informáticos
## Datos
  * **Integrantes:** Bruno Lorenzo Arroyo Pedraza, Carla Cristina Olivares Rodriguez y Aitor Alonso Melián
  * **Gmail:** alu0101123677@ull.edu.es, alu0101120218@ull.edu.es y alu0101122496@ull.edu.es
  * **Univeridad:** Universidad de La Laguna
  * **Asignatura:** Desarrollo de Sistemas Informáticos
  * **Práctica:** Práctica 7 Modelo de datos de un sistema que permite el diseño de menús

## Información


[![Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-g/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-g/actions/workflows/node.js.yml)

Para acceder al informe de la práctica 7, se puede acceder mediante el siguiente enlace [Informe de la práctica 7]() en donde se explica el desarrollo de la práctica en formato GitHub Page.

## Food

## Plate

## Menu

## MenuCard
La clase MenuCard se encargará de realizar la composición de la carta de nuestro restaurante, formada por los platos de nuestra clase `Plate` y los menus de nuestra clase `Menu`, declarados en listas separadas `list_food`, `list_plates` y `list_menu`.

Los atributos serán vectores de `Plate` y de `Menu` los cuales rellenaremos con los elementos declarados en las listas mencionadas anteriormente.

El método printMenu() se encarga de estructurar la información de los platos y menus e imprimirla por pantalla separando los platos por su categoría (entrante, primer plato...) y luego añadiendo los menus.


## Comanda
El objetivo de la clase comanda es implementar una interfaz interactiva con el usuario, mediante la cual este podrá visualizar la carta del restaurante, realizar una comanda, y además, que esta quede guardada en un archivo de texto.

En la clase comanda hacemos uso de las librerias `lowdb`, e `inquirer`, basándonos en los ejemplos ofrecidos en el libro de TypeScript del campus virtual.

Para visualizar la carta hacemos uso de un método definido en la clase `MenuCard`, que imprime toda los platos y menús disponibles, por categorías.

Para realizar la comanda, o pedir los platos/menus, hacemos que el inquirer recoja como opciones todos los platos y menus disponibles en la clase `MenuCard`, de manera que puede disponerlos todos como elecciones. Una vez seleccionado el plato se pide al usuario la cantidad de raciones que desea pedir, y se guardan mediante `lowdb`, tanto el plato elegido como la cantidad de este plato en `Comanda.json`.