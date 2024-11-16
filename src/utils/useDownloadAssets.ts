import { useState, useEffect } from "react";

type ReturnTypeOfUseDownloadAssets = {
    isDownloadingAssets: boolean;
};

type ParamsOfUseDownloadAssets = {
    urls: string[];
};

function downloadAsset(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = url;
    });
}

export function useDownloadAssets(params: ParamsOfUseDownloadAssets): ReturnTypeOfUseDownloadAssets {
    const { urls } = params;

    const [isDownloadingAssets, setIsDownloadingAssets] = useState(true);

    useEffect(() => {
        let isActive = true;

        const promises = urls.map(url => downloadAsset(url));

        Promise.all(promises).then(() => {
            if (!isActive) {
                return;
            }

            setIsDownloadingAssets(false);
        });

        return () => {
            isActive = false;
        };
    }, [urls]);

    return { isDownloadingAssets };
}
