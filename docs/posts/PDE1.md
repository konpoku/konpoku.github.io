---
title: 数理方程学习笔记（一）：波动方程初步
top: 1
toc: true
recommend: 1 
keywords: PDE
date: 2024-11-18
---
## 特征线法

### 常系数运输方程初值问题

对于方程
$$
\partial_t \rho + a \partial_x \rho = 0, x \in \mathbb{R}, t > 0
$$
给定初值条件
$$
\rho(x,0) = \rho_0(x)
$$
我们发现在特征线上，$\rho$ 保持不变，然后通过特征线反推每一点$\rho$的值
具体而言是这样的，特征线是下面的常微分方程初值问题的解
$$
\frac{\rm{d}x}{\rm{d}t} = a, x(0) = x_0
$$
其实这条线就是$x(t,x_0) = at + x_0$，但是写成微分形式其实是为了下面的推导
根据全微分公式
$$
\rm{d}f = \frac{\partial f}{\partial x} \rm{d}x + \frac{\partial f}{\partial t} \rm{d}t
$$
我们有
$$
\rm{d}\rho = \partial_x \rho \rm{d}x + \partial_t \rho \rm{d}t
$$
$$
\frac{\rm{d}\rho}{\rm{d}t} = \partial_x\rho \frac{\rm{d}x}{\rm{d}t} + \partial_t \rho = \partial_t \rho + a\partial_x \rho = 0
$$
最后一步推导使用了原方程条件
上面的推导表明在特征线上$\rho$为常数，因此对于$(x,t)$平面上的任何一个点$(x_0,t_0)$，我们都可以找到一条过该点的的特征线$x(t,x_0 - at_0) = a(t-t_0) + x_0$，这条线与$t=0$有一交点$x=x_0-at_0$，在该点$\rho$的值是确定的（初值条件），有$\rho(x_0-at_0,0) = \rho_0(x_0-at_0)$
实际上我们就推导出了$\rho(x,t) = \rho_0(x-at)$

值得注意的事情是，我们不妨画出$t=0$的时候$\rho$随$x$变化的图像，那么$t$变大即图像右移，$t$减小即图像左移，因此被称为输运方程

### 变系数输运方程初值问题

现在来讨论更为复杂的情况
$$
\partial_t \rho + \partial_x(v(x)\rho) = 0, \rho(x,0) = \rho_0(x), x\in \mathbb{R}, t > 0
$$
~~经过数学家不知道多少年的研究~~我们知道这个方程的特征线长这样
$$
\frac{\rm{d}x}{\rm{d}t} = v(x(t)), x(0) = x_0
$$
然后我们把方程稍微变形一下，把变系数拿出来
$$
\partial_t \rho + v(x)\partial_x \rho = -v'(x)\rho
$$
同样对$\rho$求全微分
$$
\frac{\rm{d}\rho}{\rm{d}t} = \partial_t \rho + \frac{\rm{d}x}{\rm{d}t}\partial_x \rho =\partial_t \rho + v(x)\partial_x\rho= -v'(x)\rho
$$
~~比起其他妖魔鬼怪，这个方程实在是太好解了！~~
将方程改写成我们熟悉的形式
$$
\frac{\rm{d}\rho}{\rho} = -v'(x)\rm{d}t
$$
两边积分
$$
\ln \rho(x(t,x_0),t) - \ln \rho_0(x_0)  = -\int^t_0 v'(x) \rm{d}\tau
$$
这里有几点需要注意的，首先是我们代入了$\rho(x,0)=\rho_0(x)$的初值条件
其次稍微换了一下符号，因为这里我们是对$[0,t]$区间积分，把原来的$t$换成了$\tau$
继续变换（使用了$\rm dx/d\tau = v(x(\tau))$）
$$
-RHS = \int^t_0 v'(x(\tau))\rm{d}\tau = \int^t_0 \frac{v'(x(\tau))}{v(x(\tau))}\frac{\rm{d}x}{\rm{d}\tau} \rm{d}\tau = \int^{x(t,x_0)}_{x_0} \frac{v'(x)}{v(x)}\rm{d}x = \ln \frac{v(x(t,x_0))}{v(x_0)}
$$
整理一下就是
$$
\rho(x(t,x_0),t) = \rho_0(x_0)\frac{v(x_0)}{v(x(t,x_0))}
$$
接下来还有一点问题，其实刚刚的$x_0$是任意的，现在我们需要根据确定的$t$来反推$x_0$。这个事情通过求解特征线方程来解决，我们先求$\rm dx/dt = v(x(t)),x(0)=x_0$的解为$x=x(t,x_0)$，然后反推就能得到$x_0=\varphi(x,t)$
最终的结果是
$$
\rho(x,t) = \rho_0(\varphi(x,t))\frac{v(\varphi(x,t))}{v(x)}
$$

~~不管你晕没晕，反正笔者是晕了~~这里给出一个例题帮助理解

### 例题1

求下面初值问题的解
$$
\partial_t u + (x+t)\partial_x u + u = 0, u(x,0) = x, x\in \mathbb{R}, t > 0
$$
特征线是
$$
\frac{\rm dx}{\rm dt} = x+t, x(0) = x_0
$$
代入原方程，有（原来偏导的几项变成了全微分）
$$
\frac{\rm d u}{\rm dt} + u = x(t,x_0)
$$
先解特征线方程，不难得到
$$
x(t)=e^t(1+x_0)-(1+t)
$$
然后代入u的方程，解得~~但是我已经不会解ODE了~~
$$
u(t) = 1/2(x_0+1)e^t + 1/2(x_0-1)e^{-t} -t
$$
同样特征线方程导出的结果，能够得到
$$
x_0 = (x+t+1)e^{-t} - 1
$$
代入得到
$$
u(x,t) = 1/2(x+t+1)e^{-2t} - e^{-t} + 1/2(x-t+1)
$$

## 齐次化原理

~~这大概是你们都不会学但是因为某位老师的恶趣味被塞进来的内容~~
线性方程是可叠加的，具体看这个例子
对于弦波动方程的两个解$u_1,u_2$（这个方块算子是我的老师规定的，版权在他）
$$
\square u_i = \partial_{tt}u_i - a^2\partial_{xx}u_i = f_i(x,t)
$$
那么$u = \lambda_1 u_1 + \lambda_2 u_2$就是
$$
\square u = \lambda_1 f_1 + \lambda_2 f_2
$$
的解

### 齐次化原理爷爷用线性叠加原理打掉一维波动方程初值问题

一维波动方程初值问题是
$$
\square u = f, u(x,0) = \varphi(x), \partial_t u(x,0) = \psi(x)
$$
由于线性叠加可行，我们对问题进行拆分
$$
\square u_1 = 0, u_1(x,0) = \varphi(x), \partial_t u_1(x,0) = 0
$$
$$
\square u_2 = 0, u_2(x,0) = 0, \partial_t u_2(x,0) = \psi(x)
$$
$$
\square u_3 = f, u_3(x,0) = 0, \partial_t u_3(x,0) = 0
$$
原问题的解就是
$$
u = u_1 + u_2 + u_3
$$
齐次化原理是说，我们能够直接从$u_2$推导出$u_3$。$u_2$推$u_1$不是齐次化原理，但是是比较显然的
总结一下就是下面的定理

#### 定理

假设算子$M$满足条件：$u_2 = M_{\psi}(x,t)$给出了$u_2$的解，那么$u_1,u_3$可以分别被表示为
$$
u_1 = \partial_t M_{\psi}(x,t), u_3 = \int^t_0 M_{f_\tau}(x,t-\tau)\rm{d}\tau
$$
我们先不要去关心$M$是什么，先看看这个定理怎么证明
先用$u_2$推导$u_1$
已知
$$
(a)\square M_\varphi = 0,\space (b) M_\varphi(x,0) = 0,\space(c) \partial_t M_\varphi(x,0) = \varphi(x)
$$
希望推导出的是
$$
(a')\square \partial_t M_\varphi = 0,\space (b') \partial_t M_\varphi(x,0) = \varphi(x),\space(c') \partial_t \partial_t M_\varphi(x,0) = 0
$$
\(c\)就是(b')
(a')即
$$
\square (\partial_t M_\varphi) = \partial_{t} \square M_\varphi = 0
$$
(b')即
$$
\partial_{tt} M_\varphi(x,0) = a^2\partial_{xx} M_\varphi(x,0) = 0
$$
第二个等号利用了(b)
接下来要证明$u_2 \Rarr u_3$的部分
$$
(a'')\square u_3 = f, \space (b'') u_3(x,0) = 0, \space (c'') \partial_t u_3(x,0) = 0
$$
不妨记
$$
v(x,t) = \int^t_0 M_{f_\tau}(x,t-\tau)\rm{d}\tau
$$
得到$(b'')v(x,0) = 0$的结果
$$
\begin{align*}
(c'')\partial_t v(x,t) &= \partial_t \int^t_0 M_{f_\tau}(x,t-\tau)\rm{d}\tau \\
&= M_{f_t}(x,t-\tau) |_{\tau = 0} + \int^t_0 \partial_t M_{f_\tau}(x,t-\tau)\rm{d}\tau \\
&= \int^t_0 \partial_t M_{f_\tau}(x,t-\tau)\rm{d}\tau
\end{align*}
$$
显然有$(c'')\partial_t (x,0) = 0$
在上面导出的$\partial_t v(x,t)$的基础上我们再求导
$$
\begin{align*}
\partial_{tt} v(x,t) &= \partial_t \int_0^t \partial_t M_{f_\tau}(x,t-\tau)\rm{d}\tau\\
&= \partial_t M_{f_t}(x,0) + \int^t_0 \partial_{tt} M_{f_\tau}(x,t-\tau)\rm{d}\tau \\
&= f(x,t) + \int^t_0 \partial_{tt} M_{f_\tau}(x,t-\tau)\rm{d}\tau
\end{align*}
$$
最后一个等号使用了\(c\)
那么
$$
\begin{align*}
\square v(x,t) &= f(x,t) + \int^t_0 \partial_{tt} M_{f_\tau}(x,t-\tau)\rm{d}\tau - a^2\int^t_0 \partial_{xx} M_{f_\tau}(x,t-\tau)\rm{d}\tau \\
&= f(x,t) + \int^t_0 \square M_{f_\tau}(x,t-\tau)\rm{d}\tau \\
&= f(x,t)
\end{align*}
$$
第一个等号使用了求导和积分的次序交换，第二个等号使用了(a)
证毕

## 一维初值问题

现在，我们只要得出$u_2$的解，就可以推导出原问题的解

先进行算子分解
$$
\square = \partial_{tt} - a^2\partial_{xx} = (\partial_t + a\partial_x) (\partial_t - a\partial_x)
$$
我们假装算子分解是合理的，于是导出下面的结论
$$
\partial_t u_2 - a \partial_x u_2 = v , u_2(x,0) = 0 \\
\partial_t v + a \partial_x v = 0, v(x,0) = (\partial_t u_2 - a\partial_x u_2)|_{t=0} = \psi(x)
$$
这里将算子的复合看作“乘法”，其实是先进行算子分解结果右侧的运算得到v，然后再对v做左侧的运算

然后我们就能够使用特征线法对方程进行求解

先根据原有的条件我们得到
$$
\rm \frac{dx}{dt} = a \\
\rm \frac{dv}{dt} = \partial_t v + \frac{dx}{dt}\partial_x v =\rm \partial_t v + a\partial_x v = 0\\
v(x,t) = \psi(x-at)
$$
再次使用特征线法
$$
\rm \frac{dx}{dt} = -a, x(0) = x_0 \Rarr x_0 = x - at \\
\rm \frac{du_2}{dt}= \partial_t u_2 + \frac{dx}{dt}\partial_x u_2 = v(x,t) = \psi(x-at), u_2(x(0),0) = 0\\
u_2 = \int^t_0 \psi(x_0 - 2a\tau)\rm d\tau = \frac{1}{2a}\int^{x+at}_{x-at} \psi(\xi)\rm d \xi
$$


我们获得了所有的结果
$$
\begin{align*}
u_1 = \partial_t M_{\varphi}(x,t) &= \frac{1}{2a}\partial_t(\int^{x+at}_{x-at} \psi(\xi)\rm d \xi) \\
&= \frac{1}{2a}(a\varphi(x+at) - (-a)\varphi(x-at)) = \frac{1}{2}(\varphi(x+at) - \varphi(x-at))
\end{align*}
$$

$$
u_3 = \int^t_0 M_{f_\tau}(x,t-\tau){\rm d\tau} = \frac{1}{2a}\int^t_0\int^{x+at}_{x-at} f(\xi,\tau)\rm d \xi d\tau
$$

合并得到
$$
u(x)
= \frac{1}{2}(\varphi(x+at) - \varphi(x-at)) + \frac{1}{2}\int^{x+at}_{x-at}\psi(\xi){\rm d}\xi + \frac{1}{2a}\int^t_0\int^{x+at}_{x-at} f(\xi,\tau)\rm d \xi d\tau
$$

其实这个时候我都忘了原来的方程条件给了哪些了，我在这里再重抄一遍x
$$
\square u = f(x,t), u(x,0) = \varphi(x), \partial_t u(x,0) = \psi(x)
$$
$f\equiv 0$的时候，上面的公式又被称为D' Alembert公式（我并不知道怎么念。。）
$$
u(x,t) = \frac{1}{2}(\varphi(x+at)+\varphi(x-at))+\frac{1}{2a}\int^{x+at}_{x-at}\psi(\xi)\rm d\xi
$$
有意思的事情是，解在$(x,t)$的数值仅仅依赖于x轴上区间$[x-at,x+at]$上的初值条件，而与其他地方的初值条件无关。区间$[x-at,x+at]$称为点$(x,t)$的依赖区间

# 略过上述内容并不会对我们后续的学习产生太大影响