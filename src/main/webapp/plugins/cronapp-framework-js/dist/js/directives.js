!function($app){var patternFormat=function(e){return e?$(e).attr("format")||"DD/MM/YYYY":"DD/MM/YYYY"},parsePermission=function(e){var t={visible:{public:!0},enabled:{public:!0}};if(e)for(var i=e.toLowerCase().trim().split(","),n=0;n<i.length;n++){var a=i[n].trim();if(a){var r=a.split(":");if(2==r.length){var l=r[0].trim(),o=r[1].trim();if(o){for(var s=o.split(";"),c={},d=0;d<s.length;d++){var p=s[d].trim();p&&(c[p]=!0)}t[l]=c}}}}return t};app.directive("asDate",function(){return{require:"^ngModel",restrict:"A",link:function(e,t,i,n){function a(){var e=t.val(),i=moment(e,patternFormat(t));i.isValid()&&n.$setViewValue(i.toDate())}if(n){var r=patternFormat(t),l={format:r,locale:"pt-BR",showTodayButton:!0,useStrict:!0,tooltips:{today:"Hoje",clear:"Limpar seleção",close:"Fechar",selectMonth:"Selecionar mês",prevMonth:"Mês anterior",nextMonth:"Próximo mês",selectYear:"Selecionar ano",prevYear:"Ano anterior",nextYear:"Próximo ano",selectDecade:"Selecionar década",prevDecade:"Década anterior",nextDecade:"Próxima década",prevCentury:"Século anterior",nextCentury:"Próximo século"}};"DD/MM/YYYY"!=r&&(l.sideBySide=!0),t.datetimepicker(l),t.on("dp.change",function(){$(this).is(":visible")&&($(this).trigger("change"),e.$apply(a))}),n.$render=function(){if(n.$viewValue){var e=moment(n.$viewValue);if(e.isValid())t.val(e.format(patternFormat(t)));else{var i=parseInt(n.$viewValue,10);e=moment(i),e.isValid()?t.val(e.format(patternFormat(t))):t.val("")}}else t.data("DateTimePicker").clear(),t.val("")},a()}}}}).directive("ngDestroy",function(){return{restrict:"A",link:function(scope,element,attrs,ctrl){element.on("$destroy",function(){attrs.ngDestroy&&attrs.ngDestroy.length>0&&(attrs.ngDestroy.indexOf("app.")>-1||attrs.ngDestroy.indexOf("blockly.")>-1?scope.$eval(attrs.ngDestroy):eval(attrs.ngDestroy))})}}}).directive("dynamicImage",["$compile",function(e){return{restrict:"E",replace:!0,scope:{ngModel:"@",width:"@",height:"@",style:"@",class:"@"},require:"ngModel",template:"<div></div>",init:function(e){e.ngModel||(e.ngModel=""),e.width||(e.width="128"),e.height||(e.height="128"),e.style||(e.style=""),e.class||(e.class=""),this.containsLetter(e.width)||(e.width+="px"),this.containsLetter(e.height)||(e.height+="px")},containsLetter:function(e){for(var t,i=0;i<e.length;i++){t=!0;for(var n=0;n<10;n++)parseInt(e[i])==n&&(t=!1);if(t)break}return t},link:function(t,i,n){this.init(t);var a=t;i.append('<div class="form-group upload-image-component" ngf-drop="" ngf-drag-over-class="dragover">                                  <img class="$class$" style="$style$; height: $height$; width: $width$;" ng-if="$ngModel$" data-ng-src="{{$ngModel$.startsWith(\'http\') || ($ngModel$.startsWith(\'/\') && $ngModel$.length < 1000)? $ngModel$ : \'data:image/png;base64,\' + $ngModel$}}">                                  <img class="$class$" style="$style$; height: $height$; width: $width$;" ng-if="!$ngModel$" data-ng-src="/plugins/cronapp-framework-js/img/selectImg.svg" class="btn" ng-if="!$ngModel$" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.setFile(\'$ngModel$\', $file)" accept="image/*;capture=camera">                                  <div class="remove btn btn-danger btn-xs" ng-if="$ngModel$" ng-click="$ngModel$=null">                                    <span class="glyphicon glyphicon-remove"></span>                                  </div>                                  <div class="btn btn-info btn-xs start-camera-button" ng-if="!$ngModel$" ng-click="cronapi.internal.startCamera(\'$ngModel$\')">                                    <span class="glyphicon glyphicon-facetime-video"></span>                                  </div>                                </div>'.split("$height$").join(a.height).split("$width$").join(a.width).split("$ngModel$").join(a.ngModel).split("$style$").join(a.style).split("$class$").join(a.class)),e(i)(i.scope())}}}]).directive("dynamicFile",["$compile",function(e){return{restrict:"E",replace:!0,scope:{ngModel:"@"},require:"ngModel",template:"<div></div>",init:function(e){e.ngModel||(e.ngModel="")},link:function(t,i,n){this.init(t);var a=t,r=a.ngModel.split("."),l=r[0],o=r[r.length-1],s=Math.floor(1e3*Math.random()+20);i.append('<div ng-show="!$ngModel$">                                  <div class="form-group upload-image-component" ngf-drop="" ngf-drag-over-class="dragover">                                     <img class="ng-scope" style="height: 128px; width: 128px;" ng-if="!$ngModel$" data-ng-src="/plugins/cronapp-framework-js/img/selectFile.png" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.uploadFile(\'$ngModel$\', $file, \'uploadprogress$number$\')" accept="*">                                    <progress id="uploadprogress$number$" max="100" value="0" style="position: absolute; width: 128px; margin-top: -134px;">0</progress>                                  </div>                                </div>                                 <div ng-show="$ngModel$" class="form-group upload-image-component">                                   <div class="btn btn-danger btn-xs ng-scope" style="float:right;" ng-if="$ngModel$" ng-click="$ngModel$=null">                                     <span class="glyphicon glyphicon-remove"></span>                                   </div>                                   <div>                                     <div ng-bind-html="cronapi.internal.generatePreviewDescriptionByte($ngModel$)"></div>                                     <a href="javascript:void(0)" ng-click="cronapi.internal.downloadFileEntity($datasource$,\'$field$\')">download</a>                                   </div>                                 </div> '.split("$ngModel$").join(a.ngModel).split("$datasource$").join(l).split("$field$").join(o).split("$number$").join(s)),e(i)(i.scope())}}}]).directive("pwCheck",[function(){"use strict";return{require:"ngModel",link:function(e,t,i,n){var a="#"+i.pwCheck;t.add(a).on("keyup",function(){e.$apply(function(){var e=t.val()===$(a).val();n.$setValidity("pwmatch",e)})})}}}]).directive("valid",function(){return{require:"^ngModel",restrict:"A",link:function(e,t,i,n){var a={cpf:CPF,cnpj:CNPJ};n.$validators[i.valid]=function(e,n){var r=e||n,l=a[i.valid].isValid(r);return l?t[0].setCustomValidity(""):t[0].setCustomValidity(t[0].dataset.errorMessage),l||!r}}}}).directive("cronappSecurity",function(){return{restrict:"A",link:function(e,t,i){var n=[];e.session&&e.session.roles&&(n=e.session.roles.toLowerCase().split(","));for(var a=parsePermission(i.cronappSecurity),r=!1,l=!1,o=0;o<n.length;o++){var s=n[o].trim();s&&(a.visible[s]&&(r=!0),a.enabled[s]&&(l=!0))}r||$(t).hide(),l||$(t).find("*").addBack().attr("disabled",!0)}}}).directive("cronappFilter",function(){return{restrict:"A",link:function(scope,element,attrs){var typeElement=$(element).attr("type");void 0!=attrs.asDate&&(typeElement="date");var filterTemplate="",filtersSplited=attrs.cronappFilter.split(";");$(filtersSplited).each(function(){this.length>0&&(filterTemplate+="text"==typeElement?this+"@=%{value}%;":this+"={value};")}),filterTemplate=filterTemplate.length>0?filterTemplate.substr(0,filterTemplate.length-1):"%{value}%","text"==typeElement?$(element).on("keyup",function(){var datasource=eval(attrs.crnDatasource),bindedFilter=filterTemplate.split("{value}").join(this.value);0==this.value.length&&(bindedFilter=""),datasource.search(bindedFilter)}):$(element).on("change",function(){var datasource=eval(attrs.crnDatasource),value=void 0,typeElement=$(this).attr("type");value="checkbox"==typeElement?$(this).is(":checked"):this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==value.toString().length&&(bindedFilter=""),datasource.search(bindedFilter)})}}})}(app);