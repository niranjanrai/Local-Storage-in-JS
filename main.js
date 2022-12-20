// console.log(window.localStorage);

// Set Item

// window.localStorage.setItem("theme1", "dark");
// window.localStorage.setItem("theme2", "Light");

// Delete Item
// localStorage.removeItem("theme1");
// localStorage.clear(); // delete all items
// Get Item
// const theme = localStorage.getItem("theme1");
// console.log(theme);

//
const userSetting = {
  theme: "dark",
  font: "light",
  score: 100,
};
const settingString = JSON.stringify(userSetting);

localStorage.setItem("item", settingString);
