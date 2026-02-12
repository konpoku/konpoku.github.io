---
title: 电磁场与波（2）：基本概念
top: 1
toc: true
recommend: 1
keywords: electromag
date: 2025-2-28
---
## 电荷
+ 分为+，-两种属性
+ 量子化，元电荷$e \approx 1.6\times 10^{-19}C$
+ 电荷量守恒

### 电荷的形态
点电荷：电荷大小$q$
线电荷：电荷线密度$\rho_l = \lim_{\Delta l \to 0}\frac{\Delta q}{\Delta l}$
面电荷：电荷面密度$\rho_s = \lim_{\Delta S \to 0}\frac{\Delta q}{\Delta S}$
体电荷：电荷体密度$\rho_v = \lim_{\Delta V \to 0}\frac{\Delta q}{\Delta V}$

#### $\Delta V$：“宏观小，微观大”
+ 相对于问题求解区是宏观小
+ 相对于微观带电粒子很大

#### 点电荷的密度
$$
\rho(\vec{r}) = q\delta(\vec{r}-\vec{r}_0) = 
\left\{
\begin{array}{lr}
\infin & \vec{r} = \vec{r}_0 \\
0 & \vec{r} \neq \vec{r}_0
\end{array}
\right.
$$
考虑均匀的带电小球
$$
\rho(\vec{r}) =
\left\{
\begin{array}{lr}
\frac{q}{4/3 \cdot \pi R^3} & \vec{r} \in V \\
0 & \vec{r} \notin V
\end{array}
\right.
$$
那么点电荷密度就等于
$$
\rho(\vec{r}) = \lim_{R \rightarrow 0} \rho_R(\vec{x}) = q\delta(\vec{x}-\vec{x}_0)
$$

$\delta$函数具有下面的性质
$$
\int_V\delta(\vec{x} - \vec{x_0})dx = 
\left\{
\begin{array}{lr}
1 & \vec{x_0} \in V \\
0 & \vec{x_0} \notin V
\end{array}
\right.\\
\int_Vf(\vec{x})\delta(\vec{x} - \vec{x_0})dx = f(\vec{x_0}) \space \space \space \space \vec{x_0} \in V
$$

## 电流
线电流：
$$
|\vec{I}| = \lim_{\Delta t \to 0}\frac{\Delta Q}{\Delta t}
$$ 
（经过某一点的电流）
面电流：
$$
|\vec{J_S}| = \lim_{\Delta l \to 0}\frac{1}{\Delta L}\lim_{\Delta t \to 0}\frac{\Delta Q}{\Delta t}
$$ 
（面的电流密度）
体电流：
$$
|\vec{J_V}| = \lim_{\Delta S \to 0}\frac{1}{\Delta S}\lim_{\Delta t \to 0}\frac{\Delta Q}{\Delta t}
$$
### 电荷与电流的关系
+ $\vec{J} = \rho \vec{v}$（$\vec{v}$是电荷的运动速度）
+ $\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0$（电荷守恒）（电流连续性方程）

### 静电场Coulomb定律
静电力：
$$
\vec{F} = \frac{1}{4\pi\epsilon_0}\frac{q_1q_2}{r^3}\vec{r}
$$
Q在$\vec{x}$处产生的电场：
$$
\vec{E}(\vec{x}) = \frac{1}{4\pi\epsilon_0}\frac{q}{r^3}\vec{r}
$$
叠加原理：
$$
\vec{E} = \sum_i \vec{E}_i
$$
推广到连续分布电荷：
$$
\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\int_V \frac{\rho(\vec{r'})}{|\vec{r}-\vec{r'}|^3}(\vec{r}-\vec{r'})dV'
$$

## Biot-Savart定律
稳恒电流场：
$$
\frac{\partial \vec{J}}{\partial t} = 0, \nabla \cdot \vec{J} = 0
$$
磁感应强度：
$$
\vec{B}(\vec{r}) = \frac{\mu_0}{4\pi}\int \frac{\vec{J}(\vec{r'})\times(\vec{r}-\vec{r'})}{|\vec{r}-\vec{r'}|^3}dV'
$$
磁场力：
+ 运动电荷：
$$
\vec{F} = q\vec{v}\times\vec{B}
$$
线电流源：
$$
d\vec{F} = \vec{I}\times\vec{B} dl
$$
体电流源：
$$
d\vec{F} = \vec{J}\times\vec{B}dV
$$
## Lorentz力：电场力+磁场力
点电荷
$$
\vec{F} = q\vec{E} + q\vec{v}\times\vec{B}
$$
体元：
$$
d\vec{F} = \rho\vec{E}dV + \vec{J}\times\vec{B}dV
$$
## Maxwell方程组
### 静电场的散度
$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{1}{4\pi \epsilon_0}\nabla \cdot \int_V \frac{\rho(\vec{r'})}{|\vec{r}|^3}\vec{r}dV' \\
&= \frac{1}{4\pi \epsilon_0}\int_V \nabla \cdot \frac{\rho(\vec{r'})}{|\vec{r}|^3}\vec{r}dV' \\
&= \frac{1}{4\pi \epsilon_0}\int_V \rho(\vec{r'})\nabla \cdot \frac{\vec{r}}{|\vec{r}|^3}dV' \\
\end{aligned}
$$
根据 Gauss 定理
$$
\begin{aligned}
\int_V \nabla \cdot d\vec{V} &= \oint_S \vec{E} \cdot d\vec{S} \\
&= \frac{1}{4\pi \epsilon_0}\int_S [\int_V \rho(\vec{r'}) \frac{\vec{r}}{|\vec{r}|^3}dV']d\vec{S} \\
\end{aligned}
$$
考虑一个点电荷的情况
$$
\vec{E} = \frac{1}{4\pi \epsilon_0}\frac{q}{r^3}\vec{r}
$$
$$
\begin{aligned}
\oint_S \vec{E} \cdot d\vec{S} &= \frac{q}{4\pi\epsilon_0}\oint_S \frac{\vec{r}}{r^3} \cdot d\vec{S} \\
&= \frac{q}{4\pi\epsilon_0}\oint_S \frac{\hat{r}}{r^2} dS \\
&= \frac{q}{4\pi\epsilon_0}\oint_s d\Omega \\
&= \frac{q}{4\pi\epsilon_0}4\pi \\
&= \frac{q}{\epsilon_0}
\end{aligned}
$$
q位于S外的时候
$$
\oint_S \vec{E} \cdot d\vec{S} = 0
$$
多个电荷的情况
$$
\oint_S \vec{E} \cdot d\vec{S} = \sum_i \frac{q_i}{\epsilon_0}
$$
这里要求$q_i$在积分面内

对于连续分布电荷
$$
\oint_S \vec{E} \cdot d\vec{S} = \frac{1}{\epsilon_0}\int_V \rho(\vec{r'})dV'\\
\int_V \nabla \cdot \vec{E}dV = \frac{1}{\epsilon_0}\int_V \rho(\vec{r'})dV'\\
\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}
$$
对于点电荷：
$$
\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{q}{r^3}\vec{r}, \rho(\vec{x}) = q\delta(\vec{x} - \vec{x'})\\
\frac{q}{4\pi \epsilon_0}\nabla \cdot \frac{\vec{r}}{r^3} = q\delta(\vec{x} - \vec{x'})\\
\nabla \cdot \frac{\vec{r}}{r^3} = 4\pi \delta(\vec{r} )\\
$$
$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{1}{4\pi \epsilon_0}\nabla \cdot \int_V \frac{\rho(\vec{r'})}{|\vec{r}|^3}\vec{r}dV' \\
&= \frac{1}{4\pi \epsilon_0}\int_V \nabla \cdot \frac{\rho(\vec{r'})}{|\vec{r}|^3}\vec{r}dV' \\
&= \frac{4 \pi}{4\pi \epsilon_0}\int_V \rho(\vec{r'})\delta(\vec{x}-\vec{x'}) dV' \\
&= \frac{\rho(\vec{x})}{\epsilon_0}
\end{aligned}
$$

### 静电场的旋度
考虑点电荷
$$
\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{q}{r^3}\vec{r}
$$
$$
\begin{aligned}
\oint_l \vec{E} \cdot d\vec{l} &= \frac{q}{4\pi\epsilon_0}\oint_l \frac{\vec{r}}{r^3} \cdot d\vec{l} \\
&= \frac{q}{4\pi\epsilon_0}\oint_l \frac{\hat{r}}{r^2} dl \\
&= \frac{q}{4\pi\epsilon_0}\oint_l \frac{dr}{r^2} \\
&= 0
\end{aligned}
$$
由Stokes定理
$$
\oint_l \vec{E} \cdot d\vec{l} = \int_S (\nabla \times \vec{E}) \cdot d\vec{S}\\
\nabla \times \vec{E} = 0
$$
静电场是无旋场，所以存在电势（静电场是势场的梯度场）
$$
\nabla \times \vec{E} = 0 \Rightarrow \vec{E} = -\nabla \varphi
$$
### 静电势 $\varphi$
定义：把单位电荷从规定的零电势点移到某一点克服电场力所做的功
$$
\varphi(\vec{x}) = -\int_{\vec{x_0}}^{\vec{x}} \vec{E} \cdot d\vec{l}
$$
计算$\varphi$沿着$\hat{l}$方向的导数
$$
\lim_{\Delta_l \to 0} = - \hat{E} \cdot \hat{l} = \nabla \varphi \cdot \hat{l}
$$
$$
\vec{E} = -\nabla \varphi\\
\nabla \cdot \vec{E} = -\nabla^2 \varphi = \frac{\rho}{\epsilon_0}
$$
$$
\nabla^2 \varphi = -\frac{\rho}{\epsilon_0}
$$
此为Poisson方程
点电荷电势
$$
\varphi = \frac{1}{4\pi\epsilon_0}\frac{q}{r}
$$
连续分布电荷电势
$$
\varphi(\vec{r}) = \frac{1}{4\pi\epsilon_0}\int_V \frac{\rho(\vec{r'})}{|\vec{r}-\vec{r'}|}dV'
$$
$$
\nabla \frac{1}{r} = -\frac{\vec{r}}{r^3}\\
\nabla^2 \frac{1}{r} = 0
$$

## 静磁场的散度
$$
\begin{aligned}
\vec{B}(\vec{x}) &= \frac{\mu_0}{4\pi}\int \frac{\vec{J}(\vec{x'})\times \vec{r}}{r^3}dV'\\
&= -\frac{\mu_0}{4\pi}\int \vec{J}(\vec{x'})\times \nabla \frac{1}{r} dV'\\
&= \frac{\mu_0}{4\pi}\int \nabla \times \frac{\vec{J}(\vec{x'})}{r}dV'\\
&= \frac{\mu_0}{4\pi} \nabla \times \int \frac{\vec{J}(\vec{x'})}{r}dV'\\
&= \frac{\mu_0}{4\pi} \nabla \times \vec{A}
\end{aligned}
$$
其中$\vec{A}$是磁矢势
$$
\vec{A} = \frac{\mu_0}{4\pi}\int \frac{\vec{J}(\vec{x'})}{r}dV'
$$
$$
\nabla \cdot \vec{B} = \nabla \cdot (\nabla \times \vec{A}) = 0
$$
磁场是无源场

## 静磁场的旋度
$$
\nabla \times \vec{B} = \nabla \times (\nabla \times \vec{A}) = \nabla(\nabla \cdot \vec{A}) - \nabla^2 \vec{A}
$$
先考虑分解式的第一项
$$
\begin{aligned}
\nabla \cdot \vec{A} &= \frac{\mu_0}{4\pi}\nabla \cdot \int \frac{\vec{J}(\vec{x'})}{r}dV' = \frac{\mu_0}{4\pi}\int \vec{J}(\vec{x'})\cdot \nabla \frac{1}{r}dV'\\
&= -\frac{\mu_0}{4\pi}\int \nabla' \frac{1}{r} \cdot \vec{J}(\vec{x'})dV'\\
&= \frac{\mu_0}{4\pi}\int \frac{1}{r}\nabla' \cdot \vec{J}(\vec{x'})dV' - \frac{\mu_0}{4\pi}\int \nabla' \cdot \frac{\vec{J}(\vec{x'})}{r}dV'\\
&= -\frac{\mu_0}{4\pi}\int \nabla' \cdot \frac{\vec{J}(\vec{x'})}{r}dV'\\
&= -\frac{\mu_0}{4\pi}\oint \frac{\vec{J}(\vec{x'})}{r} \cdot d\vec{S}=0\\
\end{aligned}
$$
最后一步考虑到S内部是包含所有的电流的，所以积分为0
接下来考虑分解式的第二项
$$
\begin{aligned}
\nabla^2 \vec{A} &=\frac{\mu_0}{4\pi}\nabla^2 \int \frac{\vec{J}(\vec{x'})}{r}dV' = \frac{\mu_0}{4\pi}\int \nabla^2 \frac{\vec{J}(\vec{x'})}{r}dV'\\
&= \frac{\mu_0}{4\pi}\int \vec{J}(\vec{x'})\cdot \nabla^2 \frac{1}{r}dV'\\
&= -\frac{4\pi\mu_0}{4\pi}\int \vec{J}(\vec{x'})\cdot \delta(\vec{x}-\vec{x'}) dV'\\
&= -\mu_0 \vec{J}
\end{aligned}
$$
所以
$$
\nabla \times \vec{B} = \mu_0 \vec{J}
$$
并且有
$$
\oint_l \vec{B} \cdot d\vec{l} = \int_S (\nabla \times \vec{B}) \cdot d\vec{S} = \mu_0 \int_S \vec{J} \cdot d\vec{S}
$$
这是经典的Ampere环路定理

磁矢势有
$$
\nabla^2 \vec{A} = -\mu_0 \vec{J}
$$
这是矢量Poisson方程