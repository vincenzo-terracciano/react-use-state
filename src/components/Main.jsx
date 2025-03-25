import { useState } from "react"
import languages from '../data/languages'

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
            <div className="text">
                <h3>{isOpen.name}</h3>
                <p>{isOpen.description}</p>
            </div>
        </div>
    )
}