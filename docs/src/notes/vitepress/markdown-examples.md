# Markdown 扩展 {#markdown-extensions}

VitePress 带有内置的 Markdown 扩展。

## 标题锚点 {#header-anchors}

标题会自动应用锚点。可以使用 `markdown.anchor` 选项配置锚点的渲染。

### 自定义锚点 {#custom-anchors}

要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：

```
# 使用自定义锚点 {#my-anchor}
```

## GitHub 风格的表格 {#github-style-tables}

**输入**

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**输出**

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## Emoji :tada:

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

这里可以找到[所有支持的 emoji 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)。

## 目录表 (TOC) {#table-of-contents}

**输入**

```
[[toc]]
```

**输出**

[[toc]]

可以使用 `markdown.toc` 选项配置 TOC 的呈现效果。

## 自定义容器 {#custom-containers}

自定义容器可以通过它们的类型、标题和内容来定义。

### 默认标题 {#default-title}

**输入**

```md
::: info tipLabel
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

### 自定义标题 {#custom-title}

可以通过在容器的 "type" 之后附加文本来设置自定义标题。

**输入**

````md
::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码

```js
console.log("Hello, VitePress!");
```

:::
````

**输出**

::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码

```js
console.log("Hello, VitePress!");
```

:::

此外，可以通过在站点配置中添加以下内容来全局设置自定义标题：

## GitHub 风格的警报 {#github-flavored-alerts}

VitePress 同样支持以标注的方式渲染 [GitHub 风格的警报](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)。它们和[自定义容器](#custom-containers)的渲染方式相同。

```md
> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。
```

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

## 代码块中的语法高亮 {#syntax-highlighting-in-code-blocks}

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 在 Markdown 代码块中使用彩色文本实现语法高亮。Shiki 支持多种编程语言。需要做的就是将有效的语言别名附加到代码块的开头：

**输入**

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

```js
export default {
  name: "MyComponent",
  // ...
};
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

在 Shiki 的代码仓库中，可以找到[合法的编程语言列表](https://shiki.style/languages)。

<!-- 还可以全局配置中自定义语法高亮主题。有关详细信息，参见 [`markdown` 选项](../reference/site-config#markdown)得到更多信息。 -->

## 在代码块中实现行高亮 {#line-highlighting-in-code-blocks}

- 多行：例如 `{5-8}`、`{3-10}`、`{10-17}`
- 多个单行：例如 `{4,7,9}`
- 多行与单行：例如 `{4,7-13,16,23-27,40}`
- 也可以使用 `// [!code highlight]` 注释实现行高亮。

**输入**

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
      // code highlight
      msg2: 'Highlighted!', // [!!code highlight]
    }
  }
}
```
````

**输出**

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
      // code highlight
      msg2: 'Highlighted!', // [!code highlight]
    }
  }
}
```

## 代码块中聚焦 {#focus-in-code-blocks}

在某一行上添加 `// [!code focus]` 注释将聚焦它并模糊代码的其他部分。

此外，可以使用 `// [!code focus:<lines>]` 定义要聚焦的行数。

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!!code focus]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: "Focused!", // [!code focus]
    };
  },
};
```

## 代码块中的颜色差异 {#colored-diffs-in-code-blocks}

在某一行添加 `// [!code --]` 或 `// [!code ++]` 注释将会为该行创建 diff，同时保留代码块的颜色。

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!!code --]
      msg: 'Added' // [!!code ++]
      msg: 'Error', // [!!code error]
      msg: 'Warning' // [!!code warning]
    }
  }
}
```
````

**输出**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    }
  }
}
```

## 行号 {#line-numbers}

可以通过以下配置为每个代码块启用行号：

```js
export default {
  markdown: {
    lineNumbers: true,
  },
};
```

<!-- 查看 [`markdown` 选项](../reference/site-config#markdown) 获取更多信息。 -->

可以在代码块中添加 `:line-numbers` / `:no-line-numbers` 标记来覆盖在配置中的设置。

还可以通过在 `:line-numbers` 之后添加 `=` 来自定义起始行号，例如 `:line-numbers=2` 表示代码块中的行号从 2 开始。

**输入**

````md
```ts {1}
// 默认禁用行号
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```
````

**输出**

```ts {1}
// 默认禁用行号
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

## 导入代码 {#import-code-snippets}

可以像这样对多个代码块进行分组：

**输入**

````md
::: code-group

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

<!-- 文件名默认用作标题 -->

<<< @/notes/vitepress/snippets/snippet.js

<!-- 也可以提供定制的代码组 -->

<<< @/notes/vitepress/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::
````

**输出**

::: code-group

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

<<< @/notes/vitepress/snippets/snippet.js

<<< @/notes/vitepress/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::

## 包含 markdown 文件 {#markdown-file-inclusion}

可以像这样在一个 markdown 文件中包含另一个 markdown 文件，甚至是内嵌的。

::: tip
也可以使用 `@`，它的值对应于源代码根目录，默认情况下是 VitePress 项目根目录，除非配置了 `srcDir`。
:::

例如，可以这样用相对路径包含 Markdown 文件：

**输入**

```md
# Basics

<!!--@include: @/notes/vitepress/snippets/basics.md-->
<!!--@include: @/notes/vitepress/snippets/basics.md{2,3}-->
```

**输出**

```md
# Basics

<!--@include: @/notes/vitepress/snippets/basics.md-->
<!--@include: @/notes/vitepress/snippets/basics.md{2,3}-->
```

所选行范围的格式可以是： `{m,}`、 `{,n}`、`{m,n}`

::: warning
如果指定的文件不存在，这将不会产生错误。因此，在使用这个功能的时候请保证内容按预期呈现。
:::

## 数学方程 {#math-equations}

现在这是可选的。要启用它，需要安装 `markdown-it-mathjax3`，在配置文件中设置`markdown.math` 为 `true`：

**输入**

```md
When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
```

**输出**

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

## 图片懒加载 {#image-lazy-loading}

通过在配置文件中将 `lazyLoading` 设置为 `true`，可以为通过 markdown 添加的每张图片启用懒加载。
