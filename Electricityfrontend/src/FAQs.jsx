import React from 'react';
import './faq.css';

const FAQ = () => {
  const faqData = [
    {
      question: 'How is my electricity bill calculated?',
      answer: 'Your electricity bill is calculated based on the number of Units you consume during the billing period. The total consumption is multiplied by the rate per kWh, and additional charges like taxes, service fees, or peak usage fees may apply.',
    },
    {
      question: 'How can I view my bill online?',
      answer: 'You can view your bill online by logging into your account on our customer portal. Once logged in, you’ll be able to see your current bill, previous bills, and payment history.',
    },
    {
      question: 'What payment methods are available?',
      answer: 'We offer several payment options, including online payment through our portal, automatic bank drafts, credit/debit cards, and in-person payments at authorized locations.',
    },
    {
      question: 'How can I reduce my electricity bill?',
      answer: 'To reduce your bill, consider using energy-efficient appliances, turning off unused devices, and optimizing your peak hours consumption.',
    },
    {
        question: "What should I do if I have not received my bill?",
        answer:
          "If you have not received your bill, please log in to our portal to check the latest bill. You can also contact our support team for further assistance.",
      },
      {
        question: "How do I report a power outage?",
        answer:
          "You can report a power outage through our mobile app, website, or by calling our emergency helpline available 24/7.",
      },
      {
        question: "Can I set up automatic payments?",
        answer:
          "Yes, you can set up automatic payments through your account portal. This ensures that your bill is paid on time every month without manual intervention.",
      },
      {
        question: "What happens if I miss a payment?",
        answer:
          "If you miss a payment, you may incur late fees, and your service may be interrupted. Please contact us immediately to discuss payment options and avoid disruptions.",
      },
      {
        question: "How can I update my contact information?",
        answer:
          "You can update your contact information by logging into your account on our customer portal and navigating to the profile section.",
      },
      {
        question: "Is there a way to track my electricity usage?",
        answer:
          "Yes, you can track your electricity usage through our customer portal or mobile app, where detailed usage reports are available.",
      },
  ];

  return (
    <div className="faq-container">
      <header className="faq-title">
         <h2>All FAQ</h2>
      </header>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <p className="faq-question">

            <strong style={{color:"orange"}}>Question:</strong> {item.question}
          </p>
          <p className="faq-answer">
            <strong style={{color:"orange"}}>Answer:</strong> {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
