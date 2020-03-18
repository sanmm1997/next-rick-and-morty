import {getCharacter, getCharacters} from "../../api/api";
import {useRouter} from "next/router";

const Character = (props) => {
    const router = useRouter();
    const id = router.query;

    return (
        <>
            <div className="container">
                <div className="Cht">

                </div>
            </div>
        </>
    )
};

export async function getStaticPaths() {
    const characters = await getCharacters();
    const paths = characters.map(({id}) => ({
        params: { id: id.toString() },
    }));

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const character = await getCharacter(params.id);
    return {
        props: {
            character
        }
    };
}

export default Character;