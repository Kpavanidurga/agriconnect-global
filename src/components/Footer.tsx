import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-6 w-6" />
              <span className="font-display text-xl font-bold">KrishiConnect</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">{t('home')}</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">{t('about')}</Link></li>
              <li><Link to="/products" className="hover:text-primary-foreground transition-colors">{t('products')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/register" className="hover:text-primary-foreground transition-colors">{t('farmerReg')}</Link></li>
              <li><Link to="/register" className="hover:text-primary-foreground transition-colors">{t('customerReg')}</Link></li>
              <li><Link to="/register" className="hover:text-primary-foreground transition-colors">{t('donorReg')}</Link></li>
              <li><Link to="/coupons" className="hover:text-primary-foreground transition-colors">{t('coupons')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t('contact')}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@krishiconnect.in</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Hyderabad, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          © 2026 KrishiConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
