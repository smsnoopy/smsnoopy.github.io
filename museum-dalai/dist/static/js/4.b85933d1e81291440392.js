webpackJsonp([4],{IyYE:function(t,e){},"Oo/E":function(t,e){},nlep:function(t,e){},seB9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("//Fk"),i=a.n(l),s=a("ZW30"),n={name:"singleFileUpload",props:{value:String},computed:{imageUrl:function(){return this.value},imageName:function(){return null!=this.value&&""!==this.value?this.value.substr(this.value.lastIndexOf("/")+1):null},showFileList:{get:function(){return null!==this.value&&""!==this.value&&void 0!==this.value},set:function(t){}}},data:function(){return{dataObj:{policy:"",signature:"",key:"",ossaccessKeyId:"",dir:"",host:""},dialogVisible:!1,fileList:[{name:"藏品说明书1.doc",url:""},{name:"藏品说明书2.xls",url:""}]}},methods:{emitInput:function(t){this.$emit("input",t)},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")},handleRemove:function(t,e){this.emitInput("")},handlePreview:function(t){this.dialogVisible=!0},beforeUpload:function(t){var e=this;return new i.a(function(t,a){Object(s.a)().then(function(a){e.dataObj.policy=a.data.policy,e.dataObj.signature=a.data.signature,e.dataObj.ossaccessKeyId=a.data.accessKeyId,e.dataObj.key=a.data.dir+"/${filename}",e.dataObj.dir=a.data.dir,e.dataObj.host=a.data.host,t(!0)}).catch(function(t){console.log(t),a(!1)})})},handleUploadSuccess:function(t,e){this.showFileList=!0,this.fileList.pop(),this.fileList.push({name:e.name,url:this.dataObj.host+"/"+this.dataObj.dir+"/"+e.name}),this.emitInput(this.fileList[0].url)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-upload",{staticClass:"disabled",attrs:{action:"http://xxxx.aliyuncs.com",data:t.dataObj,multiple:!1,"show-file-list":t.showFileList,"file-list":t.fileList,"before-upload":t.beforeUpload,"before-remove":t.beforeRemove,"on-remove":t.handleRemove,"on-success":t.handleUploadSuccess,"on-preview":t.handlePreview}}),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.fileList[0].url,alt:""}})])],1)},staticRenderFns:[]};var r=a("VU/8")(n,o,!1,function(t){a("nlep")},null,null).exports,d=a("bOdI"),c=a.n(d),u={name:"multiImgUpload",props:{value:Array,maxCount:{type:Number,default:1}},data:function(){return{dataObj:{policy:"",signature:"",key:"",ossaccessKeyId:"",dir:"",host:""},dialogVisible:!1,dialogImageUrl:null}},computed:{fileList:function(){for(var t=[],e=0;e<this.value.length;e++)t.push({url:this.value[e]});return t}},methods:{emitInput:function(t){for(var e=[],a=0;a<t.length;a++)e.push(t[a].url);this.$emit("input",e)},handleRemove:function(t,e){this.emitInput(e)},handlePreview:function(t){this.dialogVisible=!0,this.dialogImageUrl=t.url},beforeUpload:function(t){var e=this;return new i.a(function(t,a){Object(s.a)().then(function(a){e.dataObj.policy=a.data.policy,e.dataObj.signature=a.data.signature,e.dataObj.ossaccessKeyId=a.data.accessKeyId,e.dataObj.key=a.data.dir+"/${filename}",e.dataObj.dir=a.data.dir,e.dataObj.host=a.data.host,t(!0)}).catch(function(t){console.log(t),a(!1)})})},handleUploadSuccess:function(t,e){this.fileList.push(c()({url:e.name},"url",this.dataObj.host+"/"+this.dataObj.dir+"/"+e.name)),this.emitInput(this.fileList)},handleExceed:function(t,e){this.$message({message:"最多只能上传"+this.maxCount+"张图片",type:"warning",duration:1e3})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-upload",{staticClass:"disabled",attrs:{action:"http://xxxx.aliyuncs.com",data:t.dataObj,"list-type":"picture-card","file-list":t.fileList,"before-upload":t.beforeUpload,"on-remove":t.handleRemove,"on-success":t.handleUploadSuccess,"on-preview":t.handlePreview,limit:t.maxCount,"on-exceed":t.handleExceed}}),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};var m=a("VU/8")(u,v,!1,function(t){a("IyYE")},null,null).exports,p={name:"CollectionInfo",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{value:{name:"",brandId:null},attInfo:{dialogVisible:!1,attId:"123",attName:"abc"},attList:[{id:"20180316103522",object_id:"101001-001",att_id:"101001-001-004",att_type:"附件",att_name:"木质小盒",att_memo:"装钟的小盒上有钥匙孔，配常平架",att_num:"1",att_unit:"个",att_current_complete:"馆内展览",att_in_time:"2018-01-01",remarks:"abcdefg"},{id:"20180316103522",object_id:"101001-001",att_id:"101001-001-005",att_type:"说明书",att_name:"原装说明书",att_memo:"说明书说明书",att_num:"1",att_unit:"本",att_current_complete:"库存",att_in_time:"2018-01-02",remarks:"111222333"}],selectProductPics:["../static/img/Resource/20180317201456/20180317201456.jpg"],selectProductPics2:["../static/img/Resource/20180317201456/102001-001-001/DSC_6682.JPG"]}},components:{SingleFileUpload:r,MultiImgUpload:m},methods:{handleShowAttInfoDialog:function(t){this.attInfo.dialogVisible=!0}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"margin-left":"50px","margin-top":"20px"}},[a("el-form",{staticStyle:{width:"720px"},attrs:{inline:!0,model:t.value,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"系统代码："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("20180317201456")])])]),t._v(" "),a("el-form-item",{attrs:{label:"藏品代码："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("102001-001")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"藏品名称："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("Poljot航海钟")])])]),t._v(" "),a("el-form-item",{attrs:{label:"藏品分类："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("机械钟/航海钟/船钟")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"藏品级别："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("五级藏品")])])]),t._v(" "),a("el-form-item",{attrs:{label:"完残程度："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("基本完整")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"尺寸："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("56*110*110")])])]),t._v(" "),a("el-form-item",{attrs:{label:"重量(g)："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("150")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"地域："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("苏联")])])]),t._v(" "),a("el-form-item",{attrs:{label:"年代："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("1960")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"展览说明："}},[a("div",{staticStyle:{width:"495px"}},[a("p",[t._v('宝杰(俄语意为「飞行」)原为成立于1930月10月的莫斯科第一制表厂。最初是以F.M.W.F.(莫斯科第一制表厂)为其厂名，是前苏联规模最大，专以生产高精密度的机械钟表，产品包括：机械计时码表、超薄自动机械表及航海钟等闻名于世。\\r\\n第二次世界大战开始后，苏联的军用飞机开始装备的FMWF计时装置，1961年4月12日苏联太空人Juri Gagarin(加加林）带着FMWF的\\"Sturmanskie\\"表款升空，完成了他传奇性的太空之旅。\\r\\nFMWF为了纪念这个事件，将厂名改名为POLJOT(飞行)，并持续以可靠的品质及准确受到世界各地的欢迎。\\r\\n长久以来POLJOT为 苏联生产军官与飞行员腕表、太空人腕表、米格机仪表板计时仪表等等，历史悠久，也是唯一在太空环境中验证成功的机械码表。严苛的操作环境包括太空、沙漠、与北极圈等，在苏联国内颇具盛名。')])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"关键字："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("Poljot,宝杰,航海钟,船钟")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"装饰题材："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("现代")])])]),t._v(" "),a("el-form-item",{attrs:{label:"质地："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("铜质木结构")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"铭文："}},[a("div",{staticStyle:{width:"495px"}},[a("span",[t._v("1111")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"形态特征："}},[a("div",{staticStyle:{width:"495px"}},[a("span",[t._v("由大小2个盒子组成，钟放在小盒中，小盒再装入大盒")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"独特标记："}},[a("div",{staticStyle:{width:"495px"}},[a("span",[t._v("2222")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"来源："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("捐赠")])])]),t._v(" "),a("el-form-item",{attrs:{label:"来源单位/个人："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("李大来")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"藏品所有权："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("李大来")])])]),t._v(" "),a("el-form-item",{attrs:{label:"保护等级："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("已经保护修复")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"当前状况："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("馆内展览")])])]),t._v(" "),a("el-form-item",{attrs:{"label-width":"120px",label:"入藏日期："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("2018-01-01")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"备注："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("3333")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"更换电池日期：","label-width":"120px"}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("2018-05-31")])])]),t._v(" "),a("el-form-item",{attrs:{label:"电池更换周期(天)：","label-width":"160px"}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("360")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"最近维护日期：","label-width":"120px"}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("2018-05-31")])])]),t._v(" "),a("el-form-item",{attrs:{label:"维护周期(天)：","label-width":"160px"}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("180")])])]),t._v(" "),a("el-form-item",{attrs:{label:"藏品相册："}},[a("multi-img-upload",{model:{value:t.selectProductPics,callback:function(e){t.selectProductPics=e},expression:"selectProductPics"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"藏品文档："}},[a("single-file-upload",{model:{value:t.selectProductPics,callback:function(e){t.selectProductPics=e},expression:"selectProductPics"}})],1),t._v(" "),a("el-card",{staticClass:"cardBg",attrs:{shadow:"never"}},[a("span",[t._v("配件列表")]),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.attList,"empty-text":" ",border:""}},[a("el-table-column",{attrs:{label:"系统代码",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"藏品代码",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.object_id))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"配件代码",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.att_id))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"当前状况",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.att_current_complete)+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"配件分类",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.att_type)+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"配件名称",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.att_name))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"配件说明",width:"100",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.att_memo))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"入藏日期",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.att_in_time))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"配件数量",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.att_num))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"配件数量单位",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.att_unit))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"备注",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remarks))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{content:"查看配件信息",placement:"bottom",effect:"light"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:function(a){t.handleShowAttInfoDialog(e.row)}}})],1)]}}])})],1)],1),t._v(" "),a("br"),t._v(" "),a("el-button",{staticClass:"btn-add",attrs:{type:"primary",size:"small"},on:{click:function(e){t.$router.push({path:"/cms/collection"})}}},[t._v("返回")])],1),t._v(" "),a("br"),t._v(" "),a("el-dialog",{attrs:{title:"配件信息",visible:t.attInfo.dialogVisible,width:"60%"},on:{"update:visible":function(e){t.$set(t.attInfo,"dialogVisible",e)}}},[a("div",{staticStyle:{width:"100%","margin-left":"20px"}},[a("el-form",{attrs:{inline:!0,model:t.attInfo,size:"small"}},[a("el-form-item",{attrs:{label:"系统代码："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("20180317201456")])])]),t._v(" "),a("el-form-item",{attrs:{label:"藏品代码："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("102001-001")])])]),t._v(" "),a("el-form-item",{attrs:{label:"配件代码："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("102001-001-001")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"当前状况："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("馆内展览")])])]),t._v(" "),a("el-form-item",{attrs:{label:"配件分类："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("钥匙")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"配件名称："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("原配钥匙")])])]),t._v(" "),a("el-form-item",{attrs:{label:"配件说明："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("插在小盒中")])])]),t._v(" "),a("el-form-item",{attrs:{label:"入藏日期："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("2018-01-01")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"配件数量："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("1")])])]),t._v(" "),a("el-form-item",{attrs:{label:"配件数量单位："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("个")])])]),t._v(" "),a("el-form-item",{attrs:{label:"备注："}},[a("div",{staticStyle:{width:"180px"}},[a("span",[t._v("222222")])])]),t._v(" "),a("br"),t._v(" "),a("el-form-item",{staticStyle:{width:"262px"},attrs:{label:"配件相册："}},[a("multi-img-upload",{model:{value:t.selectProductPics2,callback:function(e){t.selectProductPics2=e},expression:"selectProductPics2"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"配件文档："}},[a("single-file-upload",{model:{value:t.selectProductPics,callback:function(e){t.selectProductPics=e},expression:"selectProductPics"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.attInfo.dialogVisible=!1}}},[t._v("关 闭")])],1)])],1)},staticRenderFns:[]};var f=a("VU/8")(p,_,!1,function(t){a("Oo/E")},null,null);e.default=f.exports}});