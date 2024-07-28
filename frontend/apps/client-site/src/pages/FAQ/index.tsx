import { Footer } from '../../components/custom/Footer'
import { Navbar } from '../../components/custom/Navbar'

export default function FAQ() {
  return (
    <main className='flex flex-col items-start m-auto min-h-screen w-full '>
        <Navbar/>

        {/* Frequently Asked Questions */}
        <section className='w-full flex justify-center relative mb-10'>
            <div className='space-y-6 w-1/2'>
                <h1 className='w-full uppercase text-4xl tracking-wider font-semibold text-center'> Frequently Asked Questions</h1>

              <div className=" collapse collapse-arrow bg-base-200 border border-orange-400 rounded-md">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-orange-600">What Brand is it?</div>
                <div className="collapse-content">
                  <p>Our generator is a high-quality product from <b>YUCHAI</b>, a renowed and trusted manufacturer in the industry</p>
                </div>
              </div>
              <div className=" collapse collapse-arrow bg-base-200 border border-orange-400 rounded-md">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-orange-600">Where is the generator manufactured?</div>
                <div className="collapse-content">
                  <p>Our generator is proudly sourced from <b>CHINA</b> where it is carefully designed and built to meet the highest standards of performance and reliability</p>
                </div>
              </div>
              <div className=" collapse collapse-arrow bg-base-200 border border-orange-400 rounded-md">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-orange-600">What kind of warranty does the generator come with?</div>
                <div className="collapse-content">
                  <p>We stand behind our products with a comprehensive <b>18 MONTHS</b> warranty covering covering parts and labor, to give you peace of mind and protection for the investment</p>
                </div>
              </div>
              <div className=" collapse collapse-arrow bg-base-200 border border-orange-400 rounded-md">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-orange-600">What type of alternator is used in the generator?</div>
                <div className="collapse-content">
                  <p>Our generator features a robust and efficient <b>STANFORD </b>alternator, designed to deliver consistent and reliable power output in the most demanding applications </p>
                </div>
              </div>
              <div className=" collapse collapse-arrow bg-base-200 border border-orange-400 rounded-md">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-orange-600">Does the company offer maintenance services for the generator?</div>
                <div className="collapse-content">
                  <p><b>YES</b>,the company offers maintenance services for the generator <b>EXCEPT</b> for oil changes,which are the responsibility of the customer</p>
                </div>
              </div>
              <div className=" collapse collapse-arrow bg-base-200 border border-orange-400 rounded-md">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-orange-600">Does the company offer delivery services?</div>
                <div className="collapse-content">
                  <p><b>YES</b>,the company offers delivery services <b>BUT</b> only for customers within <b>ACCRA</b>.Customers in other areas are responsible for arranging their own delivery</p>
                </div>
              </div>               
            </div>
        </section>

        <Footer/>
    </main>
  )
}
