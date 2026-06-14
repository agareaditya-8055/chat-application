import { NavLink } from "react-router-dom";

const chats = [
  {
    id: "1",
    name: "John",
  },
  {
    id: "2",
    name: "Alex",
  },
  {
    id: "3",
    name: "Sarah",
  },
];

const MainSidebar = () => {
  return (
    <div>
      {chats.map((chat) => (
        <NavLink
          key={chat.id}
          to={`/chat/${chat.id}`}
          className={({ isActive }) =>
            `block p-4 border-b ${
              isActive ? "bg-gray-100 font-semibold" : ""
            }`
          }
        >
          {chat.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MainSidebar;