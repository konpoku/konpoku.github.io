---
title: 电磁场与波（9）：波的一些性质
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-4-29
---


**本次笔记均为OCR结果，仅供参考**


## 均匀平面波在介质面的反射和折射

**(入射波的波矢 $\vec{k_i}$ 位于 yOz 平面内)**

**入射波:** $\vec{E_i} = \vec{E_{0i}} e^{i \vec{k_i} \cdot \vec{r}} = \vec{E_{0i}} e^{i(k_{iy} y + k_{iz} z)}$

**反射波:** $\vec{E_r} = \vec{E_{0r}} e^{i \vec{k_r} \cdot \vec{r}} = \vec{E_{0r}} e^{i(k_{rx} x + k_{ry} y + k_{rz} z)}$

**折射波:** $\vec{E_t} = \vec{E_{0t}} e^{i \vec{k_t} \cdot \vec{r}} = \vec{E_{0t}} e^{i(k_{tx} x + k_{ty} y + k_{tz} z)}$

**介质 1 侧的总电磁场:** $\vec{E_1} = \vec{E_i} + \vec{E_r}$

**介质 2 侧的总电磁场:** $\vec{E_2} = \vec{E_t}$

### 1. 方向关系: 由边值关系 $\hat{n} \times (\vec{E_2} - \vec{E_1}) = 0$ 可知 (电场切向相等)

$\hat{n} \times (\vec{E_i} + \vec{E_r})|_{z=0} = \hat{n} \times \vec{E_t}|_{z=0}$

$\hat{n} \times (\vec{E_{0i}} e^{i(k_{iy} y)} + \vec{E_{0r}} e^{i(k_{rx} x + k_{ry} y)}) = \hat{n} \times \vec{E_{0t}} e^{i(k_{tx} x + k_{ty} y)}$（在界面上任意位置成立）

则: $k_{rx} = k_{tx} = 0$

$A \cos k_{iy} y + B \cos (k_{rx} x + k_{ry} y) = C \cos (k_{tx} x + k_{ty} y)$

那么, 入射波、反射波、折射波共面, $k_{iy} = k_{ry} = k_{ty}$

$k_i \sin \theta_i = k_r \sin \theta_r = k_t \sin \theta_t$

即 $k_i = k_r$, $\theta_i = \theta_r$, $\frac{\sin \theta_i}{\sin \theta_t} = \frac{k_t}{k_i} = \frac{\omega \sqrt{\mu_2 \epsilon_2}}{\omega \sqrt{\mu_1 \epsilon_1}} = \sqrt{\frac{\mu_2 \epsilon_2}{\mu_1 \epsilon_1}} = \frac{n_2}{n_1}$  (折射定律)

### 2. 幅度关系:  
#### 分类讨论: (1) N 波:  $\vec{E}$ 垂直于入射面

$$
\begin{cases}
\hat{n} \times (\vec{E_2} - \vec{E_1}) = 0 \\
\hat{n} \times (\vec{H_2} - \vec{H_1}) = 0
\end{cases}
$$

$$
\begin{cases}
\vec{E_{0i}} + \vec{E_{0r}} = \vec{E_{0t}} \\
\frac{E_{0i}}{\eta_1} \cos \theta_i - \frac{E_{0r}}{\eta_1} \cos \theta_i = \frac{E_{0t}}{\eta_2} \cos \theta_t
\end{cases}
$$

$$
\frac{E_{0r}}{E_{0i}} = \frac{\eta_2 \cos \theta_i - \eta_1 \cos \theta_t}{\eta_2 \cos \theta_i + \eta_1 \cos \theta_t} \stackrel{\mu_r \sim 1}{\approx} \frac{n_1 \cos \theta_i - n_2 \cos \theta_t}{n_1 \cos \theta_i + n_2 \cos \theta_t} = - \frac{\sin (\theta_i - \theta_t)}{\sin (\theta_i + \theta_t)}
$$

$$\frac{E_{0t}}{E_{0i}} = \frac{2 \eta_2 \cos \theta_i}{\eta_2 \cos \theta_i + \eta_1 \cos \theta_t} \stackrel{\mu_t \sim 1}{\approx} \frac{2 n_1 \cos \theta_i}{n_1 \cos \theta_i + n_2 \cos \theta_t} = \frac{2 \cos \theta_i \sin \theta_t}{\sin (\theta_i + \theta_t)}
$$   (菲涅尔公式)

(2) P 波:  $\vec{E}$ 平行于入射面:

$$
\frac{E_{0r}}{E_{0i}} = \frac{\tan (\theta_i - \theta_t)}{\tan (\theta_i + \theta_t)}
$$

$$
\frac{E_{0t}}{E_{0i}} = \frac{2 \cos \theta_i \sin \theta_t}{\sin (\theta_i + \theta_t) \cos (\theta_i - \theta_t)}
$$

### 关于反射波的结论:

(1) $n_1 < n_2$ 时, 光疏 → 光密

N 波  $sgn \{ \frac{E_{0r}}{E_{0i}} \} = -1$  存在半波损失 (相位变化 π)

(2) $n_1 > n_2$ 时, 光密 → 光疏.

$\sin \theta_i / \sin \theta_t = n_2 / n_1 = n_{21} < 1$  则 $\sin \theta_t = \sin \theta_i / n_{21}$  $\theta_i \in [0, \frac{\pi}{2}]$ 时

当 $\theta_i > \theta_c = \arcsin (n_{21})$ 时, $\sin \theta_t > 1$  发生全反射

(3) 当 $\theta_i + \theta_t = \pi / 2$ 时, $\theta_i = \theta_B = \arctan (\frac{n_2}{n_1})$  布儒斯特角

### 全反射现象
 $\sin \theta_t = \sin \theta_i / n_{21} > 1$  且 $\theta_t$ 是复数.

$\cos \theta_t = \sqrt{1 - \sin^2 \theta_t} = i \sqrt{\sin^2 \theta_i / n_{21}^2 - 1}$

反射波幅度改变:

N 波  
$$
\frac{E_{0r}}{E_{0i}} = \frac{\cos \theta_i - i \sqrt{\frac{\sin^2 \theta_i}{n_{21}^2} - 1}}{\cos \theta_i + i \sqrt{\frac{\sin^2 \theta_i}{n_{21}^2} - 1}} = e^{-i 2 \phi_\pi}
$$

P 波  
$$
\frac{E_{0r}}{E_{0i}} = \frac{n_{21}^2 \cos \theta_i - i \sqrt{\sin^2 \theta_i - n_{21}^2}}{n_{21}^2 \cos \theta_i + i \sqrt{\sin^2 \theta_i - n_{21}^2}} = e^{-i 2 \phi_P}
$$

一般 $\phi_\pi \ne \phi_P$

### 介质1侧总电磁场
以N波为例：
$$
\vec{E}_1 = \vec{E}_i + \vec{E}_r = \vec{E}_{0i} e^{i(k_{iy} y  + k_{iz} z)} + \vec{E}_{0r} e^{i(k_{ry} y + k_{rz} z)}
$$
$k_{iy} = k_{ry} = k_y,k_{iz} = -k_{rz},\vec{E}_{0i} = \vec{E}_{0}$

$\vec{E}_{0r} = \vec{E}_{0} e^{-i 2 \phi_{N}}$

$$
\vec{E}_i = \vec{E}_{i0} e^{i(k_{ix}x + k_{iy}y + k_{iz}z)}
$$

$$
\vec{E}_r = \vec{E}_{r0} e^{i(k_{rx}x + k_{ry}y + k_{rz}z)}
$$

$$
\vec{E} = \vec{E}_i + \vec{E}_r = \vec{E}_{i0} e^{i(k_{ix}x + k_{iy}y + k_{iz}z)} + \vec{E}_{r0} e^{i(k_{rx}x + k_{ry}y + k_{rz}z)}
$$

$$
\begin{aligned}
\vec{E}_1 &= \vec{E}_0 e^{i(k_{y}y + k_{iz}z)} + \vec{E}_{0} e^{-i 2 \phi_{N}} e^{i(k_{y}y - k_{z}z)} \\
&= 2 \cos (k_z z + \phi_{N}) \vec{E}_{0} e^{-i\phi_N} e^{i k_{y} y} \\
\end{aligned}
$$
结果的前半部分沿z轴周期性变化，为复振幅。后半部分说明电磁波相位传播沿y方向

相速度：
$$
V_P = \frac{\omega}{k_y} =\frac{\omega}{k_i \sin \theta_i} > \frac{\omega}{k_i} = \frac{c}{n}
$$
称为快波

介质2侧的电磁场（要满足边界条件，必然不是全都没有）

$$ \vec{E_t} = \vec{E_{ot}} e^{i(k_{ty} y + k_{tz} z)} $$

$ k_{ty} = k_t \sin \theta_t = k_i \sin \theta_i $
$ k_{tz} = k_t \cos \theta_t = ik_i \sqrt{\sin^2 \theta_i - n_{21}^2} = i K_{tz} $

所以 $\vec{E_t} = \vec{E_{ot}} e^{-K_{tz} z} e^{i k_{ty} y}$
依然能够分为沿z轴的复振幅和沿y轴的相位传播

$\quad$ <span style="color:red;">倏逝波/消逝波</span>

相速度 $v_p = \frac{\omega}{k_{ty}} = \frac{\omega}{k_t \sin \theta_t}  < \frac{\omega}{k_t} = \frac{c}{n_2}$ <span style="color:blue;">称作慢波</span>

穿透深度： $\delta = \frac{1}{K_{tz}} = \frac{\lambda_1}{2\pi \sqrt{\sin^2 \theta_i - n_{21}^2}}$ $\quad$ <span style="color:blue;">$\leftarrow$ 介质1波长</span>

幅度：
$\quad$ S波： $\frac{E_{ot}}{E_{oi}} = \frac{2 \cos \theta_i}{\cos \theta_i + i \sqrt{\sin^2 \theta_i - n_{21}^2}}$

$\quad$ P波： $\frac{E_{ot}}{E_{oi}} = \frac{2 n_{21} \cos \theta_i}{n_{21}^2 \cos \theta_i + i \sqrt{\sin^2 \theta_i - n_{21}^2}}$

能流： $\vec{S_i}$ $\quad$ N波为例

从波印廷矢量：
$\quad$ 入射波复数波印廷矢量： $\tilde{S_i} = \frac{1}{2} E_i \times H_i^* = |E_{oi}|^2 \frac{\hat{k_i}}{2\eta_1}$
$\quad$ 反射波复数波印廷矢量： $\tilde{S_r} = \frac{1}{2\eta_1} |E_{or}|^2 \hat{k_r} = \frac{\sin^2(\theta_i - \theta_t)}{\sin^2(\theta_i + \theta_t)} \frac{|E_{oi}|^2}{2\eta_i} \hat{k_t}$
$\quad$ 折射波 $\tilde{S_t} = \frac{1}{2\eta_2} |E_{ot}|^2 \hat{k_t} = \frac{4\cos^2\theta_i \sin^2\theta_t}{\sin^2(\theta_i + \theta_t)} \frac{1}{2\eta_2} |E_{oi}|^2 \hat{k_t}$

在垂直界面方向(法向) $\hat{n} \cdot \langle \vec{S_i} \rangle + \hat{n} \cdot \langle \vec{S_r} \rangle = \hat{n} \cdot \langle \vec{S_t} \rangle$

功率反射率： $R = \frac{\hat{n} \cdot \langle \vec{S_r} \rangle}{\hat{n} \cdot \langle \vec{S_i} \rangle} = \left| \frac{E_{or}}{E_{oi}} \right|^2$

功率透射率： $T = \frac{\hat{n} \cdot \langle \vec{S_t} \rangle}{\hat{n} \cdot \langle \vec{S_i} \rangle} = \left| \frac{E_{ot}}{E_{oi}} \right|^2 \frac{2\eta_1 \cos \theta_t}{\eta_2 \cos \theta_i}$

$R+T=1 \quad$ 全反射时 $\hat{n} \cdot \langle \vec{S_i} \rangle = - \hat{n} \cdot \langle \vec{S_r} \rangle$
$\qquad \qquad \hat{n} \cdot \langle \vec{S_t} \rangle = 0$
$\qquad \qquad \hat{n} \cdot \tilde{S_t} = \frac{|E_{ot}|^2}{2\eta_2} \cos \theta_t$ <span style="color:purple;">纯虚数</span>

介质2侧沿垂直于界面方向没有平均的能流，只有瞬时能流。