import Link from "next/link";
import { companyName, footer, navLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
              {companyName}
            </h2>
            <p className="text-background/70 max-w-sm text-sm">
              Precision manufacturing and global export solutions for the world&apos;s leading apparel brands.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase tracking-widest text-xs mb-6 text-background/50">Navigation</h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium hover:text-white transition-colors relative group w-fit">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase tracking-widest text-xs mb-6 text-background/50">Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-background/80">
              <li>{footer.contact.email}</li>
              <li>{footer.contact.phone}</li>
              <li>{footer.contact.location}</li>
              <li className="pt-4 flex gap-4">
                <a href={`https://${footer.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href={`https://instagram.com/${footer.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
