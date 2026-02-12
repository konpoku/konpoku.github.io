---
title: 电磁场与波（1）：复习
top: 1
toc: true
recommend: 1
keywords: electromag
date: 2025-2-21
---
## 矢量分析
### 叉乘（外积）
$$
\vec{a} \times \vec{b} = \vec{c} = \left|\begin{array}{ccc}
\vec{i} & \vec{j} & \vec{k} \\
a_x & a_y & a_z \\
b_x & b_y & b_z
\end{array}\right| \\
$$
叉乘的结果有如下性质
$$
|\vec{c}| = |\vec{a}||\vec{b}|\sin\theta \\
$$
也就是说，叉乘的结果是垂直于两个向量的一个向量，其大小等于两个向量围成的平行四边形的面积，其方向由右手法则确定。
![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Right_hand_rule_cross_product.svg/440px-Right_hand_rule_cross_product.svg.png)
另外还有
$$
\vec{a} \times \vec{b} = 0 \Leftrightarrow \vec{a} \parallel \vec{b} \\
$$
### 混合积
$$
(\vec{a} \times \vec{b}) \cdot \vec{c} = \left|\begin{array}{ccc}
a_x & a_y & a_z \\
b_x & b_y & b_z \\
c_x & c_y & c_z
\end{array}\right| \\
\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b} \cdot (\vec{c} \times \vec{a}) = \vec{c} \cdot (\vec{a} \times \vec{b}) = (\vec{a},\vec{b},\vec{c}) \\
$$
混合积可以循环改变位置，即
$$
(\vec{a},\vec{b},\vec{c}) = (\vec{b},\vec{c},\vec{a}) = (\vec{c},\vec{a},\vec{b}) \\
$$
他的结果在几何上等于三个向量张成的平行六面体的体积。
类似的考虑混合积为0的情况，可以得到
$$
(\vec{a},\vec{b},\vec{c}) = 0 \Leftrightarrow \vec{a},\vec{b},\vec{c} \text{共面} \\
$$
### 二重矢量积
$$
\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b}) \\
(\vec{a} \times \vec{b}) \times \vec{c} = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{a}(\vec{b} \cdot \vec{c}) \\
$$

### 微积分运算
$f(x,y,z) = f(\vec{x})$是一个标量场
$\vec{F}(x,y,z) = \vec{F}(\vec{x})$是一个矢量场
矢量微分算符为
$$
\nabla = \left(\frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right)= \vec{i}\frac{\partial}{\partial x} + \vec{j}\frac{\partial}{\partial y} + \vec{k}\frac{\partial}{\partial z}
$$
#### 标量场的梯度
$$
\nabla f = \left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right) = \vec{i}\frac{\partial f}{\partial x} + \vec{j}\frac{\partial f}{\partial y} + \vec{k}\frac{\partial f}{\partial z}
$$
方向导数：
$$
\frac{\partial f}{\partial l} = \nabla f \cdot \vec{l} = |\nabla f||\vec{l}|\cos\theta
$$
#### 矢量场的散度
$$
\nabla \cdot \vec{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}
$$
Gauss定理：
$$
\oint_S \vec{F} \cdot \vec{n}dS = \iint_V \nabla \cdot \vec{F}dV
$$
#### 矢量场的旋度
$$
\nabla \times \vec{F} = \left|\begin{array}{ccc}
\vec{i} & \vec{j} & \vec{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{array}\right|
$$
Stokes定理：
$$
\oint_C \vec{F} \cdot d\vec{l} = \iint_S (\nabla \times \vec{F}) \cdot \vec{n}dS
$$
#### 梯度场的旋度一定为0
$$
\nabla \times (\nabla f) = 0
$$
如果 $\nabla \times \vec{F} = 0$，则$\vec{F} = -\nabla \varphi$，即$\vec{F}$是一个梯度场。
#### 旋度场的散度一定为0
$$
\nabla \cdot (\nabla \times \vec{F}) = 0
$$
如果 $\nabla \cdot \vec{F} = 0$，则$\vec{F} = \nabla \times \vec{A}$，即$\vec{F}$是一个旋度场。
#### Helmhotz定理
$$
\vec{F} = \nabla \varphi + \nabla \times \vec{A}
$$
略去上一定理对后续学习无太大影响
#### Green恒等式
第一恒等式（$\nabla^2 = \nabla \cdot \nabla$）
$$
\int_v (\varphi \nabla^2 \psi + \nabla \psi \nabla \varphi)dV = \oint_S \varphi \nabla \psi d \vec{S}
$$
第二恒等式
$$
\int_v (\varphi \nabla^2 \psi - \psi \nabla^2 \varphi)dV = \oint_S (\varphi \nabla \psi - \psi \nabla \varphi) \cdot d\vec{S}
$$
#### $\nabla$运算规则
1. 判断标量、矢量
2. 先考虑$\nabla$微分性，进行分解
确定$\nabla$的作用对象（常量不参与微分）
3. 再考虑$\nabla$的矢量性，进行变换（标量可以任意移动位置）
4. 整理结果，$\nabla$写在作用对象前面
例：
$$
\begin{aligned}
\nabla \cdot (\vec{A} \times \vec{B}) &= \nabla_a \cdot (\vec{A} \times \vec{B}) + \nabla_b \cdot (\vec{A} \times \vec{B}) \\
&= (\nabla_A \times \vec{A}) \cdot \vec{B} + \vec{A} \cdot (\nabla_B \times \vec{B}) \\
&= \vec{B} \cdot (\nabla \times \vec{A}) - \vec{A} \cdot (\nabla \times \vec{B})
\end{aligned}
$$