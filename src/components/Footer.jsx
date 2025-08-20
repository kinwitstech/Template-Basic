import { GlobeAltIcon } from '@heroicons/react/24/outline'

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
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="mb-4 text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary/90 to-accent/90">
              Kinwits
            </h3>
            <p className="max-w-md mb-6 font-serif text-neutral-content">
              Transform your digital presence with our innovative solutions. 
              We help businesses grow and succeed in the digital age.
            </p>
          </div>

          {/* Company Links */}
          <div className="order-1 md:order-1">
            <h4 className="mb-4 text-lg font-serif font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-serif text-neutral-content/70 transition-colors duration-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="order-2 md:order-3">
            <h4 className="mb-4 text-lg font-serif font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-serif text-neutral-content/70 transition-colors duration-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="order-3 md:order-2">
            <h4 className="mb-4 text-lg font-serif font-semibold">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-serif text-neutral-content/70 transition-colors duration-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-info-content/50">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm font-serif text-neutral-content/70">
              © {new Date().getFullYear()} Kinwits. All rights reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <a href="#" className="text-sm font-serif text-neutral-content/70 transition-colors duration-300 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-serif text-neutral-content/70 transition-colors duration-300 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
