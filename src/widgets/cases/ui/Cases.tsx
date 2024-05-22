import { useNavigate } from 'react-router-dom';

import { CaseCard } from '@/entities/case';

import { Arrow } from '@/shared/assets/icons/Arrow';
import { DATA_CASES } from '@/shared/config/cases';
import { routePath } from '@/shared/config/routes/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import Button, { ButtonVariantsEnum } from '@/shared/ui/button/Button';
import { Container } from '@/shared/ui/container';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './cases.module.scss';

const CASES = Object.entries(DATA_CASES);

interface CasesProps {
  isColumn?: boolean;
  countVisibleItems?: number;
}

export const Cases = ({ isColumn = false, countVisibleItems }: CasesProps) => {
  const visibleItems = countVisibleItems ? CASES.slice(0, countVisibleItems) : CASES;
  const navigate = useNavigate();

  const handleClickAllCases = () => {
    navigate(routePath.case);
  };

  const handleSingleCase = (id: string) => () => {
    window.scrollTo({
      top: 0
    });
    navigate(routePath.case + `/${id}`);
  };

  return (
    <Container isOffLayout={!isColumn}>
      <div className={style.title}>
        <Arrow className={style.icon} />

        <Text variant={FontsEnum.MEDIUM}>кейсы</Text>
      </div>

      <div>
        <div className={isColumn ? style.caseColumnContainer : style.caseContainer}>
          {visibleItems.map(([id, data]) => (
            <CaseCard
              key={data.title}
              data={data}
              className={clsx(style.case, { [style.caseColumn]: isColumn })}
              onClick={handleSingleCase(id)}
            />
          ))}
        </div>

        {Boolean(countVisibleItems) && (
          <Button
            variant={ButtonVariantsEnum.PRIMARY}
            className={style.button}
            onClick={handleClickAllCases}
          >
            ПОСМОТРЕТЬ ВСЕ
          </Button>
        )}
      </div>
    </Container>
  );
};
