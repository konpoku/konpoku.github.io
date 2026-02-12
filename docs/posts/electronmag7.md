---
title: 电磁场与波（7）：静磁场和时变问题
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-4-11
---
## *磁矢势
$$
\nabla \cdot \vec{B} = 0 \Rightarrow \vec{B} = \nabla \times \vec{A}
$$
$$
\begin{aligned}
\nabla \times \vec{B} &= \mu \vec{J} \\
\nabla \times (\nabla \times \vec{A}) &= \mu \vec{J}\\
\nabla(\nabla \cdot \vec{A}) - \nabla \vec{A} &= \mu_0 \vec{J}
\end{aligned}
$$
附加约束：$\nabla \cdot \vec{A} = 0$，Coulomb规范
全空间：
$$
\vec{A} = \frac{\mu}{4\pi} \int \frac{\vec{J}(\vec{x}')}{r}dV'
$$
$$
\nabla^2 \vec{A} = -\mu \vec{J}
$$
磁矢势边值关系：
$\vec{B} = \nabla \times \vec{A},\vec{B} = \mu \vec{H}$
$$
\begin{aligned}
&\hat{n} \times (\vec{H}_1 - \vec{H}_2) = \vec{J}_S \\
&\hat{n} \cdot (\vec{B}_2 - \vec{B}_1) = 0
\end{aligned}
$$
也就是
$$
\begin{aligned}
\text{等待补充}
\end{aligned}
$$
## *磁场能量
能量密度：$W_m = \frac{\vec{B} \cdot \vec{H}}{2} = \frac{\mu}{2} H^2$
总能量：$W = \int \frac{\mu}{2} H^2 dV = \frac{1}{2} \int \vec{J} \cdot \vec{A} dV$
## *磁标势
在自由电流为0的单连通区域
$$
\nabla \times \vec{H} = \vec{J_f} = 0 \Rightarrow \vec{H} = -\nabla \varphi_m
$$
这里的$\varphi_m$被称为磁标势
$$
\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}
$$
$$
\nabla \cdot \vec{H} = \frac{\nabla \cdot \vec{B}}{\mu_0} - \nabla \cdot \vec{M} = \frac{\rho_m}{\mu_0}
$$
这里的$\rho_m$是假想磁荷密度
$$
\nabla^2 \varphi_m = -\frac{\rho_m}{\mu_0}
$$
$$
\rho_m = -\mu \nabla \cdot \vec{M}
$$

### 静电场和静磁场的对比
| 静电场($\rho_f = 0$) | 静磁场($\vec{J_f} = 0$) |
|------------------|------------------|
| $\nabla \cdot \vec{E} = 0$ | $\nabla \cdot \vec{H} = 0$ |
| $\nabla \cdot \vec{E} = \frac{\rho_p}{\varepsilon_0}$ | $\nabla \cdot \vec{H} = \frac{\rho_m}{\mu_0}$ |
| $\vec{E} = -\nabla \varphi$ | $\vec{H} = -\nabla \varphi_m$ |
| $\nabla^2 \varphi = -\frac{\rho_p}{\varepsilon_0}$ | $\nabla^2 \varphi_m = -\frac{\rho_m}{\mu_0}$ |
| $\rho_P = -\nabla \cdot \vec{P}$ | $\rho_m = -\nabla \cdot (\mu_0\vec{M})$ | 
| $\rho_{SP} = (\vec{P}_1 - \vec{P}_2) \cdot \hat{n}$ | $\rho_{SM} = \mu_0(\vec{M}_1 - \vec{M}_2) \cdot \hat{n}$ |
| $\varphi_1 = \varphi_2$且$\frac{\partial\varphi_2}{\partial n} -\frac{\partial\varphi_1}{\partial n} = -\frac{\rho_{SP}}{\varepsilon_0}$ | $\vec{m_1} = \vec{m_2}$且$\frac{\partial \vec{m_2}}{\partial n} - \frac{\partial \vec{m_1}}{\partial n} = -\frac{\rho_{SM}}{\mu_0}$ | 

也就是说我们有如下的关系
$$
\begin{aligned}
\vec{H} &\leftrightarrow \vec{E} \\
\varphi_m &\leftrightarrow \varphi \\
\rho_m &\leftrightarrow \rho_p \\
\mu_0 &\leftrightarrow \varepsilon_0 \\
\mu_0 \vec{M} &\leftrightarrow \vec{P} \\
\end{aligned}
$$

## 例题
考虑均匀带电薄球壳，半径为$a$，面电荷密度为$\rho_S$，绕轴匀速转动，角速度为$\omega$，求空间磁场
解：球坐标系下，球壳上面电流密度可以表示为
$$
\vec{J_S} = \rho_S \omega a \sin \theta \hat{\phi}
$$
考虑均匀磁化介质球，磁化面电流密度为
$$
\vec{J_{SM}} = \vec{M} \times \hat{n} = M\sin \theta \hat{\phi}
$$
在两种情况之间建立等效，对比可知
等价的磁化强度为
$$
\vec{M} = \rho_S \omega a \hat{z}
$$
利用对应关系：$\mu_0\vec{M} = \leftrightarrow \vec{P}$
球内有：
$$
\vec{H} = -\frac{\mu_0 \vec{M}}{3\mu_0}
$$
$$
\vec{B} = \mu_0 \vec{H} = \cdots
$$

## *电磁能流与Poynting实验
- 电场能量：$W_e = \frac{\vec{E}\cdot \vec{D}}{2}$
- 磁场能量：$W_m = \frac{\vec{B}\cdot \vec{H}}{2}$
- 电荷动能：$W_v$
- 总能量：$W = W_e + W_m + W_v$

能流矢量：$\vec{S}$
根据能量守恒
$$
\oint_S \vec{S} \cdot d\vec{S} = -\frac{d}{dt}\int_V W dV
$$
根据Gauss定理
$$
\int_V \nabla \cdot \vec{S} dV = \int_V \frac{\partial W}{\partial t} dV
$$
由V的任意性可知
$$
\nabla \cdot \vec{S} = -\frac{\partial W}{\partial t}
$$
$$
\begin{aligned}
-\nabla \cdot \vec{S} &= \frac{\partial}{\partial t}(W_e + W_m) + \frac{\partial}{\partial t} W_v\\
&= \frac{\partial}{\partial t}(W_e + W_m) + \vec{F} \cdot \vec{v}\\
&= \frac{\partial}{\partial t}(W_e + W_m) + (\rho \vec{E} + \rho \vec{v} \times \vec{B}) \cdot \vec{v}\\
&= \frac{\partial}{\partial t}(\frac{\vec{E} \cdot \vec{D}}{2} + \frac{\vec{B} \cdot \vec{H}}{2}) + \rho \vec{E} \cdot \vec{v} 
\end{aligned}
$$
分开计算
$$
\begin{aligned}
\frac{\partial}{\partial t} \frac{\vec{E} \cdot \vec{D}}{2} &= \frac{\vec{E}}{2} \cdot \frac{\partial \vec{D}}{\partial t} + \frac{\vec{D}}{2} \cdot \frac{\partial \vec{E}}{\partial t}\\
&= \varepsilon \frac{\vec{E}}{2} \cdot \frac{\partial \vec{E}}{\partial t} + \frac{\varepsilon}{2} \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}\\
&= \varepsilon \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} = \vec{E} \cdot \frac{\partial \vec{D}}{\partial t}
\end{aligned}
$$
$$
\begin{aligned}
-\nabla \cdot \vec{S} &= \vec{E} \cdot \frac{\partial \vec{D}}{\partial t} + \vec{B} \cdot \frac{\partial \vec{H}}{\partial t} + \vec{E} \cdot \vec{J} \\
&= \vec{E} \cdot (\nabla \times \vec{H} - \vec{J}) - \vec{H}\cdot (\nabla \times \vec{E}) + \vec{E} \cdot \vec{J}\\
&= \vec{E} \cdot (\nabla_H \times \vec{H} )- \vec{H}\cdot (\nabla_E \times \vec{E}) \\
&= -\nabla_H \cdot (\vec{E} \times \vec{H}) - \nabla_E \cdot (\vec{E} \times \vec{H})\\
&= -\nabla \cdot (\vec{E} \times \vec{H}) 
\end{aligned}
$$
定义$\vec{S} = \vec{E} \times \vec{H}$为电磁能流密度，也叫做Poynting矢量
$$
-\nabla \cdot \vec{S} = \frac{\partial}{\partial t}(W_e + W_m) + \vec{E} \cdot \vec{J}
$$
被称为Poynting定理
积分形式：
$$
-\oint_S \vec{S} \cdot d\vec{S} = \frac{d}{dt}\int_V (W_e + W_m) dV + \int_V \vec{E} \cdot \vec{J} dV
$$

## *频域的Maxwell方程组（原来还有这种东西）
Fourier变换：$\vec{E}(\vec{x},\omega) = \int^{\infty}_{-\infty} \vec{E}(\vec{x},t) e^{i\omega t} dt$
Fourier反变换：$\vec{E}(\vec{x},t) = \frac{1}{2\pi} \int^{\infty}_{-\infty} \vec{E}(\vec{x},\omega) e^{-i\omega t} d\omega$
（在这种Fourier变换下，时间导数变为$-i\omega$）

变换后的Maxwell方程组：
$$
\begin{aligned}
&\nabla \times \vec{E} = i\omega \vec{B}\\
&\nabla \times \vec{H} = \vec{J} - i\omega \vec{D}\\
&\nabla \cdot \vec{D} = \rho\\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
### 本构关系
线性，各向同性，色散介质（无法单纯用$\varepsilon$描述介质性）：
$$
\vec{D}(t) = \int^t_{-\infty} \vec{E}(\tau)\varepsilon(t-\tau) d \tau = \vec{E}(t) * \varepsilon(t)
$$
$$
\vec{D}(\omega) = \varepsilon(\omega) \vec{E}(\omega)
$$
同理可得
$$
\vec{B}(\omega) = \mu(\omega) \vec{H}(\omega)
$$

### 边值关系
$$
\begin{aligned}
&\hat{n} \times (\vec{E}_2 - \vec{E}_1) = 0 \\
&\hat{n} \times (\vec{H}_2 - \vec{H}_1) = \vec{J}_S \\
&\hat{n} \cdot (\vec{D}_2 - \vec{D}_1) = \rho_S \\
&\hat{n} \cdot (\vec{B}_2 - \vec{B}_1) = 0
\end{aligned}
$$
形式一模一样，内部变量变换到频域上

## *时谐场
具有某一固定振荡频率的场
$$
\vec{E}(\vec{x},t) = 
\left[\begin{matrix}
E_1(\vec{x})\cos [\omega t + \phi_1(\vec{x})] \\
E_2(\vec{x})\cos [\omega t + \phi_2(\vec{x})] \\
E_3(\vec{x})\cos [\omega t + \phi_3(\vec{x})] \\
\end{matrix}\right] = \frac{1}{2} \left\{\left[\begin{matrix}
E_1(\vec{x}) e^{-\phi_1(\vec{x})} \\
E_2(\vec{x}) e^{-\phi_2(\vec{x})} \\
E_3(\vec{x}) e^{-\phi_3(\vec{x})} \\
\end{matrix}\right] e^{-i\omega t} + CC \right\}
= Re\left\{\vec{E}(\vec{x}) e^{-i\omega t}\right\}
$$
其中
$$
\vec{E}(\vec{x}) = \left[\begin{matrix}
E_1(\vec{x}) e^{-\phi_1(\vec{x})} \\
E_2(\vec{x}) e^{-\phi_2(\vec{x})} \\
E_3(\vec{x}) e^{-\phi_3(\vec{x})} \\
\end{matrix}\right]
$$
为复振幅
时谐场复指数表示形式：$\vec{E}(\vec{x},t) = \vec{E}(\vec{x}) e^{-i\omega t}$
瞬时值形式：$Re\left\{\vec{E}(\vec{x,t}) \right\}$

## *复数的Poynting定理
对于时谐场：
$$
\begin{aligned}
\vec{S} = \vec{E} \times \vec{H} &= \frac{1}{2} \left[\vec{E}(\vec{x}) e^{-i\omega t} + \vec{E}^*(\vec{x}) e^{i\omega t}\right] \times \frac{1}{2} \left[\vec{H}(\vec{x}) e^{-i\omega t} + \vec{H}^*(\vec{x}) e^{i\omega t}\right]\\
&= \frac{1}{4} \left[\vec{E}\times \vec{H} e^{-i2\omega t} + \vec{E}\times \vec{H}^* +\vec{E}^* \times \vec{H} + \vec{E}^* \times \vec{H}^* e^{i2\omega t}\right]\\
\end{aligned}
$$
在一个周期$[0,T](T = \frac{2\pi}{\omega})$内求平均
$$
\begin{aligned}
\langle \vec{S} \rangle &= \frac{1}{2} Re\left\{\vec{E} \times \vec{H}^*\right\}\\
\end{aligned}
$$
定义复数Poynting矢量
$$
\widetilde{\vec{S}} = \frac{1}{2} \vec{E} \times \vec{H}^*
$$
那么
$$
\langle \vec{S} \rangle = Re\left\{\widetilde{\vec{S}}\right\}
$$