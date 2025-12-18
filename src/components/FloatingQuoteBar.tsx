"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

type FormPlan = 'premium';
type ContractDuration = 3 | 6 | 12;
type ContentMarketingType = null | 'gift' | 'rental';
type BlogMarketingType = null | 'twice' | 'four';

interface QuoteState {
  plan: FormPlan;
  duration: ContractDuration;
  contentMarketing: ContentMarketingType;
  blogMarketing: BlogMarketingType;
}

interface FloatingQuoteBarProps {
  quoteState: QuoteState;
  onQuoteChange: (updates: Partial<QuoteState>) => void;
}

const FloatingQuoteBar: React.FC<FloatingQuoteBarProps> = ({ 
  quoteState,
  onQuoteChange 
}) => {
  const { plan: selectedPlan, duration: selectedDuration, contentMarketing: contentMarketingType, blogMarketing: blogMarketingType } = quoteState;
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        // PricingSection이 화면에 나타나기 시작하면 계속 표시
        if (rect.top < window.innerHeight) {
          setShowBar(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlanChange = (plan: FormPlan) => {
    onQuoteChange({ plan });
  };

  const calculateTotalPrice = () => {
    const basePrice = 30;
    const total = basePrice * selectedDuration;
    return total;
  };

  const calculateMonthlyPrice = () => {
    return 30; // 고정 가격
  };

  const handleContinue = () => {
    setIsExpanded(false); // 플로팅바 접기
    const planSelection = document.getElementById('plan-selection');
    if (planSelection) {
      const rect = planSelection.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + rect.top;
      window.scrollTo({
        top: absoluteTop - 120,
        behavior: 'smooth'
      });
    }
  };

  if (!showBar) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-[90] transition-all duration-300 ${
      isExpanded ? 'h-[70vh] max-h-[500px] md:h-auto md:max-h-[600px]' : 'h-20'
    }`}>
      <div className="container mx-auto px-4 h-full flex flex-col">
        {/* 축소된 상태 */}
        {!isExpanded && (
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-6">
              <h3 className="font-bold text-sm md:text-lg">실시간 견적</h3>
              <div className="flex items-center space-x-2 md:space-x-4">
                <span className="text-gray-600 hidden md:inline">선택된 플랜:</span>
                <span className="font-semibold text-primary text-sm md:text-base">통합 패키지</span>
                <span className="text-lg md:text-2xl font-bold text-primary">
                  월 {calculateMonthlyPrice()}만원
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-primary text-white px-4 md:px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-all text-sm md:text-base"
            >
              옵션 선택
            </button>
          </div>
        )}

        {/* 확장된 상태 */}
        {isExpanded && (
          <div className="flex flex-col h-full overflow-hidden py-6">
            {/* 헤더 - 고정 */}
            <div className="flex justify-between items-center mb-6 flex-shrink-0">
              <h3 className="font-bold text-xl">견적 계산기</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* 스크롤 가능한 컨텐츠 */}
            <div className="overflow-y-auto flex-1 -mx-4 px-4 md:overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-4">
              {/* 1. 플랜 선택 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">1. 플랜 선택</h4>
                  <div className="group relative">
                    <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      <p className="font-semibold mb-1">통합 입점 패키지</p>
                      <p>카페 마케팅 + 블로그/인스타 월 1건 + 유튜브 3개월 1건</p>
                      <p>제공 물품에 대한 전문 리뷰 콘텐츠</p>
                      <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <button
                    className="w-full p-3 rounded-lg border-2 text-left border-primary bg-primary/5"
                  >
                    <div className="font-medium">
                      통합 패키지
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">유튜브 3개월</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">블로그 월</span>
                      <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">인스타 월</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <span className="line-through">40만원</span>
                      <span className="ml-2 text-primary font-bold">30만원/월</span>
                    </div>
                    <div className="text-xs text-purple-600 mt-1">
                      블로그/인스타 월 1건, 유튜브 3개월 1건
                    </div>
                  </button>
                </div>
              </div>

              {/* 2. 계약 기간 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">2. 계약 기간</h4>
                  <div className="group relative">
                    <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      <p className="font-semibold mb-1">계약 기간</p>
                      <p>최소 3개월부터 계약 가능</p>
                      <p>3개월, 6개월, 12개월 중 선택</p>
                      <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {[3, 6, 12].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => onQuoteChange({ duration: duration as ContractDuration })}
                      className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                        selectedDuration === duration
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium">{duration}개월</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. 포함 내용 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">3. 포함 내용</h4>
                  <div className="group relative">
                    <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      <p className="font-semibold mb-1">포함 내용</p>
                      <p>카페 마케팅 + 정기 콘텐츠 제작</p>
                      <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-sm">
                  <div className="space-y-1">
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      블로그/인스타 월 1회
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      유튜브 3개월 1회
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      카페 마케팅 포함
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    ※ 추가 콘텐츠는 매니저 문의
                  </p>
                </div>
              </div>

              {/* 4. 총 견적 */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold mb-3">총 견적</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>월 비용</span>
                    <span className="font-medium">{calculateMonthlyPrice()}만원</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>계약 기간</span>
                    <span className="font-medium">{selectedDuration}개월</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">총 비용</span>
                      <span className="text-xl font-bold text-primary">{calculateTotalPrice()}만원</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">VAT 포함</span>
                      <span className="font-medium">{Math.round(calculateTotalPrice() * 1.1)}만원</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleContinue}
                  className="w-full mt-4 bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-all"
                >
                  신청서 작성하기
                </button>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingQuoteBar;