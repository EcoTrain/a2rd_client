import React, {useContext, useState} from "react";
import {Checkbox} from "antd";
import {ThemeContext} from "../../contexts/ThemeContext";
import "./index.scss";

const CategoryIconGrid = ({config}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
    <div style={{flex: 1, width: "100%"}} className="categoryGrid">
      <CategoryFilter
        config={config}
        setSelectedCategories={setSelectedCategories}
      />
      <GridItems config={config} selectedCategories={selectedCategories} />
    </div>
  );
};

const CategoryFilter = ({config, setSelectedCategories}) => {
  const categories = Object.keys(config);
  const options = categories.map((x) => ({label: x, value: x}));

  const onChange = (checkedValues) => {
    setSelectedCategories(checkedValues);
  };

  return (
    <div style={{marginBottom: "1em"}}>
      <Checkbox.Group
        options={options}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
    </div>
  );
};

const GridItems = ({config, selectedCategories}) => {
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
