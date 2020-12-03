import React from 'react';
import {CreateArticleFormStyled} from "../styles/StyledComponents";

const CreateArticleForm = () => {
    return(
        <CreateArticleFormStyled>
            <label for="title">Tittel</label>
            <input type="textarea"></input>
            <label for="title">Tittel</label>
            <input type="textarea"></input>
            <label for="title">Tittel</label>
            <input type="textarea"></input>
            <label for="title">Tittel</label>
            <input type="textarea"></input>
            <label for="title">Tittel</label>
            <input type="textarea"></input>
            <label for="title">Tittel</label>
            <select>
                <option>kalle</option>
                <option>petter</option>
                <option>bjørnson</option>
            </select>
            <label for="title">Tittel</label>
            <select>
                <option>kalle</option>
                <option>petter</option>
                <option>bjørnson</option>
            </select>
        </CreateArticleFormStyled>
    )
}

export default CreateArticleForm;