import { writable } from 'svelte/store';

// Lire la valeur depuis le stockage local au chargement de l'application
const storedConnectedValue = localStorage.getItem('connectedValue');
export const connected = writable(storedConnectedValue ? JSON.parse(storedConnectedValue) : false);

// Mettre à jour le stockage local lorsque la valeur change
connected.subscribe(value => {
    localStorage.setItem('connectedValue', JSON.stringify(value));
});