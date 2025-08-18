import React from 'react';
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid';

const ContactUs = () => {
  return (
    <section id="contact" className="py-10 bg-base-200">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-accent mb-8">
            Contact Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Email Card */}
          <div className="flex-none bg-base-300 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <EnvelopeIcon className="w-12 h-12 text-secondary/60" />
            </div>
            <blockquote className="text-secondary text-base leading-relaxed mb-6">
              For all inquiries, reach us at:
            </blockquote>
            <div className="border-t pt-4">
              <cite className="not-italic">
                <div className="text-primary font-semibold text-lg">
                  info@mail.com
                </div>
              </cite>
            </div>
          </div>

          {/* Phone Numbers Card */}
          <div className="flex-none bg-base-300 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <PhoneIcon className="w-12 h-12 text-secondary/60" />
            </div>
            <blockquote className="text-secondary text-base leading-relaxed mb-6">
              Call us anytime during business hours:
            </blockquote>
            <div className="border-t pt-4">
              <cite className="not-italic">
                <div className="text-primary font-semibold text-lg">
                  12345 67890 <br/>
                  98765 43210
                </div>
              </cite>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className="flex-none bg-base-300 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <ClockIcon className="w-12 h-12 text-secondary/60" />
            </div>
            <blockquote className="text-secondary text-base leading-relaxed mb-6">
              Working Hours:
            </blockquote>
            <div className="border-t pt-4">
              <cite className="not-italic">
                <div className="text-primary font-semibold text-lg">
                  Mon–Sat: 08:00–18:00 hrs
                </div>
                <div className="text-accent text-lg font-semibold">
                  Sunday: Closed
                </div>
              </cite>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
