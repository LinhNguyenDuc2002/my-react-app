import { useQuery } from '@tanstack/react-query';

const get = async () => {
  const response = await fetch('https://api.example.com/data'); // Thay đổi URL cho API của bạn
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const { data, error, isLoading } = useQuery(['data'], get);