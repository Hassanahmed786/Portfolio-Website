import { FormData } from '../types/contact';

export const createGmailComposeUrl = (data: FormData): string => {
  const subject = encodeURIComponent(data.subject);
  const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
  `);
  
  return `https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com&subject=${subject}&body=${body}`;
};

export const createMailtoUrl = (data: FormData): string => {
  const subject = encodeURIComponent(data.subject);
  const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
  `);
  
  return `mailto:your.email@example.com?subject=${subject}&body=${body}`;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy text:', error);
    return false;
  }
};