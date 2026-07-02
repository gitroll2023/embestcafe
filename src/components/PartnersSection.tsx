"use client";

import React from 'react';

const PartnersSection = () => {

  const reasons = [
    {
      icon: '🎯',
      title: '정확한 타겟 마케팅',
      description: 'FPS 게임 특화 커뮤니티로 구매력 높은 핵심 타겟에게 직접 도달'
    },
    {
      icon: '💰',
      title: '비용 대비 높은 효율',
      description: '일반 대행사 대비 90% 비용 절감으로 ROI 극대화'
    },
    {
      icon: '📈',
      title: '검증된 성과',
      description: '체험단 리뷰 완료율 96% 달성'
    },
    {
      icon: '🤝',
      title: '지속적인 파트너십',
      description: '단순 광고가 아닌 커뮤니티와 함께 성장하는 브랜드 구축'
    }
  ];


  return (
    <section id="partners" className="container-custom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">수많은 파트너사</span>가 선택한 이유
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            글로벌 브랜드부터 신생 브랜드까지, EM베스트를 선택한 이유가 있습니다
          </p>
        </div>

        {/* 선택 이유 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 파트너사 로고 그리드 */}
        {/* 파트너사 로고 그리드 대체 텍스트 */}
        <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-6">함께하는 파트너사</h3>
          <p className="text-lg text-gray-600 mb-8">
            파트너사 현황은 지속적으로 업데이트되므로,<br className="hidden md:block" />
            가장 정확한 최신 파트너사 정보는 공식 카페에서 확인하실 수 있습니다.
          </p>
          <a
            href="https://cafe.naver.com/embestc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:text-primary transition-all shadow-sm hover:shadow-md"
          >
            카페에서 파트너사 확인하기
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>


        {/* 파트너사 혜택 */}
        <div className="mb-20 bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">EM베스트 파트너사 지원 서비스</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-5xl mb-4">🎁</div>
                <h4 className="font-bold mb-2">맞춤형 컨설팅</h4>
                <p className="text-sm opacity-90">브랜드별 최적화 전략 제공</p>
              </div>
              <div>
                <div className="text-5xl mb-4">📊</div>
                <h4 className="font-bold mb-2">상세 리포트</h4>
                <p className="text-sm opacity-90">월별 성과 분석 리포트 제공</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🚀</div>
                <h4 className="font-bold mb-2">우선 지원</h4>
                <p className="text-sm opacity-90">신규 서비스 우선 이용 기회</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-3xl p-12 inline-block">
            <h3 className="text-2xl font-bold mb-4">
              다음 성공 사례의 주인공이 되어보세요
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              검증된 파트너사가 선택한 EM베스트와 함께<br />
              귀사의 브랜드 가치를 높여보세요
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const rect = contactSection.getBoundingClientRect();
                  const absoluteTop = window.pageYOffset + rect.top;
                  window.scrollTo({
                    top: absoluteTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              파트너십 문의하기
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;