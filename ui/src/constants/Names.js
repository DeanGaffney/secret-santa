const names = [
    'Orlaith',
    'Suzanne',
    'Brian',
    'Bernie',
    'Noel',
    'Elaine',
    'Seamus & Mairead'
];

const getRandomName= (names) => names[Math.floor(Math.random() * names.length)];
export { names, getRandomName };
