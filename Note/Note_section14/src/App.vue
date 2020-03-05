<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations</h1>
				<hr />
				<!-- section 1 -->
				<h3>section 1</h3>
				<button class="btn btn-primary" @click="show1 = !show1">show/noshow</button>
				<transition name="slide">
					<div class="alert alert-info" v-if="show1">slide</div>
				</transition>
				<transition name="fade">
					<div class="alert alert-info" v-if="show1">fade</div>
				</transition>
				<transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
					<div class="alert alert-info" v-if="show1">animate.css</div>
				</transition>
				<hr />
				<!-- section 2 -->
				<h3>section 2</h3>
				<select v-model="alertAnimation" class="form-control">
					<option value="fade">fade</option>
					<option value="slide">slide</option>
				</select>
				<button class="btn btn-primary" @click="show = !show">show/noshow</button>
				<!-- use key and mode to specify two elements to toggle -->
				<transition :name="alertAnimation" mode="out-in">
					<div class="alert alert-info" v-if="show" key="info">Info</div>
					<div class="alert alert-warning" v-if="!show" key="warning">warning</div>
				</transition>
				<hr />
				<!-- section 3 -->
				<h3>section 3</h3>
				<button
					class="btn btn-primary"
					@click="selectedComponent == 'app-success-alert' ? selectedComponent= 'app-danger-alert' :selectedComponent='app-success-alert'"
				>toggle component</button>
				<component :is="selectedComponent"></component>
				<hr />
				<!-- section 4 -->
				<h3>section 4</h3>
				<button class="btn btn-primary" @click="addItem">add item</button>

				<ul class="list-group">
					<transition-group name="slide" appear-active-class="">
						<li
							class="list-group-item"
							v-for="(number, ii) in numbers"
							@click="removeItem(ii)"
							:key="number"
						>{{number}}</li>
					</transition-group>
				</ul>
				<hr />
			</div>
		</div>
	</div>
</template>

<script>
	import DangerAlert from "./DangerAlert.vue";
	import SuccessAlert from "./SuccessAlert.vue";

	export default {
		data() {
			return {
				show: false,
				show1: false,
				alertAnimation: "fade",
				load: true,
				selectedComponent: "app-success-alert",
				numbers: [1, 2, 3, 4, 5]
			};
		},
		components: {
			appDangerAlert: DangerAlert,
			appSuccessAlert: SuccessAlert
		},
		methods: {
			addItem() {
				const pos = Math.floor(Math.random() * this.numbers.length);
				this.numbers.splice(pos, 0, this.numbers.length + 1);
			},
			removeItem(ii) {
				this.numbers.splice(ii, 1);
			}
		}
	};
</script>

<style>
	/* default will be v-enter and so on; we add a name to transition tag so it becomes name-enter */
	/* the initial state of the animation */
	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		transition: opacity 1s;
	}
	.fade-leave {
		/* opacity: 1 is default; dont need to add that and it will overwrite the first state, which it wont add the animation*/
	}
	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}

	.slide-enter {
		opacity: 0;
	}
	.slide-enter-active {
		animation: slide-in 1s ease-out forwards;
		transition: opacity 0.5s;
	}
	.slide-leave {
	}
	
	.slide-leave-active {
		animation: slide-out 2s ease-out forwards;
		transition: opacity 2s;
		opacity: 0;
		/* this get rid of the chank when remove an element  */
		position:absolute;
	}
	.slide-move {
		transition: transform 1s;
	}
	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>
