import { t } from 'i18next'
import { Footer } from '../../components/custom/Footer'
import { Navbar } from '../../components/custom/Navbar'

export default function FAQ() {
  return (
    <div className='flex flex-col min-h-screen w-full'>
        <Navbar/>
        
        <main className='flex-grow pt-20 sm:pt-24 md:pt-28'> {/* Added padding-top here */}
            {/* Frequently Asked Questions */}
            <section className='w-full flex justify-center px-4 sm:px-6 lg:px-8 my-8 sm:my-12 md:my-16'>
                <div className='space-y-6 w-full max-w-3xl'>
                    <h1 className='w-full uppercase text-2xl sm:text-3xl md:text-4xl tracking-wider font-semibold text-center mb-8'> 
                        {t("Frequently Asked Questions")}
                    </h1>

                    {[
                        {
                            question: t("What Brand is it?"),
                            answer: t("Our generator is a high-quality product from <b>YUCHAI</b>, a renowned and trusted manufacturer in the industry.")
                        },
                        {
                            question: t("Where is the generator manufactured?"),
                            answer: t("Our generator is proudly sourced from <b>CHINA</b> where it is carefully designed and built to meet the highest standards of performance and reliability.")
                        },
                        {
                            question: t("What kind of warranty does the generator come with?"),
                            answer: t("We stand behind our products with a comprehensive <b>18 MONTHS</b> warranty covering parts and labor, to give you peace of mind and protection for your investment.")
                        },
                        {
                            question: t("What type of alternator is used in the generator?"),
                            answer: t("Our generator features a robust and efficient <b>STANFORD</b> alternator, designed to deliver consistent and reliable power output in the most demanding applications.")
                        },
                        {
                            question: t("Does the company offer maintenance services for the generator?"),
                            answer: t("<b>YES</b>, the company offers maintenance services for the generator <b>EXCEPT</b> for oil changes, which are the responsibility of the customer.")
                        },
                        {
                            question: t("Does the company offer delivery services?"),
                            answer: t("<b>YES</b>, the company offers delivery services <b>BUT</b> only for customers within <b>ACCRA</b>. Customers in other areas are responsible for arranging their own delivery.")
                        }
                    ].map((item, index) => (
                        <div key={index} className="collapse collapse-arrow bg-base-200 border border-orange-400 rounded-md">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-lg sm:text-xl font-medium text-orange-600">{item.question}</div>
                            <div className="collapse-content">
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>

        <Footer/>
    </div>
  )
}