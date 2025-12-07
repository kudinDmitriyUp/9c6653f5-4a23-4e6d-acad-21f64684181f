"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardFourteen from '@/components/sections/testimonial/TestimonialCardFourteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="aurora"
      cardStyle="outline"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112196003-wsqj7ez2.jpg"
          logoAlt="Coffee Mugs Co"
          brandName="Coffee Mugs Co"
          button={{
            text: "Shop Now",
            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="COFFEE MUGS"
          description="Premium quality coffee mugs for every occasion. Custom designs, fast shipping, and unbeatable prices."
          buttons={[
            {
              text: "Shop Collection",
              href: "#products"
            },
            {
              text: "Learn More",
              href: "#features"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112196706-f91bngbb.jpg",
              imageAlt: "White ceramic coffee mug"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112197237-uvmb3pn3.jpg",
              imageAlt: "Custom printed coffee mug design"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112197786-tvjhoo3h.jpg",
              imageAlt: "Coffee mug collection"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSix
          products={[
            {
              id: "1",
              name: "Classic White Mug",
              price: "$8.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112198562-6kz4nouy.jpg",
              imageAlt: "Classic white ceramic coffee mug"
            },
            {
              id: "2",
              name: "Midnight Black Mug",
              price: "$9.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112199219-loaynzc4.jpg",
              imageAlt: "Black personalized coffee mug"
            },
            {
              id: "3",
              name: "Premium Ceramic Mug",
              price: "$12.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112199860-7awgxwab.jpg",
              imageAlt: "Premium ceramic mug with handle"
            },
            {
              id: "4",
              name: "Travel Coffee Mug",
              price: "$14.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112200561-nxckv2nj.jpg",
              imageAlt: "Ceramic travel coffee mug"
            }
          ]}
          title="Featured Products"
          description="Browse our best-selling coffee mug collection"
          gridVariant="bento-grid"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Why Choose Our Mugs"
          description="We provide premium quality coffee mugs with exceptional service"
          tag="Benefits"
          features={[
            {
              id: 1,
              title: "High-Quality Materials",
              description: "Made from premium ceramic that keeps your coffee at the perfect temperature. Durable and long-lasting for daily use.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112201308-9j1z12zl.jpg"
            },
            {
              id: 2,
              title: "Custom Design Options",
              description: "Personalize your mugs with custom designs, logos, and messages. Perfect for gifts or corporate branding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112202017-c7t43rpx.jpg"
            },
            {
              id: 3,
              title: "Fast & Reliable Shipping",
              description: "Quick turnaround time with worldwide shipping. Track your order and receive it in perfect condition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112202564-14j84hpa.jpg"
            }
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFourteen
          title="What Customers Say"
          description="Join thousands of satisfied customers who love our coffee mugs"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarah_coffee",
              testimonial: "Amazing quality mugs at great prices. The custom design option was perfect for my small business. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112203253-wl3b4603.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mike_designs",
              testimonial: "Fast shipping and excellent customer service. My clients love the personalized mugs I ordered.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112203948-8yblbuut.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_gifter",
              testimonial: "These mugs are perfect gifts. Great quality and the prices are unbeatable. Will order again!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112204992-r6g8up8s.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidk_office",
              testimonial: "Corporate bulk order was seamless. Custom branding looks professional and the whole team loves them.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112205708-t4qley73.jpg",
              imageAlt: "David Kim"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services"
          faqs={[
            {
              id: "1",
              title: "What materials do you use?",
              content: "We use premium ceramic material that is microwave and dishwasher safe. All mugs are food-safe and lead-free."
            },
            {
              id: "2",
              title: "Can I customize my mug?",
              content: "Yes! We offer full customization options including custom designs, logos, names, and messages. Submit your design during checkout."
            },
            {
              id: "3",
              title: "What is your shipping time?",
              content: "Standard orders ship within 3-5 business days. Custom orders typically take 7-10 business days. We offer expedited shipping options."
            },
            {
              id: "4",
              title: "Do you offer bulk discounts?",
              content: "Yes! We offer special pricing for bulk orders. Contact our team for a custom quote on orders of 50+ mugs."
            },
            {
              id: "5",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all products. If you're not satisfied, contact us for a full refund or replacement."
            },
            {
              id: "6",
              title: "Do you ship internationally?",
              content: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765112206213-mky87fp6.jpg"
          imageAlt="Coffee mugs on table"
          textboxLayout="default"
          mediaPosition="left"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to order your custom coffee mugs? Get in touch with our team today and let us help you create the perfect mugs for your needs."
          animationType="background-highlight"
          buttons={[
            {
              text: "Contact Us",
              href: "mailto:info@coffeemugs.com"
            },
            {
              text: "View All Products",
              href: "#products"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="COFFEE MUGS CO"
          logoAlt="Coffee Mugs Company"
        />
      </div>
    </ThemeProvider>
  );
}