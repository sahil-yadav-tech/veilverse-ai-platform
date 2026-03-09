import DownloadSection from "../components/DownloadSection"
import FeaturesSection from "../components/FeaturesSection"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "../components/Testimonials"

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />

      <HowItWorks />
      <Testimonials />
      <DownloadSection />
      {/* <Footer /> */}
    </>
  )
}

export default HomePage