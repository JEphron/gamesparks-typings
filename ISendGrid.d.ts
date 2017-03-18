interface ISendGrid {
	addTo(email: string, name: string): ISendGrid
	send(): string
	setFrom(email: string, name: string): ISendGrid
	setReplyTo(email: string): ISendGrid
	setBcc(bcc: string): ISendGrid
	setSubject(subject: string): ISendGrid
	setText(text: string): ISendGrid
	setHtml(html: string): ISendGrid
	addUploaded(uploadId: string): ISendGrid
	addDownloadable(shortCode: string): ISendGrid
	addHeader(key: string, value: string): ISendGrid
}