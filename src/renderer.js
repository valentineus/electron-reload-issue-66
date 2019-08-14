// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const remote = require('electron').remote;
const $ = require("jquery");

window.onload = function () {
	const crypto = remote.require('crypto')

	$('#text-input').bind('input propertychange', function () {
		const text = this.value

		const md5 = crypto.createHash('md5').update(text, 'utf8').digest('hex')
		$('#md5-output').text(md5)

		const sha1 = crypto.createHash('sha1').update(text, 'utf8').digest('hex')
		$('#sha1-output').text(sha1)

		const sha256 = crypto.createHash('sha256').update(text, 'utf8').digest('hex')
		$('#sha256-output').text(sha256)

		const sha512 = crypto.createHash('sha512').update(text, 'utf8').digest('hex')
		$('#sha512-output').text(sha512)
	})

	$('#text-input').focus() // focus input box
};
