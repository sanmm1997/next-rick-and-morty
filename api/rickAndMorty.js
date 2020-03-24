import {rickAndMortyFetchOptionsOverride} from "../config";
import {getCharacter, getCharactersWithPaging} from "./graphql/rickAndMortyQueries";

export const getCharactersQuery = (page = 1) => ({
    fetchOptionsOverride: rickAndMortyFetchOptionsOverride,
    operation: { query: getCharactersWithPaging(page) },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true
});

export const getCharacterQuery = (characterId) => ({
    fetchOptionsOverride: rickAndMortyFetchOptionsOverride,
    operation: { query: getCharacter(characterId) },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true
});
