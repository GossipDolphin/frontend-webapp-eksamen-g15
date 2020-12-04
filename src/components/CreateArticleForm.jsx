import React, { useState } from 'react';
import { CreateArticleFormStyled, CategoryOptionSection, StandardButton } from "../styles/StyledComponents";

const CreateArticleForm = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [subTitleOne, setSubTitleOne] = useState("");
    const [contentOne, setContentOne] = useState("");
    const [subTitleTwo, setSubTitleTwo] = useState("");
    const [contentTwo, setContentTwo] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSummaryChange = (e) => {
        setSummary(e.target.value)
    }
    const handlesubTitleOneChange = (e) => {
        setSubTitleOne(e.target.value)
    }
    const handleContentOneChange = (e) => {
        setContentOne(e.target.value)
    }
    const handleSubTitleTwoChange = (e) => {
        setSubTitleTwo(e.target.value)
    }
    const handleContentTwoChange = (e) => {
        setContentTwo(e.target.value)
    }
    const handleCatheroyChange = (e) => {
        setCategory(e.target.value)
    }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }


    return (
        <CreateArticleFormStyled>
            <label htmlFor="Tittel">Tittel</label>
            <input value={title} onChange={handleTitleChange} type="textarea"></input>
            <label htmlFor="Ingress">Ingress</label>
            <input value={summary} onChange={handleSummaryChange} type="textarea"></input>
            <label htmlFor="Under Tittel 1">Under Tittel 1</label>
            <input value={subTitleOne} onChange={handlesubTitleOneChange} type="textarea"></input>
            <label htmlFor="Innhold 1">Innhold 1</label>
            <input value={contentOne} onChange={handleContentOneChange} type="textarea"></input>
            <label htmlFor="Under tittel 2">Under Tittel 2</label>
            <input value={subTitleTwo} onChange={handleSubTitleTwoChange} type="textarea"></input>
            <label htmlFor="Innhold 2">Innhold 2</label>
            <input value={contentTwo} onChange={handleContentTwoChange} type="textarea"></input>
            <label htmlFor="Kategori">Kategori</label>
            <CategoryOptionSection>
                <select value={category} onChange={handleCatheroyChange}>
                    <option>kalle</option>
                    <option>petter</option>
                    <option>bjørnson</option>
                </select>
                <button>NY</button>
            </CategoryOptionSection>
            <label htmlFor="Fofatter">Forfatter</label>
            <select value={author} onChange={handleAuthorChange}>
                <option>kalle</option>
                <option>petter</option>
                <option>bjørnson</option>
            </select>
            <StandardButton>CREATE</StandardButton>
        </CreateArticleFormStyled>
    )
}

export default CreateArticleForm;