class gobObj {
  constructor(webUrl,apiUrl){
    this.webUrl = webUrl;
    this.apiUrl = apiUrl;
  }

  toGetWebUrl(url){
     return this.webUrl + url;
  }
}

export  default gobObj;
