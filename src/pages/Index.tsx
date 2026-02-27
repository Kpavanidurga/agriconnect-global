import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Heart, Truck, Brain, Quote } from 'lucide-react';
import heroFarm from '@/assets/hero-farm.png';
import farmerPortrait from '@/assets/farmer-portrait.png';
import productsImg from '@/assets/products-vegetables.png';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroFarm} alt="Smart Farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 font-body leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/donate">
              <Button size="lg" variant="secondary" className="text-base font-semibold shadow-farm">
                {t('heroBtn1')}
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                {t('heroBtn2')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const { t } = useLanguage();
  const features = [
    { icon: Users, title: t('feat1Title'), desc: t('feat1Desc'), color: 'text-primary' },
    { icon: Heart, title: t('feat2Title'), desc: t('feat2Desc'), color: 'text-accent' },
    { icon: Truck, title: t('feat3Title'), desc: t('feat3Desc'), color: 'text-gold' },
    { icon: Brain, title: t('feat4Title'), desc: t('feat4Desc'), color: 'text-leaf' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">{t('featuresTitle')}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-farm transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 ${f.color}`}>
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuotesSection = () => {
  const { t } = useLanguage();
  const quotes = [
    { text: t('quote1'), author: t('quote1Author') },
    { text: t('quote2'), author: t('quote2Author') },
    { text: t('quote3'), author: t('quote3Author') },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">{t('quotesTitle')}</h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-12 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <div key={i} className="bg-card rounded-xl p-8 border border-border relative">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 italic leading-relaxed mb-4">{q.text}</p>
              <p className="text-primary font-semibold text-sm">{q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsPreview = () => {
  const { t } = useLanguage();
  const products = [
    { name: t('vegetables'), price: '₹40/kg', img: productsImg },
    { name: t('fruits'), price: '₹60/kg', img: productsImg },
    { name: t('grains'), price: '₹35/kg', img: productsImg },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">{t('productsTitle')}</h2>
        <p className="text-muted-foreground text-center mb-12">{t('productsSubtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-farm transition-all duration-300 group">
              <div className="overflow-hidden h-48">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="text-primary font-bold text-xl mt-1">{p.price}</p>
                <Link to="/products">
                  <Button className="mt-4 w-full">{t('buyNow')}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{t('aboutTitle')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{t('aboutDesc')}</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-5 border border-border">
                <h4 className="font-display font-semibold text-primary mb-2">{t('mission')}</h4>
                <p className="text-sm text-muted-foreground">{t('missionDesc')}</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h4 className="font-display font-semibold text-accent mb-2">{t('vision')}</h4>
                <p className="text-sm text-muted-foreground">{t('visionDesc')}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-farm">
            <img src={farmerPortrait} alt="Indian Farmer" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => (
  <section className="py-16 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { num: '10,000+', label: 'Farmers' },
          { num: '₹5Cr+', label: 'Funds Raised' },
          { num: '500+', label: 'Donors' },
          { num: '50,000+', label: 'Orders Delivered' },
        ].map((s, i) => (
          <div key={i}>
            <div className="font-display text-3xl md:text-4xl font-bold mb-1">{s.num}</div>
            <div className="text-primary-foreground/70 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <QuotesSection />
      <ProductsPreview />
      <AboutPreview />
    </div>
  );
};

export default Index;
