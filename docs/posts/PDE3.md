---
title: 数理方程（3）：热传导方程和积分变换初步
top: 1
toc: true
recommend: 1 
keywords: PDE
date: 2024-11-27
---
## 一维初值问题

### 解方程

考虑一维热传导方程初值问题
$$
\partial_{t} u - a^2\partial_{x x}u = f(x,t)\\
u(x,0) = \varphi (x)
$$
对u，在x上做傅立叶变换
$$
u(x,t) \stackrel{\mathcal{F}}{\rightarrow} \hat{u}(x,t), \partial_{x x}\hat{u} = (i \omega)^2\hat{u}
$$
那么偏微分方程被我们转换成为了
$$
\partial_{t} \hat{u} + a^2 \omega^2 \hat{u} = \hat{f}(\omega,t)\\
\hat{u}(x,0) = \hat{\varphi}(x)
$$
这是一个PDE，能够解得
$$
\hat{u}(\omega,t) = \hat{\varphi}e^{ -a^2 \omega^{2}t }+ \int^t_{0}\hat{f}(\omega,\tau)e^{ -a^{2}\omega^{2}(t-\tau) }\mathrm{d\tau}
$$
对上式做傅立叶逆变换，那么有
$$
u(x,t) = \mathcal{F}^{-1}[\hat{\varphi e^{ -a^{2}\omega^{2}t }}]+\int^t_{0}\mathcal{F}^{-1}[\hat{f}(\omega,\tau),e^{ -a^{2}\omega^{2}(t-\tau) }]
$$
为了化简上面的式子，我们采用傅立叶变换的卷积性质
$$
\mathcal{F}[f_{1}(x)*f_{2}(x)] = \sqrt{ 2\pi }\hat{f_{1}}(\omega)\hat{f_{2}}(\omega)\\
\mathcal{F}^{-1}[\hat{f_{1}}(\omega)\hat{f_{2}(\omega)}] = \frac{1}{\sqrt{ 2\pi }}f_{1}(x)*f_{2}(x)
$$
我们进行化简
$$
u(x,t) = \frac{\varphi(x)}{2a \sqrt{ \pi t }} * e^{ -x^2/4a^{2}t } + \int^t_{0} \frac{f(x,\tau)}{2a\sqrt{ \pi(t-\tau) }}*e^{ -x^2/4a^2(t-\tau) }\mathrm{d\tau}
$$
约定Poisson核由下面的式子给出
$$
K(x,t) = \begin{cases}
\frac{1}{2a\sqrt{ \pi t }e^{ -x^{2}/4a^{2}t }},&t>0\\ \\
0,&t \leq 0
\end{cases}
$$
上面的式子就表达为
$$
u(x,t) = \int_{-\infty}^{\infty} K(x-\xi,t)\varphi(\xi) \, d\xi + \int^t_{0}\int_{-\infty}^{\infty} K(x-\xi,t-\tau)f(\xi,\tau) \, d\xi d\tau 
$$
$K(x,t)$满足基本的一点性质
$$
\lim_{ t \to 0^+ } K(x,t) = \delta(x)
$$
认为$K(x,t)$在广义函数意义下满足初值问题
$$
\partial_{t}v - a^2\partial_{x x}v = 0,v(x,0)=\delta(x)
$$
考虑Poisson核的好处是有下面的结论
$$
\partial_{x x}(f_{1}(x) * f_{2}(x)) = \partial_{x x}\left( \int_{-\infty}^{\infty} f_{1}(\xi)f_{2}(x-\xi) \, d\xi  \right) = \int_{-\infty}^{\infty} f_{1}(\xi)\partial_{x x}f_{2}(x-\xi) \, d\xi = f_{1}(x)*(\partial_{x x}f_{2}(x))
$$
考虑Poisson核对应的初值问题和$\varphi(x)$的卷积
$$
\varphi * (\partial_{t}v - a^2\partial_{xx}v) = \partial_{t}(\varphi * v) - a^{2}\partial_{x x}(\varphi * v) = 0\\
\varphi(x)*v(x,0) = \varphi(x)*\delta(x) = \varphi(x)
$$
即函数$u(x,t) = \varphi(x)*K(x,t)$满足初值问题
$$
\partial_{t}u - a^{2}\partial_{x x}u = 0, u(x,0) = \varphi(x)
$$
惊喜的发现，我们得到了完全问题的部分解
所以其实热传导方程的求解很简单~~（比之前的波动方程高到不知道哪里去了）~~
先求解初值为点热源的齐次热传导方程得到$K(x,t)$，再将初值$\varphi(x)$对$K$做卷积得到解。~~（点热源听起来挺像图形学里面的点光源的）~~
换句话说，我们其实求的是如下基本解问题
$$
\partial_{t} u - a^{2}\partial_{x x}u = \delta(x-\xi,t-\tau), u(x,0)=0
$$
解为
$$
\Gamma(x,t;\xi,\tau) = K(x-\xi,t-\tau)
$$
观察Poisson公式我们就能看到
$$
u(x,t) = \int_{-\infty}^{\infty} K(x-\xi,t)\varphi(\xi) \, d\xi + \int^t_{0}\int_{-\infty}^{\infty} K(x-\xi,t-\tau)f(\xi,\tau) \, d\xi d\tau 
$$
其实一维热传导方程初值问题，就是在解$K(x,t)$或者基本解$\Gamma(x,t;\xi,\tau)$，非齐次部分$f(x,t)$可以搬用齐次化原理的方法

### 重要性质

Poisson公式其实有一些很有意思的性质

+ 保持奇偶性和周期性质：方程的解保持了$\varphi$的奇偶和周期性质
+ 无限传播速度：考虑初值$\varphi(x)$仅在小段$(x_{0}-\delta,x_{0}+\delta)$上不为0，$\varphi(x)>0$，那么$t>0$以后，杆上各点的温度为 

$$
u(x,t) = \int_{-\infty}^{\infty} K(x-\xi,t)\varphi(\xi) \, d\xi = \int_{-\delta}^{\delta} K((x-x_{0})-\eta,t)\varphi(x_{0}+\eta) \, d \eta > 0
$$

+ 可以说是温度一瞬间传递到杆上每一点，这是由于我们引入热传导方程的时候，使用的对实际物理情况近似的假设所导致的~~（感性理解，反正我不会推）~~
+ 无穷次可微，我懒得写了，反之就是有

$$
\frac{\partial^{k+l}u}{\partial x^k\partial t^l}=\int_{-\infty}^{\infty} \frac{\partial^{k+l}K(x-\xi,t)}{\partial x^k\partial t^l}\varphi(\xi) \, d\xi 
$$

## 高维初值问题

傅立叶变换~~非常屌~~有很好的性质，对单个变量的傅立叶变换不会影响其他变量（也就是说我可以把其他变量的导数和积分的位置换来换去），那么对于高维问题
$$
\partial_{t} u - a^{2}\Delta u = f(x,t), (x,t)\in \mathbb{R}^n \times (0,\infty)\\
u(x,0) = \varphi(x), x \in \mathbb{R}^n
$$
直接用多维傅立叶变换求解得到
$$
	u(x,y,z,t) = \iiint_{\mathbb{R^3}}K(x-\xi,y-\eta,z-\zeta,t)\varphi(\xi,\eta,\zeta)\mathrm{d\xi d \eta d\zeta}\\+\int_{0}^{t} \iiint_{\mathbb{R}^3}K(x-\xi,y-\eta,t-\tau)f(\xi,\eta,\zeta,\tau)\mathrm{d\xi d \eta d \zeta} \, d\tau
$$

## 扩展问题

对流扩散方程为
$$
\partial_{t} u + a\partial_{x}u = v\partial_{x x}u, x\in \mathbb{R}, t>0
$$
其实是在说扩散和对流同时进行。当$a \gg v$的时候，叫做对流占优问题，反之wh说这个东西用的很多。

## 积分变换再举例

TODO