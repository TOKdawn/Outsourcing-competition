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
							<span>登录到后台</span>
						</div>
						<div>
							<div class="input-item">
								<input placeholder="账号" v-model="user_num">
								<i class="icon-envelope-alt"></i>
							</div>
							<div class="input-item">
								<input v-if="!isShowPwd" type="password" placeholder="密码" v-model="user_pwd" @keyup.enter="btnLogin">
								<input v-else type="text" placeholder="密码" v-model="user_pwd" @keyup.enter="btnLogin">
								<i :class="[isShowPwd ? 'el-icon-star-off':'el-icon-star-on']" @click.stop="showPassword"></i>
							</div>
							<div>
								<el-button round @click.stop="btnLogin">登录</el-button>
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
	import store from '../../vuex/index.js'
	import axios from "axios";
	export default {
		name: "VLOGIN",
		data() {
			return {
				user_num: "",
				user_pwd: "",
				isShowPwd: false,
				loginTipMsg: "",
			};
		},
		methods: {
			showPassword() {
				this.isShowPwd = !this.isShowPwd;
			},
			// 登录
			btnLogin() {
				const _this = this
				let isCheck = _this.checkEmailAndPwd(_this.user_num, _this.user_pwd);
				if (!isCheck) {
					return;
				}
				// axios.post('/user/login', {
				// 	user_num: _this.user_num,
				// 	user_pwd: _this.user_pwd
				// }).then(result => {
				// 	if (result.data.code === 0) {
				// 		let userData = {
				// 			name: result.data.username,
				// 			role: result.data.role
				// 		}
				// 		// vuex
				// 		// store.commit("login", userData)
				// 		// sessionStorage
				// 		_this.$emit('userSignIn', result.data);
				// 		_this.$router.push("/");
				// 	} else if (result.data.code === -1 || result.data.code === -2) {
				// 		_this.loginTipMsg = result.data.code === -1 ? "账号未注册!" : "密码错误!";
				// 		_this.showLoginTip = true;
				// 		window.setTimeout(function() {
				// 			_this.showLoginTip = false;
				// 		}, 5000);
				// 	}
				// }).catch(err => {
				// 	console.log(err);
				// });
				let result = {
					data:{
						accountnum : 123,
						name : 'dawm',
						role: 1,
						img: 'https://avatars2.githubusercontent.com/u/15122564?s=460&v=4'
					}
				}
				store.commit('userSignIn', result.data);
				this.$router.push("/");
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
		content: '';
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
				border-radius: .4rem;
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
							width: 98%
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
			font-size: '12px';
			color: $color-red;
		}
	}
</style>