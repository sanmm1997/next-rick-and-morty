import {rickAndMortyFetchOptionsOverride} from "../config";
import {getCharacter, getCharactersWithPaging} from "./graphql/rickAndMortyQueries";

export const getCharactersQuery = {
    fetchOptionsOverride: rickAndMortyFetchOptionsOverride,
    operation: { query: getCharactersWithPaging },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true
};

export const getCharacterQuery = (characterId) => ({
    fetchOptionsOverride: rickAndMortyFetchOptionsOverride,
    operation: { query: getCharacter(characterId) },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true
});
