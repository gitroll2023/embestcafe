"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

type FormPlan = 'standard' | 'premium';
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
  const [marketingPeriod, setMarketingPeriod] = useState<'quarterly' | 'monthly'>('quarterly');

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
    const basePrice = selectedPlan === 'standard' ? 20 : 30;
    let contentPrice = 0;
    let blogPrice = 0;
    
    if (contentMarketingType) {
      if (marketingPeriod === 'quarterly') {
        const pricePerQuarter = contentMarketingType === 'gift' ? 10 : 30;
        contentPrice = pricePerQuarter * Math.floor(selectedDuration / 3);
      } else {
        const pricePerMonth = contentMarketingType === 'gift' ? 30 : 90;
        contentPrice = pricePerMonth * selectedDuration;
      }
    }
    
    if (blogMarketingType) {
      const pricePerMonth = blogMarketingType === 'twice' ? 10 : 18;
      blogPrice = pricePerMonth * selectedDuration;
    }
    
    const total = (basePrice * selectedDuration) + contentPrice + blogPrice;
    return total;
  };

  const calculateMonthlyPrice = () => {
    const basePrice = selectedPlan === 'standard' ? 20 : 30;
    let contentPrice = 0;
    let blogPrice = 0;
    
    if (contentMarketingType && marketingPeriod === 'monthly') {
      contentPrice = contentMarketingType === 'gift' ? 30 : 90;
    }
    
    if (blogMarketingType) {
      blogPrice = blogMarketingType === 'twice' ? 10 : 18;
    }
    
    return basePrice + contentPrice + blogPrice;
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
                <span className="font-semibold text-primary text-sm md:text-base">
                  {selectedPlan === 'standard' ? '스탠다드' : '프리미엄'}
                </span>
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
                      <p className="font-semibold mb-1">기본 플랜</p>
                      <p>스탠다드: 카페 마케팅 기본 패키지</p>
                      <p>프리미엄: 카페 + 월 2회 블로그 포스팅</p>
                      <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => handlePlanChange('standard')}
                    className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                      selectedPlan === 'standard'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">스탠다드</div>
                    <div className="text-sm text-gray-600">
                      <span className="line-through">30만원</span>
                      <span className="ml-2 text-primary font-bold">20만원/월</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handlePlanChange('premium')}
                    className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                      selectedPlan === 'premium'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">
                      프리미엄
                      <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">블로그 포함</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="line-through">40만원</span>
                      <span className="ml-2 text-primary font-bold">30만원/월</span>
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

              {/* 3. 추가 옵션 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">3. 추가 옵션</h4>
                  <div className="group relative">
                    <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                      <p className="font-semibold mb-1">추가 옵션</p>
                      <p>선택사항으로 필요에 따라 추가 가능</p>
                      <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* 콘텐츠 마케팅 주기 선택 */}
                  <div className="flex items-center gap-3 mb-2">
                    <label className="flex items-center cursor-pointer text-sm">
                      <input
                        type="radio"
                        name="floatingMarketingPeriod"
                        value="quarterly"
                        checked={marketingPeriod === 'quarterly'}
                        onChange={() => setMarketingPeriod('quarterly')}
                        className="mr-1.5"
                      />
                      <span className={marketingPeriod === 'quarterly' ? 'text-primary font-medium' : ''}>
                        분기별
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer text-sm">
                      <input
                        type="radio"
                        name="floatingMarketingPeriod"
                        value="monthly"
                        checked={marketingPeriod === 'monthly'}
                        onChange={() => setMarketingPeriod('monthly')}
                        className="mr-1.5"
                      />
                      <span className={marketingPeriod === 'monthly' ? 'text-primary font-medium' : ''}>
                        월별
                      </span>
                    </label>
                  </div>
                  
                  {/* 콘텐츠 마케팅 */}
                  <select
                    value={contentMarketingType || ''}
                    onChange={(e) => onQuoteChange({ contentMarketing: e.target.value as ContentMarketingType || null })}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="">콘텐츠 마케팅 선택</option>
                    <option value="gift">
                      물품 증정 ({marketingPeriod === 'quarterly' ? '10만원/분기' : '30만원/월'})
                    </option>
                    <option value="rental">
                      물품 대여 ({marketingPeriod === 'quarterly' ? '30만원/분기' : '90만원/월'})
                    </option>
                  </select>
                  
                  {/* 블로그 마케팅 */}
                  <select
                    value={blogMarketingType || ''}
                    onChange={(e) => onQuoteChange({ blogMarketing: e.target.value as BlogMarketingType || null })}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="">블로그 마케팅 선택</option>
                    <option value="twice">월 2회 (10만원/월)</option>
                    <option value="four">월 4회 (18만원/월)</option>
                  </select>
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