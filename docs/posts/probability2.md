---
title: 概率论（2）基本概念
top: 1
toc: true
recommend: 1
keywords: probabilty
date: 2025-3-4
---
## Sample Space, Event and Probability
$(\Omega,\Sigma,P)$ is a probability space, where $\Omega$ is the sample space, $\Sigma$ is the event space, and $P$ is the probability measure.

$\Sigma$ should satisfy:
$$
\begin{aligned}
& ① \Sigma \subset 2^{\Omega}\\
& ② \Sigma \text{ is a $\sigma$-algebra}\\
\end{aligned}
$$

$X$ is a random variable, which is a function from $\Omega$ to $\mathbb{R}$, i.e. $X:\Omega \rightarrow \mathbb{R}$.And should satisfy:
$$
X^{-1}((-\infty,x]) = \{ \omega \in \Omega: X(\omega) \leq x \} \in \Sigma \quad \forall x \in \mathbb{R}
$$


## Distribution Function
Here is the definition of distribution function:
$$
F_X(x) = P(X \leq x) = P(x \in (-\infty, x])\\
$$
Distribution function $F_z(x)$ satisfies the following properties:
$$
\begin{aligned}
& ① F_X(-\infty) = 0, F_x(+\infty) = 1\\
& ② F_X(x) \leq F_X(y) \text{ if } x \leq y\\
& ③ F_X(x) \text{ is right continuous}\\
\end{aligned}
$$
The Derivative of $F_X(x)$ is the probability density function $f_X(x)$:
$$
f_X(x) = \frac{dF_X(x)}{dx}
$$

Now if 
$$
X \sim F_X(x)\\
$$
We want to know the Distribution function of $Y = aX + b$:
$$
F_Y(y) = P(Y \leq y) = P(aX + b \leq y) = {}
\begin{cases}
P(X \leq \frac{y-b}{a}) = F_X(\frac{y-b}{a}) & a > 0\\
P(X \geq \frac{y-b}{a}) = 1 - F_X(\frac{y-b}{a}) + P(X = \frac{y-b}{a}) & a < 0
\end{cases}
$$
And the density function of $Y$ is:
$$
f_Y(y) = 
\begin{cases}
\frac{1}{a}f_X(\frac{y-b}{a}) & a > 0\\
-\frac{1}{a}f_X(\frac{y-b}{a}) + P(X=\frac{y-b}{a})\delta() & a < 0
\end{cases}
$$
(Temporarily ignore the part of $\delta$ function)

## Example
### Monte Carlo Simulation
The key of the problem is the generation of Pseudo-random numbers, while these numbers should satisfy the required distribution.

Theoritically, we have a Uniform distribution $U(0,1)$, and we can generate a random number $X$ with distribution $F_X(x)$ by:
$$
X = F_X^{-1}(U)
$$
Where $F_X^{-1}(x)$ is the inverse function of $F_X(x)$.

#### Proof
$$
F_Y(y) = P(Y \leq y) = P(F_X^{-1}(U) \leq y) = P(U \leq F_X(y)) = F_U(F_X(y)) = F_X(y)
$$