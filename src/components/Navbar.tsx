import * as elements from 'typed-html'
const Navbar = () => {
    return(
    <div class='w-screen p-2 bg-slate-400 text-center flex flex-row justify-center space-x-2'>
        <a hx-boost="true" href="/">Home</a>
        <a hx-boost="true" href="/about">About</a>
    </div>

)}
export default Navbar;