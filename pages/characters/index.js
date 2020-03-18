import {getCharacters} from "../../api/api";
import Link from "next/link";
import Layout from "../../components/app/Layout";

const Characters = (props) => {
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="Chts row">
                        { props.characters.map(character => (
                            <div className="Chts-item col-sm-12 col-md-4 col-lg-3">
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
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
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