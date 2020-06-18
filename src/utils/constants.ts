declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

export const REDUX_DEVTOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
