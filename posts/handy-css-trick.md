---
title: 'Handy css trick to save time'
date: '2022-02-13'
updatedDate: ''
image: CSS-3.png
excerpt: Alot of developers have issues with css,expercially when to come to centering a div.today u'll learn and easy way to center a div.
topic: 'css'
readTime: '1 min'
---

Wondering why centering a div is a big problem for most developers?thats because css is hard.

but wuth this article,u leaner how to center  div with very few steps

**Html code**
```html
<div class="container">
  <div class="child"></div>
</div>
```

**Css code**
```css
.container{
 display: flex;
  justify-content: center;
  align-items: center;
}

.child {
  width: 50px;
  height: 50px;
  background-color: red;
}

```

there u go..now you can center a div properly.



