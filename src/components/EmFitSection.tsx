import React from 'react';
import Image from 'next/image';

const EmFitSection = () => {
  return (
    <section id="emfit" className="container-custom bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span>BETA</span>
            <span>AI 장비 추천 서비스</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI가 콕 집어주는<br className="md:hidden" /> <span className="text-primary">EM템핏</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            게임 종류, 손 크기, 손목 상태만 입력하면<br className="md:hidden" />
            AI가 1분 만에 나에게 딱 맞는 장비 하나를 추천합니다
          </p>
        </div>

        {/* 실제 서비스 화면 */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-full max-w-xs rounded-[2rem] border-4 border-gray-900 shadow-2xl overflow-hidden bg-black">
            <Image
              src="/images/emfit-preview.png"
              alt="EM템핏 AI 장비 추천 서비스 실제 화면"
              width={1170}
              height={1992}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center max-w-xs">
            2026년 6월 말 베타 오픈, 현재 유저 피드백을 받으며 고도화하고 있는 서비스입니다
          </p>
        </div>

        {/* 입점 vs 미입점 비교 */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 mb-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              추천 결과, 입점 여부로 노출이 갈립니다
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h4 className="text-xl font-bold mb-3">✅ 입점 브랜드</h4>
                <ul className="space-y-2">
                  <li>• 추천 결과 1~3위 고정 노출</li>
                  <li>• &apos;입점 정품·국내 정식 유통·AS&apos; 신뢰 배지</li>
                  <li>• 유저 신뢰도와 구매 전환율 상승</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h4 className="text-xl font-bold mb-3">❌ 미입점 브랜드</h4>
                <ul className="space-y-2">
                  <li>• 4~5위 &apos;번외 참고용&apos;으로 노출</li>
                  <li>• 정품 보증 배지 없음</li>
                  <li>• 유저가 직접 판매처 검색 후 확인 필요</li>
                </ul>
              </div>
            </div>
            <p className="text-lg">
              지금 입점하시면 <span className="font-bold text-yellow-300">우선 노출 혜택</span>을 가장 먼저 선점하실 수 있습니다
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://fit.embest.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full shadow-xl hover:shadow-primary/25 hover:bg-opacity-90 transition-all hover:scale-105"
          >
            EM템핏 체험해보기
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmFitSection;
