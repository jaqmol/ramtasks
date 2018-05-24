# ramtasks

TODO implementation in [RAMTASTIC](https://github.com/jaqmol/ramtasks)

This is the practical test project under which [RAMTASTIC](https://github.com/jaqmol/ramtasks) is developed.

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

## This is a very early stage of development

Contributors welcome! I'm myself quite new to Ramda, so feel free to jump in.

## *A note about relative referencing*

*The project references ramtastic relatively to allow for fast syncing of changes in ramtastic itself, until it's matured a bit more. Ramtastic is assumed to be located within the same parent directory as this project.*

## Packaging is done with Parcel

`npm start` script is provided.
