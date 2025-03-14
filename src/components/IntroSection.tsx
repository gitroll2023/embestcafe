"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const IntroSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const partners = [
    { 
      name: '로지텍', 
      logo: 'https://i.namu.wiki/i/_wPVJYoecH_zLJpKeAWsY7Be_AVOfkkQQmOTMl_PZ7EumDlArqED1MhOxarzwrtQFDgw9GeWI0UL7ucGmx4uQQ.svg'
    },
    { 
      name: '조위', 
      logo: 'https://i.namu.wiki/i/lrK3DRCY_x20_pYsHcvkUN1lFF147f3ll_dzanp_VnLgtyv5P2zRNAy_pDFyoVDEcj5iLYZAxvyUuLOv8P-BWA.webp'
    },
    { 
      name: '레이저', 
      logo: 'https://i.namu.wiki/i/H7611UWVzAZFQXr8BKE0OJfuZL1OunhU1PDXOges7bF46Up7hgt0tJhRs89JtBzuBvI0nZ0DCVI0rSe043QK4g.svg'
    },
    { 
      name: '벤큐', 
      logo: 'https://i.namu.wiki/i/c3gw0Kq15xT33Sg7h99qSNC7ZtwjANAw2FQ9GArDJ8yTH6UoZqzH3Zbhz85un7_gK9M7waRBL1z02VL_4V1Cgw.webp'
    },
    { 
      name: '스틸시리즈', 
      logo: 'https://i.namu.wiki/i/DYFjX4ocyORthYWU6w6Z7PD37TfQm48KpTF1e7dt44sRQLo7yufPwCKmHEwjgWEh5106nEQv9vf_sIgere6awg.svg'
    },
  ];

  const mediaChannels = [
    {
      name: '인스타그램',
      image: '/images/insta.jpg',
      description: '인플루언서와 함께하는 제품 홍보',
      icon: 'bx bxl-instagram'
    },
    {
      name: '유튜브',
      image: '/images/youtube.jpg',
      description: '전문적인 제품 리뷰 및 언박싱',
      icon: 'bx bxl-youtube'
    },
    {
      name: '카페공식리뷰',
      image: '/images/cafe.jpg',
      description: '14.7만+ 회원들에게 직접 노출',
      icon: 'bx bx-coffee'
    },
    {
      name: '블로그리뷰',
      image: '/images/blog.jpg',
      description: '최적화된 블로그 포스팅으로 검색 노출',
      icon: 'bx bx-edit'
    }
  ];

  const openModal = (image: string, name: string) => {
    setSelectedImage(image);
    setSelectedName(name);
    document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 방지
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedName(null);
    document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 복원
  };

  return (
    <section id="intro" className="container-custom">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <h2 className="section-title">
        <span className="text-primary">EM베스트</span>를 소개합니다
      </h2>
      <p className="section-subtitle">
        14만 명 이상의 FPS 게이머들이 모인 국내 최대 FPS 장비 커뮤니티에서<br />
        당신의 제품을 효과적으로 알리세요
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div className="flex flex-col justify-center">
          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-4">왜 EM베스트인가요?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>국내 최대 규모의 FPS 게이머 커뮤니티 (현재 14.7만+)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>월 150만+ 페이지뷰의 높은 트래픽</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>유튜브, 블로그, 인스타그램 등 멀티 채널 마케팅</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>실제 게이머들의 진정성 있는 리뷰와 피드백</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>대행사 대비 합리적인 비용으로 높은 ROI 제공</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">EM베스트 활동 지표</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-gray-600 text-sm">카페 회원</p>
                <p className="text-2xl font-bold text-primary">14.7만+</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-gray-600 text-sm">월간 PV</p>
                <p className="text-2xl font-bold text-primary">150만+</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-gray-600 text-sm">유튜브 구독자</p>
                <p className="text-2xl font-bold text-primary">1.05만+</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-gray-600 text-sm">인스타 팔로워</p>
                <p className="text-2xl font-bold text-primary">6천+</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-gray-600 text-sm">블로그 등급</p>
                <p className="text-2xl font-bold text-primary">최적2+</p>
              </div>
             
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-80 md:h-96 mb-6 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/fps-background.jpg"
              alt="EM베스트 카페 스크린샷"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">함께하는 파트너사</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white p-3 rounded-lg flex items-center justify-center shadow-sm">
                  <div className="relative h-12 w-full flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} 로고`} 
                      style={{ 
                        height: '36px', 
                        opacity: 0.8
                      }}
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">다양한 채널을 통한 <span className="text-primary">통합 마케팅</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => openModal(channel.image, channel.name)}>
              <div className="relative h-48">
                <Image
                  src={channel.image}
                  alt={`${channel.name} 마케팅`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-white bg-opacity-80 rounded-full p-2">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <i className={`${channel.icon} text-primary text-2xl mr-2`}></i>
                  <h4 className="text-xl font-bold">{channel.name}</h4>
                </div>
                <p className="text-gray-600">{channel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
          >
            <div className="p-4 bg-primary text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedName}</h3>
              <button 
                onClick={closeModal}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative h-[60vh] w-full">
              <Image
                src={selectedImage}
                alt={selectedName || '이미지 상세보기'}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-4 bg-gray-100">
              <p className="text-gray-600 text-sm">
                {selectedName === '인스타그램' && 'EM베스트 홍보용 계정에 게시글을 올려, 다양한 SNS에 홍보효과를 극대화합니다.'}
                {selectedName === '유튜브' && 'EM공식 리뷰어가 진행하는 맞춤형 제품 리뷰 및 언박싱 영상입니다. 제품의 특징과 장점을 자세히 소개합니다.'}
                {selectedName === '카페공식리뷰' && '14.7만 명 이상의 EM베스트 카페 회원들에게 직접 노출되는 공식 리뷰입니다. 타겟 고객에게 직접적인 홍보가 가능합니다.'}
                {selectedName === '블로그리뷰' && '검색 최적화된 블로그 포스팅으로 장기적인 노출 효과를 제공합니다. 상세한 정보와 사용 후기를 담고 있습니다.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IntroSection;
