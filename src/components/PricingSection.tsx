"use client";

import React from 'react';
import Link from 'next/link';

type FormPlan = 'premium';

interface PricingSectionProps {
  onPlanSelect?: (plan: FormPlan) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onPlanSelect }) => {
  const plans = [
    {
      name: '통합 입점 패키지',
      price: '30만원',
      originalPrice: '40만원',
      discount: '25%',
      threeMonthPrice: '90만원',
      threeMonthOriginalPrice: '120만원',
      yearlyPrice: '360만원',
      yearlyOriginalPrice: '480만원',
      description: '카페 마케팅 + 월 1건 콘텐츠(유튜브+블로그+인스타) 포함',
      features: [
        {
          title: '카페 마케팅',
          items: [
            '전용 게시판 개설',
            '입점 소형배너 등록',
            '체험단 모집 공고 지원',
            '카페 상단 타이틀 로고 등록',
            '메인 긴 배너 노출 (주 1회 변경)'
          ]
        },
        {
          title: '월별 콘텐츠 제작 (기본 포함)',
          items: [
            '유튜브 영상 제작 - 월 1건',
            '네이버 블로그 포스팅 - 월 1건',
            '인스타그램 포스트 - 월 1건',
            '제공 물품에 대한 전문 리뷰 콘텐츠',
            '검색 최적화 및 장기 노출 효과'
          ]
        }
      ],
      recommended: true,
      buttonText: '통합 패키지 신청하기',
    },
  ];

  const additionalOptions = [
    {
      title: '추가 콘텐츠 제작 (물품 제공 시)',
      description: '기본 월 1회에서 추가 1회 더! 월 총 2회 제작',
      icon: '🎬',
      options: [
        {
          name: '유튜브+블로그+인스타 추가 1회',
          price: '15만원',
          description: '기본 1회 + 추가 1회 = 월 총 2회'
        }
      ],
      includes: [
        '기본 패키지는 월 1회 제공',
        '추가 선택 시 월 총 2회 제작',
        '매달 개별적으로 추가 신청 가능',
        '특정 달에만 추가 가능 (별도 연락)',
        '유튜브 영상 제작 (1.12만+ 구독자)',
        '네이버 블로그 포스팅',
        '인스타그램 포스트 (7.1천+ 팔로워)',
        '동일 제품에 대한 통합 리뷰',
        'SEO 최적화 및 검색 노출',
        '※ 물품 제공 필수'
      ]
    }
  ];

  return (
    <section id="pricing" className="container-custom">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            합리적인 <span className="text-primary">가격</span>으로<br />
            최대의 효과를 경험하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            귀사의 마케팅 목표에 맞는 패키지를 선택하고, 필요한 옵션을 추가하세요
          </p>
        </div>

        {/* 얼리버드 안내 배너 */}
        <div className="mb-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white text-center shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl mr-3">🔥</span>
            <h3 className="text-2xl font-bold">얼리버드 특별 할인 진행 중!</h3>
            <span className="text-3xl ml-3">🔥</span>
          </div>
          <p className="text-xl mb-2">지금 신청하면 <span className="font-bold text-yellow-300">최대 25% 할인</span>된 가격으로 이용 가능</p>
          <p className="text-sm opacity-90">2025년 10월 1일 이후 정가 적용 예정</p>
        </div>

        {/* 기본 플랜 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">통합 마케팅 패키지</h3>
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 ${
                  plan.recommended ? 'ring-4 ring-primary ring-opacity-50' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-bold">
                    🌟 가장 인기 있는 선택
                  </div>
                )}
                
                <div className="p-8">
                  <div className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {plan.discount} 할인
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  {plan.name === '통합 입점 패키지' && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                        🎬 유튜브 1건
                      </div>
                      <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        📝 블로그 1건
                      </div>
                      <div className="inline-flex items-center bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">
                        📸 인스타 1건
                      </div>
                    </div>
                  )}
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="mb-3">
                      <span className="text-2xl text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="text-sm text-gray-400 ml-2">정가</span>
                    </div>
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-gray-500 ml-2">/ 월</span>
                      <span className="ml-3 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">얼리버드 (~10/1)</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1 mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between">
                        <span>3개월:</span>
                        <span>
                          <span className="line-through text-gray-400">{plan.threeMonthOriginalPrice}</span>
                          <span className="ml-2 font-semibold">{plan.threeMonthPrice}</span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>12개월:</span>
                        <span>
                          <span className="line-through text-gray-400">{plan.yearlyOriginalPrice}</span>
                          <span className="ml-2 font-semibold">{plan.yearlyPrice}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <ul className="space-y-2">
                          {feature.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => {
                      if (onPlanSelect) {
                        onPlanSelect('premium');
                      }
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        const rect = contactSection.getBoundingClientRect();
                        const absoluteTop = window.pageYOffset + rect.top;
                        window.scrollTo({
                          top: absoluteTop - 100,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all ${
                      plan.recommended 
                        ? 'bg-primary text-white hover:bg-primary/90 shadow-lg' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 text-gray-600">
            <p className="font-semibold mb-2">※ 모든 요금제는 최소 3개월 단위 계약, VAT 별도</p>
            <p className="text-sm">※ 기본 제공되는 유튜브/블로그/인스타는 업체가 제공하는 물품에 대한 리뷰 콘텐츠입니다</p>
            <p className="text-sm">※ 추가 콘텐츠는 물품 제공 시에만 가능하며 세트당 15만원입니다</p>
          </div>
        </div>

        {/* 추가 옵션 */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-4">추가 콘텐츠 옵션</h3>
          <p className="text-center text-gray-600 mb-8">기본 제공 콘텐츠 외에 추가로 필요한 경우 선택하세요</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {additionalOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{option.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold">{option.title}</h4>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">가격 옵션</h5>
                  <div className="space-y-3">
                    {option.options.map((opt, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{opt.name}</span>
                          <span className="font-bold text-primary">{opt.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{opt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">포함 내용</h5>
                  <ul className="space-y-2">
                    {option.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 가격 비교 */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-blue-100 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              투자 대비 효과 분석
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left">구분</th>
                    <th className="px-6 py-4 text-center">일반 대행사</th>
                    <th className="px-6 py-4 text-center">EM베스트</th>
                    <th className="px-6 py-4 text-center">절감액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4">월 기본 비용</td>
                    <td className="px-6 py-4 text-center">200-300만원</td>
                    <td className="px-6 py-4 text-center">
                      <span className="line-through text-gray-400">30-40만원</span>
                      <span className="text-primary font-bold ml-2">20-30만원</span>
                      <span className="text-xs text-red-500 ml-1">(얼리버드)</span>
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">90% 절감</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4">콘텐츠 제작</td>
                    <td className="px-6 py-4 text-center">회당 50-100만원</td>
                    <td className="px-6 py-4 text-center text-primary font-bold">분기 10-30만원</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">80% 절감</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4">타겟 정확도</td>
                    <td className="px-6 py-4 text-center">낮음 (20-30%)</td>
                    <td className="px-6 py-4 text-center text-primary font-bold">높음 (95%+)</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">3배 향상</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-6 py-4 font-bold">연간 총 비용</td>
                    <td className="px-6 py-4 text-center">3,000만원+</td>
                    <td className="px-6 py-4 text-center text-primary font-bold">300-500만원</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">2,500만원+ 절감</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center mt-6 text-gray-600">
              * 평균적인 비용 기준이며, 실제 비용은 계약 조건에 따라 달라질 수 있습니다
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            지금 바로 시작하세요
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            EM베스트와 함께라면 적은 비용으로도 효과적인 마케팅이 가능합니다.<br />
            귀사에 맞는 패키지를 선택하고 문의해주세요.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                const absoluteTop = window.pageYOffset + rect.top;
                window.scrollTo({
                  top: absoluteTop - 100,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            무료 상담 신청하기
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;