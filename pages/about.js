export default () => {
    return (
        <>
            <div>
                <h1>!Hello World¡</h1>
                <img src="/platzi.png" alt="React logo"/>
                <p>Developed by smarulanda97</p>
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