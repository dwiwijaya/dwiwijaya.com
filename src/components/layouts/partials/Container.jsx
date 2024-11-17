import { ReactNode } from 'react';
import Overlay from './Overlay';
import { useRouter } from 'next/router';
import Breadcrumbs from './Breadcrumbs';

const Container = ({ children, className = '', ...others }) => {

  const router = useRouter();
  const pageName = router.pathname.split('/')[1];
  const isBlog = router.pathname.startsWith('/blog//');

  return (

    <div className={`main group/main pb-6 p-6 pt-24 h-full ${className}`} {...others}>
      <section className='group-[.sidebar-expanded]/main:blur-[2px]  mx-auto max-w-[1024px]'>
        {isBlog && <Breadcrumbs />}
        {children}
      </section>
    </div>
  );
};

export default Container;
