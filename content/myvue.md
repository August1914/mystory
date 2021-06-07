+++
title = "Vue Meets Hugo"
subtitle = "Great vue from here!"
url = "/vue"
description = "Vue Spike"
tags = [""]
icon = ""
categories = [""]
weight = 998
layout = "single"
+++

This is a simple demonstration that Vue can be used to run DOM manipulations in Hugo generated static sites.  It works.  

{{< vue_intro >}}

In the text above ^^, the Hugo template published a Vue variable, which is then targeted by Vue at runtime, replacing the variable with the value “Salut Lume”, Romanian for “Hello World”.  (I don't speak Romanian, but I have some friends that do.)  

```
<h2>Mounting a Vue3 app in Hugo</h2>
<div id="vapp">
  <p>Hello World: [[ display ]]</p>
</div>
```

We need a way to put the Vue variable _[[ display ]]_ in the context of the targeted div: _vapp_. We could do this in a template partial, but using a Hugo shortcode affords us the opportunity to incorporate reactive elements in regular markdown files, as is the case here.


This is demonstration of a simple HTML inline variable, and you can get a lot done with just that.  You can write something more complex with components cast in backticks.  To build something complex in Vue3, you'd want to write Vue Single File Templates, which need to be compiled to Javascript, and that introduces then need for some pre-processing services with Webpack or similar bundler.  Hugo can be setup to compile and bundle Vue3 SFTs as well.  Hugo serves as a powerful template compilation system on which Vue applications can be mounted.

{{< separator1 >}}  

About Vue delimiters: Double brackets: `{{ }}` are used to designate template variables in both Hugo's mustache style templating language as well as that of Vue.

Fortunately, Vue provides a simple delimiter configuration option that we can use to make sure Vue variables are ignored by Hugo, while being recognized by Vue.

We can set the configuration in an optional vue.config.js file in the site root, with the line:

```delimiters: ['[[', ']]'],```

Or we can declare it when we create the App object:
```
var vueApp = Vue.createApp({
  data() {return {display: 'Salut Lume'}},
  delimiters: ['[[', ']]'],
}).mount('#vapp');

```

In Vue2 syntax it would be:

```
const vueApp = new Vue({
  delimiters: ['[[', ']]'],
  el: '#vapp',
  data: {
   display: 'Salut Lume'
  }
})
```






{{< form "Vue meets Hugo" >}}

I'm not making the case that you should use Vue in Hugo, I'm just demonstrating that there are no technical obstacles to going down that path. At the least, we gain a better understanding of the problems that various build frameworks are seeking to solve.

{{< footnotes title="Bibliography">}}

{{< biblio title="Vue Composition API" author="Cristian Salcescu" >}}



{{< separator1 >}}
