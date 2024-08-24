
import { useState } from 'react';
import { useTranslation } from 'react-i18next'

const languages = {
    en: { nativeName: 'English' },
    "zh-CN": { nativeName: "中文" }
};

function LanguageSelector() {
    const { i18n } = useTranslation();
    // console.log(i18n.language)
    const [language, setLanguage] = useState(languages.en?.nativeName || i18n.language)
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    const onChange = (lng: string) => {
        i18n.changeLanguage(lng)
        setLanguage(languages[lng].nativeName)
        toggle()
    }

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    onClick={() => toggle()}
                >
                    {language}
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {open && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <ul className="py-1" role="none">
                    {Object.keys(languages).map((lng) => (
                        <li key={lng}
                         style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                         className='block px-4 py-2 text-sm cursor-pointer hover:bg-gray-300 text-black'
                         onClick={() => onChange(lng)}
                        >
                            {languages[lng].nativeName}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>

    )
}

export default LanguageSelector;


