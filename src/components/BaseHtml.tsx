import * as elements from 'typed-html'
const BaseHtml = ({children} : elements.Children) => {
    return (`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://unpkg.com/htmx.org@1.9.5"></script>
            <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
            <link href="/styles.css" rel="stylesheet">
            <title>Test Todo App</title>
        </head>
        ${children}
    </html>
`)}


export default BaseHtml;