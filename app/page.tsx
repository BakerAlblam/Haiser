import About from '@/components/About'
import FooterBasic from '@/components/FooterBasic'
import Form from '@/components/Form'
import Menu from '@/components/Menu'
export default function Home() {
  return (
    <div className=''>
        <Menu />
        <Form />
        <hr className="h-0.5  mx-auto rounded border-1 bg-white "  />
        <About />
     <FooterBasic />
    </div>
  )
}
