import el from './el.js';

export function renderVehicle({ name, manufacturer, cost_in_credits }) {
  return (
    el('div', [
      el('div', [
        el('p', manufacturer, ['text-sm', 'text-amber-300']),
        el('h3', name, ['text-2xl', 'font-semibold', 'leading-none', 'tracking-tighter', 'text-stone-50']),
        el('p', `${cost_in_credits} credits`, ['text-sm', 'font-medium', 'text-stone-400', 'mt-3']),
      ], ['flex', 'flex-col', 'justify-between', 'flex-1']),
    ], ['flex', 'flex-col', 'mb-12', 'overflow-hidden', 'mt-6'])
  );
}

export function loadVehicles() {
  return fetch('https://swapi.info/api/vehicles')
    .then((response) => response.json())
    .then((data) => data.slice(0, 6))
    .then(() => { throw new Error('ohh ohh') });
}

export function loadStarships() {
  return fetch('https://swapi.info/api/starships')
    .then((response) => response.json())
    .then((data) => data.slice(0, 6));
}
