import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: '통합 마케팅',
      description: '카페, 유튜브, 블로그, 인스타그램을 통한 통합 마케팅으로 다양한 접점에서 노출',
      icon: 'bx bx-globe',
    },
    {
      title: '체험단 운영',
      description: '노출빈도가 높은 블로거 및 인플루언서들을 통해 신뢰도 높은 콘텐츠 생산',
      icon: 'bx bx-group',
    },
    {
      title: '전용 게시판',
      description: '입점업체 전용게시판을 통한 카페 노출기회 제공',
      icon: 'bx bx-notepad',
    },
    {
      title: '실시간 피드백',
      description: '실제 게이머들과 실시간 피드백 교환 가능',
      icon: 'bx bx-chat',
    },
    {
      title: '최적 블로그 콘텐츠 노출',
      description: '선별된 입점 업체 제품을 네이버 블로그에 소개하는 특별 콘텐츠 기회 제공',
      icon: 'bx bx-bar-chart-alt-2',
    },
    {
      title: '브랜드 인지도 상승',
      description: 'FPS 게이머들 사이에서 브랜드 인지도 및 신뢰도 상승 효과',
      icon: 'bx bx-trending-up',
    },
  ];

  return (
    <section id="benefits" className="container-custom bg-gray-50">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <h2 className="section-title">
        <span className="text-primary">입점 혜택</span>을 확인하세요
      </h2>
      <p className="section-subtitle">
        EM베스트 입점으로 얻을 수 있는 다양한 혜택과 마케팅 효과를 소개합니다
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                <i className={`${benefit.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
            </div>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-primary text-white">
          <h3 className="text-2xl font-bold mb-2">1년 기준 비용 비교: EM베스트 vs 일반 마케팅 대행사</h3>
          <p>동일한 마케팅 효과를 위한 연간 비용 비교</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-4 px-6 text-left">마케팅 항목</th>
                <th className="py-4 px-6 text-left">일반 시장 시세 (연간)</th>
                <th className="py-4 px-6 text-left">EM베스트 비용 (연간)</th>
                <th className="py-4 px-6 text-left">연간 절감액</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">월 유튜브 컨텐츠 (12개)</td>
                <td className="py-4 px-6">120만원</td>
                <td className="py-4 px-6">60만원</td>
                <td className="py-4 px-6 text-green-600 font-medium">-60만원</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">최적화 블로그 홍보 (12건)</td>
                <td className="py-4 px-6">96만원</td>
                <td className="py-4 px-6">48만원</td>
                <td className="py-4 px-6 text-green-600 font-medium">-48만원</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">인스타그램 발행 (12건)</td>
                <td className="py-4 px-6">60만원</td>
                <td className="py-4 px-6">30만원</td>
                <td className="py-4 px-6 text-green-600 font-medium">-30만원</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">네이버 카페 제품 홍보글 (60건)</td>
                <td className="py-4 px-6">180만원</td>
                <td className="py-4 px-6">무료 제공</td>
                <td className="py-4 px-6 text-green-600 font-medium">-180만원</td>
              </tr>
              <tr className="bg-gray-50 font-bold">
                <td className="py-4 px-6">연간 총 비용</td>
                <td className="py-4 px-6">456만원</td>
                <td className="py-4 px-6">138만원</td>
                <td className="py-4 px-6 text-green-600">-318만원 (70% 절감)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 bg-primary bg-opacity-10 rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">타겟 마케팅의 효과</h3>
            <p className="mb-4">
              일반 마케팅 채널에서는 불특정 다수에게 광고를 노출시키지만, EM베스트에서는 <strong>실제 FPS 게임을 즐기고 관련 장비에 관심이 높은 잠재 고객</strong>에게만 집중적으로 노출됩니다.
            </p>
            <p className="font-medium">
              정확한 타겟팅으로 마케팅 비용 대비 효율이 최대 3배 이상 높아집니다.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">일반 마케팅</p>
                  <p className="font-bold">전환율 2-3%</p>
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">VS</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">EM베스트</p>
                  <p className="font-bold text-primary">전환율 8-10%</p>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded-full mb-2">
                <div className="h-4 bg-gray-400 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-primary rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
