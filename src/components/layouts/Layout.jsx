import React from 'react'
import Sidebar from './partials/Sidebar'
import Overlay from './partials/Overlay'
import { useRouter } from 'next/router';
import BlogSidebar from './partials/BlogSidebar';

const Layout = ({ lastUpdate, children }) => {
    const router = useRouter();
  const pageName = router.pathname.split('/')[1];

  const isBlog = pageName === 'blog' || router.pathname.startsWith('/blog/') ;
    return (
        <>
            {isBlog ? <BlogSidebar lastUpdate={lastUpdate}/> :  <Sidebar lastUpdate={lastUpdate}/>}
            <div className='group/main main ml-0 lg:ml-64 '>
                <Overlay />
                {children}
            </div>
        </>
    )
}

export default Layout