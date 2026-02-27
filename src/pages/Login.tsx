import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Sprout } from 'lucide-react';

const Login = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    toast({ title: 'Login feature', description: 'Backend authentication coming soon!' });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Sprout className="h-12 w-12 text-primary mx-auto mb-3" />
          <h1 className="font-display text-3xl font-bold">{t('login')}</h1>
        </div>
        <form onSubmit={handleLogin} className="bg-card rounded-2xl p-8 border border-border shadow-farm space-y-4">
          <Input type="email" placeholder={t('contactEmail')} value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} required />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={128} required />
          <Button type="submit" className="w-full" size="lg">{t('login')}</Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <Link to="/signup" className="text-primary font-semibold hover:underline">{t('signup')}</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
