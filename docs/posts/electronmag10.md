---
title: 电磁场与波（10）：导电介质中的波
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-5-9
---

## *导电介质
电荷与电流关系：$\nabla \cdot \vec{J} = -\frac{\partial \rho}{\partial t}$
电流与电场关系：$\vec{J} = \sigma \vec{E}$

$$
\sigma \nabla \cdot \vec{E} + \frac{\partial \rho}{\partial t} = 0
$$

电场与电荷满足：
$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon}
$$
即
$$
\frac{\sigma}{\varepsilon} \rho + \frac{\partial \rho}{\partial t} = 0
$$

$$
\rho = \rho_0 e^{-\frac{\sigma}{\varepsilon} t} = \rho_0 e^{-\frac{t}{\tau}}
$$
其中$\tau = \frac{\varepsilon}{\sigma}$称为特征时间。
当$\tau = \frac{\varepsilon}{\sigma} \ll T = \frac{2\pi}{\omega}$时，即$\frac{\sigma}{\omega\varepsilon} \gg 1 $ 时，称为良导体
当$\sigma,\varepsilon$一定时，$\omega$越小，介质越接近良导体

良导体内部，近似无净电荷积累，$\rho \approx 0$

### *良导体的Maxwell方程组

$$
\begin{aligned}
&\nabla \times \vec{E} = i \omega \vec{B}\\
&\nabla \times \vec{H} = \vec{J} - i \omega \vec{D} = \sigma \vec{E} - i \omega \varepsilon \vec{E} = -i \omega (\varepsilon + i \frac{\sigma}{\omega}) \vec{E} = -i \omega \tilde{\varepsilon} \vec{E}\\
&\nabla \cdot \vec{E} = 0 \quad (\rho \approx 0)\\
&\nabla \cdot \vec{B} = 0
\end{aligned}
$$
其中$\tilde{\varepsilon} = \varepsilon + i \frac{\sigma}{\omega}$称为复介电常数，虚部代表损耗
复折射率：$\tilde{n} = \sqrt{\tilde{\varepsilon}_r} = \sqrt{\varepsilon_r+i \frac{\sigma}{\omega \varepsilon_0}}$

### *良导体中的平面电磁波
Helmholtz方程：
$$
\nabla^2 \vec{E} + \tilde{k}^2 \vec{E} = 0
$$
其中$\tilde{k} = \omega \sqrt{\mu \tilde{\varepsilon}}$
假设$\vec{E} = \vec{E_0} e^{i \tilde{\vec{k}} \cdot \vec{x}}$，

不妨设$\tilde{\vec{k}} = \vec{\beta} + i \vec{\alpha}$，则
$$
\vec{E} = \vec{E_0} e^{-\vec{\alpha} \cdot \vec{x}} e^{i \vec{\beta} \cdot \vec{x}}
$$

可以被分解为复振幅和相位沿$\vec{\beta}$传播的平面波

等振幅面垂直于$\vec{\alpha}$，等相位面垂直于$\vec{\beta}$
$\vec{\alpha},\vec{\beta}$未必平行

### *电磁波在良导体表面的反射与透射

考虑入射、反射、透射电磁波，有他们在界面方向上的波矢分量关系
$$
k_i \sin \theta_i = k_r \sin \theta_r = k_t \sin \theta_t
$$

$$
\theta_r = \theta_i
$$

$$
\frac{\sin \theta_i}{\sin \theta_t} = \frac{\beta}{k_i}
$$

考虑垂直入射场景：
$$
\theta_i = \theta_r  = \theta_t = 0
$$

$$
\vec{\alpha} \parallel \vec{\beta} \parallel \vec{e_z}
$$

$$
\tilde{\vec{k}}^2 = (\vec{\beta} + i \vec{\alpha})^2 = \omega^2 \mu \tilde{\varepsilon} = \omega^2 \mu(\varepsilon + i \frac{\sigma}{\omega})
$$

$$
\alpha = \omega \sqrt{\mu \sigma}\left [ \frac{1}{2}(\sqrt{1 + \frac{\sigma^2}{\omega^2 \varepsilon^2}}-1)\right]^{\frac{1}{2}} \approx \sqrt{\frac{\omega \sigma \mu}{2}}
$$

$$
\beta = \omega \sqrt{\mu \varepsilon}\left [ \frac{1}{2}(\sqrt{1 + \frac{\sigma^2}{\omega^2 \varepsilon^2}}+1)\right]^{\frac{1}{2}} \approx \sqrt{\frac{\omega \sigma \mu}{2}}
$$

以上近似均在$\frac{\sigma}{\omega \varepsilon} \gg 1$时成立
#### 穿透深度
即透射波衰减到入射波的$\frac{1}{e}$时，在介质中传播的距离
$$
\delta = \frac{1}{\alpha} \approx \sqrt{\frac{2}{\omega \mu \sigma}}
$$
电磁波角频率$\omega$越大，穿透深度越小
称为趋肤效应

#### 磁场
$$
\vec{H}_t = \vec{H}_{0t} e^{-\alpha z} e^{i \beta z} 
$$
$$
\vec{H}_{0t} = \hat{e}_z \times \frac{\vec{E}_{0t}}{\eta}
$$
其中$\eta = \sqrt{\frac{\mu}{\tilde{\varepsilon}}} = \sqrt{\frac{\mu}{\varepsilon + i \frac{\sigma}{\omega}}} = \sqrt{\frac{\mu}{\varepsilon}} (1 + i \frac{\sigma}{\omega \varepsilon})^{-1/2} \approx \sqrt{\frac{\omega \mu}{\sigma}} e^{i \frac{\pi}{4}}$
所以
$$
\vec{H}_{0t} = \sqrt{\frac{\omega \mu}{\sigma}} e^{i \frac{\pi}{4}} \hat{e}_z \times \vec{E}_{0t}
$$

发现以下几个结论：
- $\vec{H}$与$\vec{E}$相位相差$\frac{\pi}{4}$
- $\frac{<W_e>}{<W_m>}  = \frac{\frac{\varepsilon}{4}|\vec{E}_{0t}|^2}{\frac{\mu}{4}|\vec{H}_{0t}|^2} = \frac{\omega\varepsilon}{\sigma} \ll 1$
良导体中电磁波能量以磁场能量为主
- 幅度反射系数：
$$
\frac{E_{0r}}{E_{0i}} = \frac{n_1 \cos \theta_i - n_2 \cos \theta_t}{n_1 \cos \theta_i + n_2 \cos \theta_t} = \frac{1 - \sqrt{\varepsilon_r(1+i\frac{\sigma}{\omega \varepsilon})}}{1 + \sqrt{\varepsilon_r(1+i\frac{\sigma}{\omega \varepsilon})} } \approx \frac{1 - \sqrt{\frac{\sigma}{\omega \varepsilon}}e^{i\frac{\pi}{4}}}{1 + \sqrt{\frac{\sigma}{\omega \varepsilon}}e^{i\frac{\pi}{4}}} =\frac {\sqrt{\frac{2\omega \varepsilon_0}{\sigma}} - 1 - i}{\sqrt{\frac{2\omega \varepsilon_0}{\sigma}} + 1 + i}
$$
功率反射率：
$$
R = \frac{P_r}{P_i} = |\frac{E_{0r}}{E_{0i}}|^2 \approx 1 - 2\sqrt{\frac{2\omega \varepsilon_0}{\sigma}} \approx 1
$$
- 焦耳热
电流：$\vec{J} = \sigma \vec{E}_t$
焦耳热功率密度：$P = \frac{\vec{E}_t \cdot \vec{J}^*}{2} = \frac{\sigma}{2}|\vec{E}_t|^2$
单位面积发热功率：
$$
P_d = \int^\infty_0 \frac{\sigma|\vec{E}_{0t}|^2}{2} d z = \frac{\sigma|\vec{E}_{0t}|^2}{4\alpha} = \frac{\sigma\delta |\vec{E}_{0i}|^2}{4}
$$
"表面“电流密度：
$$
\vec{J}_s = \int^\infty_0 \sigma \vec{E}_t d z = \frac{\sigma\vec{E}_{0i}}{\alpha - i\beta} \approx \frac{\sigma\delta\vec{E}_{0i}}{1 - i}
$$
把$P_d$与$\vec{J}_s$关系写作：
$$
P_d = \frac{1}{2} |\vec{J}_s|^2 R_S
$$
其中$R_S = \frac{1}{\sigma\delta}$称为表面电阻

$$
\vec{E}_{0t} \approx R\sqrt{\frac{\omega \epsilon_0}{\sigma}}e^{-i \frac{\pi}{4}}\vec{E}_{0i}
$$

在实际运用中，$\vec{J_S}$可以通过将良导体近似为理想导体计算。电磁波频率越高，表面电阻越大，焦耳热功率越大，电磁波能量损耗越大

### *理想导体
$\sigma \rightarrow \infty$的时候，称为理想导体
穿透深度：$\delta \rightarrow 0$
理想导体内部无电磁场：$\vec{E} = 0,\vec{H} = 0$
电荷电流集中在表面

电磁波入射到理想导体表面时，边值关系：
$$
\begin{aligned}
&\hat{n} \times \vec{E} = 0\\
&\hat{n} \times \vec{H} = \vec{J}_s\\
&\hat{n} \cdot \vec{E} = \frac{\rho_s}{\varepsilon_0}\\
&\hat{n} \cdot \vec{H} = 0
\end{aligned}
$$
其中第一条是该问题的**「本质约束」**，第二条为**「表面电流」**，第三条为**「表面电荷」**。

#### *例题
一均匀平面波入射至理想导体平面，电场垂直于入射面（N波），入射角为$\theta$，求空间电磁波

解：反射角$\theta_r = \theta$，入射波和反射波分贝表示为
$$
\begin{aligned}
\vec{E}_i &= \hat{e}_y E_0 e^{i(k_x x + k_z z)}\\
\vec{E}_r &= \hat{e}_y E_0 e^{i(-k_x x + k_z z)}
\end{aligned}
$$
总电场：$\vec{E} = \vec{E}_i + \vec{E}_r$
在理想导体表面


