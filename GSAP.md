- GSAP

"GreenSock Animation Platform". It is the library of JavaScript which we use to create complex animations with short code
Most likely for moving animations

Website - [GSAP](https://gsap.com/)
CDN :

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
  integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

So we have now `index.html`, `style.css`, `script.js`
Put the CDN just over the script tag of `script.js` in `index.html`

- Methods

We have two methods for now one it 'to' and one is 'from' to use both code should be written like this:

```js
gsap.to();
gsap.from();
```

Selections of elements will be same as CSS Selectors for example,

```js
gsap.to("#box");
gsap.from(".box");
```

```js
gsap.from(".box", {
  // You're gonna write animation code here in the form of key-value pairs just like CSS
});
```

```js
gsap.to(".box", {
  x: 1000, // 1000 at X-axis
  duration: 2, // Duration of Animation
  delay: 1, // Time taken to start the Animation
});
```

'to' takes the animation initial to the final position where as the 'from' takes the animation from final to initial position

```js
gsap.from(".box2", {
  x: 1000,
  y: 200,
  duration: 2,
  delay: 3,
  rotate: 360, // 360 Degree rotation
});
```

You can write css properties as well all you have to do is write them in camelCase like this:

```js
gsap.to(".box", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "darkred",
});
```

- Handling multiple elements

```js
gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
});
```

In the above code all 3 h1 tags are animating together if we required them to animate one by one we can use stagger exactly like this:

```js
gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
  stagger: 2, // Duration between animate elements one by one
});
```

In stagger can use negative values too will start animating from last element towards first

- Repeat and Yoyo

After the initial animation if the repeat property is given and the animation will repeat again given number of times

While repeating animation when element will try to reach previous position it won't look animated then comes Yoyo, What yoyo will do is it creates reverse animation at the time of element getting back to the position where it was started to show the animation again

Code will look like this:

```js
gsap.from(".view2 .box", {
  x: 1000,
  y: 200,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: 2,
  yoyo: true,
});
```

If we assign '-1' value to repeat then it will repeat infinite times

- GSAP Timeline

Timeline is like suppose there are 3 boxes you have given animations to all three but you want to animate them one by one like 2nd element's animation will start after finishing the animation of 1st element same for 3rd

Before Timeline introduced this is how we were writing code to perform this type of animation

```js
gsap.to(".view3 .box1", {
  x: 1000,
  backgroundColor: "yellow",
  duration: 2,
  delay: 1,
});
gsap.to(".view3 .box2", {
  x: 1000,
  rotate: 360,
  duration: 2,
  delay: 3,
});
gsap.to(".view3 .box3", {
  x: 1000,
  scale: 0.5,
  duration: 2,
  delay: 5,
});
```

All we were doing was to give delay after calculating duration + delay of the previous element which was a bit lengthy and complicated process if we have lot of elements

Now what you can do instead is you can create timelines like this:

```js
let tl = gsap.timeline();

tl.to(".view4 .box1", {
  x: 1000,
  backgroundColor: "yellow",
  duration: 2,
  delay: 1,
});
tl.to(".view4 .box2", {
  x: 1000,
  rotate: 360,
  duration: 2,
});
tl.to(".view4 .box3", {
  x: 1000,
  scale: 0.5,
  duration: 2,
});
```

Now you don't have to give delays to these elements they will run through same timeline

- Task

Now as a task lets create navbar with this timeline and stagger

`index.html`

```html
<div class="home">
  <nav>
    <h2>Animation</h2>

    <div class="links">
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Work</a>
      <a href="/">Contact</a>
    </div>
  </nav>
  <h1>Web Development</h1>
</div>
```

`style.scss`

```scss
.home {
  height: 100vh;
  width: 100vw;
  position: relative;
  nav {
    padding: 2rem 3rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;

      a {
        text-decoration: none;
      }
    }
  }
  h1 {
    font-size: 6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
}
```

`script.js`

```js
let tlNav = gsap.timeline();

tlNav.from("nav h2", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 1,
});
tlNav.from("nav a", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
tlNav.from(".home h1", {
  opacity: 0,
  scale: 0.2,
  duration: 0.5,
});
```

- ScrollTrigger

So, here comes another problem in which suppose on a website you have given animation to two different elements one is at the first viewport view (page 1) and second one is at second viewport view (page 2) means down to the page of first one you have to scroll to see it as the first one is taking full viewport height, in this case animation will occur on both at same time till the time user will scroll to the next page animation of that second element may have finished, to overcome this problem we use ScrollTrigger

ScrollTrigger is Plugin of GSAP
CDN : Paste it next to GSAP CDN

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"
  integrity="sha512-P2IDYZfqSwjcSjX0BKeNhwRUH8zRPGlgcWl5n6gBLzdi4Y5/0O4zaXrtO4K9TZK6Hn1BenYpKowuCavNandERg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

```js
gsap.from(".page1 .box", {
  scale: 0,
  delay: 2,
  duration: 2,
  rotate: 360,
});

gsap.from(".page2 .box", {
  scale: 0,
  delay: 2,
  duration: 2,
  rotate: 360,
  scrollTrigger: ".page .box", // This is how we write in camelCase
});
```

With specific properties :
Use 'trigger' for targeted element from which the animation will be started,
Use 'scroller' & mostly it will be body
Code will look like this:

```js
gsap.from(".page2 .box", {
  scale: 0,
  delay: 2,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
  },
});
```

Use 'markers' property for help
If you given markers: true then you will get to see the starting and ending point of scroller and element

As you can see whenever the scroller-start point hits the start point of element then that element gets triggerd & animation gets executed
You can define starting and ending points as well like this:

```js
gsap.from(".page2 .box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
```

Making heading tag move with ScrollTrigger:

```html
<div class="page2">
  <h1>Hello</h1>
  <h2>Welcome!</h2>
</div>
```

```scss
.page2 {
  height: 100%;
  width: 100%;
  background-color: royalblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  h1 {
    position: relative;
    font-size: 2rem;
  }
  h2 {
    position: relative;
    font-size: 2rem;
  }
}
```

```js
gsap.from(".page2 h1", {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: ".page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});

gsap.from(".page2 h2", {
  opacity: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: ".page2 h2",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
```

Have to remove markers when everything seems okay

Now will make animation that is complete dependent on scrolling
By using 'scrub' property while making animation with `scrub: true` property animation will start from scroller (which is body) starting point till reaches the ending point, animation will execute throughout scrolling
Code will look like this:

```js
gsap.from(".page2 .box", {
  opacity: 0,
  scale: 0,
  duration: 2,
  rotate: 720,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: true,
  },
});
```

To provide smoothness over scrolling you can give value to the scrub: 1 to 5, it's completely up to you how smooth you want

Then comes a property known as 'pin': (which we use to pin out element)
`pin: true` this is how you can write you can give values like scrub as well

Making something to understand how pin is working:

You have to make sure one thing that is whenever you are writing code to pin something make sure as you are selecting the element but inside scrollTrigger you will be targeting the parent of the element selected
For this task we will be assigning starting point "top 0%" and end "top -100%" which is above the start
To make this animation work with scrolling will be giving `scrub: 1`
& finally to make it look like a pinned element will give it `pin: true`

`index.html`

```html
<div class="page1"></div>
<div class="page2">
  <h1>Experiences</h1>
</div>
<div class="page3"></div>
```

`style.scss`

```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: white;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  background-color: #111;
  overflow-x: hidden;
}
.page1,
.page2,
.page3 {
  height: 100%;
  width: 100%;
}
.page2 {
  background-color: royalblue;
  padding: 6vw 0;
  h1 {
    font-size: 62vh;
    font-weight: 500;
    text-transform: uppercase;
  }
}
```

`script.js`

```js
gsap.to(".page2 h1", {
  transform: "translateX(-120%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 0%",
    end: "top -100%", // This property refering to the endpoint of the animation like how long will the animation execute basically, animation will end when the .page2 hit this given position to the end
    scrub: 1,
    pin: true,
  },
});
```

- SVG

SVG stands for Scalable Vector Graphics

The problem with images was when we try to zoom into it because of the pixels it won't look nice

- - Working with SVG

SVG is a container element which has various attribute in it like height, width, etc.

[MDN Document](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)

`index.html`

```html
<div class="string">
  <svg width="190" height="160">
    <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
  </svg>
</div>
```

So this svg is of a simple curve display
As you can see svg tag containing a self-closing tag:

```html
<path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
```

Inside the path the 'M' is denoting move to point `M 10 80` first value is of x-axis and second one is of y-axis
Basically it is our starting point of curve 10 from x-axis and 80 from y-axis
Then comes the middle part which is curve so there are two types of curve one is Qudratic curve and second one is Cubic curve
Cubic curve is called with C
& Qudratic curve is called with Q.

The cubic curve is slightly complex curve which covers various type of curves

For a simple curve like in our code we can use Qudratic curve like this:
`Q 95 10`

And the ending point is 180 at x-axis and 80 from y-axis
This is how you have made a simple curve with svg

As per your convenience you can change these values can change the stroke and fill attributes as well

Creating Animation with this curve:

To change the values of attribute using GSAP you can write code like this:

```js
gsap.to("svg path", {
  attr: { d: path },
});
```

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SVG</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="string">
      <svg width="1000" height="200">
        <path
          d="M 10 100 Q 500 100 990 100"
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
      integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="script.js"></script>
  </body>
</html>
```

`style.scss`

```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: white;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  background-color: #111;
}
.string {
  height: 8rem;
  width: 100%;
}
```

`script.js`

```js
let path = "M 10 100 Q 500 100 990 100";
let finalPath = "M 10 100 Q 500 100 990 100";

let string = document.querySelector(".string");

string.addEventListener("mousemove", (dets) => {
  path = `M 10 100 Q 500 ${dets.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: path },
  });
});
```

Introducing GSAP Easing properties:
[GSAP Easing](https://gsap.com/docs/v3/Eases)

Including in project:

```js
let path = "M 10 100 Q 500 100 990 100";
let finalPath = "M 10 100 Q 500 100 990 100";

let string = document.querySelector(".string");

string.addEventListener("mousemove", (dets) => {
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
```

For more properties like `ease: "power3.out"` & `ease: "elastic.out(1,0.2)"` can check GSAP Easing Docs

- Made Custom Cursor
  Source code is in folder 4

- Creating Timeline Animation
  Source code is in folder 5

- Creating Text Animations
  Source code is in folder 6
  `script.js`:

  ```js
  let breakTheText = () => {
    let h1 = document.querySelector("h1");
    let h1Text = h1.textContent;
    let splittedText = h1Text.split("");

    let clutter = "";

    splittedText.forEach((elem, idx) => {
      clutter += `<span class=${idx}>${elem}</span>`;
    });

    h1.innerHTML = clutter;
  };
  breakTheText();
  gsap.from("h1 span", {
    y: 80,
    stagger: 0.1,
    // stagger: -0.1,
    duration: 0.2,
    opacity: 0,
    delay: 0.3,
  });
  ```

Normal One

Two Sided:

`script.js`

```js
let breakTheText = () => {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;
  let splittedText = h1Text.split("");
  let halfValue = splittedText.length / 2;
  let clutter = "";

  splittedText.forEach((elem, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
};

breakTheText();

gsap.from("h1 .a", {
  y: 50,
  duration: 0.6,
  delay: 0.3,
  stagger: 0.15,
  opacity: 0,
});
gsap.from("h1 .b", {
  y: 50,
  duration: 0.6,
  delay: 0.3,
  stagger: -0.15,
  opacity: 0,
});
```

- Making Animated Website
  Sourcode is in folder 8

Sometimes in timeline if you give delay it won't work as expected so we give delay like this:

```js
tl.from(
  ".center .right img",
  {
    duration: 0.5,
    opacity: 0,
  },
  "-=1"
);
```

If you are working with timeline and you wanted two divs animate at exact same time, then you can pass a same name to those both exactly like this:

```js
tl2.from(
  ".elem.line1-l",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "left"
);
tl2.from(
  ".elem.line1-r",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "left"
);
tl2.from(
  ".elem.line2-l",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "right"
);
tl2.from(
  ".elem.line2-r",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "right"
);
```

`Live Demo` of Animated Website: [Site](https://gsap-animated-site.vercel.app/)

- GSAP with React
