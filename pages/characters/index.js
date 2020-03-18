import {getCharacters} from "../../api/api";
import Layout from "../../components/app/Layout";
import List from "../../components/utils/List";
import CharacterItem from "../../components/characters/CharacterItem";

const Characters = (props) => {
    return (
        <Layout statusCode={props.statusCode}>
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
    )
};

export async function getStaticProps() {
    const { data, statusCode } = await getCharacters();
    return {
        props: { characters: data, statusCode }
    }
}

export default Characters;