'use client';

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #E8ECFF 0%, #f5f6ff 40%, #ffffff 60%, #E8ECFF 100%)',
        marginTop: '100px',
        paddingTop: '60px',
        paddingBottom: '0px',
        minHeight: '100vh',
      }}
    >
      <div className="max-w-7xl mx-auto relative h-full px-6" style={{ minHeight: 'calc(100vh - 100px)' }}>

        {/* Top row — title left, description right */}
        <div className="flex justify-between items-start">
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 400,
              lineHeight: '115%',
              letterSpacing: '-0.02em',
              maxWidth: '400px',
            }}
          >
            <span style={{ color: '#121B2A' }}>PlanxAi — </span>
            <span style={{ color: '#6C5CE7' }}>AI Operating System</span>
            <span style={{ color: '#121B2A' }}> для управління бізнесом</span>
          </h1>

          <p
            className="text-right"
            style={{
              color: '#121B2A',
              fontSize: '16px',
              lineHeight: '1.5',
              maxWidth: '240px',
              marginTop: '8px',
            }}
          >
            AI допомагає власникам бізнесу бачити ризики, приймати рішення та автоматично керувати задачами.
          </p>
        </div>

        {/* Dashboard image */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '20px',
            left: '30%',
            zIndex: 0,
            width: '758px',
          }}
        >
          <Image
            src="/images/video.webp"
            alt="PlanxAi Dashboard"
            width={758}
            height={522}
            className="object-contain"
            style={{
              transform: 'perspective(1400px) rotateX(10deg) rotateY(-18deg) rotateZ(2deg)',
              filter: 'drop-shadow(0 40px 60px rgba(108,92,231,0.15))',
            }}
          />
        </div>

        {/* Bottom row — pinned to bottom */}
        <div
          className="absolute left-0 right-0 flex items-end justify-between z-10 px-6"
          style={{ bottom: '60px' }}
        >
          {/* Left buttons */}
          <div className="flex flex-col gap-3">
            {/* "Огляд проекту" — прокручує до секції #product */}
            <Link
              href="https://youtu.be/9eZkoC_5YRM"
              style={{
                display: 'inline-block',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 400,
                padding: '10px 28px',
                borderRadius: '100px',
                border: '1.5px solid #121B2A',
                background: 'transparent',
                color: '#121B2A',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              Огляд проекту
            </Link>

            {/* "Спробувати демо" — веде на сторінку /demo */}
            <Link
              href="/demo"
              style={{
                display: 'inline-block',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 400,
                padding: '10px 28px',
                borderRadius: '100px',
                border: 'none',
                background: '#6C5CE7',
                color: '#ffffff',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              Спробувати демо
            </Link>
          </div>

          {/* Right gradient-border buttons */}
          <div className="flex flex-col gap-3">
            {/* "Ai-Meeting" — веде на сторінку /meeting */}
            <Link
              href="/ai-meeting"
              style={{
                display: 'inline-block',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 400,
                padding: '10px 28px',
                borderRadius: '100px',
                color: '#121B2A',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #1A0F91 0%, #89FFB2 50%, #1A0F91 100%) border-box',
                border: '2.5px solid transparent',
                textDecoration: 'none',
              }}
            >
              Ai-Meeting
            </Link>

            {/* "Ai-помічник" — веде на сторінку /assistant */}
            <Link
              href="/assistant"
              style={{
                display: 'inline-block',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 400,
                padding: '10px 28px',
                borderRadius: '100px',
                color: '#121B2A',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #1A0F91 0%, #89FFB2 50%, #1A0F91 100%) border-box',
                border: '2.5px solid transparent',
                textDecoration: 'none',
              }}
            >
              Ai-помічник
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
