import Layout from "../components/app/Layout";

export default () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pt-5">
                        <h1>!Home section¡</h1>
                        <p>First app with next</p>
                        <img src="/platzi.png" alt="React logo"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

{/*
<style jsx global>{`
    body {
        background-color: yellow;
    }
    :global(p) {
        color: green;
    }
`}</style>
*/}