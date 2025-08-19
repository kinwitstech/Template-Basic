import React from 'react';
import { useForm } from 'react-hook-form';
import { EnvelopeIcon, PhoneIcon, UserIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <section id="contact" className="scroll-mt-10 py-10 bg-base-200">
      <div className="container">
        <div className="bg-base-300 rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-4">
              Contact Me
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-6 text-secondary">
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>info@site.com</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-secondary"></div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>Tel: +91 12345 67890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Row - First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-secondary text-sm mb-2">
                  Enter Your First Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary/80" />
                  <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full pl-10 pr-4 py-3 border border-secondary/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-secondary/70"
                    placeholder="First Name"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-secondary text-sm mb-2">
                  Enter Your Last Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary/80" />
                  <input
                    type="text"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full pl-10 pr-4 py-3 border border-secondary/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-secondary/70"
                    placeholder="Last Name"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Second Row - Email & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-secondary text-sm mb-2">
                  Enter Your Email *
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary/80" />
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full pl-10 pr-4 py-3 border border-secondary/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-secondary/70"
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-secondary text-sm mb-2">
                  Enter Your Subject *
                </label>
                <div className="relative">
                  <ChatBubbleLeftRightIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary/80" />
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full pl-10 pr-4 py-3 border border-secondary/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-secondary/70"
                    placeholder="Subject"
                  />
                </div>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
            </div>

            {/* Third Row - Message */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-3 flex justify-center">
                <div className="w-full md:w-2/3">
                  <label className="block text-secondary text-sm mb-2">
                    Enter Your Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows="6"
                    className="w-full px-4 py-3 border border-secondary/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-secondary/70"
                    placeholder="Type your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-3 flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-xl text-lg hover:shadow-lg hover:scale-105 hover:cursor-pointer"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;