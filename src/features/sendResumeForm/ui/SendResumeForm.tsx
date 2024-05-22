import { useState } from 'react';

import { type SubmitHandler, useForm } from 'react-hook-form';

import { clsx } from '@/shared/lib/classNames';
import Button, { ButtonFontsEnum } from '@/shared/ui/button/Button';
import { Checkbox } from '@/shared/ui/checkbox';
import { FileInput } from '@/shared/ui/fileInput';
import { Input } from '@/shared/ui/input';
import Text, { FontsEnum } from '@/shared/ui/typography';

import { sendResume } from '../model/api/sendResume';
import type { CandidateModel } from '../model/types';

import styles from './sendResumeForm.module.scss';

interface SendResumeFormProps {
  className?: string;
}

export const SendResumeForm = ({ className }: SendResumeFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors
  } = useForm<CandidateModel>({
    mode: 'onChange'
  });
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onHandleSubmit: SubmitHandler<CandidateModel> = async (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('resume', data.resume[0], data.resume[0].name);

    try {
      setIsLoading(true);
      await sendResume(formData);
      setSuccess(true);
    } catch (e) {
      setError('root', { message: 'Ошибка отправки' });
    } finally {
      setIsLoading(false);
    }
  };

  const onHandleErrorFile = () => {
    setError('isApprove', { message: 'Нет файла' });
  };

  const onClearErrorFile = () => {
    clearErrors('resume');
  };

  return (
    <form
      className={clsx(className, styles.sendResumeForm)}
      onSubmit={handleSubmit(onHandleSubmit)}
      encType='multipart/form-data'
    >
      <div className={styles.dataSearcher}>
        <Input
          className={styles.name}
          placeholder='ВАШЕ ИМЯ'
          error={errors?.name?.message}
          {...register('name', {
            required: 'Поле должно быть заполнено'
          })}
        />

        <Input
          className={styles.mail}
          type='email'
          placeholder='ВАША ПОЧТА'
          error={errors?.email?.message}
          {...register('email', {
            pattern: {
              message: 'Пожалуйста, введите свою почту',
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            },
            required: 'Поле должно быть заполнено'
          })}
        />
      </div>

      <FileInput
        title='Прикрепить резюме, до 2мб'
        className={styles.fileInput}
        error={Boolean(errors?.resume)}
        onError={onHandleErrorFile}
        onErrorClear={onClearErrorFile}
        maxSize={2_097_152}
        {...register('resume', { required: true })}
      />

      <Checkbox
        className={styles.checkboxWrapper}
        text='Подтверждаю свое ознакомление и согласие на обработку моих персональных данных'
        {...register('isApprove', {
          required: true
        })}
        error={Boolean(errors.isApprove)}
      />

      {isSuccess ? (
        <Text variant={FontsEnum.MEDIUM} className={styles.successSendResumeText}>
          Спасибо, мы рассмотрим вашу кандидатуру
        </Text>
      ) : (
        <Button
          font={ButtonFontsEnum.MEDIUM}
          className={styles.submitButton}
          type='submit'
          error={Boolean(errors.root)}
          disabled={isLoading}
        >
          {isLoading ? 'Отправка данных...' : 'Оставить заявку'}
        </Button>
      )}
    </form>
  );
};
