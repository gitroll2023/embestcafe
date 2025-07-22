"use client";

import React from 'react';

interface PlanDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  planType: 'standard' | 'premium';
}

const PlanDetailModal: React.FC<PlanDetailModalProps> = ({ isOpen, onClose, planType }) => {
  if (!isOpen) return null;

  const planDetails = {
    standard: {
      title: '스탠다드 플랜',
      price: '20만원/월',
      originalPrice: '30만원/월',
      description: '기본적인 카페 마케팅을 원하는 업체',
      features: [
        {
          icon: '📢',
          title: '전용 게시판 개설',
          description: '귀사만의 전용 게시판을 개설하여 제품 정보와 소식을 회원들에게 직접 전달합니다.'
        },
        {
          icon: '🎯',
          title: '입점 소형배너 등록',
          description: '카페 메인 페이지에 브랜드 배너를 노출하여 지속적인 브랜드 인지도를 구축합니다.'
        },
        {
          icon: '👥',
          title: '체험단 모집 공고 지원',
          description: '제품 체험단 모집을 위한 공고 작성과 운영을 지원하여 실사용 리뷰를 확보합니다.'
        },
        {
          icon: '🖼️',
          title: '메인 긴 배너 노출',
          description: '카페 메인의 대형 배너 영역에 월 1회 교체 가능한 프로모션 배너를 노출합니다.'
        }
      ],
      benefits: [
        '14.7만+ 활성 회원에게 직접 노출',
        '월 150만+ 페이지뷰 달성',
        'FPS 게임 특화 타겟 마케팅',
        '실시간 피드백 및 리뷰 수집'
      ]
    },
    premium: {
      title: '프리미엄 플랜',
      price: '30만원/월',
      originalPrice: '40만원/월',
      description: '적극적인 브랜드 노출 + 블로그 마케팅을 원하는 업체',
      features: [
        {
          icon: '📢',
          title: '전용 게시판 개설',
          description: '귀사만의 전용 게시판을 개설하여 제품 정보와 소식을 회원들에게 직접 전달합니다.'
        },
        {
          icon: '🎯',
          title: '입점 소형배너 등록',
          description: '카페 메인 페이지에 브랜드 배너를 노출하여 지속적인 브랜드 인지도를 구축합니다.'
        },
        {
          icon: '👥',
          title: '체험단 모집 공고 지원',
          description: '제품 체험단 모집을 위한 공고 작성과 운영을 지원하여 실사용 리뷰를 확보합니다.'
        },
        {
          icon: '⭐',
          title: '카페 상단 타이틀 로고 등록',
          description: '카페 최상단 프리미엄 영역에 브랜드 로고를 상시 노출하여 최대의 주목도를 확보합니다.'
        },
        {
          icon: '🖼️',
          title: '메인 긴 배너 노출 (주 1회 변경)',
          description: '더 자주 업데이트 가능한 메인 배너로 신제품 출시나 이벤트를 즉시 홍보할 수 있습니다.'
        },
        {
          icon: '📝',
          title: 'EM베스트 최적화 블로그 월 2회 포스팅',
          description: '네이버 최적화 블로그에 월 2회 전문적인 제품 리뷰와 정보성 콘텐츠를 발행합니다.'
        }
      ],
      benefits: [
        '스탠다드의 모든 혜택 포함',
        '프리미엄 위치 브랜드 노출',
        '주 단위 배너 업데이트 가능',
        '월 2회 전문 블로그 포스팅',
        '검색 엔진 최적화 효과',
        '장기적인 콘텐츠 자산 구축'
      ]
    }
  };

  const plan = planDetails[planType];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">{plan.title}</h2>
              <p className="text-lg opacity-90">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-xl line-through opacity-70 ml-3">{plan.originalPrice}</span>
                <span className="ml-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  얼리버드 할인
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">포함된 서비스</h3>
            <div className="space-y-6">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">주요 혜택</h3>
            <ul className="space-y-3">
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {planType === 'premium' && (
            <div className="mt-6 bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                프리미엄 추천 이유
              </h4>
              <p className="text-purple-800">
                블로그 마케팅이 포함되어 장기적인 검색 노출 효과를 얻을 수 있으며, 
                주 단위 배너 변경과 상단 로고 노출로 브랜드 인지도를 극대화할 수 있습니다. 
                신제품 출시가 잦거나 적극적인 마케팅이 필요한 업체에 최적입니다.
              </p>
            </div>
          )}
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              * 모든 요금제는 VAT 별도이며, 최소 3개월 단위 계약입니다.
            </p>
            <button
              onClick={onClose}
              className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailModal;