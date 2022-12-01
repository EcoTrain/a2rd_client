import React, {useContext, useState} from "react";
import {ThemeContext} from "../../../contexts/ThemeContext";
import CustomCheckbox from "../../CustomCheckbox";
import "./index.scss";

const CategoryIconHexGrid = ({config}) => {
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
    <div style={{flex: 1, width: "100%"}} className="categorySquareGrid">
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
    <div style={{marginBottom: "1em"}} className="categorySquareGridFilter">
      {categories.map((x, i) => {
        const isCheched = selectedCategories.includes(x);
        return (
          <CustomCheckbox
            key={i}
            label={x}
            isChecked={isCheched}
            onClick={(e) => onClickByCategory(x)}
            style={{opacity: selectedCategories.length && !isCheched ? 0.6 : 1}}
            boxStyle={{background: config[x].color}}
          />
        );
      })}
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
          className="categorySquareGridItem"
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
    <div className="categorySquareGridContent">
      {categories.map((cat) => renderCategoryItems(cat))}
    </div>
  );
};

export default CategoryIconHexGrid;
