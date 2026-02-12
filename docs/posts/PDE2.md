---
title: 数理方程（二）波动方程的延续
top: 1
toc: true
recommend: 1
keywords: PDE
date: 2024-11-25
---
## D'Alembert公式的解释

先复习一下D'Alembert公式
$$
u(x,t) = \frac{1}{2}(\varphi(x+at)+\varphi(x-at))+\frac{1}{2a}\int^{x+at}_{x-at}\psi(\xi)\rm d \xi
$$
解在点$(x,t)$的数值仅依赖于x轴上区间$[x-at,x+at]$内的初值条件，与其他地方的初值条件无关。我们把$[x-at,x+at]$叫做点$(x,t)$的**依赖区间**

对于x轴上的区间$[x_1,x_2]$，在$x_1$作直线$x=x_1+at$，过$x_2$作直线$x=x_2-at$，他们和原来的区间围成了一个三角形区域，解在此区域中任意点的值都完全由区间$[x_1,x_2]$上的初值条件决定，与其他区域无关

反过来说，做直线$x=x_1-at$和$x=x_2+at$，则经过时间t后受到区间$[x_1,x_2]$上初值扰动的区域为
$$
x_1-at\leq x \leq x_2+at
$$
在此区域之外的波动不受$[x_1,x_2]$上的初始扰动的影响，称为此区域为$[x_1,x_2]$的影响区域

直线$x=x_0\pm$
TODO

## 一维半无界问题

我们之前的讨论都是基于整个$x-t$平面进行讨论的，现在我们希望讨论更加现实一点的问题：如果有边界挡住了波的传播，会发生什么？

表达成正规数学语言的话，半无界边界问题可以表达为在区域$\overline{Q} = \{0 \leq x < \infty, 0 \leq t<\infty \}$上有下面的约束条件
$$
\square u =f(x,t)\space,0 < x < \infty,\space t>0\\
u(x,0) = \varphi (x),\space 0 \leq x < \infty\\
\partial_t u(x,0) = \psi(x),\space 0 \leq x < \infty\\
u(0,t) = g(t), t>0
$$

第四条是新附加的边界条件，但是$g(t)\neq0$的时候边界条件是非齐次的（我没看懂为什么非齐次，但是既然他这么说那就是吧，反之就是很复杂）。

不过我们可以考虑$u = v+g(t)$将问题转化为齐次情况
$$
\square v =f(x,t) - g''(t)\space,0 < x < \infty,\space t>0\\
v(x,0) = \varphi (x) - g(0),\space 0 \leq x < \infty\\
\partial_t v(x,0) = \psi(x)-g'(0),\space 0 \leq x < \infty\\
v(0,t) = 0, t>0
$$
因此我们直接默认只去解决(3)中$g(t)\equiv0$的情况

$g(t)\equiv0$其实帮助我们满足了奇延拓的前置条件，我们可以自然的将半无界问题延伸到简单的初值问题

$$
\overline{f} = f(x,t), x \geq 0 \space \mathrm{or} -f(-x.t) ,x < 0
$$
我们把原来半个x轴上的问题拓宽到了整个x轴上，这样问题变成了一个一维初值问题
那么就会有
$$
\begin{cases}
\square \overline{u} = \overline{f}(x,t)\\
\overline{u}(x,0) = \overline{\varphi}(x)\\
\partial_t \overline{u}(x,0) = \overline{\psi}(x)
\end{cases}
$$
这里$u(x,t)=\overline{u}(x,t),x>=0$
对初值问题我们有显然的结论
$$
\overline{u}(x,t) = \frac{1}{2}(\overline{\varphi}(x+at)+\overline{\varphi}(x-at))+\frac{1}{2a}\int^{x+at}_{x-at}\overline{\psi}(\xi)\rm d \xi + \frac{1}{2a}\int^{t}_{-t}\int^{x+a(t+\tau)}_{x-a(t-\tau)}\overline{f}(\xi,\tau)\rm d \xi \rm d \tau
$$
更进一步将上面的解表达为$\varphi,\psi,f$的组合形式
当$x \geq at$时解为
$$
u(x,t)) = \frac{1}{2}(\varphi(x+at)+\varphi(x-at))+\frac{1}{2a}\int^{x+at}_{x-at}\psi(\xi)\rm d \xi + \frac{1}{2a}\int^{t}_{-t}\int^{x+a(t+\tau)}_{x-a(t-\tau)}f(\xi,\tau)\rm d \xi \rm d \tau
$$

当$x < at$时解为
$$
u(x,t)) = \frac{1}{2}(\varphi(x+at)-\varphi(at-x))+\frac{1}{2a}\int^{x+at}_{at-x}\psi(\xi)\rm d \xi + \frac{1}{2a}\int^{t}_{t-x/a}\int^{x+a(t+\tau)}_{x-a(t-\tau)}f(\xi,\tau)\rm d \xi \rm d \tau + \frac{1}{2a}\int^{t-x/a}_{0} \int^{x+a(t+\tau)}_{a(t-\tau)-x}f(\xi,\tau)\rm d \xi \rm d \tau
$$
如果要保证解的连续性，那么应该有
$$
\varphi(0) = g(0), \psi(0) = g'(0), g''(0) - a^2\varphi''(0) = 0
$$
## 高维初值问题

~~大的要来了~~

大概的思路是这样的，先用**球面平均法**推导三维波动方程初值问题的解，再用**降维法**导出二维问题的解（听不懂啊啊啊）

### 三维的情况

**三维初值问题**表达如下
$$
\begin{cases}
\square u = \partial_{tt}u - a^2\Delta u = f(x,t), x \in \mathbb{R}^3\\
u(x,0) = \varphi(x)\\
\partial_t u(x,0)=\psi(x)
\end{cases}
$$
**齐次化原理**依然是满足的（因为齐次化原理部分的推导只和$t$有关，没有涉及到$x$的微积分操作）

因此问题被转换为下面的形式
$$
\square u_2 = 0, \space u_2(x,0) = 0, \space \partial_t u_2(x,0) = \psi (x)
$$
高维情况下对x的微分情况复杂，不能~照抄~依葫芦画瓢使用前面的算子分解。这里使用**球面平均法**。

将问题转化到球坐标系下
$$
\frac{1}{a^2}\frac{\partial^2u_2}{\partial t^2} = \frac{1}{r^2}\frac{\partial}{\partial r}(r^2 \frac{\partial u_2}{\partial r})+\frac{1}{r^2 \sin \theta}\frac{\partial}{\partial\theta}(\sin \theta \frac{\partial u_2}{\partial \theta}) + \frac{1}{r^2 \sin^2\theta}\frac{\partial^2 u_2}{\partial \varphi^2}
$$


在球对称假设（$u_2$和$\theta,\varphi$无关）下我们有
$$
\frac{r}{a^2}\frac{\partial^2u_2}{\partial t^2} = r\frac{\partial^2u_2}{\partial r^2}+2\frac{\partial u_2}{\partial r}
$$
进一步转换就是
$$
\frac{r}{a^2}\frac{\partial^2u_2}{\partial t^2} = (r\frac{\partial^2 u_2}{\partial r^2} + \frac{\partial u_2}{\partial r})+\frac{\partial u_2}{\partial r}=\frac{\partial }{\partial r}(r\frac{\partial u_2}{\partial r})+\frac{\partial u_2}{\partial r} = \frac{\partial^2 ru_2}{\partial r^2}
\\
\frac{1}{a^2}\frac{\partial^2(ru_2)}{\partial t^2}=\frac{\partial^2(ru_2)}{\partial r^2}
$$
这其实就是一维半无界问题

但是实际问题没有球对称假设，于是我们考虑$u_2$以$(x_1,x_2,x_3)$为球心，以$r>0$为半径的球面上的平均值（其实是引入了第四维r）。x固定时，平均值只和$r,t$有关。如果转化出x为参数的形式，那么问题就得到了简化

考虑均值
$$
\overline{u}(r,t;x) = \frac{1}{4\pi r^2}\iint_{|y|=r}u_2(x+y,t){\rm d S} = \frac{1}{4\pi}\iint_{|y|=1}u_2(x+ry,t){\rm d \omega}
$$
上面的式子有两个重要结论
$$
\begin{align*}
&(1)\space\Delta_x(r\overline{u}(r,t;x)) = \frac{\partial^2}{\partial r^2}(r\overline{u}(r,t;x))\\
&(2)\lim_{r \rightarrow 0}\overline{u}(r,t;x) = u_2(x,t)
\end{align*}
$$
第二个比较显然，第一个我不会推~~（第一个疑似也挺显然的但是我多元微积分学的一坨）~~

但是不管怎么说，我们能够继续推导(TODO:这里我不太会，回头再说)
$$

$$
$$
\frac{\partial^2(r\overline{u})}{\partial t^2} - a^2\frac{\partial^2(r\overline{u})}{\partial r^2} = 0
$$

这里利用了原方程条件（懒得写了）

这是一个半无界问题，因为$r\geq0$，具体表示为（$M = r\overline{u}$）
$$
\begin{align*}
&\partial_{tt}M - a^2\partial_{rr}M = 0\\
&M(r,0;x) = 0\\
&\partial_{t}M(r,0;x) = r\overline{\psi}(r;x)\\
&M(0,t;x)=0
\end{align*}
$$
我们只关心$r \rightarrow 0$附近的解，也就是$(0 \leq r \leq at)$
$$
M(r,t;x) = \frac{1}{2a}\int_{at-r}^{at+r} \xi \overline{\psi} (\xi;x)\mathrm{d} \xi
$$
使用洛必达法则求极限（前面的极限！）
$$
u_{2}(x,t) = \lim_{ r \to 0 } \frac{M(r,t;x)}{r} =\frac{1}{a}\overline{\psi}(at;x)= \frac{1}{4\pi a^2 t}\iint_{|y-x|=at}\psi(y)\mathrm{d}S
$$
根据齐次化原理，我们导出了三维情况的Kirchhoff公式
$$
u(x,t)=\partial_t \left( \frac{1}{4\pi a^2 t} \iint_{|y-x|=at} \varphi(y)\mathrm{d}S \right)+\frac{1}{4\pi a^2 t} \iint_{|y-x|=at} \psi(y)\mathrm{d}S+\int_{0}^{t} \left( \frac{1}{4\pi a^2 (t-\tau)} \iint_{|y-x|=a(t-\tau)} f(y,\tau)\mathrm{d}S \right) \mathrm{d}\tau
$$
~~我操，这是真不当人啊~~
### 进行降维
$$
\begin{cases}
\Box u = \partial_{tt}u - a^2\Delta u = f(x,t), x \in \mathbb{R}^2  \\
u(x,0) = \varphi(x) \\
\partial_{t}u(x,0) = \psi(x)
\end{cases}
$$
我们先说明一下为什么没办法直接用球面平均法
将上面的方程化为极坐标，就有
$$
\frac{1}{a^2}\frac{\partial^2 u}{\partial t^2} = \frac{1}{r}\frac{\partial}{\partial r}(r\frac{\partial u}{\partial r}) + \frac{1}{r^2}\frac{\partial^2 u}{\partial \theta^2}
$$
~~（我操，copilot好聪明，一下给我全推完了）~~
使用对称假设，$u$与$\theta$无关，上面就有
$$
\frac{r}{a^2}\frac{\partial^2 u}{\partial t^2} = \frac{\partial^2 u}{\partial r^2} + \frac{\partial u}{\partial r}
$$
等式右边的第二项少了系数2，没有办法依葫芦画瓢，所以我们采用降维法来将三维结论推广到二维
之前的积分区域为球面
$$
S_{at}(x) = \{y \in \mathbb{R}^3:|y-x|=at\}
$$
现在我们希望把这个球面投影到二维平面上，即
$$
\Sigma_{at}(x) = \{y \in \mathbb{R}^2:|y-x|\leq at\}
$$
然后我们就能套用Kirchhoff公式了~~（这个名字尤其不好打，反正我是记不住的）~~
事实上可以使用下面的变换
$$
\mathrm{dS} = \frac{at}{\sqrt{ a^2t^2 - |y-x|^2 }}\mathrm{dy}
$$
这样我们就得到了二维波动方程的Poisson公式~~（认识的搞CG的人天天跟我念叨Poisson）~~
$$
u(x,t) = \frac{1}{2\pi a}(\int_{|y-x|=at}\frac{\varphi(y)}{\sqrt{a^2t^2-|y-x|^2}}\mathrm{dy} + \int_{|y-x|=at}\frac{\psi(y)}{\sqrt{a^2t^2-|y-x|^2}}\mathrm{dy} + \int_{0}^{t}\iint_{|y-x|=a(t-\tau)}\frac{f(y,\tau)}{\sqrt{a^2(t-\tau)^2-|y-x|^2}}\mathrm{dy}\mathrm{d\tau})
$$
~~发明数理方程的人真是神经病把~~

公式我懒得继续抄了，有一个比较有意思的事情是我们把$f(x,t)$置零（只考虑初值的影响），三维情况下波的传播是无后效性的，但是二维情况下由于积分区域的问题，波对某一点会一直产生影响（大概也许有可能会衰减，但是我不懂这个）

# 略过上述内容并不会对我们后续的学习产生太大影响