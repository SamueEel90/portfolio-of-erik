import { Instagram, Facebook, Mail } from "lucide-react";


const socialLinks = [
  { href: "https://www.instagram.com/", icon: <Instagram size={22} /> },
  { href: "https://www.facebook.com/", icon: <Facebook size={22} /> },
  { href: "mailto:someone@example.com", icon: <Mail size={22} /> },
];



const SocialIconsMobile:React.FC = () => {
  return (
    <>
      
        {/* Social icons (mobile) */}
          <div className="flex md:hidden flex-row justify-center space-x-6 mt-4">
            {socialLinks.map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300  shadow-md text-secondary hover:text-accent-pink transition-all transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
    </>
  )
}

export default SocialIconsMobile;
