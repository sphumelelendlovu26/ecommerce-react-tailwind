export function setLocalStorage(key, value) {
  if (value === undefined) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getLocalStorage(key) {
  const item = localStorage.getItem(key);
  if (!item) return [];

  try {
    const parsed = JSON.parse(item);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error(`Error parsing localStorage for key "${key}"`, e);
    return [];
  }
}
