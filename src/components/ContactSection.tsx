"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ApplicationFormModal from './ApplicationFormModal';
import PlanDetailModal from './PlanDetailModal';
import MarketingOptionModal from './MarketingOptionModal';
import applicationForms from '../data/applicationForms.json';
import { toast } from 'react-hot-toast';

type FormPlan = 'standard' | 'premium';
type ContractDuration = 3 | 6 | 12;
type ContentMarketingType = null | 'gift' | 'rental';
type BlogMarketingType = null | 'twice' | 'four';
type MarketingPeriod = 'quarterly' | 'monthly';

interface QuoteState {
  plan: FormPlan;
  duration: ContractDuration;
  contentMarketing: ContentMarketingType;
  blogMarketing: BlogMarketingType;
}

interface ContactSectionProps {
  quoteState: QuoteState;
  onQuoteChange: (updates: Partial<QuoteState>) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ quoteState, onQuoteChange }) => {
  const { plan: selectedPlan, duration: selectedDuration, contentMarketing: contentMarketingType, blogMarketing: blogMarketingType } = quoteState;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<FormPlan>('standard');
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false);
  const [marketingModalType, setMarketingModalType] = useState<'content' | 'blog'>('content');
  const [marketingPeriod, setMarketingPeriod] = useState<MarketingPeriod>('quarterly');
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    mainProducts: '',
    shopUrl: ''
  });
  const [showActions, setShowActions] = useState(false);
  
  // localStorage에서 저장된 정보 불러오기
  useEffect(() => {
    const savedInfo = localStorage.getItem('embest_company_info');
    if (savedInfo) {
      try {
        const parsed = JSON.parse(savedInfo);
        setCompanyInfo(parsed);
      } catch (e) {
        console.error('Failed to parse saved company info');
      }
    }
  }, []);
  
  const handlePreview = () => {
    setIsModalOpen(true);
  };
  
  // 숫자를 천 단위 콤마 형식으로 변환
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };

  const generateApplicationForm = () => {
    const planName = selectedPlan === 'standard' ? '스탠다드' : '프리미엄';
    const basePrice = selectedPlan === 'standard' ? 20 : 30;
    const originalPrice = selectedPlan === 'standard' ? 30 : 40;
    
    // 랜덤 영문 PIN 생성 (날짜 포함)
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomPart1 = '';
    let randomPart2 = '';
    
    // 앞부분 3자리 (영문만)
    for (let i = 0; i < 3; i++) {
      randomPart1 += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    // 뒷부분 3자리 (영문만)
    for (let i = 0; i < 3; i++) {
      randomPart2 += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    // 오늘 날짜와 시간 (한국 시간 기준)
    const koreaTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"}));
    const month = String(koreaTime.getMonth() + 1).padStart(2, '0');
    const day = String(koreaTime.getDate()).padStart(2, '0');
    const hour = String(koreaTime.getHours()).padStart(2, '0');
    const minute = String(koreaTime.getMinutes()).padStart(2, '0');
    const dateCode = month + day;
    const timeCode = hour + minute;
    
    // 최종 PIN: XXX + 날짜 + XXX + 시간
    const randomPin = randomPart1 + dateCode + randomPart2 + timeCode;
    
    let contentMarketingText = '';
    if (contentMarketingType) {
      const period = marketingPeriod === 'quarterly' ? '분기별' : '월별';
      const type = contentMarketingType === 'gift' ? '물품 증정' : '물품 대여';
      const price = marketingPeriod === 'quarterly' 
        ? (contentMarketingType === 'gift' ? '10만원/분기' : '30만원/분기')
        : (contentMarketingType === 'gift' ? '30만원/월' : '90만원/월');
      contentMarketingText = `\n- ${period} 콘텐츠 마케팅 (${type}): ${price}`;
    }
    
    let blogMarketingText = '';
    if (blogMarketingType) {
      const frequency = blogMarketingType === 'twice' ? '월 2회' : '월 4회';
      const price = blogMarketingType === 'twice' ? '10만원' : '18만원';
      blogMarketingText = `\n- 월별 블로그 마케팅 (${frequency}): ${price}/월`;
    }

    const totalPrice = calculateTotalPrice().replace('만원', '');
    const totalWithVat = Math.round(parseInt(totalPrice) * 1.1);

    return `[EM베스트 입점 신청서]

========================================
신청 업체 정보
========================================
회사명: ${companyInfo.companyName}
담당자명: ${companyInfo.contactName}
담당자 이메일: ${companyInfo.contactEmail}
담당자 연락처: ${companyInfo.contactPhone}
주 판매품목: ${companyInfo.mainProducts}
쇼핑몰 주소: ${companyInfo.shopUrl}

========================================
신청 내역
========================================
1. 선택 플랜: ${planName} (정가 ${originalPrice}만원 → 특가 ${basePrice}만원/월)
2. 계약 기간: ${selectedDuration}개월
3. 추가 옵션:${contentMarketingText}${blogMarketingText}
${!contentMarketingText && !blogMarketingText ? ' 없음' : ''}

========================================
비용 산정
========================================
- 기본 요금: ${basePrice}만원 × ${selectedDuration}개월 = ${basePrice * selectedDuration}만원
${contentMarketingText ? `- 콘텐츠 마케팅: ${marketingPeriod === 'quarterly' ? 
  (contentMarketingType === 'gift' ? `10만원 × ${Math.floor(selectedDuration / 3)}분기` : `30만원 × ${Math.floor(selectedDuration / 3)}분기`) : 
  (contentMarketingType === 'gift' ? `30만원 × ${selectedDuration}개월` : `90만원 × ${selectedDuration}개월`)} = ${
  marketingPeriod === 'quarterly' ? 
  (contentMarketingType === 'gift' ? 10 * Math.floor(selectedDuration / 3) : 30 * Math.floor(selectedDuration / 3)) :
  (contentMarketingType === 'gift' ? 30 * selectedDuration : 90 * selectedDuration)
}만원` : ''}
${blogMarketingText ? `- 블로그 마케팅: ${blogMarketingType === 'twice' ? '10' : '18'}만원 × ${selectedDuration}개월 = ${
  blogMarketingType === 'twice' ? 10 * selectedDuration : 18 * selectedDuration
}만원` : ''}

총 비용: ₩${formatNumber(parseInt(totalPrice) * 10000)}원 (VAT 별도)
VAT 포함: ₩${formatNumber(totalWithVat * 10000)}원

========================================
작성일: ${new Date().toLocaleString('ko-KR', { 
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Seoul'
})} [${randomPin}] (얼리버드 이벤트 확인용 코드! 지우지마세요.)`;
  };

  const handleCopy = () => {
    const formContent = generateApplicationForm();
    navigator.clipboard.writeText(formContent)
      .then(() => {
        toast.success('신청서가 클립보드에 복사되었습니다!');
      })
      .catch((err) => {
        console.error('클립보드 복사 실패:', err);
        toast.error('클립보드 복사에 실패했습니다.');
      });
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
    return `${total}만원`;
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
  
  // 유효성 검사 함수들
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const validatePhone = (phone: string) => {
    const re = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    return re.test(phone);
  };
  
  const validateUrl = (url: string) => {
    try {
      new URL(url);
      return url.startsWith('http://') || url.startsWith('https://');
    } catch {
      return false;
    }
  };
  
  const validateCompanyInfo = () => {
    if (!companyInfo.companyName || !companyInfo.contactName || !companyInfo.contactEmail || 
        !companyInfo.contactPhone || !companyInfo.mainProducts || !companyInfo.shopUrl) {
      toast.error('모든 회사 정보를 입력해주세요.');
      return false;
    }
    
    if (!validateEmail(companyInfo.contactEmail)) {
      toast.error('올바른 이메일 형식을 입력해주세요.');
      return false;
    }
    
    if (!validatePhone(companyInfo.contactPhone)) {
      toast.error('올바른 전화번호 형식을 입력해주세요. (예: 010-1234-5678)');
      return false;
    }
    
    if (!validateUrl(companyInfo.shopUrl)) {
      toast.error('올바른 URL 형식을 입력해주세요. (https://로 시작)');
      return false;
    }
    
    return true;
  };

  return (
    <section id="contact" className="container-custom bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 가격 특별함 강조 */}
        <div className="mb-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-yellow-300 text-2xl mr-2">⚡</span>
              <span className="font-bold text-lg">한정 기간 특별 혜택</span>
              <span className="text-yellow-300 text-2xl ml-2">⚡</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              이 가격이 <span className="text-yellow-300">말이 안 된다</span>고요?
            </h3>
            
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              맞습니다. 일반 대행사 대비 <span className="font-bold text-yellow-300">90% 절감된</span> 가격입니다
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-yellow-300 mb-2">90%</div>
                <p className="text-lg">일반 대행사 대비<br />비용 절감</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-yellow-300 mb-2">4개</div>
                <p className="text-lg">채널 동시 운영<br />(카페/유튜브/인스타/블로그)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-yellow-300 mb-2">14.7만+</div>
                <p className="text-lg">검증된 타겟<br />고객 보유</p>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg mb-4">
                <span className="font-bold text-2xl">왜 이렇게 저렴할까요?</span>
              </p>
              <p className="opacity-95">
                EM베스트는 이미 구축된 14.7만+ 커뮤니티와 자체 콘텐츠 제작 시스템으로<br />
                운영 비용을 최소화했기 때문입니다. <span className="font-bold text-yellow-300">2025년 9월 1일 이후 정상가로 전환됩니다.</span>
              </p>
            </div>
          </div>
        </div>

        {/* 섹션 헤더 */}
        <div id="quote-form" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            지금 바로 <span className="text-primary">시작</span>하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            원하는 옵션을 선택하고 견적을 확인해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 왼쪽: 옵션 선택 영역 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 1. 기본 플랜 선택 */}
            <div id="plan-selection" className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                기본 플랜 선택
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <button
                    onClick={() => onQuoteChange({ plan: 'standard' })}
                    className={`w-full p-6 rounded-xl border-2 transition-all ${
                      selectedPlan === 'standard'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-left">
                      <h4 className="font-bold text-lg mb-2">스탠다드</h4>
                      <p className="text-gray-600 mb-3">기본적인 카페 마케팅</p>
                      <div className="mb-1">
                        <span className="text-sm line-through text-gray-400">30만원</span>
                        <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-semibold">33% 할인</span>
                      </div>
                      <p className="text-2xl font-bold text-primary">20만원<span className="text-sm text-gray-500">/월</span></p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPlanForModal('standard');
                      setIsPlanModalOpen(true);
                    }}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all"
                    title="자세히 보기"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={() => onQuoteChange({ plan: 'premium' })}
                    className={`w-full p-6 rounded-xl border-2 transition-all ${
                      selectedPlan === 'premium'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-left">
                      <h4 className="font-bold text-lg mb-2">
                        프리미엄
                        <span className="ml-2 bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-semibold">블로그 포함</span>
                      </h4>
                      <p className="text-gray-600 mb-1">적극적인 브랜드 노출</p>
                      <p className="text-xs text-purple-600 mb-2">📝 월 2회 블로그 포스팅 포함</p>
                      <div className="mb-1">
                        <span className="text-sm line-through text-gray-400">40만원</span>
                        <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-semibold">25% 할인</span>
                      </div>
                      <p className="text-2xl font-bold text-primary">30만원<span className="text-sm text-gray-500">/월</span></p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPlanForModal('premium');
                      setIsPlanModalOpen(true);
                    }}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all"
                    title="자세히 보기"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. 계약 기간 선택 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                계약 기간 선택
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[3, 6, 12].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => onQuoteChange({ duration: duration as ContractDuration })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedDuration === duration
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center">
                      <p className="font-bold text-lg">{duration}개월</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. 추가 옵션 선택 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                추가 옵션 선택 (선택사항)
              </h3>
              
              {/* 콘텐츠 마케팅 옵션 */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <h4 className="font-semibold">콘텐츠 마케팅</h4>
                    <div className="flex items-center gap-3 text-sm">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="marketingPeriod"
                          value="quarterly"
                          checked={marketingPeriod === 'quarterly'}
                          onChange={() => setMarketingPeriod('quarterly')}
                          className="mr-1.5 text-primary"
                        />
                        <span className={marketingPeriod === 'quarterly' ? 'text-primary font-medium' : 'text-gray-600'}>
                          분기별
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="marketingPeriod"
                          value="monthly"
                          checked={marketingPeriod === 'monthly'}
                          onChange={() => setMarketingPeriod('monthly')}
                          className="mr-1.5 text-primary"
                        />
                        <span className={marketingPeriod === 'monthly' ? 'text-primary font-medium' : 'text-gray-600'}>
                          월별
                        </span>
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setMarketingModalType('content');
                      setIsMarketingModalOpen(true);
                    }}
                    className="text-sm text-primary hover:text-primary/80 font-medium"
                  >
                    자세히 보기 →
                  </button>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-50">
                    <input
                      type="radio"
                      name="contentMarketing"
                      checked={contentMarketingType === null}
                      onChange={() => onQuoteChange({ contentMarketing: null })}
                      className="mr-3 h-4 w-4 text-primary"
                    />
                    <span>선택 안함</span>
                  </label>
                  
                  <label className="flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-50">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="contentMarketing"
                        checked={contentMarketingType === 'gift'}
                        onChange={() => onQuoteChange({ contentMarketing: 'gift' })}
                        className="mr-3 h-4 w-4 text-primary"
                      />
                      <div>
                        <span className="font-medium">물품 증정</span>
                        <p className="text-sm text-gray-600">리뷰 후 제품 증정</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">
                      {marketingPeriod === 'quarterly' ? '10만원/분기' : '30만원/월'}
                    </span>
                  </label>
                  
                  <label className="flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-50">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="contentMarketing"
                        checked={contentMarketingType === 'rental'}
                        onChange={() => onQuoteChange({ contentMarketing: 'rental' })}
                        className="mr-3 h-4 w-4 text-primary"
                      />
                      <div>
                        <span className="font-medium">물품 대여</span>
                        <p className="text-sm text-gray-600">리뷰 후 제품 반환</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">
                      {marketingPeriod === 'quarterly' ? '30만원/분기' : '90만원/월'}
                    </span>
                  </label>
                </div>
              </div>

              {/* 블로그 마케팅 옵션 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">월별 블로그 마케팅</h4>
                  <button
                    onClick={() => {
                      setMarketingModalType('blog');
                      setIsMarketingModalOpen(true);
                    }}
                    className="text-sm text-primary hover:text-primary/80 font-medium"
                  >
                    자세히 보기 →
                  </button>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-50">
                    <input
                      type="radio"
                      name="blogMarketing"
                      checked={blogMarketingType === null}
                      onChange={() => onQuoteChange({ blogMarketing: null })}
                      className="mr-3 h-4 w-4 text-primary"
                    />
                    <span>선택 안함</span>
                  </label>
                  
                  <label className="flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-50">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="blogMarketing"
                        checked={blogMarketingType === 'twice'}
                        onChange={() => onQuoteChange({ blogMarketing: 'twice' })}
                        className="mr-3 h-4 w-4 text-primary"
                      />
                      <div>
                        <span className="font-medium">월 2회</span>
                        <p className="text-sm text-gray-600">매월 2회 포스팅</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">10만원/월</span>
                  </label>
                  
                  <label className="flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-gray-50">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="blogMarketing"
                        checked={blogMarketingType === 'four'}
                        onChange={() => onQuoteChange({ blogMarketing: 'four' })}
                        className="mr-3 h-4 w-4 text-primary"
                      />
                      <div>
                        <span className="font-medium">월 4회</span>
                        <p className="text-sm text-gray-600">매월 4회 포스팅</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">18만원/월</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 견적 요약 및 신청 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:sticky lg:top-24">
              <h3 className="text-xl font-bold mb-6">견적 요약</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">기본 플랜</span>
                  <span className="font-medium">
                    {selectedPlan === 'standard' ? '스탠다드' : '프리미엄'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">계약 기간</span>
                  <span className="font-medium">{selectedDuration}개월</span>
                </div>
                
                {contentMarketingType && (
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">콘텐츠 마케팅</span>
                    <span className="font-medium">
                      {contentMarketingType === 'gift' ? '물품 증정' : '물품 대여'}
                    </span>
                  </div>
                )}
                
                {blogMarketingType && (
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">블로그 마케팅</span>
                    <span className="font-medium">
                      월 {blogMarketingType === 'twice' ? '2' : '4'}회
                    </span>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">월 비용</span>
                  <span className="font-bold text-xl">{calculateMonthlyPrice()}만원</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600">총 비용 ({selectedDuration}개월)</span>
                  <span className="font-bold text-2xl text-primary">{calculateTotalPrice()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">VAT 포함</span>
                    <span className="text-lg font-semibold">
                      {(() => {
                        const total = parseInt(calculateTotalPrice().replace('만원', ''));
                        const totalWithVat = Math.round(total * 1.1);
                        return `${totalWithVat}만원`;
                      })()}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* 회사 정보 입력 */}
              {!showActions && (
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold">회사 정보 입력</h4>
                    <button
                      onClick={() => {
                        setCompanyInfo({
                          companyName: '',
                          contactName: '',
                          contactEmail: '',
                          contactPhone: '',
                          mainProducts: '',
                          shopUrl: ''
                        });
                        localStorage.removeItem('embest_company_info');
                        toast.success('저장된 정보가 초기화되었습니다.');
                      }}
                      className="text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      초기화
                    </button>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="회사명"
                      value={companyInfo.companyName}
                      onChange={(e) => {
                        const newInfo = {...companyInfo, companyName: e.target.value};
                        setCompanyInfo(newInfo);
                        localStorage.setItem('embest_company_info', JSON.stringify(newInfo));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="담당자명"
                      value={companyInfo.contactName}
                      onChange={(e) => {
                        const newInfo = {...companyInfo, contactName: e.target.value};
                        setCompanyInfo(newInfo);
                        localStorage.setItem('embest_company_info', JSON.stringify(newInfo));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      placeholder="담당자 이메일"
                      value={companyInfo.contactEmail}
                      onChange={(e) => {
                        const newInfo = {...companyInfo, contactEmail: e.target.value};
                        setCompanyInfo(newInfo);
                        localStorage.setItem('embest_company_info', JSON.stringify(newInfo));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="tel"
                      placeholder="담당자 연락처 (예: 010-1234-5678)"
                      value={companyInfo.contactPhone}
                      onChange={(e) => {
                        const newInfo = {...companyInfo, contactPhone: e.target.value};
                        setCompanyInfo(newInfo);
                        localStorage.setItem('embest_company_info', JSON.stringify(newInfo));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="주 판매품목 (예: 헤드셋, 마우스, 키보드)"
                      value={companyInfo.mainProducts}
                      onChange={(e) => {
                        const newInfo = {...companyInfo, mainProducts: e.target.value};
                        setCompanyInfo(newInfo);
                        localStorage.setItem('embest_company_info', JSON.stringify(newInfo));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="url"
                      placeholder="쇼핑몰 주소 (예: https://smartstore.naver.com/???)"
                      value={companyInfo.shopUrl}
                      onChange={(e) => {
                        const newInfo = {...companyInfo, shopUrl: e.target.value};
                        setCompanyInfo(newInfo);
                        localStorage.setItem('embest_company_info', JSON.stringify(newInfo));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={() => {
                        if (validateCompanyInfo()) {
                          setShowActions(true);
                        }
                      }}
                      className="w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all"
                    >
                      정보 확인
                    </button>
                  </div>
                </div>
              )}
              
              {/* 복사하기, 미리보기 버튼 */}
              {showActions && (
                <div className="space-y-3 mt-6">
                  <button 
                    onClick={handleCopy}
                    className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl hover:bg-primary/90 transition-all shadow-lg"
                  >
                    신청서 복사하기
                  </button>
                  
                  <button 
                    onClick={handlePreview}
                    className="w-full bg-gray-100 text-gray-800 font-bold py-4 px-6 rounded-xl hover:bg-gray-200 transition-all"
                  >
                    미리보기
                  </button>
                  
                  <button
                    onClick={() => setShowActions(false)}
                    className="w-full text-gray-600 text-sm hover:text-gray-800 transition-all"
                  >
                    ← 정보 수정하기
                  </button>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">문의 이메일</p>
                <a href="mailto:qkrwodud30@naver.com" className="text-primary font-medium hover:underline">
                  qkrwodud30@naver.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 안내 */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-blue-100 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">신청 방법 안내</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-bold mb-2">옵션 선택</h4>
              <p className="text-gray-600">원하는 플랜과 옵션을 선택하세요</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-bold mb-2">신청서 복사</h4>
              <p className="text-gray-600">자동 생성된 신청서를 복사하세요</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-bold mb-2">이메일 발송</h4>
              <p className="text-gray-600">이메일로 보내시면 빠르게 연락드립니다</p>
            </div>
          </div>
        </div>
      </div>
      
      {selectedPlan && (
        <ApplicationFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="EM베스트 입점 신청서"
          content={generateApplicationForm()}
        />
      )}
      <PlanDetailModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        planType={selectedPlanForModal}
      />
      <MarketingOptionModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
        type={marketingModalType}
      />
    </section>
  );
};

export default ContactSection;