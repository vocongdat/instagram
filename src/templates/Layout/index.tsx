import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  // const dispatch = useDispatch();

  // const setIsAppLoading = useCallback((value: boolean) => dispatch(updateIsAppLoading(value)), [dispatch]);

  // useEffect(() => {
  //   const routeChangeStart = (url: string) => {
  //     const languageOfNewRoute = url === '/en' || url.includes('/en/') ? ELanguage.EN : ELanguage.JP;

  //     if (currentUser && userSetting.language !== languageOfNewRoute) {
  //       const replacePath =
  //         languageOfNewRoute === ELanguage.EN ? url.replace('/en', url === '/en' ? '/' : '') : `/en${url}`;

  //       void router.replace(replacePath, undefined, {
  //         locale: userSetting.language === ELanguage.EN ? 'en' : 'ja',
  //         scroll: false,
  //       });
  //     }
  //   };

  //   router.events.on('routeChangeStart', routeChangeStart);

  //   return () => {
  //     router.events.off('routeChangeStart', routeChangeStart);
  //   };
  // }, [router, userSetting.language, currentUser]);

  return (
    <div className="flex min-h-screen flex-col text-neutral-900">
      <main className="flex-1 bg-neutral-50 px-4 py-6 md:p-8" id="skip-to-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
