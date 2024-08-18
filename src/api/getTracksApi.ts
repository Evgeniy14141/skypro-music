/* const hostGet =
  "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/";

export async function getTracks() {
  const response = await fetch(hostGet, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data.data;
} */

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

export async function fetchFavoriteTracks(token: string) {
  const response = await fetch(
    "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data.data;
}

export async function addLikeTrack(token: string, id: number) {
  const response = await fetch(
    `https://webdev-music-003b5b991590.herokuapp.com/catalog/track/${id}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data.data;
}

export async function removeLikeTrack(token: string, id: number) {
  const response = await fetch(
    `https://webdev-music-003b5b991590.herokuapp.com/catalog/track/${id}/favorite/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data.data;
}

export async function getSelectionTracks(id: string) {
  const fullId = Number(id) + 1;
  const response = await fetch(
    `https://webdev-music-003b5b991590.herokuapp.com/catalog/selection/${fullId}/`
  );

  if (!response.ok) {
    throw new Error("Ошибка получения");
  }

  const data = await response.json();
  return data.data;
}
