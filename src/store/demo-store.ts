import { create } from "zustand";

interface MeetingResult {
  summary: string;
  tasks: string[];
  participants: string[];
  pdfUrl: string;
}

interface DemoStore {
  loading: boolean;
  result: MeetingResult | null;

  setLoading: (loading: boolean) => void;
  setResult: (result: MeetingResult) => void;
}

export const useDemoStore = create<DemoStore>((set) => ({
  loading: false,
  result: null,

  setLoading: (loading) => set({ loading }),
  setResult: (result) => set({ result }),
}));