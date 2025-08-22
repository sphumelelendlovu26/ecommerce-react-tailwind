export const getLocalStorage = (key) => {
  const localItem = localStorage.getItem(key);
  return localItem ? JSON.parse(localItem) : [];
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
