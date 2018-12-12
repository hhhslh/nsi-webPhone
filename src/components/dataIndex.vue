<template>
<div id="app" v-cloak>
	<div class="listBox">
		<div class="header">
			<div class="input-group">
	            <span class="input-group-addon iconfont icon-sousuo1" @click="searchClick"></span>
	            <input ref="input" type="text" class="form-control" placeholder="请输入项目名或其他关键词" onfocus="this.placeholder=''" onblur="this.placeholder='请输入项目名或其他关键词'" @keyup.enter="searchEnterFun">
	            <span class="input-group-addon" style="font-size: 12px;color: #7b7b7b;">搜索到{{tatalNum.count}}条</span>
	        </div>
		</div>
		<div class="list" v-for="item in list" :key="item.id">
			<a v-bind:href="'./detail.html?School_name='+item.id">
				<img src="http://data.xinxueshuo.cn/nsi/assets/img/project.jpg" alt="" class="img-responsive">
				<p class="subjectname">{{item.subjectname}}</p>
				<p class="subjectintroduction">{{item.subjectintroduction}}</p>
				<p class="pull-right company">发布单位：{{item.company}}</p>
			</a>
		</div>
		<div class="more" :class="isMore ? 'show':'hide'">正在加载中</div>
        <div class="back"  @click="goBack">
            <a><i class="iconfont icon-ziyuan"></i></a>
        </div>
	</div>
</div>
</template>

<script>
export default {
	data(){
        return{
            tatalNum:[],
            list:[],
            pageNum: 1,
            pageSize: 20,
            isImg:true,
            isList:false,
            isMore:true
        }
		
	},
	mounted: function(){
		this.getData();
	},
	methods: {
		getData: function(){
			var that = this;
            var	searchContent = that.$refs.input.value
            that.$ajax.get(
                '/project/list.do?talent_searchKey='+searchContent+'&pageNum='+that.pageNum+'&pageSize='+that.pageSize,

            ).then(function(res){
				that.tatalNum = res.data
                that.list=res.data.data;
                that.isImg=false;
                that.isList=true
                if(res.data.count==0){
                    alert('请输入正确的搜索关键字')
                    that.isMore=false
                }
                localStorage.clear()
            })
		},
		searchClick: function(){
			this.list=[]
			this.getData()
		},
		// 回车搜索
		searchEnterFun:function(e){
            var keyCode = window.event? e.keyCode:e.which;
            if(keyCode == 13){
                localStorage.setItem("searchContent",this.$refs.input.value)
				this.list=[]
				this.getData()
            }
        },
        // 下拉刷新
        handleScroll: function(){
        	var scrollTop = $(window).scrollTop();
		    var elementHeight = $(window).height();
		    var h1 = scrollTop + elementHeight;
		    var scrollHeight = document.documentElement.scrollHeight;
		    var documentHeight = $(document).height();
		    if (h1 >= scrollHeight) {
		       	this.pageNum++
				this.getData();
		    }
        },
        // 判断是否有上一页
		goBack: function(){
			window.history.length <= 1 ? this.$router.push('/') : window.history.go(-1);
		},
	}
	
}
</script>

<style scoped>
html,body,ul,li{
	margin:0;
	padding:0;
}
body{
	background-color: #ededed;
}
a:hover{
    text-decoration: none;
}
[v-cloak]{
    display:none;
}
.header{
	height: 75px;
    background: -webkit-linear-gradient(top, #5b9ed3 0%,#215089 100%);
    text-align: center;
}
.header input{
	border: none;
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
.list:first-child{
	margin-top:0;
}
.list{
	background-color: #fff;
    margin-top: 10px;
    cursor: pointer;
    display: inline-block;
    padding: 10px;
}
.subjectname{
	color: #666;
    padding: 5px 10px;
}
.subjectintroduction{
	text-indent: 20px;
    padding: 0 15px;
}
p.company{
	color:#999;
	font-size: 16px;
}
.more{
	text-align: center;
    font-size: 16px;
    padding: 5px;
    color: #999;
}
.back{
    z-index: 9999;
    position: fixed;
    right: 40px;
    bottom: 40px;
}
.back a{
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #3f3f3f;
    border-radius: 8px;
    color: #fafafa;
    box-shadow: 0 5px 15px 0 rgba(15,37,64,.2);
    transition: all .3s ease 0s;
}
.back a i{
    font-size: 20px;
    font-weight: 700;
}
</style>
