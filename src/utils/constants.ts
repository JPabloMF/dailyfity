declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const REDUX_DEVTOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const DAYS = {
  MONDAY: 'Monday',
  WEDNESDAY: 'Wednesday',
  FRIDAY: 'Friday',
  SUNDAY: 'Sunday'
};

export { REDUX_DEVTOOLS, DAYS };