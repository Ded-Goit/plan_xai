'use client';

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('phone');
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [hoveredTab, setHoveredTab] = useState<'email' | 'phone' | null>(null);
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+380');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validatePhone = (val: string) => /^\d{7,15}$/.test(val.replace(/\s/g, ''));
  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSendCode = () => {
    setSubmitted(true);
    if (activeTab === 'phone' && !validatePhone(phone)) {
      setErrors({ phone: 'Введіть коректний номер телефону' });
      return;
    }
    if (activeTab === 'email' && !validateEmail(email)) {
      setErrors({ email: 'Введіть коректну електронну пошту' });
      return;
    }
    setErrors({});
  };

  const handleRegister = () => {
    setSubmitted(true);
    if (activeTab === 'phone' && !validatePhone(phone)) {
      setErrors({ phone: 'Введіть коректний номер телефону' });
      return;
    }
    if (activeTab === 'email' && !validateEmail(email)) {
      setErrors({ email: 'Введіть коректну електронну пошту' });
      return;
    }
    setErrors({});
  };

  const hasError = activeTab === 'phone' ? !!errors.phone : !!errors.email;

  return (
    <>
      <Header />
      <main
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #EEF2FF 0%, #ffffff 50%, #EEF2FF 100%)',
          paddingTop: '150px',
          paddingBottom: '40px',
        }}
      >
        <div
          className="flex flex-col items-center rounded-3xl"
          style={{
            width: '514px',
            gap: '16px',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '2px solid transparent',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), linear-gradient(135deg, #6A8DFF 0%, #ffffff 50%, #6A8DFF 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            backdropFilter: 'blur(9px)',
            padding: '40px 60px 44px',
          }}
        >
          {/* Users icon */}
          <img
            src="/icons/Group 11.svg"
            alt="users"
            style={{
              width: '72px',
              height: '72px',
              filter: 'brightness(0) invert(1)',
              opacity: 0.9,
            }}
          />

          {/* Title */}
          <h1 className="text-[#121B2A] text-[20px] font-semibold" style={{ margin: '0' }}>
            Зареєструватися
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-[12px] text-center leading-relaxed px-4" style={{ margin: '0' }}>
            Реєстрація за допомогою зареєстрованого номера телефону або облікового запису соціальної мережі призведе до входу у ваш обліковий запис planxAi
          </p>

          {/* Tabs */}
          <div className="flex w-full border-b border-gray-200" style={{ marginBottom: '4px' }}>
            {(['email', 'phone'] as const).map((tab) => {
              const label = tab === 'email' ? 'Пошта' : 'Номер телефону';
              const isActive = activeTab === tab;
              const isHovered = hoveredTab === tab && !isActive;
              return (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setErrors({}); setSubmitted(false); }}
                  onMouseEnter={() => setHoveredTab(tab)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="flex-1 pb-3 text-[15px] transition-all"
                  style={{
                    color: isActive ? 'rgba(18, 27, 42, 1)' : isHovered ? '#4a3ab5' : '#6C5CE7',
                    borderBottom: isActive ? '2px solid rgba(18, 27, 42, 1)' : 'none',
                    marginBottom: isActive ? '-1px' : '0',
                    background: isHovered ? 'rgba(108, 92, 231, 0.05)' : 'transparent',
                    borderRadius: '6px 6px 0 0',
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Email input */}
          {activeTab === 'email' && (
            <div style={{ width: '394px' }}>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  if (submitted) setErrors(v => ({ ...v, email: validateEmail(e.target.value) ? undefined : 'Введіть коректну електронну пошту' }));
                }}
                className="rounded-full px-4 text-[13px] text-[#121B2A] outline-none bg-white w-full"
                style={{
                  border: `1px solid ${errors.email ? '#ef4444' : 'rgba(0, 0, 0, 0.15)'}`,
                  height: '42px',
                  transition: 'border-color 0.2s',
                }}
              />
              {errors.email && (
                <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '4px', paddingLeft: '12px' }}>
                  {errors.email}
                </p>
              )}
            </div>
          )}

          {/* Phone input */}
          {activeTab === 'phone' && (
            <div style={{ width: '394px' }}>
              <div className="flex gap-2">
                <div className="relative" style={{ width: '119px', flexShrink: 0 }}>
                  <select
                    value={countryCode}
                    onChange={e => setCountryCode(e.target.value)}
                    className="appearance-none rounded-full px-3 text-[13px] text-[#121B2A] outline-none bg-white w-full"
                    style={{
                      border: `1px solid ${errors.phone ? '#ef4444' : 'rgba(0, 0, 0, 0.15)'}`,
                      height: '42px',
                      paddingRight: '28px',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <option>+380</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+48</option>
                  </select>
                  <span
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#121B2A]"
                    style={{ fontSize: '10px' }}
                  >
                    ▾
                  </span>
                </div>
                <input
                  type="tel"
                  placeholder="502001030"
                  value={phone}
                  onChange={e => {
                    const val = e.target.value.replace(/[^\d\s]/g, '');
                    setPhone(val);
                    if (submitted) setErrors(v => ({ ...v, phone: validatePhone(val) ? undefined : 'Введіть коректний номер телефону' }));
                  }}
                  className="rounded-full px-4 text-[13px] text-[#121B2A] outline-none bg-white"
                  style={{
                    border: `1px solid ${errors.phone ? '#ef4444' : 'rgba(0, 0, 0, 0.15)'}`,
                    width: '265px',
                    height: '42px',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>
              {errors.phone && (
                <p style={{ color: '#ef4444', fontSize: '11px', marginTop: '4px', paddingLeft: '130px' }}>
                  {errors.phone}
                </p>
              )}
            </div>
          )}

          {/* Send code */}
          <button
            onClick={handleSendCode}
            className="rounded-full text-[#121B2A] text-[14px] transition-all"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.15)',
              width: '394px',
              height: '42px',
              background: 'white',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#f3f4f6';
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
            }}
          >
            Надіслати код підтвердження
          </button>

          {/* Register */}
          <button
            onClick={handleRegister}
            className="rounded-full text-white text-[14px] font-medium transition-all"
            style={{
              background: 'rgba(59, 130, 246, 1)',
              width: '394px',
              height: '42px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(37, 99, 235, 1)';
              e.currentTarget.style.transform = 'scale(1.01)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(59, 130, 246, 1)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Зареєструватися
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-[12px] whitespace-nowrap">або увійдіть за допомогою</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { url: '/icons/Frame 17.svg', alt: 'Facebook' },
              { url: '/icons/Frame 18.svg', alt: 'Google' },
              { url: '/icons/Group 17.svg', alt: 'Email' },
            ].map((icon, i) => (
              <button
                key={i}
                onMouseEnter={() => setHoveredSocial(i)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: 'none',
                  background: hoveredSocial === i ? '#c5cfe8' : '#D8DEEA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s, transform 0.2s',
                  transform: hoveredSocial === i ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                <img
                  src={icon.url}
                  alt={icon.alt}
                  style={{
                    width: '26px',
                    height: '26px',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Login link */}
          <p className="text-gray-400 text-[13px]" style={{ margin: '0' }}>
            Вже маєте обліковий запис?{" "}
            <Link href="/login" className="text-[#6C5CE7] hover:underline">
              Увійти
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}