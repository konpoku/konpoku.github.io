---
title: 电磁场与波（4）：介质中的麦克斯韦
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-3-14
---
## 介质中的Maxwell方程组
$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}\\
\nabla \times \vec{B} = \mu_0(\vec{J}_f + \vec{J}_\mu + \vec{J}_p) + \mu_0\varepsilon_0\frac{\partial \vec{E}}{\partial t}\\
\nabla \cdot \vec{E} = \frac{\rho_f + \rho_p}{\varepsilon_0}\\
\nabla \cdot \vec{B} = 0\\
$$

## 新定义
### 电位移矢量
$$
\vec{D} = \varepsilon_0\vec{E} + \vec{P}
$$
### 磁场强度
$$
\vec{H} = \frac{1}{\mu_0}\vec{B} - \vec{M}
$$

### maxwell方程组的简洁形式
$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}\\
\nabla \times \vec{H} = \vec{J}_f + \frac{\partial \vec{D}}{\partial t}\\
\nabla \cdot \vec{D} = \rho_f\\
\nabla \cdot \vec{B} = 0\\
$$

## 简单介质本构关系
$$
\vec{D} = \varepsilon_0\vec{P} = \varepsilon\vec{E}+\varepsilon_0\mathcal{X}_e\vec{E} = \varepsilon_0(1+\mathcal{X}_e)\vec{E} = \varepsilon_0\varepsilon_r\vec{E} = \varepsilon\vec{E}\\
$$
这里的$\varepsilon_r$是相对介电常数，$\varepsilon = \varepsilon_0\varepsilon_r$是介电常数
$$
\vec{H} = \frac{1}{\mu_0}\vec{B} - \vec{M} = \frac{1}{\mu_0}\vec{B}  - \mathcal{X}_m\vec{H}\\
\vec{B} = \mu_0\vec{H} + \mu_0\mathcal{X}_m\vec{H} = \mu_0(1+\mathcal{X}_m)\vec{H} = \mu_0\mu_r\vec{H} = \mu\vec{H}
$$
这里的$\mu_r$是相对磁导率，$\mu = \mu_0\mu_r$是磁导率

## 边值关系
$$
\begin{aligned}
\hat{n} \times (\vec{E}_2 - \vec{E}_1) &= 0\\
\hat{n} \times (\vec{H}_2 - \vec{H}_1) &= \vec{J_S}\\
\hat{n} \cdot (\vec{D}_2 - \vec{D}_1) &= \rho_s\\
\hat{n} \cdot (\vec{B}_2 - \vec{B}_1) &= 0\\
\end{aligned}
$$

## 静电场中的导体
在电场中，导体达到经典平衡态后：
+ 电场：
  内部电场为0，$\vec{E}_内 = 0$
  外部电场垂直于表面，$\hat{n} \cdot \vec{E}_外 = 0$
+ 电荷：
  内部无净电荷：$\rho_{内} = 0$
  电荷集中在表面：$\rho_s = \varepsilon_0\hat{n} \cdot \vec{E}_外$
+ 电势：
     内部为等势体，表面为等势面
     $$
     \varphi |_S = const
     $$
     $\rho,\vec{E},\varphi$关系：
     $$
     \varepsilon_0 E |_S = \rho_S = -\varepsilon_0 \frac{\partial \varphi}{\partial n} |_S
     $$
+ 表面单位面积受到的电场力
$$ 
\vec{F} = \rho_S \vec{E} |_S / 2 = \frac{\rho_S^2}{2\varepsilon_0} \hat{n}
$$

## 点电荷的势能
$$
w_2 = \frac{q_1q_2}{4\pi\varepsilon_0r}\\
w_3 = \frac{q_3q_1}{4\pi\varepsilon_0r} + \frac{q_3q_2}{4\pi\varepsilon_0r}\\
w_i = \frac{1}{4\pi \varepsilon_0} \sum_{j=1}^{i-1} \frac{q_iq_j}{r_{ij}}
$$
假设一共有N个点电荷，那么总功为：
$$
\begin{aligned}
W = \sum w_i &= \frac{1}{4\pi\varepsilon_0} \sum_{i=2}^{N} \sum_{j=1}^{i-1} \frac{q_iq_j}{r_{ij}}\\
&= \frac{1}{2} \sum_{i=1}^{N} q_i \varphi_i
\end{aligned}
$$
这里$\varphi_i$是除去第i个电荷外，其余所有电荷在$\vec{x}_i$处所产生的电势

推广到连续分布电势：
$$
W = \frac{1}{2} \int \rho(\vec{r})\varphi(\vec{r})dV
$$
导体系的能量：
$$
W = \frac{1}{2} \sum^N_{i=1} Q_i \varphi_i
$$
## 电场的能量
$$
\begin{aligned}
W &= \frac{1}{2} \int \rho \varphi dV\\
&= -\frac{\varepsilon_0}{2} \int \varphi \nabla^2 \varphi dV
\end{aligned}
$$
有Green恒等式
$$
\int_V \varphi \nabla^2 \psi dV = \int_S \varphi \frac{\partial \psi}{\partial n} dS - \int_V \nabla \varphi \cdot \nabla \psi dV
$$
取$\psi = \varphi$
$$
\int_V \varphi \nabla^2 \varphi dV = \int_S \varphi \frac{\partial \varphi}{\partial n} dS - \int_V |\nabla \varphi|^2 dV
$$
当$r \rightarrow \infty$时，$\varphi \propto \frac{1}{r}$，$\frac{\partial \varphi}{\partial n} \propto \frac{1}{r^2}$，$S \propto r^2$，$\oint_S \varphi \frac{\partial \varphi}{\partial n} dS \rightarrow 0$
则
$$
W = \frac{\varepsilon_0}{2} \int |\nabla \varphi|^2 dV = \int \frac{1}{2} \varepsilon_0 E^2 dV
$$
定义电场的能量密度
$$
W_e = \frac{1}{2} \varepsilon_0 E^2
$$
在介质中
$$
W_e = \frac{1}{2} \varepsilon E^2 = \frac{1}{2} \vec{D} \cdot \vec{E} = \frac{1}{2} (\varepsilon_0E^2 + \vec{P} \cdot \vec{E})
$$
其中$\frac{1}{2}\vec{P} \cdot \vec{E}$是介质的极化储能

## 静电系统的总能量
$$
\begin{aligned}
W &= \frac{1}{2} \int \rho_f \varphi dV = \frac{1}{2} \int \varepsilon E^2 dV\\
W &= \frac{1}{2} \varepsilon_0 \int |\vec{E_1}+\vec{E_2}|^2 dV\\ &= \frac{1}{2} \varepsilon_0 \int |\vec{E_1}|^2 dV + \frac{1}{2} \varepsilon_0 \int |\vec{E_2}|^2 dV + \varepsilon_0 \int \vec{E_1} \cdot \vec{E_2} dV
\end{aligned}
$$
于是可以将总能量分为自能和相互作用能

## 静电势多级展开
已知全空间中区域分布的电荷$\rho$，求空间电势
$$
\varphi(\vec{x}) = \frac{1}{4\pi \varepsilon_0} \int \frac{\rho(\vec{x'})}{|\vec{r}|}dV'
$$
在远离电荷分布区域的位置，即$|\vec{x}| \gg |\vec{x'}|$
$$
\frac{1}{|\vec{x}-\vec{x'}|} = \frac{1}{|\vec{x}|} - \nabla \cdot \frac{\vec{x'}}{|\vec{x}|} + \frac{1}{2} (\vec{x}' \cdot \nabla)^2 \frac{1}{|\vec{x}|} + \cdots
$$
记$|\vec{x}| = R$
### 零阶项
$$
\begin{aligned}
\varphi^{(0)}&= \frac{1}{4\pi \varepsilon_0} \int \frac{\rho(\vec{x'})}{R}dV'\\
 &=\frac{1}{4\pi \varepsilon_0R} \int \rho(\vec{x'})dV'\\
 &= \frac{1}{4\pi\varepsilon_0} \frac{Q}{R}
\end{aligned}
$$
### 一阶项
$$
\begin{aligned}
\varphi^{(1)} &= -\frac{1}{4\pi \varepsilon_0} \int \rho(\vec{x'}) \vec{x'} \cdot \nabla \frac{1}{R} dV'\\
&= \frac{1}{4\pi \varepsilon_0} \int \rho(\vec{x'}) \frac{\vec{x'} \cdot \vec{R}}{R^3} dV'\\
&= \frac{1}{4\pi \varepsilon_0} [\int \rho(\vec{x'}) \vec{x'} dV'] \cdot \frac{\vec{R}}{R^3}\\
&= \frac{1}{4\pi \varepsilon_0} \frac{\vec{p}\cdot \vec{R}}{R^3}
\end{aligned}
$$
其中$\vec{p} = \int \rho(\vec{x'}) \vec{x'} dV'$是系统电偶极矩
$$
\vec{p} = -q \vec{x}_- + q \vec{x}_+ = q \vec{r}
$$
当系统总电荷量为0的时候（Q=0），$\vec{p}$与坐标原点的位置选取无关
$$
\vec{p_1} = \int \rho(\vec{x'}) \vec{x'} dV' = \int \rho(\vec{x'}) (\vec{x'}-\vec{o}_1) dV'\\
\vec{p_2} = \int \rho(\vec{x'}) \vec{x'} dV' = \int \rho(\vec{x'}) (\vec{x'}-\vec{o}_2) dV'\\
\vec{p}_1 - \vec{p}_2 = \int \rho(\vec{x'}) (\vec{o}_2 - \vec{o}_1) dV' = (\vec{o}_2 - \vec{o}_1)Q = 0
$$
### 二阶项
$$
\begin{aligned}
\varphi^{(2)} &= \frac{1}{4\pi \varepsilon_0} \frac{1}{2}\int \rho(\vec{x'}) (\vec{x'} \cdot \nabla)^2 \frac{1}{R} dV'\\
&= \frac{1}{4\pi \varepsilon_0} \frac{1}{2}\int \rho(\vec{x'}) x'_i x'_j \frac{\partial^2}{\partial x_i \partial x_j} \frac{1}{R} dV'\\
&= \frac{1}{4\pi \varepsilon_0} \frac{1}{6}\sum_{i,j}[\int 3\rho(\vec{x'}) x'_i x'_j dV']\frac{\partial^2}{\partial x_i \partial x_j} \frac{1}{R}\\
&= \frac{1}{4\pi \varepsilon_0} \frac{1}{6} \sum_{i,j} D_{ij}\frac{\partial^2}{\partial x_i \partial x_j} \frac{1}{R}
\end{aligned}
$$
其中$D_{ij} = \int 3\rho(\vec{x'}) x'_i x'_j dV'$是系统的电四极矩
#### 电四极子
$D_{ij}= D_{ji}$，其中i代表的是正负电荷分开方向，j代表的是电偶极子分开方向

例：
计算$D_{33}$的电势
$$
\begin{aligned}
D_{33} &= \int 3\rho(\vec{x'}) x'_3 x'_3 dV'\\
&= 3 q b^2 - 3 q a^2 - 3 q a^2 + 3 q b^2\\
&= 6 q b^2 - 6 q a^2\\
&= 6 q (b^2 - a^2)\\
&= 6 q (b-a) (b+a)\\
&= 6 pl
\end{aligned}
$$
其中$l = (b+a)$是两个电偶极子之间的距离，$p = q(b-a)$是电偶极子的电偶极矩
电势：
$$
\begin{aligned}
\varphi(\vec{x}) &= \frac{1}{4\pi \varepsilon_0} \frac{\vec{p} \cdot \vec{r}_+}{r_+^3} - \frac{1}{4\pi \varepsilon_0} \frac{\vec{p} \cdot \vec{r}_-}{r_-^3}\\
&= \frac{1}{4\pi \varepsilon_0} \vec{p}\cdot \nabla \frac{1}{r_+} + \frac{1}{4\pi \varepsilon_0} \vec{p}\cdot \nabla \frac{1}{r_-}\\
&= \frac{1}{4\pi \varepsilon_0} \vec{p} \cdot (\nabla \frac{1}{r_+} + \nabla \frac{1}{r_-})\\
&= \frac{1}{4\pi \varepsilon_0} \vec{p} \cdot \frac{\partial}{\partial z}(\frac{1}{r_-} - \frac{1}{r_-})\\
&= \frac{1}{4\pi \varepsilon_0} \vec{p} \frac{\partial}{\partial z} \frac{r_+ - r_-}{r_+ r_-}\\
&= -\frac{1}{4\pi \varepsilon_0} \vec{p} \frac{\partial}{\partial z} \frac{lcos\theta}{R^2}\\
&= -\frac{pl}{4\pi \varepsilon_0} \frac{\partial}{\partial z} \frac{Rcos\theta}{R^3}\\
&= -\frac{pl}{4\pi \varepsilon_0} \frac{\partial}{\partial z} \frac{z}{R^2}\\
&= \frac{6pl}{4\pi \varepsilon_0} \frac{\partial^2}{\partial^2 z}  \frac{1}{R}
\end{aligned}
$$