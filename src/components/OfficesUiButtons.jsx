import React from 'react';
import { OfficesButtonUiSection } from "../styles/StyledComponents"

const OfficesUiButtons = ({ setShowListUi, setFilterValue, filterValue }) => {

    const changeToCardView = () => {
        setShowListUi(false);
    }

    const changeToListView = () => {
        setShowListUi(true);
    }

    const toggleFilterByLocation = (e) => {
        setFilterValue(e.target.value);
    }

    return (
        <OfficesButtonUiSection>
            <button onClick={changeToCardView}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <button onClick={changeToListView}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <select value={filterValue} onChange={toggleFilterByLocation}>
                <option value="0">Ingen filter</option>
                <option value="Fredrikstad">Fredrikstad</option>
                <option value="Sarpsborg">Sarpsborg</option>
                <option value="Moss">Moss</option>
                <option value="Oslo">Oslo</option>
            </select>
        </OfficesButtonUiSection>
    )
}

export default OfficesUiButtons;