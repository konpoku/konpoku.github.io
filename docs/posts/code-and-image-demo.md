---
title: 代码框与图片插入演示
date: 2025-02-01
---

本文演示博客对代码框和图片插入的支持。

## 行内代码

使用反引号可以插入行内代码，例如 `const x = 42` 或 `npm install`。

## 代码块

### JavaScript

```js
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(fibonacci(10)); // 55
```

### Python

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print(quicksort([3, 6, 8, 10, 1, 2, 1]))
```

### HTML

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Hello</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

## 图片插入

### 方式一：引用 public 目录下的图片

将图片放在 `docs/.vuepress/public/` 目录下，使用绝对路径引用：

![头像示例](/avatar.png)

### 方式二：引用相对路径图片

将图片放在与文章同级目录或子目录下，使用相对路径引用：

```markdown
![描述文字](./images/example.png)
```

### 方式三：引用外部图片

直接使用完整的 URL：

```markdown
![描述文字](https://example.com/image.png)
```

## 小结

- **行内代码**：使用单个反引号 `` ` ``
- **代码块**：使用三个反引号 ` ``` ` 加语言标识
- **图片**：使用标准 Markdown 语法 `![alt](src)`
