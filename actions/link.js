"use server";
import { defaultHeader } from "@/utils/header";
import { makeid } from "@/utils/link";

export async function linkToShortAction(prevState, formData) {
  const longUrl = formData.get("long_url");
  if (!longUrl) return { error: "Url alanı boş olamaz" };
  const regex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

  if (!regex.test(longUrl)) return { error: "Geçersiz bir url girdiniz" };
  const shortUrl = makeid(6);

  const response = await fetch(`https://ifqlrhtthowecgprpcmq.supabase.co/rest/v1/urls`, {
    method: "POST",
    headers: defaultHeader,
    body: JSON.stringify({
      short_url: shortUrl,
      long_url: longUrl,
    }),
  });

  if (response.ok) {
    return { message: "Link başarıyla kısaltıldı", shortUrl: shortUrl };
  }
}
export async function getShortUrls() {
  const response = await fetch(`https://ifqlrhtthowecgprpcmq.supabase.co/rest/v1/urls`, {
    method: "GET",
    headers: defaultHeader,
  });

  const data = await response.json();
  console.log(data);
  if (response.ok) {
    const newData = data;
    return newData;
  }
}
