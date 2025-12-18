"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#intro', label: 'EM베스트 소개' },
    { href: '#benefits', label: '입점 혜택' },
    { href: '#cases', label: '체험단 효과' },
    { href: '#pricing', label: '가격 안내' },
    { href: '#partners', label: '파트너사' },
    { href: '#faq', label: 'FAQ' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // 헤더 높이 보정
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'shadow-sm py-3'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/embest-logo.png"
                  alt="EM베스트 로고"
                  width={120}
                  height={40}
                  className="h-auto"
                />
                <span className="hidden lg:inline-block text-sm font-medium ml-3 text-gray-600">
                  네이버 대표 FPS 장비 카페
                </span>
              </Link>
            </div>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="hidden sm:inline-block bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-all cursor-pointer"
              >
                입점 문의하기
              </a>

              {/* 모바일 메뉴 버튼 */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 -mr-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px]"
                aria-label="메뉴 열기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-[150] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsMenuOpen(false)}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-[160] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`} onClick={(e) => e.stopPropagation()}>
          <div className="p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="메뉴 닫기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-8">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="block w-full bg-primary text-white text-center px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all cursor-pointer"
                >
                  입점 문의하기
                </a>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>문의 이메일</p>
                <a href="mailto:qkrwodud30@naver.com" className="text-primary hover:underline">
                  qkrwodud30@naver.com
                </a>
              </div>

              <div className="mt-6 text-center">
                <a href="https://cafe.naver.com/embestc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-gray-600 hover:text-primary">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 8h-2V5h2v3m0-5H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z" />
                  </svg>
                  카페 방문하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;