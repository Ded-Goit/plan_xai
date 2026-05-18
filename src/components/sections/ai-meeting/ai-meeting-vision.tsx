export function AiMeetingVision() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6"
      style={{
        background: '#0F1B2D',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div style={{ width: '760px' }}>
        {/* Quote */}
        <h2
          className="text-white"
          style={{ fontSize: '48px', fontWeight: 400, lineHeight: '120%', marginBottom: '48px' }}
        >
          "Найкращий спосіб передбачити майбутнє
          <br />
          <span style={{ color: '#6C5CE7', letterSpacing: '0.15em', fontWeight: 400, whiteSpace: 'nowrap' }}>
            - а в т о м а т и з у в а т и
          </span>
          <br />
          його."
        </h2>

        {/* Attribution */}
        <p style={{ fontSize: '24px', color: '#EAF1FF', marginBottom: '48px' }}>
        — Наша візія на 2025 рік
        </p>
        {/* CTA Button */}
        <button
          className="px-8 py-3 rounded-lg text-white"
          style={{
            background: '#6C5CE7',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          Спробувати AI Meeting
        </button>
      </div>
    </section>
  );
}