import * as elements from "typed-html";
const About = () => {
  return (
    <div class="h-screen p-4">
      <h1 class="text-2xl">About</h1>
      <button
        class="px-2 border rounded-lg"
        hx-post="/clicked"
        hx-swap="afterend"
      >
        Test About
      </button>
    </div>
  );
};
export default About;
