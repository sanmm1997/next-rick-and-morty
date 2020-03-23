
const CharacterFormDetail = ({ character, origin }) => {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="name">Name:</label>
                    <input
                        readOnly
                        type="text"
                        name="name"
                        className="form-control"
                        value={character.name}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="status">Status:</label>
                    <input
                        readOnly
                        type="text"
                        name="status"
                        className="form-control"
                        value={character.status}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="type">Type:</label>
                    <input
                        readOnly
                        type="text"
                        name="type"
                        className="form-control"
                        value={character.type}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="gender">Gender:</label>
                    <input
                        readOnly
                        type="text"
                        name="gender"
                        className="form-control"
                        value={character.gender}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="type">Origin name:</label>
                    <input
                        readOnly
                        type="text"
                        name="origin_name"
                        className="form-control"
                        value={origin.name}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="gender">Origin dimension:</label>
                    <input
                        readOnly
                        type="text"
                        name="origin_dimension"
                        className="form-control"
                        value={origin.dimension}
                    />
                </div>
            </div>
        </form>
    )
};

export default CharacterFormDetail;