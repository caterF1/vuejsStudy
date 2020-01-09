<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters & Mixins</h1>
				<div>
					<input type="text" v-model="filterInput" />
				</div>
				<!-- Exercise 1) -->
				<!-- Build a local Filter which reverses the Text it is applied on -->
				<div>
					<span>normal:</span>
					<p>{{filterInput}}</p>
					<span>reverse:</span>
					<p>{{filterInput | reverseStr}}</p>
				</div>

				<!-- Exercise 2 -->
				<!-- Build a global Filter which counts the length of a word and it appends it -->
				<!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
				<div>
					<span>get length:</span>
					<p>{{filterInput | countLength}}</p>
				</div>
				<!-- Exercise 3 -->
				<!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
				<hr />
				<div>
					<span>computed reverse:</span>
					<p>{{computedReverse}}</p>
				</div>
				<!-- Exercise 4 -->
				<!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
				<hr />
				<div>
					<span>computed length:</span>
					<p>{{computedLength}}</p>
				</div>
				<hr />
				<h1>Example</h1>
				<input type="text" v-model="filterText" />
				<ul v-for="fruit in filteredFruits">
					<li>{{fruit}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {computedLengthMixin} from './computedLengthMixin.js'
	export default {
		mixins: [computedLengthMixin],
		data() {
			return {
				myParagraph: "This is my paragraph.",
				filterInput: "This is my default input.",
				fruits: ["apple", "banana", "orange", "avocado"],
				filterText: ""
			};
		},
		filters: {
			reverseStr(str) {
				return str
					.split("")
					.reverse()
					.join("");
			}
		},
		computed: {
			computedReverse() {
				let str = this.filterInput;
				return str
					.split("")
					.reverse()
					.join("");
			},
			filteredFruits() {
				return this.fruits.filter(element => {
					return element.match(this.filterText);
				});
			}
		}
	};
</script>

<style>
</style>
