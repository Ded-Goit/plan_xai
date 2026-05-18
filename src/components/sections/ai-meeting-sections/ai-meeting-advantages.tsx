export function AiMeetingAdvantages() {
  const rows = [
    {
      feature: "Швидкість звіту",
      manual: "30 - 60 хв",
      standard: "5-10 хв",
      ours: "< 10 секунд",
    },
    {
      feature: "Створення задач",
      manual: "Ручне",
      standard: "Текст",
      ours: "Авто в Trello",
    },
    {
      feature: "Тегування людей",
      manual: "Ручне",
      standard: "Відсутнє",
      ours: "Diarization API",
    },
  ];

  return (
    <section
      className="px-6"
      style={{
        background: 'linear-gradient(160deg, #E8EEFF 0%, #F5F7FF 50%, #E8EEFF 100%)',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>

        {/* Title */}
        <h2
          className="text-center text-[#121B2A] mb-16"
          style={{ fontSize: '64px', fontWeight: 400 }}
        >
          Конкурентні переваги
        </h2>

        {/* Table */}
        <table style={{ width: '1400px', height: '272px', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: 'calc((1400px - 3 * 201px) / 4)' }} />
            <col style={{ width: '201px' }} />
            <col style={{ width: 'calc((1400px - 3 * 201px) / 4)' }} />
            <col style={{ width: '201px' }} />
            <col style={{ width: 'calc((1400px - 3 * 201px) / 4)' }} />
            <col style={{ width: '201px' }} />
            <col style={{ width: 'calc((1400px - 3 * 201px) / 4)' }} />
          </colgroup>
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left pb-4 text-[#6C5CE7]" style={{ fontSize: '18px', fontWeight: 400 }}>
                Функція
              </th>
              <th />
              <th className="text-center pb-4 text-[#6C5CE7]" style={{ fontSize: '18px', fontWeight: 400 }}>
                Ручна<br />робота
              </th>
              <th />
              <th className="text-center pb-4 text-[#6C5CE7]" style={{ fontSize: '18px', fontWeight: 400 }}>
                Стандартний<br />ШІ
              </th>
              <th />
              <th className="text-right pb-4 text-[#6C5CE7]" style={{ fontSize: '18px', fontWeight: 400 }}>
                Наш<br />Orchestrator
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="py-6 text-[#121B2A]" style={{ fontSize: '18px' }}>
                  {row.feature}
                </td>
                <td />
                <td className="py-6 text-center text-[#121B2A]" style={{ fontSize: '18px' }}>
                  {row.manual}
                </td>
                <td />
                <td className="py-6 text-center text-[#121B2A]" style={{ fontSize: '18px' }}>
                  {row.standard}
                </td>
                <td />
                <td className="py-6 text-right text-[#121B2A]" style={{ fontSize: '18px' }}>
                  {row.ours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  );
}