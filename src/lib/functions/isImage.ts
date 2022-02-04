interface Response {
	isImage: boolean,
	url: string,
}

const extensions = ['.jpg', '.png', '.jpeg', '.gif'];
const supportedSites = ['imgur'];

export function appendDataOfImage(url: string): Response {
	for (const extension of extensions) {
		if (url.endsWith(extension)) {
			return { isImage: true, url };
		}
	}
	for (const site of supportedSites) {
		if (url.includes(site)) {
			return { isImage: true, url: `${url}.jpg` };
		}
	}
	return { isImage: false, url };
}
