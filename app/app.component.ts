import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <style type="text/css">

    .one-row-iframe-container {
        position: relative;
        width: 100%;
        height: 300px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -moz-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        margin-bottom: 40px;
    }

    .one-row-iframe-container iframe {
        height: 100%;
        width: 100%;
        border: 1px solid #d6dce2;
        -webkit-box-shadow: 0 0 5px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 0 0 5px 0px rgba(0,0,0,0.2);
        box-shadow: 0 0 5px 0px rgba(0,0,0,0.2);
    }

    
    .multiple-iframe-container {
        position: relative;
        width: 100%;
        height: 750px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -moz-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .multiple-iframe-container iframe {
        height: 100%;
        width: -webkit-calc(50% - 20px);
        width: -moz-calc(50% - 20px);
        width: calc(50% - 20px);
        border: 1px solid #d6dce2;
        -webkit-box-shadow: 0 0 5px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 0 0 5px 0px rgba(0,0,0,0.2);
        box-shadow: 0 0 5px 0px rgba(0,0,0,0.2);
    }
</style>
<div class="one-row-iframe-container">

    <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="http://maslaw.bmc.com:8000/app-full/#/catalog/home?simplifiedCatalog&amp;withoutCatalogSearch&amp;showOneSection"></iframe>
    
</div>

<div class="multiple-iframe-container">

    <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="http://maslaw.bmc.com:8000/app-full/#/catalog/section-3918349e-b12c-4428-944a-a33878c23125?simplifiedCatalog&amp;withoutCatalogSearch&amp;largeSectionView"></iframe>
    
    <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="http://maslaw.bmc.com:8000/app-full/#/profile?simpleMyActivity"></iframe>

</div>

  `
})
export class AppComponent  {
}
