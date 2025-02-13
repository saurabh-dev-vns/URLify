import { UrlData } from '../types/url';

export const saveUrl = (urlData: UrlData): void => {
  const urls = getUrls();
  urls.push(urlData);
  localStorage.setItem('shortUrls', JSON.stringify(urls));
};

export const getUrls = (): UrlData[] => {
  const urls = localStorage.getItem('shortUrls');
  return urls ? JSON.parse(urls) : [];
};

export const incrementClicks = (id: string): void => {
  const urls = getUrls();
  const updatedUrls = urls.map((url) =>
    url.id === id ? { ...url, clicks: url.clicks + 1 } : url
  );
  localStorage.setItem('shortUrls', JSON.stringify(updatedUrls));
};

export const deleteUrl = (id: string): void => {
  const urls = getUrls();
  const updatedUrls = urls.filter((url) => url.id !== id);
  localStorage.setItem('shortUrls', JSON.stringify(updatedUrls));
}
