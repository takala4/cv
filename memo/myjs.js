  function CreateAmazonLink() {
      var elements = document.getElementsByClassName('amazon_link');
  for (let i=0; i<elements.length; i++){

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


        // Create Amazon link button
        var btn_Element = document.createElement("a");
        btn_Element.setAttribute("href", linkURL);
        btn_Element.setAttribute("class", "btn-square-pop");
        btn_Element.setAttribute("target", "_blank");

        var newContent = document.createTextNode("Amazon"); 
        btn_Element.appendChild(newContent); 
        
        elements[i].appendChild(btn_Element);
    }
  }