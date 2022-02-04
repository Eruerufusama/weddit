export default function sanitizeData(data: any): any {
	return data.data.children.map((post) => post.data);
}
