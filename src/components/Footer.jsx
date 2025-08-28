import { GlobeAltIcon } from '@heroicons/react/24/outline'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' }
  ],
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' }
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ]
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: GlobeAltIcon },
  { name: 'Facebook', href: '#', icon: GlobeAltIcon },
  { name: 'LinkedIn', href: '#', icon: GlobeAltIcon },
  { name: 'Instagram', href: '#', icon: GlobeAltIcon }
]

export default function Footer() {
  return (
    <footer className="text-info bg-base-100">
      <div className="container p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary/90 to-accent/90">
              Kinwits
            </h3>
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p classname="text-neutral-content/70">ADDRESS</p>
                  <p className="text-sm text-neutral-content/70">
                    Shivam Tower, 1st floor <br/>
                    Kota, Udupi District, KA <br/>
                    INDIA - 576221
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-2">
                <PhoneIcon className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p classname="text-neutral-content/70">PHONE</p>
                  <p className="text-sm text-neutral-content/70">01234-56789</p>
                </div>
              </div>

              <div className="flex items-start mt-2">
                <EnvelopeIcon className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p classname="text-neutral-content">EMAIL</p>
                  <p className="text-sm text-neutral-content/70">info@kinwits.com</p>
                </div>
              </div>
            </div>

          <div className="order-1 md:order-1">
            <h5 className="mb-4 font-semibold">Company</h5>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-serif text-neutral-content/60 transition-colors duration-300 hover:text-neutral-content">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 md:order-3">
            <h5 className="mb-4 font-semibold">Support</h5>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-serif text-neutral-content/60 transition-colors duration-300 hover:text-neutral-content">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-info-content/50">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-neutral-content/70">
              © {new Date().getFullYear()} Kinwits. All rights reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <a href="#" className="text-sm text-neutral-content/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-neutral-content/70 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
