import HeadNext from "next/head";

const Head = ({ title }) => {
    return (
        <HeadNext>
            <title>{title || 'Rick and Morty API with NETX.JS'}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </HeadNext>
    )
};

export default React.memo(Head);
