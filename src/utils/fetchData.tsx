// api.ts
import axios from "axios";

const fetchData = async (currentURL: string) => {
    try {
        const apiKey = await chrome.storage.sync.get("apiKey");
        const language = await chrome.storage.sync.get("language");

        const url = new URL(currentURL);
        const videoId = url.searchParams.get("v");

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

    return null;
};

export {fetchData};