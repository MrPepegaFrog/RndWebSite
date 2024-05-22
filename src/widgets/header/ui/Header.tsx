import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Logo } from '@/shared/assets/icons/Logo';
import { routePath, routes } from '@/shared/config/routes/routeConfig';
import { useDevice } from '@/shared/hooks/useDevice';
import { clsx } from '@/shared/lib/classNames';
import { Portal } from '@/shared/ui/portal';
import Text, { FontsEnum } from '@/shared/ui/typography';

import { TabletHeader } from './components/TabletHeader';

import styles from './header.module.scss';

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isSmallTablet, isShowTabletHeader } = useDevice();

  const openMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
    document.body.classList.toggle('NoScroll');
  };

  const onClickAnchor = () => {
    setIsMobileOpen(false);
    document.body.classList.remove('NoScroll');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to={routePath.main} className={styles.logoWrapper}>
          <Logo className={styles.logo} />
        </NavLink>

        <div className={styles.hrefs}>
          {routes.map(({ name, path }) => (
            <NavLink key={name} to={path} className={styles['nav-list-item']}>
              <Text>{name}</Text>
            </NavLink>
          ))}
        </div>
      </nav>

      <div
        className={clsx(styles.menu, { [styles.menuLineActive]: isMobileOpen })}
        onClick={openMobileMenu}
      >
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
      </div>

      {isShowTabletHeader && (
        <Portal>
          <TabletHeader isMobileOpen={isMobileOpen} onClickAnchor={onClickAnchor} />
        </Portal>
      )}

      {isSmallTablet && (
        <Portal>
          <div className={clsx(styles.mobileMenu, { [styles.mobileMenuAnim]: isMobileOpen })}>
            <div className={styles.mobileMenuBlock}>
              {routes.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={styles['mobileMenuList-item']}
                  onClick={onClickAnchor}
                >
                  <Text variant={FontsEnum.REGULAR} className={styles.menuBlockText}>
                    {name}
                  </Text>
                </NavLink>
              ))}

              <div className={styles.mobileContactBlock}>
                <a href='tel:+73519330151'>
                  <Text
                    variant={FontsEnum.LIGHT}
                    className={clsx(styles.mobileContentText, styles.noWrap)}
                  >
                    +7 (3519) 33-01-51
                  </Text>
                </a>

                <a href='mailto:mail@rnd-mgn.ru'>
                  <Text
                    variant={FontsEnum.LIGHT}
                    className={clsx(styles.mobileContentText, styles.noWrap)}
                  >
                    mail@rnd-mgn.ru
                  </Text>
                </a>
              </div>

              <div className={styles.mobileAdressContainer}>
                <Text variant={FontsEnum.LIGHT} className={styles.mobileAboutText}>
                  г. Магнитогорск
                </Text>

                <Text variant={FontsEnum.LIGHT} className={styles.mobileAboutText}>
                  ул. Ленинградская 79 корп. 14
                </Text>
              </div>

              <div className={styles.mobileAboutWorkContainer}>
                <Text variant={FontsEnum.LIGHT} className={styles.mobileAboutText}>
                  работаем с 2018 года
                </Text>
                <Text variant={FontsEnum.LIGHT} className={styles.mobileAboutText}>
                  8:30 по 17:30 понедельник - пятница
                </Text>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </header>
  );
};
