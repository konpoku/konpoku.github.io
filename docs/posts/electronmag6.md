---
title: 电磁场与波（6）：进一步分离变量
top: 1
toc: true
recommend: 1
keywords: electronmag
date: 2025-3-28
---
## 直角坐标系分离变量
求解如下边值问题：
在一沿xyz轴长度分别为abc的长方体中，只有一个面上电势不为零
$$
\begin{aligned}
&\nabla^2 \varphi = 0 \\
&\varphi |_{z=c} = f(x,y)\\
&\varphi_{x=0} = \varphi_{x=a} = 0\\
&\varphi_{y=0} = \varphi_{y=b} = 0\\
&\varphi_{z=0} = 0
\end{aligned}
$$
解：考虑如下可分离变量的形式的解
$$
\varphi(x,y,z) = X(x)Y(y)Z(z)
$$
代入方程中，得到
$$
\nabla^2 \varphi = \frac{d^2X}{dx^2}Y(z)Z(z) + X(x)\frac{d^2Y}{dy^2}Z(z) + X(x)Y(y)\frac{d^2Z}{dz^2} = 0\\
$$
$$
\frac{1}{X}\frac{d^2X}{dx^2} + \frac{1}{Y}\frac{d^2Y}{dy^2} + \frac{1}{Z}\frac{d^2Z}{dz^2} = 0
$$
三项都只与一个变量有关，因此每一项都应该等于一个常数
$$
\frac{1}{X}\frac{d^2X}{dx^2} = \text{const} = -k_x^2\\
\frac{1}{Y}\frac{d^2Y}{dy^2} = \text{const} = -k_y^2\\
\frac{1}{Z}\frac{d^2Z}{dz^2} = \text{const} = -k_z^2\\
k_x^2 + k_y^2 + k_z^2 = 0
$$
边界条件
$$
\begin{aligned}
\varphi|_{x=0} &= 0 \Rightarrow X(0) = 0\\
\varphi|_{x=a} &= 0 \Rightarrow X(a) = 0\\
\varphi|_{y=0} &= 0 \Rightarrow Y(0) = 0\\
\varphi|_{y=b} &= 0 \Rightarrow Y(b) = 0\\
\varphi|_{z=0} &= 0 \Rightarrow Z(0) = 0\\
\varphi|_{z=c} &= f(x,y) \nRightarrow X(x)Y(y)Z(c) = f(x,y)
\end{aligned}
$$
$X(x)$可能的解为：
- $k_x^2 = 0,X(x) = Ax+B$
- $k_x^2 > 0,X(x) = A\sin(k_xx) + B\cos(k_xx)$
- $k_x^2 < 0,X(x) = A\exp(k_xx) + B\exp(-k_xx) = A\sh k_xx+B\ch k_xx$

双曲正弦：$\sh x = \frac{e^x - e^{-x}}{2}$
双曲余弦：$\ch x = \frac{e^x + e^{-x}}{2}$

根据边界条件$X(0) = 0,X(a) = 0$，我们可以得知只有
$$
k_x^2 > 0,X(x) = A\sin(k_xx) + B\cos(k_xx)
$$
成立，并且根据边界条件可以得到
$$
X(x) = A\sin k_xx,k_x = \frac{m\pi}{a},m=1,2,3,\cdots
$$
同理有
$$
Y(y) = C\sin k_yy,k_y = \frac{n\pi}{b},n=1,2,3,\cdots
$$
由于
$$
k_x^2 + k_y^2 + k_z^2 = 0
$$
我们得到
$$
k_z^2 = -k_x^2 - k_y^2 = -\frac{m^2\pi^2}{a^2} - \frac{n^2\pi^2}{b^2} = -K_{mn}^2 < 0 
$$
由$Z(0) = 0$得到$F=0$
所以$Z(z) = E\sh K_{mn}z$
至此可以得到
$$
\varphi_{mn}(x,y,z) = A\sin k_xx \sin k_yy \sh K_{mn}z
$$
取$\varphi_{mn}(x,y,z)$的线性组合
$$
\varphi(x,y,z) = \sum_{m=1}^{\infty}\sum_{n=1}^{\infty}A_{mn}\sin k_xx \sin k_yy \sh K_{mn}z
$$
令$\varphi(x,y,z)|_{z=c} = f(x,y)$
$$
\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}A_{mn}\sin k_xx \sin k_yy \sh K_{mn}c = f(x,y)
$$
得到
$$
A_{mn} = \frac{4\int_0^a dx \int_0^b f(x,y) \sin \frac{m\pi}{a}x \sin \frac{n\pi}{b}y dy}{ab\sh K_{mn}c}
$$

## 完备正交基
$[0,a]$上的完备正交基
- Fourier级数：$1,\sin \frac{2\pi}{a}x,\cos \frac{2\pi}{a}x,\sin \frac{4\pi}{a}x,\cos \frac{4\pi}{a}x,\cdots$
- Cos级数：$1,\cos \frac{2\pi}{a}x,\cos \frac{4\pi}{a}x,\cdots$
- Sin级数：$\sin \frac{2\pi}{a}x,\sin \frac{4\pi}{a}x,\cdots$

## 应用举例
依旧在之前的长方体中，问题如下
$$
\begin{aligned}
&\nabla^2 \varphi = 0 \\
&\varphi |_{z=c} = f(x,y)\\
&\varphi_{y=b} = g(x,z)\\
&\varphi_{\text{其余}} = 0
\end{aligned}
$$
令$\varphi = \varphi_1 + \varphi_2$
其中$\varphi_1$满足
$$
\begin{aligned}
&\nabla^2 \varphi_1 = 0 \\
&\varphi_1 |_{z=c} = f(x,y)\\
&\varphi_{\text{其余}} = 0
\end{aligned}
$$
$\varphi_2$满足
$$
\begin{aligned}
&\nabla^2 \varphi_2 = 0 \\
&\varphi_2 |_{y=b} = g(x,z)\\
&\varphi_{\text{其余}} = 0
\end{aligned}
$$
后面进行相似的求解即可

## 分离变量一般步骤
1. 写出可分离变量的形式解
2. 根据齐次边界条件，确定函数系$\varphi_{mn}(x,y,z)$
3. 取通解：$\varphi = \sum_{m,n} A_{mn}\varphi_{mn}(x,y,z)$
4. 代入非齐次边界条件，得到$A_{mn}$的表达式

## 球坐标分离变量
$$
\varphi(r,\theta,\phi) = R(r)\Theta(\theta)\Phi(\phi)
$$
$$
\nabla^2 \varphi = \frac{1}{r^2}\frac{\partial}{\partial r}(r^2\frac{\partial \varphi}{\partial r})\Theta\Phi + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}(\sin\theta \frac{\partial \varphi}{\partial \theta}) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 \varphi}{\partial \phi^2} = 0
$$
也即
$$
\begin{aligned}
&\frac{d^2\Phi}{d\phi^2} + m^2\Phi = 0\\
&\frac{d}{dr}(r^2\frac{dR}{dr}) -n(n+1) R = 0\\
&\frac{1}{\sin\theta}\frac{d}{d\theta}(\sin\theta \frac{d\Theta}{d\theta}) + [n(n+1) - \frac{m^2}{\sin^2\theta}]\Theta = 0
\end{aligned}
$$
最后一个方程被称为关联Legendre方程
对于$\Phi(\phi)$：只考虑轴对称的情况，$\Phi$与$\phi$无关，所以$\Phi = \text{const}$
对于$R(r)$：
$$
\begin{aligned}
&R(r) = Ar^n + Br^{-n-1},n^2\geq0\\
&R(r) \text{不存在},n^2<0\\
\end{aligned}
$$
对于$\Theta(\theta)$：
$$
\Theta(\theta) = AP_n(\cos\theta) + BQ_n(\cos\theta),n=0,1,2,\cdots
$$
其中$P_n(\theta)$为第一类Legendre函数，$Q_n(\theta)$为第二类Legendre函数
~~Recall：根据上学期PDE的内容，第二类Legendre函数通常会被消掉~~

## Legendre函数性质
- 在极轴附近$\theta \rightarrow 0$，$\cos(\theta) \rightarrow \pm 1$时
$$
|P_n(\pm 1)| = 1,|Q_n(\pm 1)| \rightarrow \infty
$$
- 正交性
$$
\int_{-1}^1 P_n(x)P_m(x)dx = \frac{2}{2n+1}\delta_{mn}
$$
- 完备性
$[-1,1]$上的任意函数$f(x)$都可以展开为
$$
f(x) = \sum_{n=0}^{\infty} C_n P_n(x)
$$
其中
$$
C_n = \frac{2n+1}{2}\int_{-1}^1 f(x)P_n(x)dx
$$

## *求解区域包含极轴，并且解具有轴对称性质的情况
此时通解可以写作
$$
\varphi(r,\theta) = \sum_{n=0}^{\infty} (A_n r^n + B_n r^{-n-1})P_n(\cos\theta)\\
$$
常见的Legendre函数有
$$
\begin{aligned}
&P_0(\cos\theta) = 1\\
&P_1(\cos\theta) = \cos\theta\\
&P_2(\cos\theta) = \frac{1}{2}(3\cos^2\theta - 1)\\
\end{aligned}
$$

## 例题
无限大的均匀外场$\vec{E_0}$中放置一个不带电的导体球，球半径为$a$，求空间电势

解：以球心为原点，$\vec{E_0}$方向为极轴，建立球坐标系
求解区域为球外空间，包含极轴，且有轴对称性
则通解可以写作
$$
\varphi = \sum_{n=0}^{\infty} (A_n r^n + B_n r^{-n-1})P_n(\cos\theta)\\
$$
- 由$r\rightarrow \infty$时，$\varphi \rightarrow -{E_0} {r}\cos \theta$，得到
$$
\sum_{n=0}^{\infty} A_n r^n P_n(\cos\theta) = -E_0 r \cos\theta
$$
逐项比较得到
$$
A_0 = 0,A_1 = -E_0,A_n = 0,n\geq2
$$
- 由$\varphi|_{r=a} = \text{const}$，得到
$$
-E_0 a \cos\theta  + \sum_{n=0}^{\infty} B_n a^{-n-1} P_n(\cos\theta) = \text{const}
$$
逐项比较得到
$$
B_1 = E_0a^3,B_n = 0,n\geq2
$$
**（目前还没有确定$B_0$的值）**
- 导体球总电荷为零
$$
\oint_{r=a} \frac{\partial \varphi}{\partial r} dS = 0\\
\oint_{r=a} (-E_0 \cos \theta - \frac{B_0}{a^2}  - 2\frac{E_0a^3}{a^3} \cos\theta) dS = 0 \Rightarrow B_0 = 0
$$

综上
$$
\varphi = -E_0 r \cos\theta + \frac{E_0 a^3}{r^2} \cos\theta
$$
其中第一项为匀强外场的电势，第二项为感应电势

考虑原点处沿极轴方向的电偶极子$\vec{P}$
电势：
$$
\varphi = \frac{1}{4\pi \varepsilon_0} \frac{\vec{P} \cdot \vec{r}}{r^3} = \frac{1}{4\pi \varepsilon_0} \frac{P\cos\theta}{r^2}
$$
对比可知道
$$
P = 4\pi \varepsilon_0 E_0 a^3
$$
球面电荷密度
$$
\rho_S = -\varepsilon_0\frac{\partial \varphi}{\partial r} |_{r=a} = 3\varepsilon_0 E_0\cos\theta
$$

## *Green函数法
待求解问题
$$
\begin{aligned}
&\nabla^2 \varphi = -\frac{\rho}{\epsilon} \\
&\text{边界条件}\varphi|_{S} \text{或} \frac{\partial \varphi}{\partial n}|_{S}
\end{aligned}
$$
### Green函数性质

$$
\nabla^2 G(\vec{x},\vec{x'}) = -\frac{\delta(\vec{x}-\vec{x'})}{\varepsilon}
$$
### 方程求解
使用Green第二恒等式
$$
\int_V (\varphi \nabla^2 \psi - \psi \nabla^2 \varphi) dV = \oint_S (\varphi \nabla \psi - \psi \nabla \varphi) \cdot d\vec{S}
$$
取$\psi = G(\vec{x},\vec{x'})$
$$
\int_V (\varphi \nabla^2 G - G \nabla^2 \varphi) dV = \oint_S (\varphi \nabla G - G \nabla \varphi) \cdot d\vec{S}\\
\int_V (-\varphi \frac{\delta(\vec{x}-\vec{x'})}{\varepsilon} - G \nabla^2 \frac{\rho(\vec{x}')}{\varepsilon}) dV = \oint_S (\varphi \nabla G - G \nabla \varphi) \cdot d\vec{S}
$$
有形式解
$$
\phi(\vec{x'}) = \int_V G(\vec{x},\vec{x'}) \rho(\vec{x'}) dV + \varepsilon \oint_S G(\vec{x},\vec{x'}) \frac{\partial \varphi(\vec{x})}{\partial n}ds - \varepsilon \oint_S \varphi(\vec{x}) \frac{\partial G(\vec{x},\vec{x'})}{\partial n}ds
$$
将$\vec{x},\vec{x}'$对换
$$
\phi(\vec{x}) = \int_V G(\vec{x},\vec{x'}) \rho(\vec{x'}) dV' + \varepsilon \oint_S G(\vec{x},\vec{x'}) \frac{\partial \varphi(\vec{x'})}{\partial n}ds' - \varepsilon \oint_S \varphi(\vec{x'}) \frac{\partial G(\vec{x},\vec{x'})}{\partial n}ds'
$$
- 第一类边值问题，$\varphi|_S$已知
取$G|_{S} = 0$，则
$$
\phi(\vec{x}) = \int_V G(\vec{x},\vec{x'}) \rho(\vec{x'}) dV' - \varepsilon \oint_S \varphi(\vec{x'}) \frac{\partial G(\vec{x},\vec{x'})}{\partial n}ds'
$$
- 第二类边值问题，$\frac{\partial \varphi}{\partial n}|_S$已知
取$\frac{\partial G}{\partial n}|_S = \text{const} = -\frac{1}{\varepsilon S}$，则
$$
\varphi = \int_V G(\vec{x},\vec{x'}) \rho(\vec{x'}) dV' + \varepsilon \oint_S G(\vec{x},\vec{x'}) \frac{\partial \varphi(\vec{x'})}{\partial n}ds' + \langle\varphi \rangle_S
$$
其中
$$
\langle\varphi \rangle_S = \frac{1}{S} \oint_S \varphi(\vec{x'}) dS'
$$


第一类边值问题
$$
\begin{aligned}
&\nabla^2 G = -\frac{\delta(\vec{x}-\vec{x'})}{\varepsilon}\\
&G|_S = 0
\end{aligned}
$$


### 课本中可能出现的差异
《电磁场》
$$
\nabla^2 G = -\delta(\vec{x}-\vec{x'})\\
$$
《电动力学》和《电磁场》中$\hat{n}$方向相反（前者为外法线，后者为内法线）


**静电场部分结束**

## 静磁场
~~虚晃一枪~~
