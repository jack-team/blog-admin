const key = `x-token-v-1-key`;

export const get = () => (
    localStorage.getItem(key)
);

export const set = (value: string) => {
    localStorage.setItem(key, value);
};

export const clear = () => {
    localStorage.setItem(key, ``);
};