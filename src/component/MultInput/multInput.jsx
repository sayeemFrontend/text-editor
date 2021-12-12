import "./multInput.css"

const MultInput = (props) => {

    return (
        <div className="uploadContainer">
            <label htmlFor="files">
                <div className="label">
                    Upload
                </div>
            </label>
            <input onChange={props.postLoad} id="files" type="file" multiple />
        </div>
    );
}

export default MultInput;