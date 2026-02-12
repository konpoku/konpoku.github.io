---
title: 电磁场与波：期中复习
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-4-9
---
## 向量运算
### 二重向量积
$$
\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})
$$
$$
(\vec{a} \times \vec{b}) \times \vec{c} = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{a}(\vec{b} \cdot \vec{c})   
$$
### Green恒等式
第一恒等式：
$$
\int_V (\varphi \nabla^2 \psi - \nabla \varphi \nabla \psi) dV = \int_S \phi \nabla \psi dS
$$
第二恒等式：
$$
\int_V (\varphi \nabla^2 \psi - \psi \nabla^2 \varphi) dV = \int_S (\varphi \nabla \psi - \psi \nabla \varphi) dS
$$

### 电流连续性方程
$$
\nabla \cdot \vec{j} + \frac{\partial \rho}{\partial t} = 0
$$

## 课上复习
### *介质中Maxwell方程组
$$
\begin{aligned}
&\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \\
&\nabla \times \vec{H} = \vec{j} + \frac{\partial \vec{D}}{\partial t} \\
&\nabla \cdot \vec{D} = \rho \\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
简单介质本构关系：
$$
\begin{aligned}
&\vec{D} = \varepsilon \vec{E} \\
&\vec{B} = \mu \vec{H}
\end{aligned}
$$
### *边值关系
$$
\begin{aligned}
&\hat{n} \times (\vec{E}_2 - \vec{E}_1) = 0 \\
&\hat{n} \times (\vec{H}_2 - \vec{H}_1) = \vec{K}_S \\
&\hat{n} \cdot (\vec{D}_2 - \vec{D}_1) = \rho_S \\
&\hat{n} \cdot (\vec{B}_2 - \vec{B}_1) = 0
\end{aligned}
$$

### *电荷和电流
点电荷：
$$
\begin{aligned}
&\rho(\vec{x}) = q \delta(\vec{x} - \vec{x}') \\
&\nabla \cdot \frac{\vec{r}}{r^3} = 4\pi \delta(\vec{r})\\
&\nabla^2 \frac{1}{r} = -4\pi \delta(\vec{r})
\end{aligned}
$$
电流密度：$\vec{j} = \rho \vec{v}$
电流连续性方程：$\nabla \cdot \vec{j} + \frac{\partial \rho}{\partial t} = 0$
极化体电荷：$\rho_p = -\nabla \cdot \vec{P}$
极化面电荷：$\rho_{SP} = (\vec{P}_1 - \vec{P}_2) \cdot \hat{n}$
磁化体电荷：$\vec{J}_m = \nabla \times \vec{M}$
磁化面电流：$\vec{J}_{SM} = (\vec{M}_1 - \vec{M}_2) \times \hat{n}$
### *电磁场力
点电荷：$\vec{F} = q\vec{E} + q\vec{v} \times \vec{B}$
体元：$d\vec{F} = \rho\vec{E}dv + \vec{J} \times \vec{B} dv$
### *静电场
#### 物理量之间的关系
TODO：插图
#### 静电势多级展开
$$
\varphi(\vec{x}) = \frac{1}{4\pi \varepsilon_0} \int \frac{\rho(\vec{x'})}{r}dV' = \varphi^{(0)} + \varphi^{(1)} + \varphi^{(2)} + \cdots
$$
第二个等号在$|\vec{x}| >> |\vec{x}'|$时成立
零阶项：点电荷
$$
\varphi^{(0)} = \frac{1}{4\pi \varepsilon_0} \frac{Q}{R}, Q = \int \rho(\vec{x'}) dV'
$$
一阶项：电偶极子
$$
\varphi^{(1)} = \frac{1}{4\pi \varepsilon_0} \frac{\vec{p} \cdot \vec{r}}{r^3}, \vec{p} = \int \rho(\vec{x'}) \vec{x'} dV'
$$
二阶项：电四极子
$$
\varphi^{(2)} = \frac{1}{4\pi \varepsilon_0} \frac{1}{6} \sum_{i,j} D_{ij}\frac{\partial^2}{\partial x_i \partial x_j} \frac{1}{R}
$$
其中$D_{ij} = \int \rho(\vec{x'}) (3x'_i x'_j - R'^2 \delta_{ij}) dV'$
#### 静电势边值关系
$$
\begin{aligned}
&\varphi_1 = \varphi_2 \\
&-\varepsilon_2 \frac{\partial \varphi_2}{\partial n} + \varepsilon_1 \frac{\partial \varphi_1}{\partial n} = \rho_S
\end{aligned}
$$
#### 唯一性定理
$\nabla^2 \varphi = -\frac{\rho}{\varepsilon_0}$，然后边界条件$\varphi|_S$或者$\frac{\partial\varphi}{\partial n}|_S$中至少有一个给定
导体表面：
$$
\begin{aligned}
\varphi|_S = \text{const} \\
\oint \frac{\partial \varphi}{\partial n} dS = -\frac{Q}{\varepsilon}
\end{aligned}
$$
#### 镜像法
懒得写了
#### 分离变量法（直角+球）（必考）
#### Green函数法
#### 静电场能量（必考）
密度：$W_e = \frac{1}{2} \frac{\vec{E} \cdot \vec{D}}{2} = \frac{\varepsilon}{2} E^2$