<template>
    <div id="app">
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-xs-3">
					<img :src='list.schoolLogo=="" || list.schoolLogo==null ? "http://data.xinxueshuo.cn/nsi/assets/img/schoolNoPic.png":"http://data.xinxueshuo.cn" + list.schoolLogo' alt="">
				</div>
				<div class="col-xs-9">
					<p class="title">{{list.schoolName}}</p>
					<div class="col-xs-4">
						<span>
							<p class="style">学校类型</p>
							<p class="style-result">{{list.schoolProperties}}</p>
						</span>
					</div>
					<div class="col-xs-4">
						<span>
							<p class="style">成立时间</p>
							<p class="style-result">{{list.foundedTime | timeNull}}</p>
						</span>
					</div>
					<div class="col-xs-4">
						<span>
							<p class="style">省份</p>
							<p class="style-result">{{list.areas}}</p>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="msgBox">
			<span class="line"></span>
			<span class="title">基本信息</span>
			<ul class="clearfix">
				<li><span>学制：{{list.schoolSystem}}</span></li>
				<li><span>电话：{{list.telephone | timeNull}}</span></li>
				<li><span>官网：{{list.website | timeNull}}</span></li>
				<li><span>地址：{{list.areas | timeNull}}</span></li>
			</ul>
	    </div>
	    <div class="msgBox">
			<span class="line"></span>
			<span class="title">课程学生</span>
			<ul class="clearfix">
				<li><span>国际课程: {{list.course | timeNull}}</span></li>
				<li><span>国际课程认证时间：{{list.interCourseFoundedTime | timeNull}}</span></li>
				<li><span>认证：{{list.authentication | timeNull}}</span></li>
				<li><span>参加外部考试与评估:{{list.authentication | timeNull}}</span></li>
				<li><span>总容量（国际部）：{{list.authentication | timeNull}}</span></li>
				<li><span>学生主要国籍：{{list.authentication | timeNull}}</span></li>
				<li><span>毕业班人数（国际部）：{{list.authentication | timeNull}}</span></li>
				<li><span>平均年收入：{{list.authentication | timeNull}}</span></li>
				<li><span>在校生总人数（国际部）：{{list.studentNumAll | timeNull}}</span></li>
				<li><span>俱乐部数量：{{list.authentication | timeNull}}</span></li>
			</ul>
	    </div>
	    <div class="msgBox">
			<span class="line"></span>
			<span class="title">师资力量</span>
			<ul class="clearfix">
				<li><span>校长/国际部主任国籍：{{list.presidentCountry | timeNull}}</span></li>
				<li><span>总员工数量：暂无</span></li>
				<li><span>教师薪酬（三年经验）：暂无</span></li>
				<li><span>总教师数量：{{list.teacherNum | timeNull}}</span></li>
				<li><span>师均年培训投入：暂无</span></li>
				<li><span>外籍教师数量：{{list.foreignTeacherNum | timeNull}}</span></li>
				<li><span>师生比：{{list.teacherStuRatio | timeNull}}</span></li>
				<li><span>教师流失率：暂无</span></li>
			</ul>
	    </div>
	    <div class="msgBox">
			<span class="line"></span>
			<span class="title">基建投资</span>
			<ul class="clearfix">
				<li><span>投资信息：权限不足</span></li>
				<li><span>占地面积(亩)：{{list.coveredArea | timeNull}}</span></li>
				<li><span>建筑面积（平方米）：</span></li>
				<li><span>硬件设施<br>{{list.hardware | timeNull}}</span></li>
				<li><span>备注<br>{{list.remark | timeNull}}</span></li>
			</ul>
	    </div>
	</div>
	<div class="back"  @click="goBack">
		<a><i class="iconfont icon-ziyuan"></i></a>
	</div>
    <p class="want">了解更多内容，请访问在线四库全书:data.xinxueshuo.xn</p>
</div>

</template>

<script>
export default {
    filters:{
        timeNull(obj){
           if(obj == 0){
				return ''
			}else{
				return obj
			}
        }
    },
	data(){
        return{
            list:[],
        }
	},
	mounted: function(){
		this.getData();
	},
	methods: {
		getData: function(){
            var that = this;
            var datailSchool = that.$route.query.School_name
            console.log(that.$route.query.School_name)
            that.$ajax.get(
                '/school/detail.do',
                that.$qs.stringify({
                    schoolId: datailSchool
                })
            ).then(function(res){
                console.log(res)
                // that.list=res.data;
            })
		},
		// 判断是否有上一页
		goBack: function(){
			console.log(window.history.length)
			if (window.history.length <= 1) {
                window.location.href='../index.html'
                return false
            } else {
                window.history.go(-1);
            }
		},
	},
    
}
</script>

<style>
html,body,ul,li,span{
	margin:0;
	padding:0;
}
a:hover{
    text-decoration: none;
}
.content img{
	padding-top:10px;
	height:100px;
}
.content p.title{
	text-align: initial;
    padding-left: 14px;
    font-size: 18px;
    font-weight: bold;
    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    color:#215089;
}
.content p.style{
	color: #7b7b7b;
}
.content p.style-result{
	color: #215089
}
.container{
	text-align: center;
}
.col-xs-4{
	padding-left: 0;
	padding-right:0;
}
.col-xs-9{
	padding-top: 10px;
}
.content .course{
	padding: 10px 15px;
	color: #7b7b7b;
}
.msgBox{
	box-shadow: 0 0 15px #ccc;
	margin:25px 15px;
}
.line{
	border-left: 5px solid #c5a86a ;
	font-size: 20px;
	padding:3px 0;
}
.msgBox span.title{
	/*background-color: #75aec8;*/
	background-color:#215089;
	color:#fff;
	font-size: 20px;
	padding:3px 10px;
}
ul.clearfix:after{
	clear:both;
	height:0;
	content:'';
	display:block;
}
.msgBox ul{
	padding: 10px 40px 20px;
}
.msgBox ul li{
	color:#c5a86a ;
	margin-top: 10px;
	font-size: 16px;
}
.msgBox ul li span{
	color:#7b7b7b;
}
.msgBox:last-child{
	margin-bottom:15px;
}
p.want{
	text-align: center;
    color: #ababab;
    font-size: 12px;	
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
