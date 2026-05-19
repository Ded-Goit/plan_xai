"use client";

import { useDemoStore } from "@/store/demo-store";

export function DemoResults() {
  const { result } = useDemoStore();

  if (!result) return null;

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <div className="bg-[#0F1B2D] rounded-3xl p-10 text-white space-y-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Summary
          </h2>

          <p className="text-white/80 leading-relaxed">
            {result.summary}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Action Items
          </h2>

          <ul className="space-y-2">
            {result.tasks.map((task, index) => (
              <li key={index}>
                • {task}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Participants
          </h2>

          <ul className="space-y-2">
            {result.participants.map((person, index) => (
              <li key={index}>
                {person}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={result.pdfUrl}
          target="_blank"
          className="inline-flex px-6 py-3 rounded-full bg-[#6C5CE7]"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}