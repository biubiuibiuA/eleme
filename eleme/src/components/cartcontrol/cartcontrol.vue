<template>
	<div class="cartcontrol">
		<transition name="move">
			<div class="cart-decrease" v-show="food.count>0" @click.stop="decreaseCart">
				<span class="inner icon-remove_circle_outline"></span>
				<span></span>
			</div>
		</transition>
		<transition name="move">
			<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		</transition>
		<transition name="move">
			<div class="cart-add icon-add_circle" @click.stop="addCart"></div>
		</transition>
	</div>
</template>
<script type="">
	import Vue from 'vue';
	export default {
		props:{
			food:{
				type:Object
			}
		},
		created(){
		},
		methods:{	
			addCart(event){
				if(!event._constructed){
					return;
				}
				// console.log('xxx');
				if(!this.food.count){
					Vue.set(this.food,'count',1);
				}else{
					this.food.count++;
				}
				this.$emit('cart-add',event.target);
			},
			decreaseCart(event){
				if(!event._constructed){
					return;
				}
				if(this.food.count){
					this.food.count--;
				}
			}

		}
	};
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size:0
		.cart-decrease
			display:inline-block
			padding:6px
			font-size:24px
			color:rgb(0, 160, 220)
			transition:all 0.4s linear
			&.move-transition
				opacity:1
				transform: translate3D(0,0,0)
				.inner
					display:inline-block
					line-height:24px
					font-size:24px
					color:rgb(0, 160, 220)
					transition:all 0.4s linear
					transform:rotate(0)
			&.move-enter, &.move-leave
				opacity:0
				transform: translate3D(24px,0,0)
				.inner
					transform:rotate(180deg)
		.cart-count
			display:inline-block
			vertical-align:top
			width:12px
			padding-top:6px
			line-height:24px
			text-align:center
			font-size:10px
			color:rgb(147, 153, 159)
		.cart-add
			display:inline-block
			padding:6px
			line-height:24px
			font-size:24px
			color:rgb(0, 160, 220)
</style>