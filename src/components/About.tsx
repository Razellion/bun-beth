import * as elements from 'typed-html'
const About = () => {
    return(
    <div>
      <h1 class="text-2xl">About</h1>
      <button class="px-2 border rounded-lg" hx-get="/">Test</button>
    </div>
)}
export default About;