function CreateAmazonLink() {
	var elements = document.getElementsByClassName('bookimg');
	for (let i = 0; i < elements.length; i++) {

		// Get asin
		var asin = elements[i].dataset.asin;

		// Create link URL and figre URL
		var linkURL = 'https://www.amazon.co.jp/dp/' + asin + '/ref=as_li_ss_tl&tag=takalatokyo02-22';
		var figURL = '//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=' + asin + '&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1';

		// Create <img> element
		var img_Element = document.createElement("img");
		img_Element.setAttribute("src", figURL);

		// Create <a> element 
		var a_Element = document.createElement("a");
		a_Element.setAttribute("href", linkURL);
		a_Element.setAttribute("target", "_blank");

		// Insert <img> in <a>
		a_Element.appendChild(img_Element);


		// Insert <a> in <div>
		elements[i].appendChild(a_Element);

	}
}


CreateAmazonLink();

