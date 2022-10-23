import React, {useContext, useRef, useState} from "react";
import {Checkbox} from "antd";
import "./index.scss";
import {ThemeContext} from "../../contexts/ThemeContext";

const StackIconGrid = ({config}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
    <div style={{flex: 1, width: "100%"}} className="filterGrid">
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
  const categories = Object.keys(config);

  const renderCategoryItems = (cat) => {
    const {theme} = useContext(ThemeContext);
    const isActiveFilter = !!selectedCategories.length;
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
          className="filterGridItem"
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
    <div className="filterGridContent">
      {categories.map((cat) => renderCategoryItems(cat))}
    </div>
  );
};

export default StackIconGrid;
