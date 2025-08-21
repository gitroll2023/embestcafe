"use client";

import React from 'react';

interface MarketingOptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'content' | 'blog';
}

const MarketingOptionModal: React.FC<MarketingOptionModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const modalContent = {
    content: {
      title: '분기별 콘텐츠 마케팅',
      subtitle: '3개월마다 1회 제공되는 멀티채널 통합 마케팅',
      channels: [
        {
          icon: '📺',
          name: '유튜브',
          stats: '구독자 1.12만+',
          description: '전문 리뷰 영상 제작 및 업로드'
        },
        {
          icon: '📸',
          name: '인스타그램',
          stats: '팔로워 7.1천+',
          description: '포스트 제작'
        },
        {
          icon: '📝',
          name: '네이버 블로그',
          stats: '최적화 2+ 등급',
          description: 'SEO 최적화 상세 리뷰'
        },
        {
          icon: '☕',
          name: 'EM베스트 카페',
          stats: '회원 14.7만+',
          description: '공식 리뷰 게시 및 확산'
        }
      ],
      options: [
        {
          title: '물품 증정 옵션',
          price: '10만원/분기',
          features: [
            '리뷰 후 제품을 리뷰어에게 증정',
            '리뷰어의 진솔한 장기 사용 후기',
            '제품에 대한 애착도 높은 리뷰',
            '추천: 50만원 이하 제품'
          ],
          recommended: true
        },
        {
          title: '물품 대여 옵션',
          price: '30만원/분기',
          features: [
            '리뷰 완료 후 제품 반환',
            '고가 제품도 부담 없이 리뷰 가능',
            '전문적이고 객관적인 리뷰',
            '추천: 50만원 이상 고가 제품'
          ],
          recommended: false
        }
      ],
      process: [
        '제품 전달 (리뷰어에게)',
        '콘텐츠 제작 (영상/이미지)',
        '4개 채널 동시 업로드',
        '커뮤니티 반응 모니터링'
      ]
    },
    blog: {
      title: '월별 블로그 마케팅',
      subtitle: '네이버 검색 노출을 위한 전문 블로그 포스팅',
      channels: [
        {
          icon: '📊',
          name: '네이버 블로그',
          stats: '최적화 2+ 등급',
          description: '높은 검색 노출 순위 보장'
        }
      ],
      options: [
        {
          title: '추가 1건',
          price: '10만원/건',
          features: [
            '해당 월에 1건 추가 포스팅',
            'SEO 최적화 키워드 적용',
            '제공 물품에 대한 전문 리뷰',
            '검색 노출 최적화'
          ],
          recommended: true
        },
        {
          title: '추가 3건 패키지',
          price: '25만원',
          features: [
            '한 달 내 3건 추가 포스팅',
            '다양한 키워드로 검색 노출 극대화',
            '제공 물품별 특화 콘텐츠',
            '집중적인 브랜드 노출'
          ],
          recommended: false
        }
      ],
      process: [
        '키워드 분석 및 선정',
        '전문 콘텐츠 작성',
        'SEO 최적화 적용',
        '검색 노출 모니터링'
      ]
    }
  };

  const content = modalContent[type];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.title}</h2>
              <p className="text-lg opacity-90">{content.subtitle}</p>
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

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* 채널 영향력 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6">채널 영향력</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.channels.map((channel, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">{channel.icon}</div>
                  <h4 className="font-bold mb-1">{channel.name}</h4>
                  <p className="text-primary font-bold mb-2">{channel.stats}</p>
                  <p className="text-sm text-gray-600">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 가격 옵션 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6">가격 옵션</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl p-6 border-2 ${
                    option.recommended 
                      ? 'border-orange-200 bg-orange-50' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">{option.title}</h4>
                    {option.recommended && (
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                        추천
                      </span>
                    )}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-4">{option.price}</div>
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 진행 프로세스 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">진행 프로세스</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.process.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {index + 1}
                  </div>
                  <p className="font-medium text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {type === 'content' && (
            <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
              <p className="text-yellow-800">
                <strong>📢 안내:</strong> 3개월마다 1회 제공되며, 동일 분기 내 추가 제작 시 물품 증정 15만원, 물품 대여 30만원 (VAT 별도)
              </p>
            </div>
          )}
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="text-center">
            <button
              onClick={onClose}
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingOptionModal;