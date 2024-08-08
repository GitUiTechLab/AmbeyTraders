import { useState } from "react";
import RightArrowIcon from "../../assets/icons/right_arrow_icon.png";

import "./filterByCategory.css";
import { FilterByCategoryProps } from "../../types";


const FilterByCategory: React.FC<FilterByCategoryProps> = ({ headerName, categories, handleChange, selectedCategory }) => {
    console.log(selectedCategory);

    return (
        <>
            <div className="filter-category-container flex justify-start items-start flex-col m-10">
                <div className="header text-breadCrumbsTextColor text-[24px] font-[600px]">
                    {headerName}
                </div>
                <div className="filter-category-card ">
                    {categories.map((category, idx) => {
                        return (
                            <div key={idx} className="filter-category-card-item">
                                <div className="flex flex-row justify-between items-center">
                                    <input
                                        type="radio"
                                        name={category.name}
                                        value={category.value}
                                        checked={selectedCategory === category.value}
                                        onChange={handleChange}
                                    />
                                    <span className="text-[16px] text-breadCrumbsTextColor ml-2">{category.name}</span>
                                </div>
                                <div>
                                    <img src={RightArrowIcon} width={24} height={24} alt="right-icon" />
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )


}

export default FilterByCategory;