import React, { Suspense, useState, useEffect } from "react";
import Header from "./components/Header";
import PageLoader from "./Ui/Loader/PageLoader";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Services = React.lazy(() => import("./components/Services"));
const Footer = React.lazy(() => import("./components/Footer"));

const App: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState({
    home: true, // Always show home first
    about: false,
    services: false,
    footer: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId]: true,
            }));
          }
        });
      },
      { rootMargin: "100px" } // Load 100px before coming into view
    );

    // Observe placeholder divs
    const sections = ["about", "services", "footer"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <Suspense
          fallback={
            <PageLoader
              isVisible={true}
              showBackdrop={false}
              loaderSpeed="slow"
            />
          }
        >
          <Home />
        </Suspense>

        <div id="about" style={{ minHeight: "100vh" }}>
          {visibleSections.about && (
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          )}
        </div>

        <div id="services" style={{ minHeight: "100vh" }}>
          {visibleSections.services && (
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          )}
        </div>

        <div id="footer" style={{ minHeight: "200px" }}>
          {visibleSections.footer && (
            <Suspense fallback={<PageLoader />}>
              <Footer />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
