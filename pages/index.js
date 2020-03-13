export default () => {
    return (
        <>
            <div>
                <h1>!Hello World¡</h1>
                <p>First app with next</p>
                <img src="/platzi.png" alt="React logo"/>
            </div>
            <style jsx>{`
                div {
                    width: 100%;
                    text-align: center;
                }
                h1 {
                    color: #584f4f;
                }
                img {
                    max-width: 20%;
                }      
            `}</style>
        </>
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