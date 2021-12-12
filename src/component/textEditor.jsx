import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js"
import draftToHtml from 'draftjs-to-html';
import { useState } from "react";

const TextEditor = () => {
    const [state, setState] = useState({ editorState: EditorState.createEmpty() })
    return (
        <div>
            <Editor
                editorState={state.editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(editorState) => setState({ editorState })}
            />
            <textarea disabled value={draftToHtml(convertToRaw(state.editorState.getCurrentContent()))}></textarea>
        </div>
    );
}

export default TextEditor;