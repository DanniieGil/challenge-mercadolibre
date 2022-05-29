# 2. Frontend Framework

Date: 2022-05-29

## Status

Accepted

## Context

This is an academic resource based on the Mercado Libre test. So it is necessary to use a modern stable javascript framework to build the web product.
Using a dedicated framework would afford us a number of benefits, primarily around best software development practices including: writing automated tests, developing single responsibility software components, using in-built modern features such as JavaScript chunking and more.

## Considered options

There are many js frameworks. Most with modern features. We have considered the following:

- [AngularJs](https://angularjs.org/)
- [VueJs](https://vuejs.org/)
- [ReactJs](https://reactjs.org/)

## Decision

We will use ReactJS with Next.JS framework for develop the web app. 

## Argument

While all are good options, we opted for Next.JS due to its server-side request and data handling optimizations, as well as taking advantage of its split codding and image rendering to improve application performance. In addition, Next.JS has a rich library ecosystem and a very friendly functional component development api

## Consequences

Future project migration becomes complex when using Next.

