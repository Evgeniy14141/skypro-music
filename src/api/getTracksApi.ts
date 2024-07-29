const hostGet = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

export async function getTracks() {
  const response = await fetch(hostGet, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}