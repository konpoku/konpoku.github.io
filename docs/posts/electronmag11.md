---
title: 电磁场与波（11）：波导
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-5-16
---

## *各种波导
常见的有矩形，圆形，同轴，平行双线，平板（微带线）等

### *波导中的导波模式
一般取沿着波导的传播方向为z轴
$$
\vec{E} = \vec{E}(x,y) e^{i \beta z} 
$$
$$
\vec{H} = \vec{H}(x,y) e^{i \beta z}
$$

有两种解法
- 考虑
$$
\begin{aligned}
&\nabla \times \vec{E} = i \omega \mu \vec{H}\\
&\nabla \times \vec{H} = -i \omega \varepsilon \vec{E}
\end{aligned}
$$
使用纵横分解法（见教材）
- 考虑
$$
\begin{aligned}
&\nabla^2 \vec{E} + k^2 \vec{E} = 0\\
&\nabla \cdot \vec{E} = 0\\
& \vec{H} = \frac{1}{i\omega\mu} \nabla \times \vec{E}
\end{aligned}
$$
分离变量法求$\vec{E}$，再求$\vec{H}$

### *纵横分解法
$$
\vec{E} = \vec{E}(x,y)e^{i \beta z} =(\vec{E}_t + \vec{E}_z)e^{i \beta z}
$$
$$
\vec{H} = \vec{H}(x,y)e^{i \beta z} =(\vec{H}_t + \vec{H}_z)e^{i \beta z}
$$
这里的$\vec{E}_t$是横向，$\vec{E}_z$是纵向
并且我们考虑
$$
\nabla = \nabla_t + \hat{e}_z \frac{\partial}{\partial z}
$$
那么有
$$
\begin{aligned}
&\nabla^2_t E_z + k^2_c E_z = 0\\
&\nabla^2_t H_z + k^2_c H_z = 0\\
&\vec{E}_t = \frac{i}{k_c^2}(\beta \nabla_t E_z - \omega \mu \hat{e}_z \times \nabla_t H_z)\\
&\vec{H}_t = \frac{i}{k_c^2}(\beta \nabla_t H_z + \omega \varepsilon \hat{e}_z \times \nabla_t E_z)\\
\end{aligned}
$$
前两个方程是纵向场方程，其中$k_c^2 = k^2-\beta^2$
求解出纵向场后，便可通过后两个方程求出横向场
如果$k_c \neq 0$
- $E_z = 0$,$H_z = 0$，称为TE模式
- $E_z \neq 0$,$H_z = 0$，称为TM模式
- $E_z = 0$,$H_z = 0$，必然有$k_c = 0$，称为TEM模式
此时有
$$
\begin{aligned}
&\nabla_t \times \vec{E}_t = 0\\
&\nabla_t \cdot \vec{E}_t = 0\\
&H_t = \frac{k}{\omega \mu} \hat{e}_z \times \vec{E}_t = \hat{e}_z \times \frac{\vec{E}_t}{\eta_{TEM}}
\end{aligned}
$$
其中$\eta_{TEM} = \sqrt{\frac{\mu}{\varepsilon}}$
只有当波导横截面支持非零二维静电场时，波导才支持TEM模式
**单导体封闭波导一定不能支持TEM模式,多导体波导可以支持TEM模式**

### *例
考虑矩形波导中的TM模式
纵向电场$E_z$满足：
$$
\nabla^2_t E_z + k^2_c E_z = 0
$$
设$E_z = X(x)Y(y)$
$$
\begin{aligned}
&\frac{1}{X} \frac{d^2 X}{dx^2} = -k_x^2\\
&\frac{1}{Y} \frac{d^2 Y}{dy^2} = -k_y^2\\
&k_x^2 + k_y^2 = k_c^2
\end{aligned}
$$
由边界条件$E_z |_{x=0} = E_z |_{x=a} = 0 \Rightarrow X(0) = 0,X(a) = 0$
所以
$$
X(x) = A \sin \frac{m \pi}{a} x
$$
同理有
$$
Y(y) = B \sin \frac{n \pi}{b} y
$$
所以
$$
E_z = E_0 \sin \frac{m \pi}{a} x \sin \frac{n \pi}{b} y
$$
$$
k_c^2 = \frac{m^2 \pi^2}{a^2} + \frac{n^2 \pi^2}{b^2}
$$
$$
\vec{E}_t = \frac{i\beta}{k_c^2}\frac{m\pi}{a} E_0 \cos \frac{m \pi}{a} x \sin \frac{n \pi}{b} y \hat{e}_x + \frac{i\beta}{k_c^2}\frac{n\pi}{b} E_0 \sin \frac{m \pi}{a} x \cos \frac{n \pi}{b} y \hat{e}_y
$$
$$
\vec{H}_t = -\frac{i\omega \varepsilon}{k_c^2} \frac{n\pi}{b} E_0 \sin \frac{m \pi}{a} x \cos \frac{n \pi}{b} y \hat{e}_x + \frac{i\omega \varepsilon}{k_c^2} \frac{m\pi}{a} E_0 \cos \frac{m \pi}{a} x \sin \frac{n \pi}{b} y \hat{e}_y
$$
- iE记做$TM_{mn}$模式
- 基模为$TM_{n}$
- 纵向波矢 $\beta = \sqrt{k^2 - k_c^2} = \frac{1}{c} \sqrt{\omega^2 - \omega^2_c}$
$$
\omega_c = ck_c = c\sqrt{\frac{m^2 \pi^2}{a^2} + \frac{n^2 \pi^2}{b^2}}
$$
对于某一给定的模式$TM_{mn}$，$\omega_c$一定，只有当$\omega > \omega_c$时，$\beta$才是实数，此时电磁场才是行波（导波）
$\omega_c$称为截止频率
- 相速度
$$
V_p = \frac{\omega}{\beta} = \frac{c}{\sqrt{1 - \frac{\omega_c^2}{\omega^2}}}
$$
称为波导色散（模式色散）
- 群速度
$$
V_g = \frac{d\omega}{d\beta} = c\sqrt{1 - \frac{\omega_c^2}{\omega^2}}
$$
群速度色散
### TE模式
基模：$TE_{01}$或者$TE_{10}$
### TEM模式
- $k_c = 0,\beta = k$
- 截止频率$\omega_c = ck_c = 0$
- 无模式色散
### 谐振腔
$$
k_x = \frac{m\pi}{a},k_y = \frac{n\pi}{b},k_z = \frac{p\pi}{c}
$$
$$
k_x^2 + k_y^2 + k_z^2 = k^2 = \omega \mu \varepsilon
$$
所以角频率
$$
\omega = \frac{1}{\sqrt{\mu \varepsilon}} \sqrt{k_x^2 + k_y^2 + k_z^2}
$$
真空中就有
$$
\omega = c \sqrt{k_x^2 + k_y^2 + k_z^2}
$$
### *电磁场的辐射
时域分析：
已知全空间中随着时间变化的$\rho,\vec{J}$
求$\vec{E},\vec{B}$
$$
\begin{aligned}
&\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}\\
&\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}\\
&\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}\\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
（一）
$$
\nabla \cdot \vec{B} = 0 \Rightarrow \vec{B} = \nabla \times \vec{A}
$$
（二）
$\vec{B} = \nabla \times \vec{A}$代入，有
$$
\nabla \times \vec{E} = -\frac{\partial}{\partial t} (\nabla \times \vec{A}) = -\nabla \times \frac{\partial \vec{A}}{\partial t}
$$
$$
\nabla \times (\vec{E} + \frac{\partial \vec{A}}{\partial t}) = 0 \Rightarrow \vec{E} + \frac{\partial \vec{A}}{\partial t} = -\nabla \phi
$$
$$
\vec{E} = -\nabla \phi - \frac{\partial \vec{A}}{\partial t}
$$
即存在标势$\phi$和矢势$\vec{A}$，使得
$$
\begin{aligned}
\vec{E} = -\nabla \phi - \frac{\partial \vec{A}}{\partial t}\\
\vec{B} = \nabla \times \vec{A}
\end{aligned}
$$
（三）将$\vec{E},\vec{B}$代入Maxwell方程组
$$
\begin{aligned}
-\nabla \cdot (\nabla \phi + \frac{\partial \vec{A}}{\partial t}) &= \frac{\rho}{\varepsilon_0}\\
\nabla^2 \phi + \frac{\partial}{\partial t} (\nabla \cdot \vec{A}) &= -\frac{\rho}{\varepsilon_0}\\
\end{aligned}
$$
（四）将$\vec{E},\vec{B}$代入（三）的结论
$$
\begin{aligned}
&\nabla \times (\nabla \times \vec{A}) = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial}{\partial t} (-\nabla \phi - \frac{\partial \vec{A}}{\partial t})\\
&\nabla^2 \vec{A} - \frac{1}{c^2} \frac{\partial^2 \vec{A}}{\partial t^2} -\nabla (\nabla \cdot \vec{A} + \frac{1}{c^2} \frac{\partial \phi}{\partial t}) = -\mu_0 \vec{J}
\end{aligned}
$$
**$\phi,\vec{A}$不唯一**
假设他们满足
$$
\begin{aligned}
&\vec{E} = -\nabla \phi - \frac{\partial \vec{A}}{\partial t}\\
&\vec{B} = \nabla \times \vec{A}
\end{aligned}
$$
取（规范变换）
$$
\begin{aligned}
&\varphi' = \varphi - \frac{\partial \vec{A}}{\partial t}\\
&\vec{A}' = \vec{A} + \nabla \Psi
\end{aligned}
$$
则：
$$
\begin{aligned}
&\vec{E}' = -\nabla \varphi' - \frac{\partial \vec{A}'}{\partial t} = \vec{E}\\
&\vec{B}' = \nabla \times \vec{A}' = \vec{B}
\end{aligned}
$$
附加约束条件：
- $\nabla \cdot \vec{A} = 0$（Coulomb规范）
$$
\begin{aligned}
&\nabla^2 \varphi = -\frac{\rho}{\varepsilon_0}\\
&\nabla^2 \vec{A} - \frac{1}{c^2} \frac{\partial^2 \vec{A}}{\partial t^2} = -\mu_0 \vec{J} + \frac{1}{c^2} \frac{\partial}{\partial t}(\nabla \varphi)
\end{aligned}
$$
$$
\varphi(\vec{x},t) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho(\vec{x'},t)}{r} dV'
$$

- $\nabla \cdot \vec{A} + \frac{1}{c^2} \frac{\partial \varphi}{\partial t} = 0$（Lorentz规范）
$$
\begin{aligned}
&\nabla^2 \varphi - \frac{1}{c^2} \frac{\partial^2 \varphi}{\partial t^2} = -\frac{\rho}{\varepsilon_0}\\
&\nabla^2 \vec{A} - \frac{1}{c^2} \frac{\partial^2 \vec{A}}{\partial t^2} = -\mu_0 \vec{J}
\end{aligned}
$$
即d'Alembert方程
推迟势解：
$$
\begin{aligned}
&\varphi(\vec{x},t) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho(\vec{x'},t_r)}{r} dV'\\
&\vec{A}(\vec{x},t) = \frac{\mu_0}{4\pi} \int \frac{\vec{J}(\vec{x'},t_r)}{r} dV'
\end{aligned}
$$
其中$t_r = t - \frac{r}{c}$，$r = |\vec{x} - \vec{x'}|$
被称为推迟时间