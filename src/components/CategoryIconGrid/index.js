import React, {useContext, useState} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";
import "./index.scss";
import CustomCheckbox from "../CustomCheckbox";

const CategoryIconGrid = ({config}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const onClickByCategory = (cat) => {
    let _cats = [...selectedCategories];
    if (selectedCategories.includes(cat)) {
      _cats.splice(_cats.indexOf(cat), 1);
    } else {
      _cats.push(cat);
    }
    setSelectedCategories(_cats);
  };

  return (
    <div style={{flex: 1, width: "100%"}} className="categoryGrid">
      <CategoryFilter
        config={config}
        selectedCategories={selectedCategories}
        onClickByCategory={onClickByCategory}
      />
      <GridItems
        config={config}
        selectedCategories={selectedCategories}
        onClickByCategory={onClickByCategory}
      />
    </div>
  );
};

const CategoryFilter = ({config, selectedCategories, onClickByCategory}) => {
  const categories = Object.keys(config);

  return (
    <div style={{marginBottom: "1em"}} className="categoryGridFilter">
      {categories.map((x, i) => (
        <CustomCheckbox
          key={i}
          label={x}
          isChecked={selectedCategories.includes(x)}
          onClick={(e) => onClickByCategory(x)}
          style={{background: config[x].color}}
        />
      ))}
    </div>
  );
};

const GridItems = ({config, selectedCategories, onClickByCategory}) => {
  const {theme} = useContext(ThemeContext);
  const categories = Object.keys(config);
  const isActiveFilter = !!selectedCategories.length;

  const renderCategoryItems = (cat) => {
    const isSelected = selectedCategories.includes(cat);
    return config[cat].items.map((catItem, i) => {
      const Icon =
        theme == "dark" && catItem.icon_light
          ? catItem.icon_light
          : catItem.icon;
      const color = config[cat].color;
      return (
        <div
          key={i}
          onClick={() => onClickByCategory(cat)}
          className="categoryGridItem"
          style={{
            background: color,
            opacity: isActiveFilter && !isSelected ? 0.2 : 1,
          }}
        >
          <Icon />
          <span>{catItem.name}</span>
        </div>
      );
    });
  };

  return (
    <div className="categoryGridContent">
      {categories.map((cat) => renderCategoryItems(cat))}
    </div>
  );
};

export default CategoryIconGrid;
