import React from 'react';
import Link from 'next/link';

const stats = [
  { value: '15만 명', suffix: '이상', label: '카페 회원' },
  { value: '150만+', suffix: '', label: '월간 페이지뷰 (실측)' },
  { value: '95%', suffix: '', label: '타겟 정확도' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-900 text-white">
      {/* 배경: 그리드 + 레드/시안 글로우 */}
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[520px] h-[520px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* 상단 태그 */}
          <div className="animate-fade-in mb-8">
            <span className="tag">FPS Gear Community · Since 2011</span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="animate-fade-in delay-100 font-display font-bold leading-[1.1] text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            당신의 제품을
            <br />
            <span className="neon-text">15만 명 넘는</span> 게이머에게
            <br />
            직접 보여주세요
          </h1>

          <p className="animate-fade-in delay-200 mt-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
            EM베스트는 FPS 장비에 진심인 사람들이 모인 네이버 대표 카페입니다.{' '}
            <br className="hidden md:block" />
            스펙을 비교하고 직접 써본 후기를 믿고 구매하는 사람들에게, 가장 정확하게 닿습니다.
          </p>

          {/* CTA */}
          <div className="animate-fade-in delay-300 mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg"
            >
              입점 · 제휴 문의하기
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white border border-white/25 hover:border-primary hover:text-primary transition-colors"
            >
              패키지 · 가격 보기
            </Link>
          </div>

          {/* 핵심 지표 */}
          <div className="animate-fade-in delay-400 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="hud p-6">
                <div className="font-display text-3xl md:text-4xl font-bold text-white">
                  {s.value}
                  {s.suffix && <span className="ml-1 text-xl text-primary">{s.suffix}</span>}
                </div>
                <div className="mt-2 text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>

          {/* 하단 신뢰 지표 */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>네이버 대표 인기카페</span>
            <span className="hidden sm:inline text-white/20">/</span>
            <span>블로그 최적화 2+</span>
            <span className="hidden sm:inline text-white/20">/</span>
            <span>33개 파트너사</span>
            <span className="hidden sm:inline text-white/20">/</span>
            <span>13년+ 운영 (2011년 개설)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
