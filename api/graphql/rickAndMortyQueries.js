export const getCharactersWithPaging = (page= 1) => `
{
    characters(page: ${page}) {
        info {
            count
            pages
            next
            prev
        }
        results {
            id
            name
            status
            species
            type
            gender
            image
        }
    }
}`;

export const getCharacter = (characterId) => `
{
    character(id: ${characterId}) {
        id
        name
        type
        image
        gender
        status
        origin {
            name
            type
            dimension
        }
        location {
            id
            name
            type
            dimension
        }
        episode {
            id
            name
            air_date
            episode
        }
    }
}`;