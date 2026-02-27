import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Sprout, Users, Heart, Truck } from 'lucide-react';
import heroFarm from '@/assets/hero-farm.png';

const Brochure = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">{t('brochure')}</h1>
          <p className="text-muted-foreground">Learn everything about KrishiConnect</p>
        </div>

        {/* Digital Brochure */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-farm">
          <div className="relative h-48">
            <img src={heroFarm} alt="Farm" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-hero-gradient flex items-center justify-center">
              <div className="text-center">
                <Sprout className="h-12 w-12 text-primary-foreground mx-auto mb-2" />
                <h2 className="font-display text-3xl font-bold text-primary-foreground">KrishiConnect</h2>
                <p className="text-primary-foreground/80">Smart Agriculture Platform</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: 'For Farmers', desc: 'Register your farm, list crops, and receive funding directly.' },
                { icon: Heart, title: 'For Donors', desc: 'Fund farming projects and get farm-fresh products as rewards.' },
                { icon: Truck, title: 'For Customers', desc: 'Buy fresh produce directly from farmers at fair prices.' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" /> Download Brochure (PDF)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
