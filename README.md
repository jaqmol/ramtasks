# ramtasks

TODO implementation in [RAMTASTIC](https://github.com/jaqmol/ramtasks)

This is the practical test project under which [RAMTASTIC](https://github.com/jaqmol/ramtasks) is developed.

## Contribute
There's no intention to make Ramtastic the next React. It's just that Ramda is worth learning. And how to learn better than writing your own frontend-framework 😉

I'm myself new to the "Zen of Ramda", so feel free to complain or suggest: [Twitter handle: yaqmol](https://twitter.com/yaqmol)

## This project showcases:

### Components
- Components are pure functions that render VNodes
- Containers bind components to values of the state tree via paths

### Single Immutable State Tree
- There is a central immutable state tree
- Actions express mutations on the state tree
- Reducers are replaced by a lens-like value set and get mechanism

### State changes trigger rendering
- State-change-events on paths can be subscribed to
- Re-rendering is triggered automatically on state changes

### Integration with Material Components
- Ramtasks uses [Material Components Web](https://material-components.github.io/material-components-web-catalog/#/) now

## Packaging is done with Webpack

`npm start` script is provided.
