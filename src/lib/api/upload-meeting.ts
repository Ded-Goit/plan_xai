import axios from "axios";

export async function uploadMeeting(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await axios.post(
    "https://YOUR-N8N-URL/webhook/meeting-upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}