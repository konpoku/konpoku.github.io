---
title: 电磁场与波（12）：辐射问题
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-5-23
---
## 辐射
$$
\vec{E} = -\nabla \varphi - \frac{\partial \vec{A}}{\partial t} = \frac{1}{4\pi\varepsilon_0} \int\left[\frac{\rho(\vec{x}',t_r)\hat{r}}{r^2} + \frac{\dot{\rho}(\vec{x}',t_r)}{cr} - \frac{\dot{\vec{J}}(\vec{x}',t_r)}{c^2r}\right]dV'
$$
$$
\vec{B} = \nabla \times \vec{A} = \frac{\mu_0}{4\pi} \int\left[\frac{\vec{J}(\vec{x}',t_r)}{r^2} + \frac{\dot{\vec{J}}(\vec{x}',t_r)}{cr} \right] \times \hat{r} dV'
$$
其中，$\dot{rho} = \frac{\partial \rho}{\partial t}$，$\dot{\vec{J}} = \frac{\partial \vec{J}}{\partial t}$
考虑在导体球壳表面上求他的总辐射功率：
$$
P = \lim_{R \to \infty} \oint_{R} \vec{E} \times \vec{H} \cdot d \vec{S}
$$
$d\vec{S} \propto \frac{1}{R^2}$，$\vec{E} \times \vec{H}$包含$\frac{1}{R^2},\frac{1}{R^3},\frac{1}{R^4}$等项
只有$\dot{\rho},\dot{\vec{J}}$（电荷，电流随时间的变化）才会产生电磁辐射

### *时谐场的辐射
$$
\rho(\vec{x},t) = \rho(\vec{x})e^{-i\omega t},\quad \vec{J}(\vec{x},t) = \vec{J}(\vec{x})e^{-i\omega t}
$$
$$
\varphi(\vec{x},t) = \varphi(\vec{x})e^{-i\omega t},\quad \vec{A}(\vec{x},t) = \vec{A}(\vec{x})e^{-i\omega t}
$$
电荷量守恒定律：
$$
\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0 \Rightarrow \nabla \cdot \vec{J} - i\omega\rho = 0
$$
$\rho,\vec{J}$是不独立的
Lorentz规范：
$$
\nabla \cdot \vec{A} + \frac{1}{c^2}\frac{\partial \varphi}{\partial t} = 0 \Rightarrow \nabla \cdot \vec{A} - \frac{i\omega}{c^2}\varphi = 0
$$
$\varphi,\vec{A}$不独立
只需考虑$\vec{J},\vec{A}$

$$
\begin{aligned}
\vec{A}(\vec{x},t) &= \frac{\mu_0}{4\pi} \int \frac{\vec{J}(\vec{x}',t_r)}{r}dV'\\
&=\frac{\mu_0}{4\pi} \int \frac{\vec{J}(\vec{x}')e^{-i\omega (t - \frac{r}{c})}}{r}dV'\\
&=\left[ \frac{\mu_0}{4\pi} \int \frac{\vec{J}(\vec{x}')e^{i\omega \frac{r}{c}}}{r}dV' \right] e^{-i\omega t}\\
\end{aligned}
$$
其中$\vec{A}(\vec{x}) = \frac{\mu_0}{4\pi} \int \frac{\vec{J}(\vec{x}')e^{ikr}}{r}dV'$,$e^{ikr}$代表由源点$\vec{x}'$传播到场点$\vec{x}$的相移
+ 近似1：场点远离$\vec{J}$分布区域，$|\vec{x}| >> |\vec{x}'|$
记$|\vec{x}| = R$，$r = |\vec{x} - \vec{x}'| \approx |\vec{x}| - \vec{x}' \cdot \nabla R = R - \hat{R} \cdot \vec{x}'$
$\frac{1}{R} = \frac{1}{|\vec{x} - \vec{x}'|} \approx \frac{1}{|\vec{x}|} -\vec{x}' \cdot \nabla \frac{1}{R} = \frac{1}{R} + \frac{\hat{R} \cdot \vec{x}'}{R^2}$
$$
\begin{aligned}
\vec{A}(\vec{x}) &\approx \frac{\mu_0}{4\pi} \int \left(\frac{1}{R} + \frac{\hat{R} \cdot \vec{x}'}{R^2} \right) e^{ik(R - \hat{R} \cdot \vec{x}')}\vec{J}(\vec{x}')dV'\\
\end{aligned}
$$
+ 近似2：$\vec{J}$分布区域的尺度远远小于电磁波的波长
$$
max\left\{|\vec{x}'|\right\} << \lambda = \frac{2\pi}{k}
$$
$$
|k\vec{x}'| << 1
$$
$$
e^{-ik \vec{x}' \cdot \hat{R}} \approx 1 - ik \vec{x}' \cdot \hat{R} 
$$
$$
\vec{A}(\vec{x}) = \frac{\mu_0 e^{ikR}}{4\pi R} \int \left[1 + (\frac{1}{R} - ik)\vec{x}' \cdot \hat{R} + \cdots \right] \vec{J}(\vec{x}')dV'
$$
第一项：
$$
\vec{A}(\vec{x}) = \frac{\mu_0 e^{ikR}}{4\pi R} \int \vec{J}(\vec{x}')dV' 
$$

### *电偶极辐射：
$$
\int \vec{J}(\vec{x}')dV' = \frac{d\vec{P}(t)}{dt} = -i\omega \vec{P}(t)
$$
$$
\vec{J}(\vec{x}',t) = \vec{J}e^{-i\omega t},\vec{P}(t) = \vec{P}_0 e^{-i\omega t}
$$
$$
\int \vec{J}(\vec{x}')dV' = -i\omega \vec{P}_0
$$
$$
\vec{A}(\vec{x}) = \frac{i\omega \mu_0 e^{ikR}}{4\pi R} \vec{P}_0
$$
电磁场：
$$
\begin{aligned}
\vec{B} &= \nabla \times \vec{A}\\
\vec{E} &= -\frac{1}{-i \omega \mu_0 \varepsilon_0} \nabla \times \vec{B} = i\frac{c}{k} \nabla \times \vec{B}
\end{aligned}
$$
在球坐标系下：
$$
\begin{aligned}
\vec{B} &= -\frac{P_0k^3}{4\pi \varepsilon_0 c}\left[\frac{i}{(kR)^2}+ \frac{1}{kR}\right]\sin \theta e^{i(kR - \omega t)} \hat{\phi}\\
\vec{E} &= -\frac{2P_0k^3}{4\pi \varepsilon_0}\left[\frac{1}{(kR)^3} - \frac{i}{(kR)^2}\right]\cos \theta e^{i(kR - \omega t)} \hat{R}\\
&+\frac{P_0k^3}{4\pi \varepsilon_0}\left[\frac{1}{(kR)^3} - \frac{i}{(kR)^2} - \frac{1}{kR}\right]\sin \theta e^{i(kR - \omega t)} \hat{\theta}\\
\end{aligned}
$$
1. 近区：$R << \lambda = \frac{2\pi}{k}$，$kR << 1$
$$
\begin{aligned}
\vec{B} &\approx -\frac{iP_0k}{4\pi \varepsilon_0 cR^2}\sin \theta e^{i\omega t} \hat{\phi}\\
\vec{E} &\approx -\frac{2P_0}{4\pi \varepsilon_0 R^3}\cos \theta e^{i\omega t} \hat{R} + \frac{P_0}{4\pi \varepsilon_0 R^3}\sin \theta e^{-i\omega t} \hat{\theta}\\
&= \frac{1}{4\pi \varepsilon_0} \frac{3(\vec{R}\cdot \vec{P})\vec{R} - R^2 \vec{P}}{R^5} 
\end{aligned}
$$
与静场分布类似
2. 远区：$R >> \lambda = \frac{2\pi}{k}$，$kR >> 1$
$$
\begin{aligned}
\vec{B} &\approx -\frac{P_0k^3}{4\pi \varepsilon_0 cR}\sin \theta e^{i(kR - \omega t)} \hat{\phi}\\
\vec{E} &\approx -\frac{P_0k^2}{4\pi \varepsilon_0 R}\sin \theta e^{i(kR - \omega t)} \hat{\theta}\\
\end{aligned}
$$
以辐射场为主
$\vec{H} = \hat{R} \times \frac{\vec{E}}{\eta}$，其中$\eta$为真空波阻抗
平均能流：
$$
<\vec{S}> = Re \left\{\frac{\vec{E} \times \vec{H}^*}{2}\right\} = \frac{|P_0|^2\omega^4\sin^2\theta}{32\pi^2 \varepsilon_0 c^3 R^2} \hat{R} \propto \sin^2\theta 
$$
考虑总辐射功率
$$
P = \oint <\vec{S}> \cdot d\vec{S} = \frac{|P_0|^2\omega^4}{12\pi \varepsilon_0 c^3} \propto \omega^4
$$
3. 过渡区：$R \sim \lambda$
$\vec{E},\vec{B}$介于近区和远区之间

### *短天线($L<<\lambda$)
这里应该有一张图
$$
I(z,t) = I_0(1-\frac{2|z|}{L})e^{-i\omega t},\quad |z|<\frac{L}{2}
$$
电偶极矩振幅：
$$
\vec{P}_0 = -\frac{1}{i\omega} \int \vec{J}(\vec{x}')dV' = \frac{i I_0 L}{2\omega}\hat{e}_z
$$
总辐射功率：
$$
P = \frac{\pi \eta I^2_0}{12}(\frac{L}{\lambda})^2 = \frac{I_0^2R_{rad}}{2}
$$
其中$R_{rad} = \frac{\pi \eta}{6}(\frac{L}{\lambda})^2$为辐射阻抗
不妨设$\frac{L}{\lambda} = 0.01$，$R_{rad} = 0.02 \Omega$

### *半波天线($L = \frac{\lambda}{2}$)
$$
I(z,t) = I_0 \cos kz e^{-i\omega t}
$$
其中$|z|\leq \frac{L}{2}$
$$
\vec{A}(\vec{x}) = \frac{\mu_0}{4\pi} \int \frac{\vec{J}(\vec{x}')e^{ikr}}{r}dV'
$$
在远场区，$r \approx R - z\cos\theta$
$$
\vec{A}(\vec{x}) \approx \frac{\mu_0I_0e^{ikR}}{2\pi k R} \frac{\cos(\frac{\pi}{2} \cos\theta)}{\sin^2\theta} \hat{e}_z
$$
辐射能流：
$$
<\vec{S}> \propto \frac{\cos^2(\frac{\pi}{2} \cos\theta)}{\sin^2\theta}
$$
垂直于天线方向辐射最大
辐射阻抗：
$$
R_{rad} \approx 2.44\frac{\mu_0c}{4\pi} = 73.2\Omega
$$