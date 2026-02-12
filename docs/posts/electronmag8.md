---
title: 电磁场与波（8）：动态场
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-4-18
---
## *时谐场
$$
\vec{E} = \vec{E}(\vec{x}) e^{-i\omega t}
$$
$$
\vec{H} = \vec{H}(\vec{x}) e^{-i\omega t}
$$
复振幅满足频域`Maxwell`方程组
$$
\begin{aligned}
&\nabla \times \vec{E} = -i\omega \vec{B} \\
&\nabla \times \vec{H} = \vec{J} - i\omega \vec{D} \\
&\nabla \cdot \vec{D} = \rho \\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
复数`Poynting`矢量
$$
\widetilde{\vec{S}} = \frac{1}{2}\vec{E} \times \vec{H}^*
$$
$$
\langle \vec{S} \rangle = Re\{\widetilde{\vec{S}}\} 
$$
复数`Poynting`定理
$$
\begin{aligned}
-\nabla \cdot \widetilde{\vec{S}} &= \frac{1}{2} \cdot \left(\vec{E} \times \vec{H}^* \right) \\
&= -\frac{1}{2} \nabla_E \cdot (\vec{E} \times \vec{H}^*) - \frac{1}{2} \nabla_H \cdot (\vec{E} \times \vec{H}^*)\\
&= -\frac{1}{2} (\nabla \times \vec{E})\cdot \vec{H}^* + \frac{1}{2} (\nabla \times \vec{H}^*)\cdot \vec{E}\\
&= -\frac{1}{2} i\omega \vec{B} \cdot \vec{H}^* + \frac{1}{2} (\vec{J}^* - i\omega \vec{D}^*)\cdot \vec{E}\\
&= -\frac{i\omega}{2} \vec{B} \cdot \vec{H}^* + \frac{i\omega}{2} \vec{E} \cdot \vec{D}^* + \frac{1}{2} \vec{E}\cdot \vec{J}^*\\
\end{aligned}
$$
定义复数电场能量密度：
$$
\widetilde{W_e} = \frac{\vec{E} \cdot \vec{D}^*}{4}
$$
磁场能量密度
$$
\widetilde{W_m} = \frac{\vec{B} \cdot \vec{H}^*}{4}
$$
$$
\langle W_e \rangle = Re\{\frac{\vec{E} \cdot \vec{D}^*}{4}\}, \langle W_m \rangle = Re\{\frac{\vec{B} \cdot \vec{H}^*}{4}\}
$$
$$
-\nabla \cdot \widetilde{\vec{S}} = i2\omega(\widetilde{W_e} - \widetilde{W_m}) + \frac{\vec{E} \cdot \vec{J}^*}{2}
$$
复数`Poynting`定理
$$
\widetilde{W_e}  = \frac{\vec{E} \cdot \vec{D}^*}{4}, \vec{D} = \varepsilon \vec{E} = (\varepsilon' + i\varepsilon'') \vec{E}
$$
$$
\widetilde{W_e} = \frac{\varepsilon' |\vec{E}|^2}{4} - \frac{i\varepsilon'' |\vec{E}|^2}{4}
$$
$$
\widetilde{W_m} = \frac{\vec{B} \cdot \vec{H}^*}{4}, \vec{B} = \mu \vec{H} = (\mu' + i\mu'') \vec{H}
$$
$$
\widetilde{W_m} = \frac{\mu' |\vec{H}|^2}{4} + \frac{i\mu'' |\vec{H}|^2}{4}
$$
$$
-\nabla \cdot \langle \vec{S} \rangle = \frac{\omega \varepsilon''}{2} |\vec{E}|^2 + \frac{\omega \mu''}{2} |\vec{H}|^2 + Re\{\frac{\vec{E} \cdot \vec{J}^*}{2}\}
$$
其中第一项为极化损耗，第二项为磁化损耗，第三项为焦耳热

## *时变电磁场
我们主要考察时变电磁场的**辐射（$\rho \neq 0, \vec{J} \neq 0$）**和**传播（$\rho = 0, \vec{J} = 0$）**问题（尤其是传播问题）

### *时域分析电磁场传播
当$\rho = 0,\vec{J} = 0$时，时域`Maxwell`方程组为
$$
\begin{aligned}
&\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \\
&\nabla \times \vec{H} = \frac{\partial \vec{D}}{\partial t} \\
&\nabla \cdot \vec{D} = 0 \\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
真空中，$\vec{D} = \varepsilon_0 \vec{E}, \vec{B} = \mu_0 \vec{H}$（下面的结果均依赖于这里的简单介质性质）
对方程组的第一个方程取旋度
$$
\begin{aligned}
\nabla \times (\nabla \times \vec{E}) &= -\frac{\partial}{\partial t} (\nabla \times \vec{B}) \\
\nabla(\nabla\cdot \vec{E}) - \nabla^2 \vec{E} &= -\frac{\partial}{\partial t} (\nabla \times \vec{B}) \\
\nabla^2 \vec{E}  - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} &= 0 \\
\nabla^2 \vec{E} - \frac{1}{c^2} \frac{\partial^2 \vec{E}}{\partial t^2} &= 0
\end{aligned}
$$
最后一个方程就是波动方程

一维波动方程：
$$
\frac{\partial^2 A}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 A}{\partial t^2} = 0
$$
也即
$$
A(x,t) = f(x \pm ct)
$$
但是如果考虑色散介质的情况，从时域上分析，问题会复杂得多

### *频域分析电磁场传播
为了解决上面的问题，我们引入频域分析方法

对于时谐场
$$
\begin{aligned}
&\nabla \times \vec{E} = -i\omega \vec{B} \\
&\nabla \times \vec{H} = - i\omega \vec{D} \\
&\nabla \cdot \vec{D} = 0 \\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
前两条方程保证了后两条方程成立
因此我们考虑将第一条方程代入第二条方程
$$
\vec{B} = \frac{1}{i\omega} \nabla \times \vec{E}
$$
$$
\frac{1}{i\omega \mu} \nabla \times (\nabla \times \vec{E}) = -i\omega \varepsilon \vec{E}
$$
$$
\frac{1}{i\omega \mu}\left[\nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E}\right] = -i\omega \varepsilon \vec{E}
$$
最终我们得到
$$
\begin{aligned}
&\nabla^2 \vec{E} + k^2 \vec{E} = 0, (k=\omega \sqrt{\mu \varepsilon})\\
&\nabla \cdot \vec{E} = 0\\
&\vec{H} = \frac{1}{i\omega \mu} \nabla \times \vec{E}
\end{aligned}
$$
亦等价于
$$
\begin{aligned}
&\nabla^2 \vec{H} + k^2 \vec{H} = 0, (k=\omega \sqrt{\mu \varepsilon})\\
&\nabla \cdot \vec{H} = 0\\
&\vec{E} = \frac{1}{i\omega \mu} \nabla \times \vec{H}
\end{aligned}
$$
上面的结果被称为`Helmholtz`方程

### *均匀平面波
当$\mu$和$\varepsilon$为实数时（介质无损）
考虑如下形式的解：
$$
\vec{E}(\vec{x}) = \vec{E}_0 e^{i\vec{k}\cdot\vec{x}}，(|\vec{k}| = k)
$$
可验证其满足之前的`Helmholtz`方程

电磁波完整的复指数形式为
$$
\vec{E}(\vec{x},t) = \vec{E}_0 e^{i(\vec{k}\cdot\vec{x} - \omega t)}
$$
- $\vec{k}$为波矢，$\hat{k}$为相位传播方向，k为相位传播常数
- 取$\vec{k}$的方向为z轴，则相位可表示为$\phi = kz - \omega t$
等相位面为垂直于z轴（波矢方向）的平面
等相位面上的振幅都相等。
因此我们将上面所述的波成为**均匀平面波**
相位传播速度：
对于某个$\phi$的取值：
$$
kdz-\omega dt = 0
$$
$$
\frac{dz}{dt} = \frac{\omega}{k} = V_P
$$
$$
\vec{V}_P = \frac{\omega}{k} \hat{k} = \frac{1}{\sqrt{\mu \varepsilon}} \hat{k}
$$
称为相速度
- 相速度折射率：
$$
n_P = \frac{c}{V_P} = \sqrt{\mu_r \varepsilon_r}
$$
在绝大多数情况下有$\mu_r = 1$，因此$n_P \approx \sqrt{\varepsilon_r}$
- 波长：$\lambda = \frac{2\pi}{k}$
- $\nabla \cdot \vec{E} = 0$
$$
\nabla \cdot (\vec{E}_0 e^{i(\vec{k}\cdot\vec{x} - \omega t)}) = 0
$$
$$
i\vec{k}\cdot\vec{E}_0 e^{i(\vec{k}\cdot\vec{x} - \omega t)} = 0
$$
$$
\vec{k}\cdot\vec{E}_0 = 0
$$
即$\vec{E}_0$与$\vec{k}$垂直
$$
\begin{aligned}
\vec{H} &= \frac{1}{i\omega \mu} \nabla \times \vec{E} = \frac{1}{i\omega \mu} \nabla \times (\vec{E}_0 e^{i(\vec{k}\cdot\vec{x} )})\\
&= \frac{1}{i\omega \mu} \nabla \times (\vec{E}_0 e^{i(\vec{k}\cdot\vec{x} )})\\
&= \sqrt{\frac{\varepsilon}{\mu}} \vec{E}_0 \times \hat{k} e^{i(\vec{k}\cdot\vec{x} - \omega t)}\\
&= \hat{k} \times \frac{\vec{E}_0}{\eta} e^{i(\vec{k}\cdot\vec{x})} \Rightarrow \vec{H} \perp \vec{E} \perp \hat{k}
\end{aligned}
$$
对于$\vec{E},\vec{H}$只有与$\vec{k}$垂直的分量，我们称之为横波
$\eta$为波阻抗，$\eta = \sqrt{\frac{\mu}{\varepsilon}}$，在真空中有$\eta_0 \approx 377 \Omega$
- 平均电场能量密度：
$$
\langle W_e \rangle = Re\left\{\frac{\vec{E} \cdot \vec{D}^*}{4}\right\} = \frac{\varepsilon|\vec{E}_0|^2}{4}
$$
平均磁场能量密度：
$$
\langle W_m \rangle = Re\left\{\frac{\vec{H} \cdot \vec{B}^*}{4}\right\} = \frac{\mu|\vec{H}_0|^2}{4} = \frac{|\vec{E}_0|^2}{4\eta_0^2} = \frac{\varepsilon|\vec{E}_0|^2}{4}
$$
可以看到$\langle W_e \rangle = \langle W_m \rangle$

**总平均电磁能量密度**
$$
\langle W_{em} \rangle = \langle W_e \rangle + \langle W_m \rangle = \frac{\varepsilon|\vec{E}_0|^2}{2}
$$
- 平均能流：
$$
\langle \vec{S} \rangle = \frac{1}{2} Re\left\{\vec{E} \times \vec{H}^* \right\} = \frac{|\vec{E}_0|^2}{2\eta} \hat{k}
$$
能量传播速度：
$$
\vec{V}_e = \frac{\langle \vec{S} \rangle}{\langle W_{em} \rangle} = \frac{1}{\sqrt{\mu \varepsilon}} \hat{k}
$$
- 偏振（极化）
对于$\vec{E} = \vec{E}_0 e^{i(\vec{k}\cdot\vec{x} - \omega t)}$
$$
\begin{aligned}
\vec{E} &= \vec{E}_0 e^{i(\vec{k}\cdot\vec{x} - \omega t)}\\
&= E_{0x}e^{i\phi_x}e^{i(\vec{k}\cdot\vec{x} - \omega t)} \hat{e}_x + E_{0y}e^{i\phi_y}e^{i(\vec{k}\cdot\vec{x} - \omega t)} \hat{e}_y\\
\end{aligned}
$$
瞬时值电场：
x方向：
$$
E_x = E_{0x} \cos(\vec{k}\cdot\vec{x} - \omega t + \phi_x)
$$
y方向：
$$
E_y = E_{0y} \cos(\vec{k}\cdot\vec{x} - \omega t + \phi_y)
$$
在某一z处，迎着波的传播方向看，电场矢量端点描绘的轨迹满足
$$
\left(\frac{E_x}{E_{0x}}\right)^2 + \left(\frac{E_y}{E_{0y}}\right)^2 - 2\frac{E_x}{E_{0x}}\frac{E_y}{E_{0y}}\cos(\phi_y - \phi_x) = \sin^2(\phi_y - \phi_x)
$$
此公式在本课程中不要求
考虑$\Delta \phi = \phi_y - \phi_x$
  - 线偏振：$\Delta \phi = 0或\pi$
  - 圆偏振：$\Delta \phi = \pm \frac{\pi}{2}$，其中$\Delta \phi = \frac{\pi}{2}$为右旋圆偏振（左旋圆极化），$\Delta \phi = -\frac{\pi}{2}$为左旋圆偏振（右旋圆极化）
  - 椭圆偏振：其他情况


以上结果均仅针对均匀平面波