import Link from "next/link";
import Layout from "../app/Layout";

const CharacterItem = ({ character }) => {
    return (
        <>
            <Link
                key={character.id}
                href="/characters/[id]"
                as={`/characters/${character.id}`}
            >
                <a>
                    <div className="Chts-item__pic">
                        <img src={character.image} alt=""/>
                    </div>
                    <div className="Chts-item__detail">
                        <p>{character.name}</p>
                        <p>{character.species}</p>
                        <p>{character.gender}</p>
                    </div>
                </a>
            </Link>
            <style jsx>
            {`
                 .Chts-item__detail > p {
                    margin: 2px 0;
                    text-align: center;
                 }
                 .Chts-item__pic img{
                    width: 100%
                 }
            `}
            </style>
        </>
    )
};

export default React.memo(CharacterItem);