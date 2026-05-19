"use client";

import { useRef } from "react";
import { uploadMeeting } from "@/lib/api/upload-meeting";
import { useDemoStore } from "@/store/demo-store";

export function DemoModal() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { loading, setLoading, setResult } = useDemoStore();

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setLoading(true);

      const result = await uploadMeeting(file);

      setResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleUpload}
      />

      <button
        onClick={() => inputRef.current?.click()}
        className="px-8 py-3 rounded-full bg-[#6C5CE7] text-white"
      >
        {loading ? "Обробка..." : "Спробувати демо"}
      </button>
    </div>
  );
}