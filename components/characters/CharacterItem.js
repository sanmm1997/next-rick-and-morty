import Link from "next/link";

const CharacterItem = ({ character }) => {
    return (
        <Link key={character.id} href="/characters/[id]" as={`/characters/${character.id}`}>
            <a>
                <div>
                    <img src={character.image} alt=""/>
                </div>
                <div>
                    <h4>{character.name}</h4>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                </div>
            </a>
        </Link>
    )
};

export default React.memo(CharacterItem);