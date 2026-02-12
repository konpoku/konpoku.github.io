---
title: 概率论（1）：初步
top: 1
toc: true
recommend: 1
keywords: electromag
date: 2025-2-25
---
## 概率公理
+ 样本空间 $\Omega$ 包括了所有可能的结果
+ 不确定度的度量：$P : \Sigma \rightarrow [0,1]$（以集合为自变量）
+ 概率公理
  1. 非负性：$P(A) \geq 0$
  2. 规范性：$P(\Omega) = 1, P(\emptyset) = 0$
  3. 可数可加性：$A,B \in \Sigma, A\cap B = \emptyset \Rightarrow P(A\cup B) = P(A) + P(B)$
  4. 可列可加性：$A_1,A_2,\cdots \in \Sigma, A_i\cap A_j = \emptyset \Rightarrow P(\bigcup_{i=1}^{\infty}A_i) = \sum_{i=1}^{\infty}P(A_i)$
  5. 趋近：$A_k \uparrow A \Rightarrow P(A_k) \uparrow P(A)$（等价于iv）
  6. $A \subseteq B \Rightarrow P(A) \leq P(B)$（可以理解为$A\Rightarrow B$
  7. 容斥原理：$P(A\cup B) = P(A) + P(B) - P(A\cap B)$
  8. 可列容斥原理：$P(\bigcup_{i=1}^{\infty}A_i) = \sum_{i=1}^{\infty}P(A_i) - \sum_{i<j}P(A_i\cap A_j) + \sum_{i<j<k}P(A_i\cap A_j\cap A_k) - \cdots$
+ $\Sigma$的选取

后面zzr都在扯淡，懒得听了