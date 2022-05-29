# 3. CSS Framework

Date: 2022-05-29

## Status

Accepted

## Context

For the development of UI styles, we want to rely on a library or framework that makes it easier for us to bring our design system to code to be able to reuse the different views and maximize the production of new features.

## Considered options

There are many css frameworks. Most with modern features. We have considered the following:

- [SASS](https://sass-lang.com/).
- [Styled Components](https://styled-components.com/docs). 
- [Stylus](https://stylus-lang.com/).

## Decision

We decided on - [SASS](https://sass-lang.com/).

## Arguments

We opted for SASS because of the ability to turn CSS into something dynamic. It allows you to work much faster when creating code with the possibility of creating functions that perform certain mathematical operations and reusing code thanks to mixins, variables that allow us to store values.
