+++
title = "Vue In Hugo"
subtitle = "Mounting a Vue app on Hugo Page"
url = "/how-to/vue-in-hugo"
description = "Vue Spike"
tags = [""]
icon = ""
categories = [""]
weight = 998
layout = "single"
+++

This is a simple demonstration that Vue can be used to run DOM manipulations in Hugo generated static sites.  It works.


First, let's sort out how resolve the conflict of Vue delimiters with Hugo's mustache template syntax. Double curly-brackets `{{ }}` are used to designate template variables in both Hugo's mustache style templating language as well as that of Vue.

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

{{< separator1 >}}  

The example above has the Vue app mounted on a DOM element with the classname `vapp`. We can define your mount point in a template partial, or, you can define the mount point as we have here the form of a Hugo shortcode: an HTML fragment which is inserted in to a markdown file:

```
<!-- shortcodes/vue_vapp.html-->
<div id="vapp">
  <p>Hello World: [[ display ]]</p>
</div>
```

This next line is actually the above shortcode inserted in this markdown file:

{{< vue_intro >}}

In the text above ^^,  Vue variable inserted into the template, so that it is available to be targeted by Vue at runtime, replacing the variable with the value “Salut Lume”, Romanian for “Hello World”.  (I don't speak Romanian, but I have some friends that do.)

This is a demonstration of a simple HTML inline Vue variable.  If you can do one, you can place ten. You can get a lot done with just that very simple approach to reactivity in Hugo.  You don't need webpack to implement inline Vue variables, just pull the runtime from a CDN someplace appropriate, such as `header.html:`

```
  <script src="https://unpkg.com/vue@v3.1.1"></script>
```

You can get a bit more sophisticated using Vue string templates.

To build groups of components that interact with one another and manage state, you'll probably want to implement Vue's Composition API in Single File Templates. SFTs need to be compiled to Javascript, and that introduces then need for some pre-processing services with Webpack or similar bundler.  

Hugo can be setup to compile and bundle Vue3 SFTs as well. The whole ecosystem is a moving target, so please don't quote me on it, but this webpack.config allowed us to compile SFTs, to generate a bundle that could be mounted as a Vue app in a Hugo site:

```
const path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
  entry: [
    path.resolve('src', 'js', 'app.js'),
    path.resolve('src', 'styles', 'app.css'),
  ],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
};
```  

Hugo serves as a powerful template compilation system on which Vue applications can be mounted.  Everything that Hugo does happens before the DOM is created.  Vue's job doesn't start until after the DOM is created at runtime.   It makes for an interesting division of labor.

{{< form "Vue in Hugo" >}}

I'm not making the case that you should use Vue in Hugo, I'm just demonstrating that there are no technical obstacles to going down that path. At the least, we gain a better understanding of the problems that various build frameworks are seeking to solve.

{{< footnotes title="Bibliography">}}

{{< biblio title="Vue Composition API" author="Cristian Salcescu" >}}
{{< biblio title="JavaScript" subtitle="The Definitive Guide" author="David Flanagan" >}}
{{< extlink anchor="https://v3.vuejs.org/" title="Vue Documentation" >}}
{{< extlink anchor="https://webpack.js.org/" title="Webpack Documentation" >}}




{{< separator1 >}}
