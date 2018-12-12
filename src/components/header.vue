<template>
    <div>
        <div class="header">
            <img src="http://data.xinxueshuo.cn/nsi/assets/img/index/logo.png" alt="">
            <div class="input-group">
                <span class="input-group-addon iconfont icon-sousuo1" @click="searchClick"></span>
                <input ref="input" type="text" class="form-control" placeholder="请输入国际学校名或地区等关键词" onfocus="this.placeholder=''" onblur="this.placeholder='请输入国际学校名或地区等关键词'" @keyup.enter="searchEnterFun">
            </div>
        </div>
        <div class="hotSearch">
            <p>一一一 热门搜索 一一一</p>
        </div>
        <div class="searchKey">
            <a href="../nsi-web-phone/school/detail.html?School_name=100053"><span>海嘉国际双语学校</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=100048"><span>北京乐成国际学校</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=100139"><span>北京京西学校</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=100047"><span>北京BISS国际学校</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=100495"><span>上海哈罗国际学校</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=100122"><span>上海世界外国语中学</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=101194"><span>上海融育北美教育学校</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=100065"><span>成都美视国际学校</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=100192"><span>深圳国际交流学院</span></a>
            <a href="../nsi-web-phone/school/detail.html?School_name=100954"><span>铁岭枫树岭国际学校</span></a>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            list:[],
        }
    },
	mounted: function(){
		this.getData();
	},
	methods: {
		getData: function(){
            var that = this;
            that.$ajax.get(
                '/school/suggest_search.do?keyword='+''
            ).then(function(res){
                that.list=res.data.list;
            })
        },
        // 点击搜索
		searchClick: function(){
			var val = this.$refs.input.value 
			localStorage.setItem("searchContent",val);
            this.$router.push({name:'schoolIndex',query:{pwd:val}})
        },
        // 回车搜索
		searchEnterFun:function(e){
            var keyCode = window.event? e.keyCode:e.which;
            if(keyCode == 13){
                var val = this.$refs.input.value 
                localStorage.setItem("searchContent",val);
                this.$router.push({name:'schoolIndex',query:{pwd:val}})
            }
        },
	}

}
</script>

<style>
html,body,ul,li{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
a:focus{
	text-decoration: none !important;
}
a:hover{
    text-decoration: none !important;
} 
.header{
	height: 140px;
    background: -webkit-linear-gradient(top, #5b9ed3 0%,#215089 100%);
    color: #fff;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 3px;
}
.header img{
	margin-top:15px;
}
.header input{
	border: none;
	border-left:0;
    font-size: 16px;
    font-weight: 200;
    border-radius: 5px;
}
.input-group{
	margin-top: 20px;
	width: 85%;
	display:inline-table;
}
.input-group-addon{
	font-size: 20px;
	padding: 6px 0px 6px 12px;
	background-color: #fff;
    border: 1px solid #fff;
}
.form-control:focus {
    -webkit-box-shadow: none; 
    box-shadow:none; 
}
.hotSearch{
	text-align: center;
}
.hotSearch p{
	font-size: 18px;
    margin: 20px;
    color: #706e6e;
}
.searchKey{
	padding-left:15px;
}
.searchKey span{
	padding: 5px 10px;
    margin: 10px 10px;
    display: inline-block;
    border-radius: 5px;
    background-color: #d5e8f7;
}
.searchKey a{
	color: #006cc5;
}
.footer{
	text-align: center;
	height:55px;
	width:100%;
	position: fixed;
	bottom:0;
    border-top: 1px solid #ccc;
    color: #6e6a6a;
    cursor: pointer;
    background-color:#fff;
}
.footer .part:hover{
	 color: #1472bc;
	 background-color:#ccc;
}
.footer span{
	font-size: 22px;
}
.footer p{
    font-size: 16px;;
}
.footer a{
	color: #6e6a6a;
}
.footer a:hover{
	color:#225189;
}
</style>
