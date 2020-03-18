import {getCharacters} from "../../api/api";
import Link from "next/link";
import Layout from "../../components/app/Layout";
import List from "../../components/utils/List";
import CharacterItem from "../../components/characters/CharacterItem";

const Characters = (props) => {
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="Chts row">
                        <List
                            colMd={3}
                            items={props.characters}
                            render={(character) => <CharacterItem character={character}/>}
                        />
                    </div>
                </div>
            </Layout>
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