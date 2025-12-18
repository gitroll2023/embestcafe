"use client";

import React from 'react';
import Image from 'next/image';

const IntroSection = () => {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      number: "14.8만+",
      label: "활성 회원",
      description: "매일 활발하게 소통하는 FPS 게이머들"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      number: "150만+",
      label: "월간 페이지뷰 (실측)",
      description: "지속적으로 증가하는 트래픽"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      number: "8-10%",
      label: "평균 전환율",
      description: "일반 마케팅 대비 3배 이상"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: "90%",
      label: "비용 절감",
      description: "일반 대행사 대비 마케팅 비용"
    }
  ];

  const reasons = [
    {
      title: "정확한 타겟팅",
      description: "FPS 게이밍 기어에 관심있는 실제 구매층에게 직접 도달",
      icon: "🎯"
    },
    {
      title: "진정성 있는 리뷰",
      description: "실제 사용자들의 솔직한 피드백과 개선 의견 수렴",
      icon: "💬"
    },
    {
      title: "다채널 통합 마케팅",
      description: "카페, 유튜브, 인스타, 블로그를 통한 시너지 효과",
      icon: "📱"
    },
    {
      title: "장기적 브랜드 구축",
      description: "일회성 광고가 아닌 지속적인 브랜드 인지도 상승",
      icon: "📈"
    }
  ];

  return (
    <section id="intro" className="container-custom bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            왜 <span className="text-primary">EM베스트</span>인가?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            숫자로 증명하는 EM베스트의 마케팅 파워
          </p>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-medium text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* 중간 섹션 - 왜 EM베스트를 선택해야 하는가 */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 mb-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              일반 마케팅 대행사와의 차이점
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3">❌ 일반 대행사</h4>
                <ul className="text-left space-y-2">
                  <li>• 불특정 다수를 대상으로 한 광고</li>
                  <li>• 높은 비용 (월 200-300만원)</li>
                  <li>• 낮은 전환율 (2-3%)</li>
                  <li>• 일방적인 광고 메시지</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3">✅ EM베스트</h4>
                <ul className="text-left space-y-2">
                  <li>• FPS 게이머 타겟 정밀 마케팅</li>
                  <li>• 합리적인 비용 (월 20-30만원)</li>
                  <li>• 높은 전환율 (8-10%)</li>
                  <li>• 양방향 소통과 피드백</li>
                </ul>
              </div>
            </div>
            <p className="text-lg">
              같은 예산으로 <span className="font-bold text-yellow-300">3배 이상의 효과</span>를 경험하세요
            </p>
          </div>
        </div>

        {/* EM베스트를 선택해야 하는 이유 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            EM베스트만의 특별한 가치
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default IntroSection;