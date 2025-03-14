import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* 배경 이미지 - FPS 게임 관련 이미지 */}
      <div className="absolute inset-0 opacity-40 sm:opacity-30">
        <Image
          src="/images/fps-background.jpg"
          alt="FPS 게임 배경"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* 모바일에서 더 강한 블러 효과 */}
      <div className="absolute inset-0 backdrop-blur-sm sm:backdrop-blur-none"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 mt-16 sm:mt-20 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left pt-8 md:pt-0">
            <div className="inline-block bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-primary font-medium">네이버 대표 FPS 장비 카페</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">EM베스트</span>와<br />
              함께 성장하세요
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              14만 게이머들에게 당신의 제품을 알리고 매출 상승을 경험하세요
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="https://cafe.naver.com/embestc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary flex items-center justify-center py-3 px-6 rounded-lg transition-all hover:scale-105"
              >
                카페 방문하기
              </a>
              <Link 
                href="#contact" 
                className="btn-secondary py-3 px-6 rounded-lg transition-all hover:scale-105"
              >
                입점 문의
              </Link>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl"></div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 relative z-10">
              <div className="flex justify-center mb-8">
                <Image 
                  src="/images/embest-logo.png" 
                  alt="EM베스트 로고" 
                  width={180} 
                  height={60}
                  className="h-auto invert"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-black/30 to-black/10 backdrop-blur-sm hover:from-black/40 hover:to-black/20 transition-all">
                  <div className="bg-primary rounded-full p-3 mr-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-2xl">14.7만+</p>
                    <p className="text-gray-300">활성 카페 회원</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-black/30 to-black/10 backdrop-blur-sm hover:from-black/40 hover:to-black/20 transition-all">
                  <div className="bg-primary rounded-full p-3 mr-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-2xl">월 150만+</p>
                    <p className="text-gray-300">월간 페이지 뷰</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-black/30 to-black/10 backdrop-blur-sm hover:from-black/40 hover:to-black/20 transition-all">
                  <div className="bg-primary rounded-full p-3 mr-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-2xl">평균 20%+</p>
                    <p className="text-gray-300">매출 상승률</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
