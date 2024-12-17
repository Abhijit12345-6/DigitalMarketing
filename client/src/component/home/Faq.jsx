import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is digital marketing, and why is it important for businesses in Bangalore?',
    answer: 'Digital marketing refers to the use of online channels to promote and grow your business. With Bangalore being a tech hub, digital marketing is crucial to reach tech-savvy audiences and stay competitive. It helps businesses connect with customers online, boost visibility, and drive engagement.'
  },
  {
    id: 2,
    question: 'What digital marketing services do you offer in Bangalore?',
    answer: 'We offer services like SEO, PPC, social media marketing, content marketing, and email marketing tailored to your business needs.'
  },
  {
    id: 3,
    question: 'How can digital marketing improve my business in Bangalore?',
    answer: 'Digital marketing can help increase your online presence, generate more leads, and build stronger customer relationships, especially in a competitive market like Bangalore.'
  },
  {
    id: 4,
    question: 'Why is SEO important for Bangalore businesses?',
    answer: 'SEO helps improve your website’s visibility on search engines, attracting more organic traffic and potential customers in Bangalore.'
  },
  {
    id: 5,
    question: 'How does content marketing benefit my business?',
    answer: 'Content marketing helps educate your audience, build trust, and establish authority, ultimately driving more conversions and customer loyalty.'
  },
  {
    id: 6,
    question: 'What is the role of email marketing in digital marketing?',
    answer: 'Email marketing helps you stay connected with your audience, promote your products, and nurture customer relationships with personalized communication.'
  },
  {
    id: 7,
    question: 'How can PPC campaigns boost my business growth?',
    answer: 'PPC campaigns drive instant traffic to your website, making it an effective way to generate leads and conversions quickly.'
  },
  {
    id: 8,
    question: 'What platforms are best for social media marketing in Bangalore?',
    answer: 'Platforms like Facebook, Instagram, LinkedIn, and Twitter are effective for social media marketing, depending on your target audience.'
  },
  {
    id: 9,
    question: 'How long does it take to see results from digital marketing?',
    answer: 'Results can vary, but typically, SEO and content marketing take 3-6 months, while PPC and social media marketing can yield quicker results.'
  },
  {
    id: 10,
    question: 'What are the costs involved in digital marketing services?',
    answer: 'Costs vary depending on the scope and type of services. We offer customizable packages to suit different budgets and needs.'
  },
  {
    id: 11,
    question: 'How do you measure the success of digital marketing campaigns?',
    answer: 'We use key performance indicators (KPIs) like website traffic, conversion rates, engagement metrics, and ROI to measure the success of campaigns.'
  },
  {
    id: 12,
    question: 'Can digital marketing help my Bangalore-based business build a strong brand?',
    answer: 'Yes, through consistent online presence, content marketing, and social media engagement, digital marketing can help build and strengthen your brand.'
  },
  {
    id: 13,
    question: 'How does social media fit into a digital marketing strategy for businesses in Bangalore?',
    answer: 'Social media helps you connect with your audience, increase brand awareness, and drive engagement, which is vital for tech-savvy audiences in Bangalore.'
  },
  {
    id: 14,
    question: 'What is PPC, and how can it benefit my business in Bangalore?',
    answer: 'Pay-Per-Click (PPC) advertising helps drive targeted traffic to your website quickly, making it useful for businesses looking to boost visibility and conversions.'
  },
  {
    id: 15,
    question: 'What makes your digital marketing agency different?',
    answer: 'We provide personalized strategies, transparent reporting, and a commitment to achieving measurable results for your business.'
  },
  {
    id: 16,
    question: 'Do you offer local SEO services for Bangalore-based businesses?',
    answer: 'Yes, we specialize in local SEO to help your business appear in location-based search results, attracting local customers.'
  },
  {
    id: 17,
    question: 'How do you stay updated with the latest digital marketing trends?',
    answer: 'Our team continuously learns and adapts to new trends and technologies to provide the best strategies for our clients.'
  },
  {
    id: 18,
    question: 'What industries do you serve with your digital marketing services?',
    answer: 'We serve a wide range of industries, including tech, healthcare, education, retail, real estate, and more.'
  },
  {
    id: 19,
    question: 'Do you provide regular reports on campaign performance?',
    answer: 'Yes, we provide detailed reports to help you understand the progress and success of your digital marketing campaigns.'
  },
  {
    id: 20,
    question: 'How do I get started with your digital marketing services?',
    answer: 'Simply reach out to us through our website or contact number, and we’ll set up a consultation to discuss your needs and goals.'
  }
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="bg-gray-900 text-white md:p-20 p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Frequently Asked Questions About Digital Marketing Company
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-gray-800 rounded-lg">
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
            >
              <span className={activeId === faq.id ? 'text-red-400 font-bold' : 'text-white'}>
                {faq.id}. {faq.question}
              </span>
              <span className="text-xl">
                {activeId === faq.id ? '↑' : '↓'}
              </span>
            </button>
            {activeId === faq.id && faq.answer && (
              <div className="p-4 border-t border-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
