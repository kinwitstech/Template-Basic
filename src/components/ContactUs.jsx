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
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <section id="contact" className="w-full scroll-mt-15 p-10 bg-base-200">
      <div className="container px-4 lg:px-40">
          <div className="text-center mb-12">
            <h1 className="text-accent mb-4">
              Contact Me
            </h1>
            <div className="flex-center mb-6">
              <div className="flex-center space-x-6 text-info/50">
                <div className="flex-center space-x-2">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>info@site.com</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-secondary"></div>
                <div className="flex-center space-x-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>Tel: +91 12345 67890</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-content/70" />
                  <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-content/50 focus:ring-0 focus:ring-offset-0 rounded-lg placeholder-neutral-content/70"
                    placeholder="First Name"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-content/70" />
                  <input
                    type="text"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-content/50 focus:ring-0 focus:ring-offset-0 rounded-lg placeholder-neutral-content/70"
                    placeholder="Last Name"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-content/70" />
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-content/50 focus:ring-0 focus:ring-offset-0 rounded-lg placeholder-neutral-content/70"
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <ChatBubbleLeftRightIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-content/70" />
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-content/50 focus:ring-0 focus:ring-offset-0 rounded-lg placeholder-neutral-content/70"
                    placeholder="Subject"
                  />
                </div>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="relative">
                <ChatBubbleLeftRightIcon className="absolute left-3 top-4 w-5 h-5 text-neutral-content/70" />
                
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-content/50 focus:ring-0 focus:ring-offset-0 rounded-lg placeholder-neutral-content/70"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-3 flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-accent text-white py-2 px-8 hover:scale-110"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
    </section>
  );
};

export default ContactForm;