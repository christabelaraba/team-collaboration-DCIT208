import { Footer } from '../../components/custom/Footer'
import { Navbar } from '../../components/custom/Navbar'

export default function FAQ() {
  return (
    <main className='flex flex-col items-start m-auto min-h-screen w-full '>
        <Navbar/>

        {/* Frequently Asked Questions */}
        <section className='w-full flex justify-center relative'>
            <div>
                <h1 className='w-full uppercase text-4xl tracking-wider font-semibold'> Frequently Asked Questions</h1>

               
            </div>
        </section>

        <Footer/>
    </main>
  )
}
