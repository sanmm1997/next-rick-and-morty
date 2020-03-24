import { withRouter } from 'next/router'
import {getCharactersQuery} from "../../api/rickAndMorty";
import {useGraphQL} from "graphql-react/universal/useGraphQL";

import List from "../../components/utils/List";
import Pager from "../../components/utils/Pager";
import Layout from "../../components/app/Layout";
import CharacterItem from "../../components/characters/CharacterItem";
import Container from "../../components/app/Container";

import styles from '../../components/styles/characters.module.scss';
import { fadeInDown } from '../../components/styles/animation.module.scss';

const Characters = (props) => {
    const { router } = props;
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL(getCharactersQuery(router.query.page));
    const statusCode = (Object.keys(errors).length === 0) ? 200 : errors.graphQLErrors[0].extensions.response.status;

    return (
        <Layout
            loading={loading}
            statusCode={statusCode}
        >
            <Container title="Characters Rick And Morty">
                {
                    (data && data.characters) &&
                    <>
                        <Pager info={data.characters.info}/>
                        <List
                            colMd={3}
                            pager={data.characters.info}
                            items={data.characters.results}
                            className={['row', fadeInDown, styles.characters].join(' ')}
                            render={(character) => <CharacterItem character={character}/>}
                        />
                        <Pager info={data.characters.info}/>
                    </>
                }
            </Container>
        </Layout>
    )
};

export default withRouter(Characters);