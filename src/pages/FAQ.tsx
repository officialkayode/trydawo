import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Community Round?",
      answer: "Community Round — an offering when a startup lets thousands of their customers, users, & fans invest alongside VCs and angel investors."
    },
    {
      question: "What happens during bankruptcy?",
      answer: "Investors are informed of implication of startup investment."
    },
    {
      question: "How are we protecting investors?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>We provide due diligence</li>
          <li>Regulatory compliance</li>
          <li>Provide all info about a startup transparently to investors</li>
          <li>Escrow/trust account for funds raised/stablecoin - (direction still TBD)</li>
          <li>Investor limit by SEC law of country</li>
          <li>Give training to investors, especially new investors</li>
          <li>2FA</li>
        </ul>
      )
    },
    {
      question: "How much can I raise?",
      answer: "A company can legally raise a maximum of N100M in a 12-month period from unaccredited investors, with no cap for accredited investors."
    },
    {
      question: "Is a Community Round public or private?",
      answer: "Either. Some founders prefer to remain private and only open their round to customers. Others open a public round for marketing reasons, and to get more supporters onboard!"
    },
    {
      question: "Who can invest?",
      answer: "Anyone can invest a minimum of N5,000 in the companies they love."
    },
    {
      question: "Which companies can open a Community Round?",
      answer: "Any private companies from pre-seed until IPO."
    },
    {
      question: "How does it compare to an RUV?",
      answer: "Community Rounds don't limit the number of investors, nor are they limited to only accredited investors. RUVs are limited to 249 investors, and all investors have to be accredited. In addition, RUVs are private and can't legally be marketed."
    },
    {
      question: "What are the financial requirements?",
      answer: "2 years of financial statements covering the prior years, or financials since inception if your company is less than 2 years old. This includes an income statement, balance sheet, cash flow statement, and notes on the financial statements."
    },
    {
      question: "How do SPVs work?",
      answer: "An SPV, or \"special purpose vehicle,\" is an entity that is set up for the sole purpose of investing in your company. We'll set up a new series of an LLC to function as the SPV, which investors pool their capital into. The SPV then invests in your company as 1 entity. (If you include early bird terms in your raise, we'll use a 2nd SPV to hold your early bird investors.)"
    },
    {
      question: "Who manages the SPV?",
      answer: "For most new SPVs, the manager is Dawo Admin, LLC, who then delegates voting decisions to the Lead Investor.\n\nFor legacy Reg D SPVs and those set up for certain purposes such as investing in follow-on financings, the manager is Dawo Advisors, LLC.\n\nThe manager of an SPV is disclosed in the Subscription Agreement that investors sign when they invest through an SPV."
    },
    {
      question: "Do you group all investors into one shareholder on the cap table?",
      answer: "Yes! All investors will be aggregated into SPVs. Even if you raise funding from 3,000 investors, only one entity will appear on your cap table."
    },
    {
      question: "Do all these investors vote?",
      answer: "No. You only need to talk to one person to sign off on any corporate actions: your Lead Investor."
    },
    {
      question: "What does the Lead Investor do?",
      answer: "The Lead Investor directs the voting power of all Dawo investors. That's it—they have no additional responsibilities to the company or other Dawo investors.\n\nThe only requirement is that the Lead Investor is not an officer, employee, or family member, and does not have any other conflict of interest.\n\nThis Lead represents everyone in the SPV in case there's a need for investor signatures.\n\nThey do not have to be the biggest investor in the round."
    },
    {
      question: "Who chooses the lead investor?",
      answer: "Each founder chooses their own Lead Investor. This can be a previous or current investor, a founder friend, or anyone who will help make your Community Round a success!"
    },
    {
      question: "How should I choose a lead investor?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Mission-aligned and excited. You want someone who groks your long-term vision.</li>
          <li>Can bring their expertise and/or community to your round. Maybe they're an industry expert, or they have a large community that would be interested in investing alongside them</li>
          <li>Do you like them personally? Life is better if you follow the "no asshole" rule.</li>
          <li>Why would someone invest in your company? You want a Lead Investor who can explain this passionately. Their testimonial will appear on your Dawo campaign page.</li>
        </ul>
      )
    },
    {
      question: "How do I start a Community Round?",
      answer: "Start your campaign on Dawo"
    },
    {
      question: "How long will it take until my fundraise is live?",
      answer: "~15 min"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;