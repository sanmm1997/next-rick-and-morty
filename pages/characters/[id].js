import {getCharacter, getCharacters} from "../../api/api";
import {useRouter} from "next/router";
import Layout from "../../components/app/Layout";

const Character = ({ character }) => {
    const router = useRouter();

    return (
        <Layout>
            <div className="container">
                <div className="Cht">
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
                </div>
            </div>
        </Layout>
    )
};

export async function getStaticPaths() {
    const { data } = await getCharacters();
    const paths = data ?
        data.map(({id}) => ({
            params: { id: id.toString() },
        })) : [{ params: { id: '1' }}];

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { data, statusCode } = await getCharacter(params.id);
    return {
        props: { character: data, statusCode }
    };
}

export default Character;