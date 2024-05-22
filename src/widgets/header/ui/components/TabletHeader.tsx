import { NavLink } from 'react-router-dom';

import { routes } from '@/shared/config/routes/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import Text, { FontsEnum } from '@/shared/ui/typography';

import styles from '../header.module.scss';

interface TabletHeaderProps {
  onClickAnchor: () => void;
  isMobileOpen: boolean;
}

export const TabletHeader = ({ onClickAnchor, isMobileOpen }: TabletHeaderProps) => {
  return (
    <div className={clsx(styles.overlay, { [styles.overlayOpacity]: isMobileOpen })}>
      <div className={clsx(styles.tabletMenuBlock, { [styles.tabletMenuAnim]: isMobileOpen })}>
        <div className={styles.menuBLock}>
          {routes.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={clsx(styles['nav-list-item'], styles.menuBlockText)}
              onClick={onClickAnchor}
            >
              {name}
            </NavLink>
          ))}
        </div>

        <div className={styles.conatctBlock}>
          <div>
            <a href='tel:+73519330151'>
              <Text variant={FontsEnum.LIGHT} className={clsx(styles.contentText, styles.noWrap)}>
                +7 (3519) 33-01-51
              </Text>
            </a>

            <a href='mailto:mail@rnd-mgn.ru'>
              <Text variant={FontsEnum.LIGHT} className={clsx(styles.contentText, styles.noWrap)}>
                mail@rnd-mgn.ru
              </Text>
            </a>
          </div>

          <div>
            <Text variant={FontsEnum.LIGHT} className={styles.aboutWorkText}>
              Работаем с 2018 года
            </Text>
            <Text variant={FontsEnum.LIGHT} className={styles.aboutWorkText}>
              8:30 по 17:30 понедельник - пятница
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
