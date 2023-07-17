<template>
	<h1> Test Form </h1>
	<div class="inputContainer">
		<label for="email"> Email: </label>
		<input type="email" id="email" v-model="email">
	</div>

	<div class="inputContainer">
		<label for="password"> Password: </label>
		<input type="password" id="password" v-model="password">
	</div>

	<div class="inputContainer">
		<label for="name">First Name: </label>
		<input type="name" id="name" v-model="name">
	</div>

	<div class="buttonContainer">
		<button @click="createAccount"> Create </button>
		<button @click="login"> Login </button>
		<button @click="seeCurrentUser"> See user </button>
		<button @click="logout">logout</button>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../clients/supabase";
//connect inputs
let email = ref("");
let password = ref("");
let name = ref("");

//create account
async function createAccount(){
	const {data, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
		options:{
			data:{
				first_name: name.value
			}
		}
	})
	if(error){
		console.log(error)
	}
	else{
		console.log(data)
	}
}

//login
async function login(){
	const{data, error} = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if(error){
		console.log(error)
	}
	else{
		console.log(data)
	}
}

//seeCurrentUser
async function seeCurrentUser(){
	const localUser = await supabase.auth.getSession();
	console.log(localUser);
}

//logout
async function logout(){
	const { error } = await supabase.auth.signOut();

	if(error){
		console.log(error)
	}
	else{
		console.log("Logout Successful");
	}
}

</script>

<style scoped>
.inputContainer {
	display: flex;
	flex-direction: column;
}

input {
	font-size: 1.5em;
}
.buttonContainer {
	display: flex;
	flex-direction: column;
	margin-top: 1em;
}

button {
	margin-bottom: 1em;
	padding: 1em 2em 1em 2em;
}
</style>