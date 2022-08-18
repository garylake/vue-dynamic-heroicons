# Vue Dynamic Heroicon
A really simple Vue 3 component for dynamically loading the official Heroicons Vue components. Instead of using `<BeakerIcon />` you can use `<DynamicHeroicon name="beaker" />` which allows you to very easily dynamically load heroicons if you have a lot in the same place. 

If you are only using a handful of icons, you're probably better off using the supplied originals as using this component will effectively load all heroicons. 

However, if you're using lots of them in the same component/view, perhaps in a design system, and want the developer convienience of not having to import every single icon as a new component, this can help. 

## Installation 
`npm install vue-dynamic-heroicons`

## Usage
Register the component locally:

```
import { DynamicHeroicon } from 'vue-dynamic-heroicons';

export default {
  components: {
    DynamicHeroicon,
  },
};
```

Find the kebab-case name of the icon you to use from [heroicons](https://heroicons.com/), and insert the component.
```
<DynamicHeroicon name="beaker" />
<DynamicHeroicon name="academic-cap" :outline="true" :size="6" />
<DynamicHeroicon name="cake" :outline="true" class="text-indigo-700" :size="8" />
```

## Props
* `name` Heroicon name in kebab-case – e.g. "academic-cap"
* `outline` Boolean, if true outline style icons used, else default or false uses solid
* `size` Number, which will be output as tailwind width and height classes with the same number. Defaults to `h-4` and `w-4`, won't go lower than 4. If you're not using tailwind then set sizes using `class` or `style`.

## About 
I'd already made this basic component for a project I'm working on. I thought others might find it useful and I really wanted to publish my first bit of Open Source, mainly so I could learn/appreciate a bit more. Feedback and PRs welcome but please be gentle, I'm learning OSS! 

## Credits
@matthewmaribojoc's [Learning Vue Paths](https://github.com/matthewmaribojoc/learnvue-learning-paths)
@PCkelley's [Florida Components Demo](https://github.com/PCkelley/florida-components)

