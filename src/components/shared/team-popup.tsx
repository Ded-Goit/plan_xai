'use client';

const team = [
  { name: 'СОЛОМІЯ', role: 'AI CREATOR', social: 'be', href: 'https://www.behance.net/solomiiastudio' },
  { name: 'МАРИНА', role: 'AI CREATOR', social: 'in', href: 'https://www.linkedin.com/in/maryna-pochkai-3b202340b/' },
  { name: 'ТЕТЯНА', role: 'UX/UI DESIGNER', social: 'in', href: 'https://www.linkedin.com/in/tetiana-retynska/' },
  { name: 'КАТЕРИНА', role: 'AI AUTOMATOR | WORKFLOW BUILDER', social: 'in', href: 'https://www.linkedin.com/in/kateryna-ishkova/' },
  { name: 'ВАЛЕРІЯ', role: 'UX/UI DESIGNER', social: 'in', href: 'https://www.linkedin.com/in/valeria-maslenko-6a125b33b' },
  { name: 'АНАСТАСІЯ', role: 'AI CREATOR', social: 'be', href: 'https://www.behance.net/anastacvalenti' },
  { name: 'ГАЛИНА', role: 'TEAM LEAD | DATA ANALIST', social: 'in', href: 'https://www.linkedin.com/in/halyna-yurkova/' },
  { name: 'ЕЛЬМІРА', role: 'FULL-STACK DEVELOPER', social: 'in', href: ' https://www.linkedin.com/in/elmira-mammadova-022b24337/' },
  { name: 'МАРИНА', role: 'DATA ANALYST', social: 'in', href: '#' },
  { name: 'ВЛАД', role: 'DATA ANALYST', social: 'in', href: 'https://www.linkedin.com/in/vladyslav-kondratyev-99a2bb365/' },
  { name: 'АНДРІЙ', role: 'FULL-STACK DEVELOPER | DATA ANALYST', social: 'in', href: 'https://www.linkedin.com/in/andrii-ded-romanov/' },
];

type TeamMember = (typeof team)[number];

function SocialButton({ member }: { member: TeamMember }) {
  function handleClick() {
    if (member.href && member.href !== '#') {
      window.open(member.href, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <button
      onClick={handleClick}
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#3B82F6',
        border: 'none',
        color: '#ffffff',
        fontSize: '12px',
        fontWeight: 700,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'background 0.2s, transform 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#2563EB';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#3B82F6';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {member.social === 'be' ? 'Be' : 'in'}
    </button>
  );
}

interface TeamPopupProps {
  onClose: () => void;
}

export function TeamPopup({ onClose }: TeamPopupProps) {
  function handleBackdropClick() {
    onClose();
  }

  function handleContentClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: '#E3ECFF',
        overflowY: 'auto',       // ← whole page scrolls if needed
      }}
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed',     // ← fixed so always visible while scrolling
          top: '24px',
          right: '32px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#121B2A',
          fontSize: '32px',
          lineHeight: 1,
          zIndex: 51,
        }}
      >
        ×
      </button>

      {/* Scrollable content */}
      <div
        style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '48px 32px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={handleContentClick}
      >
        {/* Title */}
        <h2 style={{
          color: '#121B2A',
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: '16px',
          textAlign: 'center',
        }}>
          Знайомтесь з нашою командою
        </h2>

        {/* Description */}
        <div style={{
          maxWidth: '600px',
          marginBottom: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          textAlign: 'center',
        }}>
          <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
            Цей сайт був створений завдяки зусиллям студентів GoIT, які працювали над його розробкою. Кожен учасник команди вніс важливий внесок, застосовуючи знання, навички та креативність для досягнення спільної мети.
          </p>
          <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
            Познайомтеся з людьми, які стоять за створенням цього проекту:
          </p>
        </div>

        {/* Team image — natural size, no forced height */}
        <div style={{
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          lineHeight: 0,         // ← removes gap under img
        }}>
          <img
            src="/images/team-photo.webp"
            alt="Команда planxAi"
            style={{
              width: '100%',
              height: 'auto',    // ← natural height, no cropping
              display: 'block',
            }}
          />
        </div>

        {/* Round social buttons */}
        <div style={{
        position: 'absolute',
        bottom: '-24px',
        left: 0,
        right: 0,
        display: 'grid',
        gridTemplateColumns: `repeat(${team.length}, 110px)`,  // ← matches image columns exactly
        paddingLeft: '0px',
        paddingRight: '0px',
        }}>
        {team.map((member, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
            <SocialButton member={member} />
            </div>
        ))}
        </div>
    {/* Spacer so buttons aren't clipped by overflow:hidden */}
    <div style={{ height: '34px' }} />

      </div>
    </div>
  );
}