import {getCharacters} from "../../api/api";
import Link from "next/link";

const Characters = (props) => {
    return (
        <>
            <div className="container">
                <div className="Chts">
                    { props.characters.map(character => (
                        <Link href="/characters/[id]" as={`/characters/${character.id}`} prefetch>
                            <a>
                                <div className="Chts-item">
                                    <div className="Chts-item__pic">
                                        <img src={character.image} alt=""/>
                                    </div>
                                    <div className="Chts-item__detail">
                                        <p>{character.name}</p>
                                        <p>{character.species}</p>
                                        <p>{character.gender}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
            <style jsx>
            {`
                 .Chts {
                    display: grid;
                    grid-gap: 15px;
                    padding: 15px;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                 }
                 .Chts-item {
                    display: block;
                 }
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

export async function getStaticProps(context) {
    const characters = await getCharacters();
    return {
        props: {
            context,
            characters
        }
    };
}

export default Characters;