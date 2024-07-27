const hostGet = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

export function getTracks() {
  return fetch(hostGet, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка сервера");
      }

      return response.json();
    })
    .catch((error) => {
      if (error.message === "Failed to fetch") {
        alert("Кажется что-то пошло не так, попробуйте позже");
      }
      if (error.message === "Сервер упал") {
        alert("Сервер сломался, попробуйте позже");
      }
    });
}
