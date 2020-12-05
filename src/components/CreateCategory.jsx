import React, { useState, useEffect } from 'react';
import { CreateCategoryForm, CreateCategoryFormWrapper, StandardButton } from "../styles/StyledComponents";
import { createCategory, getCategories } from "../utils/articleService";

const CreateCategory = ({ isAdmin, setIsNewCategory }) => {

    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    const handleClickcreateCategory = async (e) => {
        e.preventDefault();
        if (isAdmin) {
            if (category !== "") {
                const { data, err } = await createCategory({
                    name: category
                })
                if(err){
                    setMessage(err.message)
                }
                else{
                    setIsNewCategory(false)
                }
            }
            else{
                setMessage("Ingen kategori skrevet inn")
            }
        }
        else {
            setMessage("Du må være admin")
        }
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <CreateCategoryFormWrapper>
            <CreateCategoryForm>
                <label>Ny Kategori</label>
                <textarea onChange={handleCategoryChange}></textarea>
                <StandardButton onClick={handleClickcreateCategory}>Create</StandardButton>
                <p>{message}</p>
            </CreateCategoryForm>
        </CreateCategoryFormWrapper>
    )
}

export default CreateCategory;