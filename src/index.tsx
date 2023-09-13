import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import BaseHtml from "./components/BaseHtml";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

const pageTransition = `
opacity: 1;
animation-name: fadeInOpacity;
animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: 0.5s;
`;

const Wrapper = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div style={pageTransition}>
        <Navbar />
        {children}
      </div>
    </BaseHtml>
  );
};

const app = new Elysia();
app.use(html());
app.get("/", () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
});
app.get("/about", () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
});
app.post("/clicked", () => <p>from the server euy</p>);

app.get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"));
app.get("/htmx.min.js", () => Bun.file("./utils/htmx.min.js"));
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
