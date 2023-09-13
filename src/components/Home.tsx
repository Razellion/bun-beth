import * as elements from 'typed-html'
const Home = () => {
    return(
    <div class='h-screen p-4'>
        <h1 class="text-2xl">Bang udah bang</h1>
        <button class="px-2 border rounded-lg" hx-post="/clicked" hx-swap="afterend">Test</button>
    </div>

)}
export default Home;