# 5. Components Architecture

Date: 2022-05-22

## Status

Accepted

## Context

We want to separate the logic of obtaining data from the way the data is presented, so that the application is easily modifiable and maintainable.

## Decision

For the components architecture we decided on [View Container Pattern](https://medium.com/@learnreact/container-components-c0e67432e005)

## Arguments

The view container pattern allows us to predictably separate complex state logic from other aspects of components such as rendering and styling.
## Consequences

It is important that the pattern used to structure the web components does not become a rigid dogma. Therefore, it will be necessary to take into account combining it with the use of react hooks
