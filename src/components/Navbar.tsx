import * as elements from "typed-html";
const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];
const Navbar = () => {
  return (
    <div class="w-screen p-2 bg-slate-400 text-center flex flex-row justify-center space-x-2">
      {menu.map((m) => {
        return (
          <a hx-boost="true" href={m.path} hx-swap="innerhtml transition:true">
            {m.name}
          </a>
        );
      })}
    </div>
  );
};
export default Navbar;
