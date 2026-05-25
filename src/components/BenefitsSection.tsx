import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: '정확한 타겟 마케팅',
      description: 'FPS 게이밍 기어에 관심있는 15만 실구매층에게 직접 도달',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlight: '타겟 정확도 95%'
    },
    {
      title: '다채널 통합 마케팅',
      description: '카페, 유튜브, 인스타, 블로그를 통한 시너지 효과',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      highlight: '4개 채널 동시 운영'
    },
    {
      title: '실시간 피드백',
      description: '실제 사용자들의 진솔한 의견과 개선 제안 수렴',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      highlight: '24시간 내 응답'
    },
    {
      title: '합리적인 비용',
      description: '대행사 대비 90% 절감된 비용으로 높은 ROI 실현',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlight: '월 30만원'
    },
    {
      title: '전문 체험단 운영',
      description: '신뢰도 높은 리뷰어들의 전문적인 제품 분석',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      highlight: '15만+ 리뷰어 풀'
    },
    {
      title: '브랜드 인지도 상승',
      description: '지속적인 노출로 장기적인 브랜드 가치 구축',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      highlight: '평균 인지도 156% ↑'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: '입점 신청',
      description: '원하는 패키지 선택 및 신청서 제출'
    },
    {
      step: 2,
      title: '상담 진행',
      description: '담당자와 맞춤형 마케팅 전략 수립'
    },
    {
      step: 3,
      title: '계약 체결',
      description: '계약서 작성 및 입점 준비'
    },
    {
      step: 4,
      title: '마케팅 시작',
      description: '카페 입점 및 마케팅 활동 개시'
    }
  ];

  return (
    <section id="benefits" className="container-custom">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">EM베스트</span>만의<br />
            특별한 혜택
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            입점 파트너사에게만 제공되는 독점 혜택을 확인하세요
          </p>
        </div>

        {/* 주요 혜택 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  {benefit.icon}
                </div>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {benefit.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* 프로세스 */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            간단한 입점 프로세스
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-2rem)] w-8">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 콘텐츠 마케팅 상세 설명 */}
        <div id="content-marketing-detail" className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-primary">분기별 콘텐츠 마케팅</span>이란?
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* 채널 영향력 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  채널 영향력
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">카페 회원</span>
                    <span className="font-bold text-2xl text-primary">15만+</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">월간 페이지뷰</span>
                    <div className="text-right">
                      <span className="font-bold text-2xl text-primary">150만+</span>
                      <p className="text-xs text-gray-500 mt-1">(실측 기준)</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">유튜브 구독자</span>
                    <span className="font-bold text-2xl text-primary">1.12만+</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">인스타그램 팔로워</span>
                    <span className="font-bold text-2xl text-primary">7.1천+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">블로그 등급</span>
                    <span className="font-bold text-2xl text-primary">최적화 2+</span>
                  </div>
                </div>
              </div>

              {/* 제공 프로세스 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  제공 프로세스
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-semibold mb-1">제품 전달</h5>
                      <p className="text-sm text-gray-600">전문 리뷰어에게 제품 전달</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-semibold mb-1">콘텐츠 제작</h5>
                      <p className="text-sm text-gray-600">고품질 영상 및 이미지 제작</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-semibold mb-1">멀티채널 배포</h5>
                      <p className="text-sm text-gray-600">유튜브, 인스타, 블로그, 카페 동시 업로드</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">4</div>
                    <div>
                      <h5 className="font-semibold mb-1">피드백 수집</h5>
                      <p className="text-sm text-gray-600">커뮤니티 반응 및 의견 정리</p>
                    </div>
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

export default BenefitsSection;