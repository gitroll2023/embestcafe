"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

type FaqItem = {
  question: string;
  answer: string;
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { icon: '📅', label: '계약 관련' },
    { icon: '🚀', label: '진행 프로세스' },
    { icon: '📊', label: '효과 측정' },
    { icon: '🎯', label: '적합성' }
  ];

  const faqs: FaqItem[] = [
    {
      question: '📅 최소 계약 기간은 어떻게 되나요?',
      answer: '<strong>3개월부터 시작 가능합니다.</strong> 짧은 기간 테스트 후 연장하실 수 있으며, 12개월 장기 계약 시 추가 혜택을 제공해 드립니다. 귀사의 마케팅 계획에 맞춰 유연한 계약이 가능합니다.'
    },
    {
      question: '🚀 입점 후 콘텐츠 제작 일정은 어떻게 되나요?',
      answer: '<strong>입점 즉시 전담 매니저가 배정되어 일정을 협의합니다.</strong><br><br>• 일반 제품: 5-7영업일 내 컨텐츠 제작 완료<br>• 신제품/미공개 제품: 출시일에 맞춰 엠바고 설정 가능<br>• 유튜브, 블로그, 인스타 동시 진행 시 순차 업로드<br><br>모든 일정은 담당자님과 실시간으로 공유됩니다.'
    },
    {
      question: '🎯 EM베스트 체험단의 특별함은 무엇인가요?',
      answer: '<strong>전문성 있는 FPS 게이머들이 직접 테스트합니다.</strong><br><br>✅ 회원 활동 지수 기반 선별 (상위 5% 활성 회원)<br>✅ 제품별 맞춤 체험단 10-30명 선정<br>✅ 상세한 사용기 + 성능 테스트 포함<br>✅ 96% 이상의 리뷰 완료율<br><br>EM운영팀이 모든 과정을 관리해 드립니다.'
    },
    {
      question: '💰 환불 및 계약 변경 조건은 어떻게 되나요?',
      answer: '<strong>계약 체결 후 7일 이내 통보 시 100% 환불 가능합니다.</strong><br><br>• 7일 이후: 진행된 서비스에 대한 비용 공제 후 환불<br>• 패키지 변경: 차액 정산 후 업그레이드 가능<br>• 일시 중단: 사전 협의 후 재개 가능<br><br>모든 조건은 계약서에 명시되며 투명하게 운영합니다.'
    },
    {
      question: '🤝 타 마케팅 채널과 병행 가능한가요?',
      answer: '<strong>물론입니다! 오히려 시너지 효과를 기대할 수 있습니다.</strong><br><br>EM베스트는 타겟팅된 커뮤니티 마케팅으로:<br>• 네이버 검색 광고와 병행 → 구매 전환율 상승<br>• 인플루언서 마케팅과 병행 → 신뢰도 강화<br>• 이커머스 프로모션과 병행 → 판매 극대화<br><br>통합 마케팅 전략 컨설팅도 제공합니다.'
    },
    {
      question: '📊 마케팅 효과는 어떻게 측정하고 보고받나요?',
      answer: '<strong>월별 상세 리포트를 제공합니다.</strong><br><br>📈 기본 지표<br>• 컨텐츠 노출수 & 도달률<br>• 클릭률 & 전환율<br>• 체험단 신청자 수 & 선정률<br><br>📊 심화 분석 (프리미엄)<br>• 커뮤니티 반응 분석<br>• 경쟁사 비교 분석<br>• 판매 데이터 연동 (선택시)<br><br>리포트 샘플을 사전에 확인하실 수 있습니다.'
    },
    {
      question: '🎮 어떤 제품이 EM베스트 마케팅에 적합한가요?',
      answer: '<strong>FPS 게이밍 기어가 가장 높은 효과를 보입니다.</strong><br><br>🎯 최적 제품군<br>• 게이밍 마우스 & 키보드<br>• 게이밍 헤드셋 & 이어폰<br>• 고주사율 모니터<br>• 마우스패드 & 액세서리<br><br>💼 기타 효과적인 카테고리<br>• PC 주변기기 (모니터암, USB 허브 등)<br>• 의자, 책상 등 게이밍 가구<br>• 커스텀 PC & 노트북<br><br>무료 상담으로 효과 예측을 받아보세요!'
    }
  ];

  return (
    <section id="faq" className="container-custom bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            궁금한 점이 <span className="text-primary">해결</span>되셨나요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EM베스트 입점 전 꼭 확인해주세요
          </p>
        </div>

        {/* 카테고리 탭 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <div key={index} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-2xl">{cat.icon}</span>
              <span className="font-medium">{cat.label}</span>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                  openIndex === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-primary text-white' : 'bg-gray-100'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 pt-2">
                    <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA 섹션 */}
        <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              아직 결정이 어려우신가요?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              이메일로 편하게 문의해주세요
            </p>
            <button
              onClick={() => setShowEmailForm(!showEmailForm)}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              {showEmailForm ? '양식 숨기기' : '문의 양식 보기'}
              <svg 
                className={`w-5 h-5 ml-2 transition-transform ${showEmailForm ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className={`max-w-2xl mx-auto transition-all duration-500 overflow-hidden ${
            showEmailForm ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h4 className="font-bold mb-4 text-lg">문의 메일 양식</h4>
              
              {/* 수신 메일 */}
              <div className="mb-4">
                <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                  <div>
                    <p className="text-xs opacity-80 mb-1">수신 메일</p>
                    <p className="font-mono">qkrwodud30@naver.com</p>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('qkrwodud30@naver.com');
                      toast.success('수신 메일이 복사되었습니다!');
                    }}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all text-sm font-medium"
                  >
                    복사
                  </button>
                </div>
              </div>
              
              {/* 제목 */}
              <div className="mb-4">
                <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                  <div className="flex-1">
                    <p className="text-xs opacity-80 mb-1">메일 제목 예시</p>
                    <p className="font-mono text-sm">[EM베스트 기타 문의] 회사명</p>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('[EM베스트 기타 문의] 회사명');
                      toast.success('제목이 복사되었습니다!');
                    }}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all text-sm font-medium ml-2"
                  >
                    복사
                  </button>
                </div>
              </div>
              
              {/* 본문 */}
              <div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs opacity-80">메일 내용</p>
                    <button
                      onClick={() => {
                        const content = `안녕하세요, EM베스트 담당자님

EM베스트 입점에 관심이 있어 문의 드립니다.

회사명: 
담당자명: 
연락처: 
쇼핑몰 URL: 
주요 제품: 
관심 플랜: (스탠다드/프리미엄)
추가 옵션: (콘텐츠 마케팅/블로그 마케팅)
기타 문의사항: 

답변 부탁드립니다.
감사합니다.`;
                        navigator.clipboard.writeText(content);
                        toast.success('메일 내용이 복사되었습니다!');
                      }}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all text-sm font-medium"
                    >
                      복사
                    </button>
                  </div>
                  <div className="text-sm font-mono opacity-90" style={{ lineHeight: '2' }}>
                    안녕하세요, EM베스트 담당자님<br /><br />
                    EM베스트 입점에 관심이 있어 문의 드립니다.<br /><br />
                    회사명: <br />
                    담당자명: <br />
                    연락처: <br />
                    쇼핑몰 URL: <br />
                    주요 제품: <br />
                    관심 플랜: (스탠다드/프리미엄)<br />
                    추가 옵션: (콘텐츠 마케팅/블로그 마케팅)<br />
                    기타 문의사항: <br /><br />
                    답변 부탁드립니다.<br />
                    감사합니다.
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

export default FaqSection;
