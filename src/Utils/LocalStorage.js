export const USER = 'user';

export function getUserFromLocalStorage() {
    const user = localStorage.getItem(USER);

    if (user) return JSON.parse(user);

    return {
        name: '',
        email: '',
        id: '',
        token: ''
    }
}

export function setUserInLocalStorage(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}