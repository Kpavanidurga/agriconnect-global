import { useLanguage } from '@/contexts/LanguageContext';
import farmerPortrait from '@/assets/farmer-portrait.png';
import heroFarm from '@/assets/hero-farm.png';

const About = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroFarm} alt="Farm" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">{t('aboutTitle')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">{t('aboutDesc')}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src={farmerPortrait} alt="Farmer" className="rounded-2xl shadow-farm w-full h-[400px] object-cover" />
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-3">{t('mission')}</h3>
              <p className="text-muted-foreground">{t('missionDesc')}</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-xl font-bold text-accent mb-3">{t('vision')}</h3>
              <p className="text-muted-foreground">{t('visionDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-8">Watch Our Story</h2>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-farm aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="KrishiConnect Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
