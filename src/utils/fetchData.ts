import axios from "axios";

const fetchData = async (currentURL: string) => {
  try {
    let apiKey = "";
    let language = "";
    const url = new URL(currentURL);
    const videoId = url.searchParams.get("v");

    await new Promise((resolve) => {
      chrome.storage.sync.get(["apiKey", "language"], (items) => {
        apiKey = items.apiKey;
        language = items.language;
        resolve(null);
      });
    });

    const response = await axios
      .create({
        baseURL: "https://youtubesummarizer-node-backend-b3ijrlrwga-as.a.run.app",
      })
      .post("/data", {
        apiKey: apiKey,
        video_id: videoId,
        language: language,
      });

    if (response.data && response.data.content) {
      return response.data.content;
    }
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
