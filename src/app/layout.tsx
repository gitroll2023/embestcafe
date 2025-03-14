import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'EM베스트 | 네이버 대표 FPS 장비 카페',
  description: '네이버 대표 FPS 장비 카페 EM베스트에서 제공하는 마케팅 서비스로 스마트스토어 판매를 강화하세요.',
  keywords: 'FPS 장비 입점, FPS 카페 마케팅, 게이머 타겟팅, 스마트스토어 마케팅, EM베스트',
  metadataBase: new URL('http://embest-ads.kro.kr/'),
  openGraph: {
    title: 'EM베스트 | 네이버 대표 FPS 장비 카페',
    description: '네이버 대표 FPS 장비 카페 EM베스트에서 제공하는 마케팅 서비스로 스마트스토어 판매를 강화하세요.',
    url: 'http://embest-ads.kro.kr/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              style: {
                background: '#4CAF50',
              },
            },
            error: {
              style: {
                background: '#F44336',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
