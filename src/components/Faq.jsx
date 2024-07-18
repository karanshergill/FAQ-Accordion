import React from 'react'
import { useState } from 'react';
import faqData from '/src/data/faq-data';

export const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='relative h-screen'>
            <div className='absolute h-1/2 inset-x-0 top-0 bg-cover bg-center bg-background-mobile md:bg-background-desktop'></div>
            <div className='absolute h-1/2 inset-x-0 bottom-0 bg-Light-Pink'></div>
            <div className='relative flex items-center justify-around h-screen font-Work-Sans'>
                <div className='flex flex-col bg-White rounded-xl w-2/5'>
                    <div className='flex gap-4 pt-12 px-10'>
                        <img src="/src/assets/images/icon-star.svg" alt="Icon"></img>
                        <h1 className='text-4xl font-bold text-Dark-Purple'>FAQs</h1>
                    </div>
                    <div className='flex flex-col py-10 px-10'>
                        {faqData.map((item, index) => (
                            <div className='flex flex-col border-b-2 py-6 gap-4 last:border-none' key={index}>
                                <div className='flex justify-between' onClick={() => toggleAccordion(index)}>
                                    <h3 className='text-lg font-bold text-Dark-Purple'>{item.question}</h3>
                                    <img src={activeIndex === index ? '/src/assets/images/icon-minus.svg' : '/src/assets/images/icon-plus.svg'} alt=""/>
                                </div>
                                {activeIndex === index && (
                                    <p className='text-Grayish-Purple'>{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>


    )
}
