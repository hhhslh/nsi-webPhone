<template>
    <div id="app">
        <router-view></router-view>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-xs-3 part">
                        <router-link  to="/schoolIndex">
                            <span class="iconfont icon-jigoujianzhu"></span>
                            <p>学校库</p>
                        </router-link>
                    </div>
                    <div class="col-xs-3 part">
                        <router-link  to="/companyIndex">
                            <span class="iconfont icon-jianzhu"></span>
                            <p>机构库</p>
                        </router-link>
                    </div>
                    <div class="col-xs-3 part">
                        <router-link  to="/talentIndex">
                            <span class="iconfont icon-rencai"></span>
                            <p>人才库</p>
                        </router-link>
                    </div>
                    <div class="col-xs-3 part">
                        <router-link  to="/dataIndex">
                            <span class="iconfont icon-recently"></span>
                            <p>项目库</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import schoolIndex from './schoolIndex'
import companyIndex from './companyIndex'
import talentIndex from './talentIndex'
import dataIndex from './dataIndex'
export default {
    components:{
        schoolIndex,
        companyIndex,
        talentIndex,
        dataIndex
    },

}
</script>

<style scoped>
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
