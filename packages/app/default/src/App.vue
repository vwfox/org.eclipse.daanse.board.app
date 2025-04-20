<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->

<script setup lang="ts">

import { SampleWidget } from "org.eclipse.daanse.board.app.ui.vue.widget.sample"
import { container } from "org.eclipse.daanse.board.app.lib.core"
import { ref } from "vue";

const string = ref('');

const module1 = container.get('Default') as any;
string.value = module1.getString();

console.log(string);

const startDashboard = ()=> {
  const widgets = document.querySelectorAll('.widget');
  widgets.forEach((el, i) => {
    el.classList.remove('animate');
    void el.offsetWidth; // Reset animation
    setTimeout(() => {
      el.classList.add('animate');
    }, i * 200); // Verzögerung für schönen Effekt
  });
}
const stopDashboard = () =>{

  const widgets = document.querySelectorAll('.widget');
  widgets.forEach((el, i) => {
    el.classList.remove('reanimate');
    void el.offsetWidth; // Reset animation
    setTimeout(() => {
      el.classList.add('reanimate');
    }, i * 200); // Verzögerung für schönen Effekt
  });
}
</script>

<template>



<h1>Dashboard</h1>
  <div>
  <button @click="startDashboard()" id="animationstart">Dashboard anzeigen</button>
  <button @click="stopDashboard()" id="animationstop">Dashboard ausblenden</button>
  </div>
<div id="dashboard">
  <div class="widget pos1" id="w1">Widget 1</div>
  <div class="widget pos2" id="w2">Widget 2</div>
  <div class="widget pos3" id="w3">Widget 3</div>
  <div class="widget pos4" id="w4">Widget 4</div>
  <div class="widget pos5" id="w5">Widget 5</div>
</div>




</template>

<style scoped>

body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
  padding: 20px;
  overflow: hidden;
}

h1 {
  margin-bottom: 20px;
}

#dashboard {
  position: relative;
  width: 800px;
  height: 500px;
  margin: 0 auto;
  border: 2px solid #ccc;
  background: white;
  overflow: hidden;
}

.widget {
  width: 200px;
  height: 150px;
  background-color: #4a90e2;
  color: white;
  position: absolute;
  opacity: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.5) translate(-1000px, -1000px);
}

/* Zielpositionen */
.pos1 { top: 20px; left: 20px; }
.pos2 { top: 20px; left: 280px; }
.pos3 { top: 20px; left: 540px; }
.pos4 { top: 200px; left: 150px; }
.pos5 { top: 200px; left: 410px; }

/* Animation */
.animate {
  animation: enterWidget 1s ease-out forwards;
}
.reanimate {
  animation: leaveWidget 1s ease-out forwards;
}

@keyframes enterWidget {
  0% {
    transform: scale(0.5) translate(-1000px, -1000px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
}
@keyframes leaveWidget {
  100% {
    transform: scale(0.5) translate(-1000px, -1000px);
    opacity: 0;
  }
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
}
button {
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
