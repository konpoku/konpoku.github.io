---
title: 电磁场与波：期末复习
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-6-9
---

## *时域Maxwell方程
$$
\begin{aligned}
&\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \\
&\nabla \times \vec{H} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \\
&\nabla \cdot \vec{D} = \frac{rho}{\varepsilon_0} \\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
## *对于传播问题，$\rho = 0,\vec{J} = 0$
Maxwell方程组等价为
$$
\begin{aligned}
&\nabla^2 \vec{E} - \frac{1}{c^2} \frac{\partial^2 \vec{E}}{\partial t^2} = 0 \\
&\nabla^2 \vec{B} - \frac{1}{c^2} \frac{\partial^2 \vec{B}}{\partial t^2} = 0\\
&\nabla \cdot \vec{E} = 0 \\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
其中$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$为光速
## *对于辐射问题，$\rho \neq 0,\vec{J} \neq 0$
考虑
$$
\begin{aligned}
&\vec{E} = -\nabla \varphi - \frac{\partial \vec{A}}{\partial t} \\
&\vec{B} = \nabla \times \vec{A} \\
&\nabla \cdot \vec{A} + \frac{1}{c^2} \frac{\partial \varphi}{\partial t} = 0
\end{aligned}
$$
得到另一个等价形式
$$
\begin{aligned}
&\nabla^2 \varphi - \frac{1}{c^2} \frac{\partial^2 \varphi}{\partial t^2} = -\frac{\rho}{\varepsilon_0} \\
&\nabla^2 \vec{A} - \frac{1}{c^2} \frac{\partial^2 \vec{A}}{\partial t^2} = -\mu_0 \vec{J} \\
\end{aligned}
$$

## *频域Maxwell方程
$$
\begin{aligned}
&\nabla \times \vec{E} = -i \omega \vec{B} \\
&\nabla \times \vec{H} = \vec{J} - i \omega \vec{D} \\
&\nabla \cdot \vec{D} = \rho \\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
## 频域本构关系
$$
\begin{aligned}
&\vec{D}(\omega) = \varepsilon(\omega) \vec{E}(\omega) \\
&\vec{B}(\omega) = \mu(\omega) \vec{H}(\omega)
\end{aligned}
$$
## 频域边值关系
$$
\begin{aligned}
&\hat{n} \times (\vec{E}_2 - \vec{E}_1) = 0 \\
&\hat{n} \times (\vec{H}_2 - \vec{H}_1) = \vec{J}_S \\
&\hat{n} \cdot (\vec{D}_2 - \vec{D}_1) = \rho_S \\
&\hat{n} \cdot (\vec{B}_2 - \vec{B}_1) = 0
\end{aligned}
$$

## *时谐场
复指数形式：$\vec{E}(\vec{x},t)=\vec{E}(\vec{x})e^{-i\omega t}$
瞬时值形式：$\vec{E}(\vec{x},t)=Re\{\vec{E}(\vec{x})e^{-i\omega t}\}$
## *频域传播问题
$$
\begin{aligned}
&\nabla \times \vec{E} = i \omega \vec{B} \\
&\nabla \times \vec{H} = -i \omega \vec{D} \\
\end{aligned}
$$
等价于
$$
$$

## 均匀平面波
$$
\vec{E}(\vec{x}) = \vec{E_0} e^{i \vec{k} \cdot \vec{x}}
$$
$$
\vec{H}(\vec{x}) = \vec{H_0} e^{i \vec{k} \cdot \vec{x}}
$$
$$
\vec{H}_0 = \hat{k} \times \frac{\vec{E}_0}{\eta}
$$
其中$\eta = \sqrt{\frac{\mu}{\varepsilon}}$为波阻抗

## *在无损介质面的反射与折射
边值关系：
$$
\begin{aligned}
\hat{n} \times (\vec{E}_2 - \vec{E}_1) &= 0 \\
\hat{n} \times (\vec{H}_2 - \vec{H}_1) &= 0 \\
\end{aligned}
$$
1. 方向：Snell定律
$\theta_r = \theta_i$
$\frac{\sin \theta_i}{\sin \theta_t} = \frac{n_2}{n_1}$
振幅：Frenel公式
N波，P波
2. 关于反射波：
(1)$n_1 < n_2$，N波有半波损失（光疏入射光密）
(2)$n_1 > n_2$，$\theta_i > \theta_c = \arcsin n_{21}$
全反射
(3)Brewster角：$\theta_B = \arctan \frac{n_2}{n_1}$，P波无反射，反射波中只有N波
3. 良导体$\frac{\sigma}{\omega \varepsilon} >> 1$
$$
\begin{aligned}
&\nabla \times \vec{E} = -i \omega \vec{B} \\
&\nabla \times \vec{H} = -i \omega \tilde{\varepsilon} \vec{E} \\
\end{aligned}
$$
其中$\tilde{\varepsilon} = \varepsilon_0 + i\frac{\sigma}{\omega}$
穿透深度：$\delta = \sqrt{\frac{2}{\omega \mu \sigma}}$
$$
\vec{E}(\vec{x}) = \vec{E_0} e^{-\vec{\alpha}\cdot \vec{x}} e^{i\vec{\beta}\cdot\vec{x}}
$$
表面电阻：$R_S = \frac{1}{\sigma\delta}$
表面电流：$\vec{J_S} \approx \hat{n}\times \vec{H}|_S$
单位面积焦耳热：$P_d = \frac{1}{2}|\vec{J_S}|R_S$
4. 理想导体：$\sigma \rightarrow \infty$
边值关系：
$$
\begin{aligned}
&\hat{n} \times \vec{E} = 0 \quad \text{本质约束条件} \\
&\hat{n} \times \vec{H} = \vec{J}_s \\
&\hat{n} \cdot \vec{D} = \rho_s \\
&\hat{n} \cdot \vec{B} = 0
\end{aligned}
$$
a. 波导
b. 谐振腔

## *辐射问题
$$
\begin{aligned}
&\nabla \cdot \vec{J} - i\omega \rho = 0\\
&\nabla \cdot \vec{A} - \frac{i\omega}{c^2} \varphi = 0\\
\end{aligned}
$$
$$
\vec{A}(\vec{x}) = \frac{\mu_0}{4\pi} \int \frac{\vec{J}(\vec{x}')e^{ikr}}{r}dV'
$$
分别考虑近场和远场
$$
\vec{A} \approx \frac{\mu_0}{4\pi} \frac{e^{ikr}}{R} \int \vec{J}(\vec{x}')dV' = -\frac{i\omega\mu_0}{4\pi} \frac{e^{ikR}}{R} \vec{P}_0
$$
以下内容没抄上

## *能流
时域：瞬时值能流 $\vec{S} = \vec{E}\times\vec{H}$
瞬时值电场能量密度：$w_e = \frac{\vec{E}\cdot \vec{D}}{2}$
磁场能量密度：$w_m = \frac{\vec{B}\cdot \vec{H}}{2}$
Poynting定理：
$$
-\nabla \cdot \vec{S} = \frac{\partial}{\partial t}(w_e + w_m) + \vec{E} \cdot \vec{J}
$$
复数能流：也没抄上，开摆！