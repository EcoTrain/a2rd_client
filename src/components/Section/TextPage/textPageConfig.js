/* Example config: {
  title: i18n key,
  text:  i18n key,
  list:  i18n key with list,
  sectionTheme:  css class (section.css: section-*),
  // If image NOT exist = FullScreen text section
  // If image exist = split section & safe img area
  image: {
    src: str filepath,
    min: str filepath
  },
}

*/

export const textPageConfig = {
  home: {
    businessModel: {
      title: "businessModel.title",
      text: "businessModel.text",
      direction: "right",
      image: {
        alt: "businessModel.text",
        title: "businessModel.title",
        src:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/max/businessDeal.webp",
        min:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/min/businessDeal.webp",
      },
    },
  },
  wellness: {
    healthyLifestyle: {
      title: "healthyLifestyle.title",
      text: "healthyLifestyle.text",
      sectionTheme: "section-white",
    },
  },
};
