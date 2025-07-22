import { v4 } from "uuid";

const links = [
  {
    id: v4(),
    page: "pageOne",
    subLinks: [
      { id: v4(), label: "subOne", url: "/pageOne/subOne" },
      { id: v4(), label: "subOne", url: "/pageOne/subTwo" },
    ],
  },
  {
    id: v4(),
    page: "pageTwo",
    subLinks: [
      { id: v4(), label: "subTwo", url: "/pageTwo/subOne" },
      { id: v4(), label: "subTwo", url: "/pageTwo/subTwo" },
      { id: v4(), label: "subTwo", url: "/pageTwo/subThree" },
    ],
  },
  {
    id: v4(),
    page: "pageThree",
    subLinks: [
      { id: v4(), label: "subThree", url: "/pageThree/subOne" },
      { id: v4(), label: "subThree", url: "/pageThree/subTwo" },
      { id: v4(), label: "subThree", url: "/pageThree/subThree" },
      { id: v4(), label: "subThree", url: "/pageThree/subFour" },
    ],
  },
  {
    id: v4(),
    page: "pageFour",
    subLinks: [{ id: v4(), label: "subFour", url: "/pageFour/subOne" }],
  },
];

export default links;
