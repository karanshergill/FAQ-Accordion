import React from 'react'
import { useState } from 'react';
import faqData from '/src/data/faq-data';
import { IconStar } from '../icons/IconStar';
import { IconMinus } from '../icons/IconMinus';
import { IconPlus } from '../icons/IconPlus';

export const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='relative h-screen'>
            <div className='absolute h-1/2 inset-x-0 top-0 bg-cover bg-center bg-background-mobile md:bg-background-desktop'></div>
            <div className='absolute h-1/2 inset-x-0 bottom-0 bg-Light-Pink'></div>
            <div className='relative flex flex-col items-center justify-around h-screen font-Work-Sans'>
                <div className='flex flex-col bg-White rounded-xl w-5/6 md:w-2/5'>
                    <div className='flex gap-6 pt-8 px-6 md:px-10'>
                        <IconStar />
                        <h1 className='text-3xl font-bold text-Dark-Purple md:text-4xl'>FAQs</h1>
                    </div>
                    <div className='flex flex-col px-6 md:py-6 md:px-10'>
                        {faqData.map((item, index) => (
                            <div className='flex flex-col justify-center border-b-2 py-2 last:border-none' key={index}>
                                <div className='flex items-center justify-between cursor-pointer leading-5 my-2' onClick={() => toggleAccordion(index)}>
                                    <h3 className='font-bold text-Dark-Purple'>{item.question}</h3>
                                    {activeIndex === index ? <IconMinus /> : <IconPlus />}
                                </div>
                                <div className={`overflow-hidden duration-500 ease-in-out my-2 h-auto md:my-0 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                    <p className="text-sm text-Grayish-Purple">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-xs items-center py-2 bg-Light-Pink text-gray-500'>
                <span>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</span>
                <span>Coded by <a href="https://karanshergill.com">Karan Shergill</a>.</span>
            </div>
        </div>
    )
}
