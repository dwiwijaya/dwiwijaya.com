import React, { useRef, useState } from 'react'
import useEmailService from '@/services/EmailService';
import { Socials } from '@/constants/data/socials';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BiLoader, BiLoaderAlt, BiMailSend } from 'react-icons/bi';

const Contact = () => {
    const t = useTranslations();
    const formRef = useRef();
    const { sendEmail, loading } = useEmailService();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formRef.current);
    };

    return (
        <>
            <section className="contact__container">
                <div className="mb-8">
                    <p className="mb-4 font-semibold">
                        <i className="fa-sm fad fa-user-group mr-2"></i>
                        {t('Contact.findSocial')}
                    </p>
                    <ul className="flex md:flex-row gap-2 justify-center">
                        {Socials.map((social, index) => (
                            <li key={index} className='flex w-full'>
                                <button onClick={() => window.open(social.link, '_blank')} data-umami-event={social.eventName} title={social.label} className='w-full flex gap-2 justify-center items-center p-2 text-white rounded-md' style={{ backgroundColor: social.background }}>
                                    <Image src={social.icon} alt={`Icon for ${social.label}`} srcSet="" />
                                    <div className="hidden md:block">{social.label}</div>
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="relative">
                    <p className="mb-5 font-semibold">
                        <i className="fa-sm fad fa-envelope-open-text mr-2"></i>
                        {t('Contact.orsendMsg')}
                    </p>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="contact__form">
                        <div className="flex-col flex md:flex-row md:gap-4 justify-evenly"
                        >
                            <div className="form-control">
                                <div className="form-label">{t('Contact.name')}</div>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder={t('Contact.namePlaceholder')}
                                    name="name"
                                    required={true}
                                />
                            </div>
                            <div className="form-control">
                                <div className="form-label">{t('Contact.mail')}</div>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder={t('Contact.mailPlaceholder')}
                                    name="email"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="form-control !h-40">
                            <div className="form-label">{t('Contact.projectDesc')}</div>
                            <textarea
                                name="project"
                                id=""
                                cols="30"
                                rows="10"
                                required={true}
                                placeholder={t('Contact.descPlaceholder')}
                                className="form-input resize-none "
                            ></textarea>
                        </div>
                        <button data-data-umami-event='Send Contact Message' disabled={loading} className={`${loading ? 'cursor-not-allowed' : ''} btn !w-full md:!w-fit text-center justify-center`} >
                            {loading ? (
                                <BiLoaderAlt className='animate-spin' />
                            ) : (
                                <BiMailSend />
                            )}{" "}
                            {loading ? "Sending..." : t('Contact.sendMsg')}
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact