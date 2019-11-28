# Red-Tetris

The following is an excerpt from Red Tetris project's subject, the most advanced web project in 42 school's program.


## Introduction

Everyone knows the Tetris Game and everyone knows Javascript, it only remains to
build a Tetris in Javascript.

Yes, but ...

Your Tetris will be multiplayer and online. It will allow you to disturb intergalactic
parties during your long coding nights (There are still some WIFI issues on some planets).

Your Tetris will use the latest technologies Javascript which are at the heart of a
great intellectual, industrial and financial battle between Facebook and Google whose
challenge is to be the master of the world.

Your Tetris will require a lot of brain juice to design the architecture, specify an
asynchronous network protocol, implemented in functional programming, create an algorithm of pieces’ animation and display everything graphically in HTML!

Good game, good code ... and do not forget to test and retest !!

## Objectives

The pedagogical objectives are multiple, but the main axis is to introduce the language
Javascript, to discover its abundant ecosystem and to implement some of the principles,
techniques and Flagship tools of Full Stack Javascript.

Everyone says they know Javascript, but very few people have a really precise
knowledge of this multi- faceted language which is at the same time partially functional,
completely prototype oriented, of a diabolically dynamic type, passionately asynchronous
and frighteningly efficient.

Through the writing of a network Tetris game, you’ll implement functional principles (which is required), asynchronous client and server (by nature of the language) and
reagents (by nature of the game and GUI).

You will have to write unit tests that will have to be worthy of an industrial chain of
continuous delivery.

You will also discover the latest popular tools and libraries the Full Stack Javascript
like Node.js, React.js and Redux.js.

## General instructions

The project must be written totally in Javascript and especially in its es2015 (ES6)
version.

The client code (browser) must be written without a call to "this" in the purpose
of pushing you to use functional constructs and not object. You have the choice of the
functional library (lodash, ramda, ...) to use it or not.

The handling logic of the heap and pieces must be implemented as "pure functions".
An exception to this rule: "this" can be used to define its own subclasses of "Error".
On the opposite, the server code must use object-oriented programming (prototype).
We want to find there at least the (ES6) Player, Piece and Game classes.

The client application must be built from the React and Redux libraries.

HTML code must not use TABLE elements, but must be built exclusively from
a layout flexbox.

Prohibition to use:
  - A DOM manipulation library like jQuery
  - Canvas
  - SVG (Scalable Vector Graphics)
  
There is no need to directly manipulate the DOM.
