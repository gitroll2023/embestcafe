'use client';

import React, { useState, useEffect } from 'react';

const EarlyBirdBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showOriginalPrice, setShowOriginalPrice] = useState(true);

  // 남은 시간 계산 함수
  const calculateTimeLeft = () => {
    const deadline = new Date('2025-04-15T23:59:59');
    const now = new Date();
    const difference = deadline.getTime() - now.getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  };

  // 1초마다 남은 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  // 가격 상승 애니메이션 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setShowOriginalPrice(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // 숫자 포맷팅 함수 (항상 두 자리 숫자로 표시)
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] bg-gradient-to-r from-primary to-blue-600 text-white py-3 text-center z-[100] shadow-md">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          <div className="mb-2 md:mb-0">
            <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
              얼리버드 할인
            </span>
          </div>
          
          {/* 카운트다운 타이머 */}
          <div className="flex items-center justify-center space-x-2 mx-4 my-2">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold bg-white bg-opacity-20 px-2 py-1 rounded">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-xs md:text-sm mt-1">일</span>
            </div>
            <span className="text-xl md:text-2xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold bg-white bg-opacity-20 px-2 py-1 rounded">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-xs md:text-sm mt-1">시</span>
            </div>
            <span className="text-xl md:text-2xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold bg-white bg-opacity-20 px-2 py-1 rounded">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-xs md:text-sm mt-1">분</span>
            </div>
            <span className="text-xl md:text-2xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold bg-white bg-opacity-20 px-2 py-1 rounded animate-pulse">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-xs md:text-sm mt-1">초</span>
            </div>
          </div>
          
          {/* 가격 정보 */}
          <div className="relative h-8 w-48 overflow-hidden mt-1 md:mt-0">
            <div className={`absolute inset-0 flex justify-center items-center transition-all duration-300 transform ${showOriginalPrice ? 'translate-y-0' : '-translate-y-full'}`}>
              <span className="text-base md:text-lg font-medium">현재 가격으로 입점</span>
            </div>
            <div className={`absolute inset-0 flex justify-center items-center transition-all duration-300 transform ${showOriginalPrice ? 'translate-y-full' : 'translate-y-0'}`}>
              <span className="text-base md:text-lg font-medium text-yellow-300">이후 가격 인상 예정</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyBirdBanner;
