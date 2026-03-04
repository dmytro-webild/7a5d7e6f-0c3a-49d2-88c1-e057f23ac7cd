"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Check, HelpCircle, Mail, Sparkles, Star, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "product" },
            { name: "Testimonials", id: "testimonial" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ChatAI"
          bottomLeftText="Intelligent Conversations"
          bottomRightText="hello@chatai.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Chat with Intelligence"
          description="Experience the future of conversation. Our AI platform understands context, learns from interactions, and delivers intelligent responses in real-time."
          tag="AI-Powered"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/a-modern-ai-chat-interface-showing-a-con-1772598686660-f921ff86.png"
          imageAlt="AI Chat Interface"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Start Chatting", href: "https://app.chatai.com" },
            { text: "Learn More", href: "#features" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFour
          title="Powerful Capabilities"
          description="Our AI platform is built to understand, learn, and evolve with your needs"
          tag="Features"
          tagIcon={Zap}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "1",              title: "Seamless Integration",              author: "Connect Anywhere",              description: "Integrate ChatAI into your existing workflows with our powerful APIs and pre-built connectors for popular business tools.",              tags: ["API", "Integration", "Easy Setup"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/a-dashboard-showing-ai-integration-capab-1772598687388-f6d5099f.png",              imageAlt: "Seamless Integration"
            },
            {
              id: "2",              title: "Real-Time Analytics",              author: "Understand Conversations",              description: "Track conversation metrics, response times, and user satisfaction with comprehensive real-time dashboards and detailed reports.",              tags: ["Analytics", "Real-time", "Insights"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/a-screen-showing-real-time-chat-analytic-1772598686297-403caed3.png",              imageAlt: "Real-Time Analytics"
            },
            {
              id: "3",              title: "Enterprise Security",              author: "Your Data Matters",              description: "Bank-level encryption, compliance with GDPR and HIPAA, and dedicated security monitoring ensure your conversations remain private.",              tags: ["Security", "Compliance", "Privacy"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/a-security-focused-interface-illustratio-1772598686371-75c21de9.png",              imageAlt: "Enterprise Security"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Choose Your Plan"
          description="Select the perfect ChatAI plan for your business needs"
          tag="Plans"
          tagIcon={Check}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "starter",              name: "Starter Plan",              price: "$49",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/a-product-showcase-showing-the-ai-chat-i-1772598686470-48c88566.png?_wi=1",              imageAlt: "Starter Plan"
            },
            {
              id: "professional",              name: "Professional Plan",              price: "$149",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/a-product-showcase-showing-the-ai-chat-i-1772598686470-48c88566.png?_wi=2",              imageAlt: "Professional Plan"
            },
            {
              id: "enterprise",              name: "Enterprise Plan",              price: "Custom",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/a-product-showcase-showing-the-ai-chat-i-1772598686470-48c88566.png?_wi=3",              imageAlt: "Enterprise Plan"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Proven Results"
          description="Trusted by leading companies worldwide"
          tag="By the Numbers"
          tagIcon={TrendingUp}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          metrics={[
            { id: "1", value: "500K+", description: "Active Conversations Daily" },
            { id: "2", value: "99.9%", description: "Platform Uptime" },
            { id: "3", value: "50ms", description: "Average Response Time" },
            { id: "4", value: "98%", description: "User Satisfaction" }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwelve
          cardTitle="Over 10,000 teams use ChatAI to power their customer conversations"
          cardTag="See what they say"
          cardTagIcon={Star}
          cardAnimation="slide-up"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/professional-headshot-of-a-woman-in-her--1772598685444-6bfe55d6.png",              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",              name: "Michael Chen",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/professional-headshot-of-a-man-in-his-35-1772598685545-4f8a1037.png",              imageAlt: "Michael Chen"
            },
            {
              id: "3",              name: "Emily Rodriguez",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/professional-headshot-of-a-woman-in-her--1772598686399-9d23aa70.png",              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",              name: "David Kim",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/professional-headshot-of-a-man-in-his-30-1772598685677-50dcf140.png",              imageAlt: "David Kim"
            },
            {
              id: "5",              name: "Jessica Wong",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/professional-headshot-of-a-woman-in-her--1772598685457-f6768532.png",              imageAlt: "Jessica Wong"
            },
            {
              id: "6",              name: "Robert Thompson",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/professional-headshot-of-a-man-in-his-45-1772598686349-e244c963.png",              imageAlt: "Robert Thompson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about ChatAI and how it can help your business"
          tag="Support"
          tagIcon={HelpCircle}
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How does ChatAI handle sensitive data?",              content: "ChatAI uses enterprise-grade encryption (AES-256) for all data in transit and at rest. We comply with GDPR, HIPAA, and SOC 2 Type II standards. All conversations can be configured to auto-delete after a specified period, and we never use your data for model training without explicit consent."
            },
            {
              id: "2",              title: "Can I integrate ChatAI with my existing systems?",              content: "Yes! ChatAI provides REST APIs, webhooks, and pre-built integrations with popular platforms like Slack, Microsoft Teams, Salesforce, and Zendesk. Our API documentation is comprehensive, and our support team can help with custom integrations."
            },
            {
              id: "3",              title: "What languages does ChatAI support?",              content: "ChatAI currently supports 50+ languages including English, Spanish, Mandarin, French, German, Japanese, Arabic, Hindi, and many more. Language detection is automatic, and the AI maintains context across language switches within conversations."
            },
            {
              id: "4",              title: "How does pricing work for high-volume usage?",              content: "We offer volume discounts starting at 100K conversations/month. Enterprise customers receive custom pricing based on their specific needs, including dedicated infrastructure options and service level agreements. Contact our sales team for detailed enterprise pricing."
            },
            {
              id: "5",              title: "Can ChatAI learn from my company's specific knowledge?",              content: "Absolutely! You can upload documents, knowledge bases, and FAQs to train ChatAI on your company-specific information. We support PDF, DOCX, CSV, and other formats. The AI uses this context to provide more accurate and relevant responses for your use case."
            },
            {
              id: "6",              title: "What kind of customer support do you offer?",              content: "We provide 24/7 support via email, live chat, and phone for enterprise customers. All plans include access to our comprehensive knowledge base, video tutorials, and community forum. Premium support includes a dedicated account manager and priority response times."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Conversations?"
          description="Join thousands of companies already using ChatAI. Get early access to new features, exclusive updates, and special offers for newsletter subscribers."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/a-warm-inviting-workspace-setting-with-a-1772598686778-ad747d69.png"
          imageAlt="Collaboration"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="We respect your privacy. Unsubscribe anytime. By subscribing, you agree to receive updates from ChatAI."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASv6buwz6eFZpPOvFZw9u1AIJx/an-abstract-minimalist-background-showin-1772598686565-cb309d9c.png"
          imageAlt="Connected Network"
          logoText="ChatAI"
          copyrightText="© 2025 ChatAI. All rights reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#product" },
                { label: "API Docs", href: "https://docs.chatai.com" },
                { label: "Status", href: "https://status.chatai.com" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "https://chatai.com/about" },
                { label: "Blog", href: "https://blog.chatai.com" },
                { label: "Careers", href: "https://careers.chatai.com" },
                { label: "Press", href: "https://chatai.com/press" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Security", href: "https://chatai.com/security" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
