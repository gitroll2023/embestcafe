'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EarlyBirdBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  // 남은 시간 계산 함수
  const calculateTimeLeft = () => {
    const deadline = new Date('2025-10-01T23:59:59');
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
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 숫자 포맷팅 함수
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white z-[100] shadow-lg">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* 왼쪽: 얼리버드 텍스트 */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-pulse">🔥</span>
              <div>
                <p className="text-xs font-medium opacity-90">LIMITED TIME OFFER</p>
                <p className="text-lg font-bold">얼리버드 특별 혜택</p>
              </div>
            </div>
          </div>

          {/* 중앙: 카운트다운 */}
          <div className="hidden md:flex items-center space-x-3">
            <span className="text-sm font-medium">마감까지</span>
            <div className="flex items-center space-x-1">
              <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-2xl font-bold">{formatNumber(timeLeft.days)}</span>
                <span className="text-xs ml-1">일</span>
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</span>
                <span className="text-xs ml-1">시</span>
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</span>
                <span className="text-xs ml-1">분</span>
              </div>
              <span className="text-xl font-bold animate-pulse">:</span>
              <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-2xl font-bold text-yellow-300">{formatNumber(timeLeft.seconds)}</span>
                <span className="text-xs ml-1">초</span>
              </div>
            </div>
          </div>

          {/* 모바일: 간단한 카운트다운 */}
          <div className="flex md:hidden items-center">
            <div className="text-center">
              <p className="text-xs font-medium">D-{timeLeft.days}</p>
              <p className="text-sm font-bold">{formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</p>
            </div>
          </div>

          {/* 오른쪽: CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <p className="text-xs font-medium line-through opacity-70">정가 적용 예정</p>
              <p className="text-lg font-bold text-yellow-300">지금이 최저가!</p>
            </div>
            <Link 
              href="#pricing" 
              className="bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:bg-yellow-100 transition-all transform hover:scale-105 shadow-lg animate-bounce"
            >
              지금 신청하기
            </Link>
          </div>
        </div>
      </div>

      {/* 하단 프로그레스 바 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-yellow-400 animate-pulse"
          style={{ width: `${((timeLeft.days * 24 + timeLeft.hours) / (220 * 24)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default EarlyBirdBanner;