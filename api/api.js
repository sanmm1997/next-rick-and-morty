import fetch from 'node-fetch';

export const getCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await response.json();
        return  results;
    } catch (e) {
        console.log(e)
    }
};

export const getCharacter = async (id) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        return  data;
    } catch (e) {
        console.log(e)
    }
};