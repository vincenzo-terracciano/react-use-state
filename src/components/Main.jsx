import { useState } from "react"

const languages = [
    {
        id: 1,
        name: "HTML",
        description: "HTML (HyperText Markup Language) is the standard language for creating web pages and applications. It structures web content and provides basic elements such as headings, paragraphs, and images."
    },
    {
        id: 2,
        name: "CSS",
        description: "CSS (Cascading Style Sheets) is the language used to define the style of an HTML document, including colors, layout, and fonts."
    },
    {
        id: 3,
        name: "JavaScript",
        description: "JavaScript is a programming language that allows you to make web pages dynamic."
    },
    {
        id: 4,
        name: "Node.js",
        description: "Node.js is a server side JavaScript runtime that allows you to run JavaScript code outside the browser."
    },
    {
        id: 5,
        name: "Express",
        description: "Express is a framework for Node.js that makes it easy to build web servers and API."
    },
    {
        id: 6,
        name: "ReactJS",
        description: "ReactJS is a JavaScript library for building component-based user interfaces."
    }
];

export default function Main() {
    const [isOpen, setIsOpen] = useState(1)

    return (
        <div className="container">
            <div className="buttons">
                {
                    languages.map(language => (
                        <button key={`language-${language.id}`} className={isOpen.name === language.name ? 'btn active' : 'btn'} onClick={() => setIsOpen(language)}>
                            {language.name}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}