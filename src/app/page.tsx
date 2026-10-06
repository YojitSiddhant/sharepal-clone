import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { FloatingDatePrompt } from "@/components/layout/FloatingDatePrompt";
import { CategoryTabs } from "@/components/sections/CategoryTabs";
import { CategoryHero, GAMING_GRADIENT } from "@/components/sections/CategoryHero";
import { SubCategorySidebar } from "@/components/sections/SubCategorySidebar";
import { ProductListing } from "@/components/sections/ProductListing";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Testimonials } from "@/components/sections/Testimonials";

export default function GamingGadgetsPage() {
  return (
    <>
      <Header />
      <FloatingDatePrompt />

      <main className="min-h-dvh">
        <div className="mx-auto w-full max-w-[1216px] py-24 md:pt-[104px] lg:py-20">
          {/* On mobile the purple gradient sits behind the tabs and hero; on
              desktop the tab bar's grey background covers it. */}
          <div className="relative max-md:pb-3" style={{ background: GAMING_GRADIENT }}>
            <CategoryTabs />
            <div className="block px-2 md:hidden">
              <CategoryHero />
            </div>
          </div>

          <div className="flex flex-row gap-2 px-2 max-md:pt-4 md:grid md:grid-cols-[100px_1fr] md:gap-8 md:px-4 lg:grid-cols-[120px_1fr] xl:px-0">
            <SubCategorySidebar />
            <div className="min-w-0 flex-1">
              <div className="hidden md:block">
                <CategoryHero />
              </div>
              <ProductListing />
            </div>
          </div>
        </div>

        <FaqSection />
        <Breadcrumbs />
        <Testimonials />
      </main>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
