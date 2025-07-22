import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAgMHYySDJ2LTJoMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
      
      {/* 애니메이션 배경 요소 */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* 상단 배지 */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-6 py-3 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">14.7만 게이머가 선택한 No.1 FPS 커뮤니티</span>
            </div>
          </div>
          
          {/* 메인 타이틀 */}
          <div className="text-center mb-12 animate-fade-in delay-100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              당신의 제품을<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                14.7만 타겟 고객
              </span>에게<br />
              직접 전달하세요
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              EM베스트는 FPS 게이밍 기어에 관심있는 고객들이 모인<br className="hidden md:block" />
              국내 최대 규모의 전문 커뮤니티입니다
            </p>
          </div>
          
          {/* 핵심 지표 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 animate-fade-in delay-200">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">14.7만+</div>
              <div className="text-gray-400">활성 회원</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">150만+</div>
              <div className="text-gray-400">월간 페이지뷰</div>
              <div className="text-xs text-gray-500 mt-1">(실측 기준)</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-400">타겟 정확도</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">8-10%</div>
              <div className="text-gray-400">평균 전환율</div>
            </div>
          </div>
          
          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            <Link 
              href="#pricing" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-primary/80 rounded-full overflow-hidden shadow-xl hover:shadow-primary/25 transition-all hover:scale-105"
            >
              <span className="relative z-10">입점 패키지 보기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <a 
              href="https://cafe.naver.com/embestc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              카페 둘러보기
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          {/* 하단 신뢰 지표 */}
          <div className="mt-16 text-center animate-fade-in delay-400">
            <p className="text-gray-400 mb-4">신뢰할 수 있는 파트너</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-60">
              <div className="text-sm text-gray-300">네이버 공식 카페</div>
              <div className="w-1 h-4 bg-gray-600 hidden sm:block"></div>
              <div className="text-sm text-gray-300">최적화 2+ 블로그</div>
              <div className="w-1 h-4 bg-gray-600 hidden sm:block"></div>
              <div className="text-sm text-gray-300">33개 파트너사</div>
              <div className="w-1 h-4 bg-gray-600 hidden sm:block"></div>
              <div className="text-sm text-gray-300">13년+ 운영 (2011년 개설)</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;