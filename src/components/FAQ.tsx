import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: string | React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none text-gray-900 dark:text-gray-100"
                onClick={toggleAccordion}
            >
                <span className="font-medium">{title}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-700 dark:text-gray-300">
                    {typeof content === 'string' ? <p>{content}</p> : content}
                </div>
            )}
        </div>
    );
};

interface AccordionProps {
    items: AccordionItemProps[];
    className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
    return (
        <div className={`w-full ${className}`}>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

const FAQ: React.FC = () => {
    const accordionItems = [
        {
            title: 'What is this website?',
            content:
                'This is a URL shortener that helps you create short, easy-to-share links from long URLs.'
        },
        {
            title: 'How does the Shortner URL shortener work?',
            content:
                'When you enter a long URL, our system generates a shorter version of that URL. This shortened URL redirects to the original long URL when accessed.',
        },
        {
            title: ' Is this service free?',
            content:
                'Yes, the basic URL shortening service is free. However, we may offer premium features for advanced analytics, custom branding, and more.'
        },
        {
            title: 'What analytics are available for my shortened URLs?',
            content:
                'You can view the number of clicks, geolocation data of the clicks, and device types (mobile/desktop) for each of your shortened URLs.',
        },
    ];

    return (
        <div className="p-4 bg-white dark:bg-gray-800">
            <Accordion items={accordionItems} className="w-full md:px-11" />
        </div>
    );
};

export default FAQ;