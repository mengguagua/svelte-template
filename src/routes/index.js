import home from "./../page/home.svelte";
import baseCompany from "./../page/baseCompany.svelte";

export default {
  "/": home,
  "/home": home,
  "/baseCompany": baseCompany,
  "*": home,
};
