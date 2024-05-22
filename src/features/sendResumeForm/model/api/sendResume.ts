import api from '@/shared/config/api';

export const sendResume = async (data: FormData) => {
  return await api<boolean>('/mail/resume', {
    method: 'POST',
    isJson: true,
    body: data
  });
};
