"use client";

import React, { useState } from 'react';

const CaseStudiesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const benefits = [
    {
      icon: '🎯',
      title: '정확한 타겟팅',
      description: 'FPS 게임에 관심 있는 14.7만+ 활성 회원에게 직접 도달',
      stats: '95% 타겟 정확도',
      category: 'targeting'
    },
    {
      icon: '👥',
      title: '검증된 리뷰어',
      description: '활동 이력과 리뷰 품질이 검증된 회원만 체험단 선정',
      stats: '평균 리뷰 품질 4.8/5',
      category: 'quality'
    },
    {
      icon: '📊',
      title: '높은 참여율',
      description: '일반 체험단 대비 3배 높은 참여율과 완료율',
      stats: '96% 리뷰 완료율',
      category: 'engagement'
    },
    {
      icon: '⚡',
      title: '빠른 확산',
      description: '카페 내 자연스러운 바이럴로 빠른 입소문 효과',
      stats: '평균 72시간 내 확산',
      category: 'viral'
    },
    {
      icon: '💬',
      title: '실시간 피드백',
      description: '제품에 대한 솔직한 피드백과 개선 의견 수집',
      stats: '평균 50+ 댓글',
      category: 'feedback'
    },
    {
      icon: '🛡️',
      title: '브랜드 신뢰도',
      description: 'EM베스트 인증으로 브랜드 신뢰도 상승',
      stats: '신뢰도 40% 상승',
      category: 'trust'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: '체험단 모집 공고',
      description: '귀사 제품에 최적화된 체험단 모집 공고를 작성하여 카페에 게시합니다.',
      duration: '1-2일'
    },
    {
      step: '02',
      title: '지원자 심사',
      description: '활동 이력, 리뷰 품질, 전문성을 기준으로 최적의 체험단을 선정합니다.',
      duration: '2-3일'
    },
    {
      step: '03',
      title: '제품 배송',
      description: '선정된 체험단에게 제품을 배송하고 체험 가이드를 제공합니다.',
      duration: '1-2일'
    },
    {
      step: '04',
      title: '리뷰 작성',
      description: '체험단이 실사용 후 상세한 리뷰를 작성하고 카페에 게시합니다.',
      duration: '7-14일'
    },
    {
      step: '05',
      title: '결과 리포트',
      description: '체험단 진행 결과와 피드백을 정리한 리포트를 제공합니다.',
      duration: '2-3일'
    }
  ];

  const comparisonData = [
    {
      feature: '전문 리뷰어 모집',
      emBest: 'FPS 전문 게이머 14.7만+ 풀',
      general: '일반인 위주, 전문성 부족',
      highlight: true
    },
    {
      feature: '운영 관리',
      emBest: 'EM운영팀 전담 관리',
      general: '업체가 직접 관리 필요',
      highlight: true
    },
    {
      feature: '리뷰어 검증',
      emBest: '활동 이력/전문성 사전 검증',
      general: '검증 시스템 없음',
      highlight: false
    },
    {
      feature: '모집 기간',
      emBest: '1-2일 내 빠른 모집',
      general: '1-2주 소요',
      highlight: false
    },
    {
      feature: '리뷰 품질',
      emBest: '게임 장비 전문 리뷰',
      general: '표면적인 리뷰',
      highlight: false
    },
    {
      feature: '커뮤니케이션',
      emBest: '운영팀이 중간 조율',
      general: '개별 연락 필요',
      highlight: false
    },
    {
      feature: '리뷰 관리',
      emBest: '품질 기준 관리 및 피드백',
      general: '관리 시스템 없음',
      highlight: false
    },
    {
      feature: '사후 지원',
      emBest: '추가 홍보 및 확산 지원',
      general: '리뷰 작성 후 종료',
      highlight: false
    }
  ];

  return (
    <section id="cases" className="container-custom bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            EM베스트 <span className="text-primary">체험단</span>의 특별함
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            일반 체험단과는 차원이 다른 효과를 경험하세요
          </p>
        </div>

        {/* 주요 혜택 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg inline-block">
                  {benefit.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EM운영팀 관리 강조 */}
        <div className="mb-20 bg-gradient-to-r from-primary/10 to-blue-100 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-primary">EM운영팀</span>이 모든 과정을 대신 관리합니다
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              체험단 모집부터 리뷰 관리까지, 번거로운 과정은 저희가 맡겠습니다
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-3">📋</div>
                <h4 className="font-bold mb-2">모집 공고 작성</h4>
                <p className="text-sm text-gray-600">제품 특성에 맞는 매력적인 모집 공고 작성</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-bold mb-2">리뷰어 선정/관리</h4>
                <p className="text-sm text-gray-600">전문성 있는 리뷰어 선별 및 일정 조율</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="font-bold mb-2">품질 관리</h4>
                <p className="text-sm text-gray-600">리뷰 품질 확인 및 추가 홍보 진행</p>
              </div>
            </div>
          </div>
        </div>

        {/* 프로세스 */}
        <div className="mb-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">체험단 진행 프로세스</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-primary">{step.step}</span>
                      <span className="text-sm text-gray-500">{step.duration}</span>
                    </div>
                    <h4 className="font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-primary rounded-full -translate-y-1/2 z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 비교 테이블 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8">일반 체험단 vs EM베스트 체험단</h3>
          
          {/* 모바일용 간소화된 비교 */}
          <div className="lg:hidden">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className={`pb-4 ${index < comparisonData.length - 1 ? 'border-b' : ''}`}>
                    <h4 className={`font-semibold mb-2 ${item.highlight ? 'text-primary' : 'text-gray-800'}`}>
                      {item.feature}
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">EM베스트</p>
                        <p className={`${item.highlight ? 'font-semibold text-primary' : 'text-gray-700'}`}>
                          {item.emBest}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">일반 체험단</p>
                        <p className="text-gray-500">
                          {item.general}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 데스크톱용 테이블 */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">비교 항목</th>
                  <th className="px-6 py-4 text-center">EM베스트 체험단</th>
                  <th className="px-6 py-4 text-center">일반 체험단</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 font-medium">{item.feature}</td>
                    <td className={`px-6 py-4 text-center ${item.highlight ? 'font-bold text-primary' : ''}`}>
                      {item.emBest}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">{item.general}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CaseStudiesSection;
