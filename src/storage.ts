/*
 * LocalStorage wrapper
 */
export default {
  "put": (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  "get": (key) => {
    const val = window.localStorage.getItem(key);
    if (!val) {
      return null;
    }
    return JSON.parse(val);

    /* Typescript compile error?
    try {
      return JSON.parse(val);
    }
    catch {
      return null;
    };
    */
  }
};
