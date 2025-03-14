import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* 배경 이미지 - FPS 게임 관련 이미지 */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/fps-background.jpg"
          alt="FPS 게임 배경"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-primary">네이버 대표 FPS 장비 카페</span><br />
              EM베스트와 함께<br />
              <span className="text-primary">매출 상승</span>을 경험하세요
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-300 max-w-xl mx-auto lg:mx-0">
              14만 명 이상의 게이머들에게<br />
              당신의 제품을 직접 알리세요
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a 
                href="https://cafe.naver.com/embestc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary flex items-center justify-center py-3 px-6 text-base md:text-lg rounded-lg transition-all hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 8h-2V5h2v3m0-5H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z" />
                </svg>
                EM베스트 카페 바로가기
              </a>
              <Link 
                href="#contact" 
                className="btn-secondary py-3 px-6 text-base md:text-lg rounded-lg transition-all hover:scale-105"
              >
                지금 입점 문의하기
              </Link>
              <Link 
                href="#benefits" 
                className="btn-outline py-3 px-6 text-base md:text-lg rounded-lg border-2 border-gray-400 hover:border-white transition-all hover:scale-105"
              >
                혜택 알아보기
              </Link>
            </div>
          </div>
          
          <div className="lg:w-5/12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-5 md:p-8 shadow-2xl max-w-md mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Image 
                  src="/images/embest-logo.png" 
                  alt="EM베스트 로고" 
                  width={200} 
                  height={60}
                  className="w-40 md:w-48 h-auto"
                />
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex items-center bg-black bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all">
                  <div className="bg-primary rounded-full p-3 mr-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">14.7만+</p>
                    <p className="text-gray-300 text-base">활성 카페 회원</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-black bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all">
                  <div className="bg-primary rounded-full p-3 mr-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">월 150만+</p>
                    <p className="text-gray-300 text-base">월간 페이지 뷰</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-black bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all">
                  <div className="bg-primary rounded-full p-3 mr-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">평균 20%+</p>
                    <p className="text-gray-300 text-base">매출 상승률</p>
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
