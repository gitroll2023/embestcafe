import React from 'react';
import Link from 'next/link';

const PricingSection = () => {
  const plans = [
    {
      name: '베이직',
      price: '10만원',
      description: '최소 3개월부터 진행 가능',
      features: [
        '카페 공식 입점사 등록 및 입점배너 등록(사이트 하이퍼링크)',
        '카페 전용게시판',
        '체험단 모집 공고 지원',
      ],
      notIncluded: [
        '메인 긴 배너 노출',
        '유튜브/인스타/블로그/카페 홍보',
        '카페 상단 타이틀이미지 로고등록',
        '블로그 직접 광고글 등록',
      ],
      recommended: false,
      buttonText: '문의하기',
    },
    {
      name: '스탠다드',
      price: '20만원',
      description: '최소 3개월부터 진행 가능',
      features: [
        '베이직 패키지 모든 혜택',
        '메인 긴 배너 2주 노출(변경불가)',
        '체험단 모집 공고 지원',
        '카페담당 리뷰어에게 물품 전달시, 유튜브/인스타/블로그/카페에 영상 및 홍보 배포',
      ],
      notIncluded: [
        '카페 상단 타이틀이미지 로고등록',
        '블로그 직접 광고글 등록',
        '메인 배너 월간 노출',
      ],
      recommended: true,
      buttonText: '문의하기',
    },
    {
      name: '프리미엄',
      price: '30만원',
      description: '최소 3개월부터 진행 가능',
      features: [
        '스탠다드 패키지 모든 혜택',
        '메인 긴 배너 월간 노출(변경 1회 무료)',
        '체험단 모집 공고 지원',
        '카페 상단에 타이틀이미지에 로고등록',
        '블로그에 직접적인 광고글 1회 등록(최적2+ 블로그라서 직접적 광고글 노출해도 노출잘됨)',
      ],
      notIncluded: [],
      recommended: false,
      buttonText: '문의하기',
    },
  ];

  return (
    <section id="pricing" className="container-custom bg-gray-50">
      <h2 className="section-title">
        <span className="text-primary">요금제</span> 안내
      </h2>
      <p className="section-subtitle">
        귀사의 마케팅 목표와 예산에 맞는 최적의 패키지를 선택하세요
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
              plan.recommended ? 'border-2 border-primary relative' : ''
            }`}
          >
            {plan.recommended && (
              <div className="bg-primary text-white py-1 px-4 text-sm font-bold absolute top-0 right-0 rounded-bl-lg">
                추천
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">/ 월</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <p className="font-medium mb-2">포함 사항:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {plan.notIncluded.length > 0 && (
                <div className="mb-6">
                  <p className="font-medium mb-2">미포함 사항:</p>
                  <ul className="space-y-2">
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-500">
                        <svg className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Link 
                href="#contact" 
                className={`w-full text-center py-3 px-6 rounded-lg font-bold transition-colors ${
                  plan.recommended 
                    ? 'bg-primary text-white hover:bg-opacity-90' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">※ 최소 3개월부터 계약 가능합니다.</p>
     
      </div>
    </section>
  );
};

export default PricingSection;
