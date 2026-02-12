---
title: 数理方程（4）：位势方程和Green函数法
top: 1
toc: true
recommend: 1 
keywords: PDE
date: 2024-12-4
---
## 方程形式

位势方程主要是说
$$
-\Delta u=f
$$
其中$\Delta = \sum^{d}_{i=1} \frac{\partial^2}{\partial x_{i}^2}$是Laplace算子，d为空间维数，f是源项，当f=0的时候方程又被称为Laplace方程或者调和方程。

## Green公式和基本解

Green公式是说：

证明：由于
$$
u \Delta v = u(\nabla \cdot \nabla v) = \nabla \cdot(u \nabla v) - \nabla u \cdot \nabla v
$$
（直接拆开就能得到）
所以有
$$
u \Delta v - v \Delta u = \nabla \cdot(u \nabla v - v \nabla u)
$$
对两边在$\Omega$进行积分，再利用Green公式
$$
\iint_{\Omega} \nabla \cdot \mathrm{dx} = \int_{\partial \Omega}u \cdot n \mathrm{d}l
$$
得到证明。

利用上面的结论可以得到二维Laplace方程的基本解为
$$
\Gamma(x,y;\xi,\eta)= \frac{1}{2\pi}\ln\frac{1}{\sqrt{ (x-\xi)^2 + (y-\eta)^{2} }}
$$
证明：
我们把解带入Laplace方程在数学上的严格形式
由于$\Gamma$在$(x,y) = (\xi,\eta)$时有奇性，因此考虑区域
$$
\Omega_{\epsilon} = {(x,y) \in \mathbb{R}^2 | \epsilon}
$$
对任意测试函数
$$
\begin{align}
\varphi(x,y) &= -\iint_{\mathbb{R}^{2}}\Gamma(x,y;\xi,\eta)\Delta \varphi \mathrm{dxdy} = -\lim_{ \epsilon \to 0^+ }\iint_{\Omega_{\epsilon}}\Gamma(x,y;\xi,\eta)\Delta \mathrm{dxdy}  \\
&=-\lim_{ \epsilon \to 0^+ } \iint_{\Omega_{\epsilon}}\varphi \Delta \Gamma(x,y;\xi,\eta)\mathrm{dxdy}+\lim_{ \epsilon \to 0^+ } \int_{\partial \Omega_{\epsilon}} \left( \varphi\frac{\partial\Gamma}{\partial n} - \Gamma\frac{\partial\varphi}{\partial n} \right)\mathrm{dl}
\end{align}
$$

在解决位势方程之前，我们还要引入一个简单定理作为基础
设$\partial \Omega$分段光滑，$u \in C^2(\Omega) \cap C^1(\overline{\Omega})$，有
$$
u(\xi,\eta) = -\iint_{\Omega}\Gamma \Delta u \mathrm{dxdy} + \int_{\partial \Omega}\left( \Gamma \frac{ \partial u }{ \partial n } - \frac{ \partial \Gamma }{ \partial n } u \right)
$$
证明：直接用Green公式有
$$
\iint_{\Omega}(u \Delta \Gamma - \Gamma \Delta u)\mathrm{dxdy} = \int_{\partial \Omega}\left( u \frac{ \partial \Gamma }{ \partial n } - \Gamma \frac{ \partial u }{ \partial n }  \right)\mathrm{d l}
$$

## Green函数

引入辅助函数$g(x,y;\xi,\eta)$，使得
$$
\Delta_{(x,y)} g(x,y;\xi,\eta)=0
$$
