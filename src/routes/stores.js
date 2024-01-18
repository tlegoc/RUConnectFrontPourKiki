import { writable } from 'svelte/store';

// Lire la valeur depuis le stockage local au chargement de l'application
const storedConnectedValue = localStorage.getItem('connectedValue');
const storedUsernameValue = localStorage.getItem('usernameValue');
export const connected = writable(storedConnectedValue ? JSON.parse(storedConnectedValue) : false);
export const usernameS = writable(storedUsernameValue ? JSON.parse(storedUsernameValue) : "Pseudo");

// Mettre à jour le stockage local lorsque la valeur change
connected.subscribe(value => {
    localStorage.setItem('connectedValue', JSON.stringify(value));
});

usernameS.subscribe(value => {
    localStorage.setItem('usernameValue', JSON.stringify(value));
});