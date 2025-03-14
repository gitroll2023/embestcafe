import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/embest-logo.png" 
              alt="EM베스트 로고" 
              width={120} 
              height={40}
              className="mr-2"
            />
            <span className="hidden md:inline-block text-sm font-medium ml-2">네이버 대표 FPS 장비 카페</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#intro" className="text-gray-700 hover:text-primary transition-colors">
            카페소개
          </Link>
          <Link href="#benefits" className="text-gray-700 hover:text-primary transition-colors">
            입점혜택
          </Link>
          <Link href="#cases" className="text-gray-700 hover:text-primary transition-colors">
            성공사례
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
            요금안내
          </Link>
        </nav>
        
        <Link href="#contact" className="btn-primary text-sm">
          입점 문의하기
        </Link>
      </div>
    </header>
  );
};

export default Header;
