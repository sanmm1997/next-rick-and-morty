import {useGraphQL} from "graphql-react/universal/useGraphQL";
import {getCharactersQuery} from "../../api/rickAndMorty";
import styles from '../../components/styles/characters.module.scss';
/**
 *
 * Components
 *
 */
import Layout from "../../components/app/Layout";
import List from "../../components/utils/List";
import CharacterItem from "../../components/characters/CharacterItem";

const Characters = (props) => {
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL(getCharactersQuery);

    return (
        <Layout
            loading={loading}
            statusCode={props.statusCode}
        >
            <div className="container">
                <div className={['row', styles.characters].join(' ')}>
                    <div className="col-12 text-center">
                        <h1>Characters Rick and Morty</h1>
                    </div>
                    {data &&
                        (<List
                            colMd={3}
                            items={data.characters.results}
                            render={(character) => <CharacterItem character={character}/>}
                        />)
                    }
                </div>
            </div>
        </Layout>
    )
};

export default Characters;