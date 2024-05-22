import { Suspense } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import AppRouter from '@/shared/providers/router/ui/AppRouter';

import './style/global.scss';

const App = () => {
  return (
    <main>
      <Suspense fallback=''>
        <Header />
        <AppRouter />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
