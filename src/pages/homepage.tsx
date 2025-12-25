import { Blogs } from "../components/blogs"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Process } from "../components/process"
import { Registrations } from "../components/registrations"
import { Services } from "../components/services"
import { Testimonials } from "../components/testimonials"
import { WhyChooseUs } from "../components/why-choose-us"


function HomePage() {
    return (
        <div className=" bg-white" style={{width:"100%"}}>
          <Header />
          <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Registrations />
            <Process />
            <Testimonials />
            <Blogs />
            <Contact />
          </main>
          <Footer />
        </div>
      )
}
export default HomePage
