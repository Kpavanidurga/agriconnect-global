import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Sprout } from 'lucide-react';

const Signup = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast({ title: 'Error', description: 'Passwords do not match', variant: 'destructive' });
      return;
    }
    toast({ title: 'Signup feature', description: 'Backend authentication coming soon!' });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Sprout className="h-12 w-12 text-primary mx-auto mb-3" />
          <h1 className="font-display text-3xl font-bold">{t('signup')}</h1>
        </div>
        <form onSubmit={handleSignup} className="bg-card rounded-2xl p-8 border border-border shadow-farm space-y-4">
          <Input placeholder={t('fullName')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
          <Input type="email" placeholder={t('contactEmail')} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
          <Input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} maxLength={128} required />
          <Input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} maxLength={128} required />
          <Button type="submit" className="w-full" size="lg">{t('signup')}</Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline">{t('login')}</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
