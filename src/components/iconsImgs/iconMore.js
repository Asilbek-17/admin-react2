import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
} from "./returnICon";
import "./iconMore.css";
export function Moreicon() {
  const moreiconObj = [
    {
      title: "Overview",
      foto: icon1,
    },

    {
      title: "Tickets",
      foto: icon2,
    },

    {
      title: "Ideas",
      foto: icon3,
    },

    {
      title: "Contacts",
      foto: icon4,
    },

    {
      title: "Agents",
      foto: icon5,
    },

    {
      title: "Articles",
      foto: icon6,
    },

    {
      title: "Settings",
      foto: icon7,
    },

    {
      title: "Subscription",
      foto: icon8,
    },
  ];
  return moreiconObj.map((item) => (
    <li className='item__icons'>
      <item.foto /> <span className='text__iconNavbar'>{item.title}</span>
    </li>
  ));
}
