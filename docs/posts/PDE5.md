---
title: 数理方程（五）分离变量法
top: 1
toc: true
recommend: 1
keywords: PDE
date: 2024-12-4
---
~~终于讲到大杀器了，为什么不早点讲啊~~

## 基本思路

大概就是说，我们可以简单认为之前的几种PDE的解具有如下形式
$$
u(x,t) = X(x)T(t)
$$
代回方程能够得到（比如一维波动方程）
$$
X(x)T''(t) - a^2 X''(x)T(t) = 0
$$
不妨转化为下面的形式
$$
\frac{T''(t)}{a^2T(t)} = \frac{X''(x)}{X(x)} = -\lambda
$$
$\lambda$应该是固定的，所以解下面的特征值问题
$$
X''(x) + \lambda X(x) = 0
$$
边界条件的限制一般不允许$\lambda<0$，$\lambda = 0$的时候获得常数项，$\lambda>0$的时候得到下面的解
$$
\lambda_{k} = \frac{k^2\pi^2}{l^2}, X_{k}(x) = C_{1}\cos \sqrt{ \lambda_{k} } x + C_{2} \sin \sqrt{ \lambda_{k} } x
$$
（$l$来自于边界条件）拿着特征值可以反解出$T_{k}(t)$，合并就能得到
$$
u(x,t) = \sum^{\infty}_{k=1} T_{k}(t)X_{k}(x)
$$
反正就是套路化的算算算

## 非齐次问题的处理

非齐次问题主要有如下特征
#### 方程非齐次
$$
\partial_{t} u - a^2 \partial_{xx}u = f(x,t) \neq 0
$$
#### 边界条件非齐次
$$
u(0,t) = g_{1}(t),u(l,t) = g_{2}(t)
$$
要先将这些问题转化为齐次的情况

### 方程非齐次
$$
\partial_{tt} u - a^2 \partial_{xx}u = f(x,t) \neq 0
$$
其他边界条件和齐次问题一致。
我们先处理齐次的问题，用分离变量法解
$$
\partial_{tt} u - a^2 \partial_{xx}u = 0
$$
得到
$$
\lambda_{k} = \frac{k^2\pi^2}{l^2}, X_{k}(x) = \sin \left( \frac{k\pi x}{l} \right)
$$
$X_{k}$其实指明了解的基本形式，所以我们利用$X_{k}$对所有条件进行展开
$$
\displaylines
u(x,t) = \sum^\infty_{k = 1} T_{k}(t)\sin \frac{k\pi x}{l}\\
f(x,t) = \sum^\infty_{k = 1} f_{k}(t)\sin \frac{k\pi x}{l}\\
\varphi(x,t) = \sum^\infty_{k = 1} \varphi_{k}(t)\sin \frac{k\pi x}{l}\\
\psi(x,t) = \sum^\infty_{k = 1} \psi_{k}(t)\sin \frac{k\pi x}{l}\\
$$
其实就会有
$$
T''_{k}(t) + \left( \frac{k\pi a}{l} \right)^2 T_{k}(t) = f_{k}(t),\space T_k(0) = \varphi_{k}, \space T'_{k}(0) = \psi_{k}
$$
（$T_{k}$的初始条件由$u$的初始条件决定）

能够得到
$$
T_{k}(t) = \varphi_{k}\cos \frac{k\pi at}{l} + \frac{l}{k \pi a}\psi_{k} \sin \frac{k\pi at}{l} + \frac{l}{k \pi a} \int^t_{0}f_{k}(\tau)\sin \frac{k\pi a(t-\tau)}{l} \mathrm{dt}
$$
合并得到总问题的解
热传导方程的讨论是类似的

### 非齐次边界条件
对于非齐次边界条件
$$
u(0,t) = g_{1}(t), u(l,t) = g_{2}(t)
$$
