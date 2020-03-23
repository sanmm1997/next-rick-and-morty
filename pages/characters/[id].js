import {useRouter} from "next/router";
import Layout from "../../components/app/Layout";
import {useGraphQL} from "graphql-react/universal/useGraphQL";
import {getCharacterQuery, getCharactersQuery} from "../../api/rickAndMorty";
import CharacterFormDetail from "../../components/characters/CharacterFormDetail";
import List from "../../components/utils/List";
import CharacterItem from "../../components/characters/CharacterItem";
import EpisodeItem from "../../components/episodes/EpisodeItem";

const Character = ({ character }) => {
    const router = useRouter();
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL(getCharacterQuery(router.query.id));

    if (!loading)
        console.log(data);

    return (
        <Layout>
            <div className="container">
                { (!loading && data) && (
                    <>
                        <div className="row">
                            <div className="col-12 text-center my-4">
                                <h1>Character "{data.character.name}"</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-11 col-md-3 text-center">
                                <img src={data.character.image} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-sm-11 col-md-9">
                                <CharacterFormDetail character={data.character} origin={data.character.origin}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-4">
                                <h2>Episodes</h2>
                            </div>
                            <List
                                colMd={3}
                                className="p-2"
                                items={data.character.episode}
                                render={(episode) => <EpisodeItem episode={episode}/>}/>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    )
};

// export async function getStaticPaths() {
//     // const { data } = await getCharacters();
//     // const paths = data ?
//     //     data.map(({id}) => ({
//     //         params: { id: id.toString() },
//     //     })) : [{ params: { id: '1' }}];
//
//     return {
//         paths: [{
//             params: { id: 1 }
//         }],
//         fallback: false,
//     }
// }
//
// export async function getStaticProps({ params }) {
//     const { data, statusCode } = await getCharacter(params.id);
//     return {
//         props: { character: data, statusCode }
//     };
// }

export default Character;