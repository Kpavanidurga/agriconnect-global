import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, languageNames, Language } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [listening, setListening] = useState(false);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/products', label: t('products') },
    { to: '/donate', label: t('donate') },
    { to: '/contact', label: t('contact') },
    { to: '/brochure', label: t('brochure') },
  ];

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Voice search is not supported in this browser.');
      return;
    }
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : lang === 'ta' ? 'ta-IN' : lang === 'ml' ? 'ml-IN' : lang === 'kn' ? 'kn-IN' : 'en-US';
    recognition.interimResults = false;
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      alert(`You said: "${transcript}"`);
    };
    recognition.start();
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="KrishiConnect Logo" className="w-10 h-10 rounded-lg" />
          <span className="font-display text-xl font-bold text-primary">KrishiConnect</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Voice Search */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleVoiceSearch}
            className={listening ? 'text-destructive animate-pulse' : 'text-muted-foreground'}
            title={t('voiceSearch')}
          >
            {listening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary px-3 py-1.5 rounded-md border border-border"
            >
              {languageNames[lang]}
              <ChevronDown className="h-4 w-4" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg shadow-lg py-1 min-w-[140px]">
                {(Object.keys(languageNames) as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted ${l === lang ? 'text-primary font-semibold' : 'text-foreground/70'}`}
                  >
                    {languageNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/login">
            <Button variant="ghost" size="sm">{t('login')}</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">{t('signup')}</Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-sm font-medium text-foreground/70 hover:text-primary py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2 flex-wrap">
            {(Object.keys(languageNames) as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); }}
                className={`text-xs px-2 py-1 rounded border ${l === lang ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-foreground/70'}`}
              >
                {languageNames[l]}
              </button>
            ))}
          </div>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="icon" onClick={handleVoiceSearch}>
              {listening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="ghost" size="sm">{t('login')}</Button>
            </Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)}>
              <Button size="sm">{t('signup')}</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
