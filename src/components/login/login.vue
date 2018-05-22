<template>
	<div class="login-container">
		<div class="login-bg">
			<div class="login-box clear">
				<div class="aside fl">
					<h3 class="title">
						<p>直播后台管理系统</p>
					</h3>
				</div>
				<div class="content fl">
					<div class="form-wrap">
						<div class="type">
							<span>{{title[titlenum]}}</span>
						</div>
						<div>
							<div v-show="z_longin">
								<div class="input-item">
									<input placeholder="账号" v-model="user_num">
									<i class="icon-envelope-alt"></i>
								</div>
								<div class="input-item">
									<input v-if="!isShowPwd" type="password" placeholder="密码" v-model="user_pwd" @keyup.enter="btnLogin">
									<input v-else type="text" placeholder="密码" v-model="user_pwd" @keyup.enter="btnLogin">
									<i :class="[isShowPwd ? 'el-icon-star-off':'el-icon-star-on']" @click.stop="showPassword"></i>
								</div>
	
							</div>
							<div v-show="z_regist">
								<div class="input-item">
									<input placeholder="账号" v-model="user_num">
									<i class="icon-envelope-alt"></i>
								</div>
								<div class="input-item">
									<input placeholder="昵称" v-model="user_name">
									<i class="icon-envelope-alt"></i>
								</div>
	
								<div class="input-item">
									<input v-if="!isShowPwd" type="password" placeholder="密码" v-model="user_pwd" @keyup.enter="btnLogin">
									<input v-else type="text" placeholder="密码" v-model="user_pwd" @keyup.enter="btnLogin">
									<i :class="[isShowPwd ? 'el-icon-star-off':'el-icon-star-on']" @click.stop="showPassword"></i>
								</div>
							</div>
	
							<div>
								<el-button round @click.stop="btnLogin">{{z_log[lognum]}}</el-button>
								<el-button round @click.stop="register">{{z_button[buttonnum]}}</el-button>
							</div>
						</div>
						<p class="errmsg" v-if='loginTipMsg.length > 0'>{{ loginTipMsg }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from "../../vuex/index.js";
	import axios from "axios";
	export default {
		name: "VLOGIN",
		data() {
			return {
				title: ['登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户','登录到后台','注册新用户'],
				titlenum: 0,
				z_button: ['注册','返回','注册','返回','注册','返回','注册','返回','注册','返回','注册','返回','注册','返回','注册','返回','注册','返回','注册','返回','注册','返回','注册','返回','注册','返回',],
				buttonnum: 0,
				z_log: ['登录','确认','登录','确认','登录','确认','登录','确认','登录','确认','登录','确认','登录','确认','登录','确认','登录','确认','登录','确认','登录','确认','登录'],
				lognum: 0,
				user_num: "",
				user_name: "",
				user_pwd: "",
				isShowPwd: false,
				loginTipMsg: "",
				z_longin: true,
				z_regist: false,
			};
		},
		methods: {
			showPassword() {
				this.isShowPwd = !this.isShowPwd;
			},
			// 登录
			btnLogin() {

				const _this = this;
				let isCheck = _this.checkEmailAndPwd(_this.user_num, _this.user_pwd);

				if (!isCheck) {
					return;
				}
				if(this.z_longin){
						axios
					.post("/user/login", {
						username: _this.user_num,
						password: _this.user_pwd
					})
					.then(result => {
						if (result.error === false) {
							let userData = {
								name: result.data.user.nickname,
								role: result.data.user.role,
								img: result.data.user.avatar
							};
							// vuex
							// store.commit("login", userData)
							// sessionStorage
							_this.$emit("userSignIn", result.data);
							_this.$router.push("/");
						} else if (result.error === true) {
							_this.loginTipMsg =
								result.error === true ? "账号未注册!" : "密码错误!";
							_this.showLoginTip = true;
							window.setTimeout(function() {
								_this.showLoginTip = false;
							}, 5000);
						}
					})
					.catch(err => {
						console.log(err);
					});
				}else{
						axios
					.post("/user/register", {
						username: _this.user_num,
						password: _this.user_pwd,
						nickname: _this.user_name,
						avatar: 'https://avatars0.githubusercontent.com/u/15122564?s=400&u=f01266fbc0372a61916d6b991a2fb40d1d646cc0&v=4'
					})
					.then(result => {
					if(result.error ){
						 this.$Message.info('注册成功');
					}
					})
					.catch(err => {
						console.log(err);
					});
				}
			},
			// 输入验证
			checkEmailAndPwd(email, pwd) {
				if (email === "" || pwd === "") {
					this.loginTipMsg = "账号及密码不能为空！";
					return false;
				} else {
					this.loginTipMsg = "";
					return true;
				}
			},
			register() {
				this.titlenum++ ;
				this.buttonnum++;
				this.lognum++;
				this.z_longin =  !this.z_longin;
				this.z_regist =  !this.z_regist
			}
		}
	};
</script>

<style lang="scss" scoped>
	html,
	body,
	ul,
	ol {
		padding: 0;
		margin: 0;
	}
	
	html {
		font-size: 62.5%;
	}
	
	body {
		min-height: 100%;
		height: 100%;
		overflow-y: auto;
	}
	
	.layout {
		bottom: 0;
		position: relative;
		height: 100%;
		min-height: 100%;
		padding-top: 6rem;
	}
	
	::-webkit-scrollbar {
		display: none;
	}
	
	
	/*变量 begin*/
	
	// 字体
	$base-font-size: 100% !default;
	$base-line-height: 2;
	$font-size-xs: 1.2rem !default;
	$font-size-sm: 1.4rem !default;
	$font-size-default: 1.6rem !default;
	$font-size-lg: 1.8rem !default;
	$font-size-xl: 2rem !default;
	$font-size-xxl: 2.4rem !default; // 颜色
	$color-black: #101213;
	$color-light-black: #31383e;
	$color-gray: #a9afb2;
	$color-light-gray: #d3d4d8;
	$color-blue: #018fe5;
	$line-color: #e1e1e1;
	$color-orange: #e56c69;
	$color-red: #ff0000;
	$bg-gray: #f0f0f2;
	$bg-yellow: #fdf9cd;
	
	/*变量 end*/
	
	a {
		text-decoration: none;
	}
	
	
	/*浮动 begin*/
	
	.clear::after {
		clear: both;
		content: "";
		zoom: 1;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	// 界面样式
	.login-container {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		.login-bg {
			background-color: rgba(39, 65, 82, 0.8);
			height: 100%;
			.login-box {
				width: 70rem;
				height: 35rem;
				position: absolute;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
				background: #fff;
				border-radius: 0.4rem;
				overflow: hidden;
				box-shadow: 0.3rem 0.3rem 1rem 0 #333;
				.aside {
					width: 30rem; // background: rgba(255, 255, 255, 0.473);
					background: #018fe5;
					height: 100%;
					text-align: center;
					color: #fff;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-orient: vertical;
					-webkit-box-direction: normal;
					-ms-flex-direction: column;
					flex-direction: column;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					justify-content: center;
					.title {
						img {
							height: 100%;
							width: 98%;
						}
					}
				}
				.content {
					height: 70%;
					padding: 6rem;
					.form-wrap {
						margin: 10% 0;
					}
					.type {
						margin-bottom: 3rem;
						font-size: 1.6rem;
						cursor: pointer;
						padding: 0 5px;
						color: #a9afb2;
					}
					.active {
						color: $color-blue;
					}
					span {
						padding: 0 5px;
					}
					.input-item {
						margin-bottom: 2rem;
						width: 25rem;
						position: relative;
					}
					input {
						border: none;
						border-bottom: 1px solid #eee;
						padding: 10px;
						width: 100%;
					}
					i {
						position: absolute;
						right: 0;
						top: 10px;
					}
				}
			}
		}
		.errmsg {
			font-size: "12px";
			color: $color-red;
		}
	}
</style>