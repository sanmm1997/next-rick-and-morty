import fetch from 'node-fetch';

export const getCharacters = async () => {
    let data = {};
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await response.json();
        data = { statusCode: response.status, data: results };
    } catch (e) {
        data = { statusCode: 503, data: null }
    }
    return data;
};

export const getCharacter = async (id) => {
    let data = {};
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const result = await response.json();
        data = { statusCode: response.status, data: result };
    } catch (e) {
        data = { statusCode: 503, data: null }
    }
    return data;
};