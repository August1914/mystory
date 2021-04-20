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

{{< vue_intro >}}

Double brackets: `{{ }}` are used to designate template variables in both Hugo's mustache style templating language as well as that of Vue.

Fortunately, Vue provides a simple delimiter configuration option that we can use to make sure Vue variables are ignored by Hugo, while being recognized by Vue.

We can set the configuration in an optional vue.config.js file in the site root, with the line:

```delimiters: ['[[', ']]'],```

Or we can declare it when we create the App object:

```
const vueApp = new Vue({
  delimiters: ['[[', ']]'],
  el: '#vapp',
  data: {
   display: 'this is the value of a vue variable'
  }
})
```


{{< vue_email_input >}}

{{< form "Vue meets Hugo" >}}

{{< biblio title="Blueprint Graphics" author="Ana Michelle Godeck" >}}
