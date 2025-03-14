"use client";

import React, { useState } from 'react';
import Link from 'next/link';

type FaqItem = {
  question: string;
  answer: string;
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: '계약 기간은 얼마나 되나요?',
      answer: '최소 계약 기간은 3개월입니다. 장기 계약 시 추가 할인 혜택을 제공해 드립니다. 장기 계약에 대한 자세한 내용은 문의 시 상담해 드립니다.'
    },
    {
      question: '입점하면 언제부터 리뷰가 가능한가요?',
      answer: '공식 리뷰의 경우, 유튜버 일정에 맞게 주 1회 제작 영상이 업로드됩니다. 일정에 맞는 가장 빠른 시점에 예약하여 미리 제품을 보내주시면 됩니다. 유튜브 콘텐츠는 보통 목요일이나 금요일에 업로드되며, 블로그 콘텐츠는 그 다음 주 수요일에 게시됩니다. 상황에 따라 일정이 변동될 수 있습니다. (영상제작기간은 최소 2주입니다. 다른일정이 있는 관계로 바로 제작업로드가 불가합니다.)'
    },
    {
      question: '체험단은 어떻게 진행되나요?',
      answer: '체험단 진행을 원하시면 카페 매니저에게 말씀해 주시면 됩니다. 담당자가 진행 상황을 안내해 드리며, EM베스트 카페 회원 중 활동성, 리뷰 품질, 전문성 등을 고려하여 제품에 가장 적합한 체험단을 선정합니다.'
    },
    {
      question: '환불 정책은 어떻게 되나요?',
      answer: '계약 체결 이후에는 환불이 불가합니다. 따라서 계약 전 충분한 상담을 통해 서비스 내용을 확인하시기 바랍니다. 자세한 계약 조건은 계약서에 명시되어 있으며, 문의 시 상세히 안내해 드립니다.'
    },
    {
      question: '타 마케팅 채널과 병행해도 되나요?',
      answer: '네, 다른 마케팅 채널과 병행하셔도 됩니다. 오히려 여러 채널을 통한 통합 마케팅이 시너지 효과를 낼 수 있습니다. 필요하시다면 타 채널과의 효과적인 연계 방안도 제안해 드립니다.'
    },
    {
      question: '마케팅 효과는 어떻게 측정되나요?',
      answer: '노출수, 클릭률, 전환율 등 기본적인 지표와 함께 카페 내 반응, 체험단 피드백, 판매 증가율 등을 종합적으로 분석한 리포트를 제공해 드립니다. 패키지에 따라 리포트 상세도가 달라질 수 있습니다.'
    },
    {
      question: '어떤 제품이 EM베스트와 잘 맞나요?',
      answer: 'FPS 게임 관련 장비(마우스, 키보드, 헤드셋, 모니터 등)와 게이밍 액세서리가 가장 높은 효과를 보입니다. 그 외에도 PC 주변기기, IT 제품 등도 좋은 반응을 얻고 있습니다.'
    },
    {
      question: '맞춤형 마케팅 플랜도 가능한가요?',
      answer: '네, 맞춤형 마케팅 플랜은 협력업체인 트릭콘텐츠(<a href="https://trickcontents.co.kr/" target="_blank" rel="noopener noreferrer">https://trickcontents.co.kr/</a>)를 통해 제공 가능합니다. 귀사의 제품과 목표에 맞는 특별한 마케팅 전략이 필요하시면 문의 시 상담해 드립니다.'
    },
  ];

  return (
    <section id="faq" className="container-custom">
      <h2 className="section-title">
        <span className="text-primary">자주 묻는 질문</span>
      </h2>
      <p className="section-subtitle">
        EM베스트 입점에 관해 자주 묻는 질문들을 모았습니다
      </p>

      <div className="max-w-3xl mx-auto mt-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="mb-4">더 궁금한 점이 있으신가요?</p>
        <Link href="#contact" className="btn-primary">
          문의하기
        </Link>
      </div>
    </section>
  );
};

export default FaqSection;
