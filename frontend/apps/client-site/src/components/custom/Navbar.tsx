import { Search, Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import LanguageSelector from "./LanguageSelector"
import { useTranslation } from "react-i18next"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t } = useTranslation()

    return (
        <nav className="w-full py-6 sm:py-7 px-4 sm:px-6 fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex items-center justify-between">
                <div>
                    <img src="/assets/nn.png" alt="logo" className="w-32 sm:w-40 md:w-48 lg:w-56"/>
                </div>
                <div className="hidden lg:flex flex-col items-end gap-2">
                    <ul className="flex items-center gap-3 lg:gap-4 text-xs">
                        <li>
                            <LanguageSelector/>
                        </li>
                        <li className="border-x border-black px-2 lg:px-3"><a href="#" className="hover:text-orange-600">+23312341234</a></li>
                        <li><Link to="/contactus" className="hover:text-orange-600">{t('Contact Us')}</Link></li>
                        <li><Link to="/faq" className="hover:text-orange-600">{t("FAQ")}</Link></li>
                    </ul>
                    <ul className="flex items-center gap-3 lg:gap-4 text-sm">
                        <li><Search className="text-orange-600 cursor-pointer w-4 h-4"/></li>
                        <li><a href="/" className="hover:text-orange-600">{t("Home")}</a></li>
                        <li><a href="/generator" className="hover:text-orange-600">{t("Generators")}</a></li>
                        <li><a href="#" className="hover:text-orange-600">{t("News")}</a></li>
                    </ul>
                </div>
                <div className="lg:hidden flex items-center gap-3">
                    <Search className="text-orange-600 cursor-pointer w-5 h-5"/>
                    <Menu className="cursor-pointer w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden mt-3 border-t pt-3">
                    <ul className="flex flex-col gap-3 text-sm">
                        <li>
                            <LanguageSelector/>
                        </li>
                        <li><a href="#" className="hover:text-orange-600">+23312341234</a></li>
                        <li><Link to="/contactus" className="hover:text-orange-600">{t("Contact Us")}</Link></li>
                        <li><Link to="/faq" className="hover:text-orange-600">{t("FAQ")}</Link></li>
                        <li><a href="/" className="hover:text-orange-600">{t("Home")}</a></li>
                        <li><a href="/generator" className="hover:text-orange-600">{t("Generators")}</a></li>
                        <li><a href="#" className="hover:text-orange-600">{t("News")}</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}