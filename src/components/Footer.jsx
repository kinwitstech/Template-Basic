import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

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
    <footer className="text-white bg-gray-900">
      <div className="px-20 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Add your Company Info in this block */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary/90 to-accent/90">
              Kinwits
            </h3>
            <p className="max-w-md mb-6 text-secondary">
              Transform your digital presence with our innovative solutions. 
              We help businesses grow and succeed in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-secondary transition-colors duration-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-secondary transition-colors duration-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-secondary transition-colors duration-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-secondary/30">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-secondary">
              © {new Date().getFullYear()} Kinwits. All rights reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <a href="#" className="text-sm text-secondary transition-colors duration-300 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary transition-colors duration-300 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
