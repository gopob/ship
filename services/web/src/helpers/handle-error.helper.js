import { showNotification } from '@mantine/notifications';

export default function handleError(e, setError) {
  const { errors: { global, ...errors } } = e.data;

  if (global) showNotification(global);

  if (setError) {
    Object.keys(errors).forEach((key) => {
      const message = errors[key].join(' ');

      setError(key, { message }, { shouldFocus: true });
    });
  }
}
